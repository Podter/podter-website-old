import fs from "node:fs";
import path from "node:path";

interface Metadata {
  title: string;
  description: string;
  date: string;
}

const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");

  const match = frontmatterRegex.exec(rawContent);
  const frontMatterBlock = match![1];
  const content = rawContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

export function getBlogPosts() {
  const contentPath = path.join(process.cwd(), "content");
  const mdxFiles = fs
    .readdirSync(contentPath)
    .filter((file) => path.extname(file) === ".mdx");

  return mdxFiles.map((file) => {
    const filePath = path.join(contentPath, file);
    const { metadata, content } = readMDXFile(filePath);
    const slug = path.basename(file, path.extname(file));

    return { filePath, metadata, slug, content };
  });
}
