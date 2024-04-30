export const runtime = "edge";

const remotePatterns = ["steamgriddb.com/grid/"];

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("Missing URL", { status: 400 });
  }

  if (!remotePatterns.some((pattern) => url.includes(pattern))) {
    return new Response("Invalid URL", { status: 400 });
  }

  return fetch(url);
}
