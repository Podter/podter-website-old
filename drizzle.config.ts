import fs from "node:fs";
import path from "node:path";
import type { Config } from "drizzle-kit";

function getDb(): Config {
  if (process.env.LOCAL === "true") {
    const d1Path = path.resolve(
      process.cwd(),
      ".wrangler",
      "state",
      "v3",
      "d1",
      "miniflare-D1DatabaseObject",
    );
    const files = fs.readdirSync(d1Path);
    const dbFile = files.find((file) => file.endsWith(".sqlite"));

    return {
      driver: "better-sqlite",
      dbCredentials: {
        url: path.join(d1Path, dbFile!),
      },
    };
  } else {
    return {
      driver: "d1",
      dbCredentials: {
        dbName: "podter-website",
        wranglerConfigPath: "./wrangler.toml",
      },
    };
  }
}

export default {
  schema: "./database/schema",
  out: "./migrations",
  ...getDb(),
} satisfies Config;
