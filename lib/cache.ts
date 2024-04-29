import type { KVNamespacePutOptions } from "@cloudflare/workers-types";
import { getRequestContext } from "@cloudflare/next-on-pages";
import superjson from "superjson";

// eslint-disable-next-line no-unused-vars
type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
  callback: T,
  // eslint-disable-next-line no-unused-vars
  key: string | ((...args: Parameters<T>) => string),
  opts?: KVNamespacePutOptions,
): T {
  async function cachedCallback(...args: Parameters<typeof callback>) {
    if (typeof key === "function") {
      key = key(...args);
    }

    const { KV_CACHE } = getRequestContext().env;
    const cached = await KV_CACHE.get(key);

    if (cached) {
      const { data } = superjson.parse<{
        data: Awaited<ReturnType<typeof callback>>;
      }>(cached);
      return data;
    }

    const data = await callback(...args);
    await KV_CACHE.put(key, superjson.stringify({ data }), opts);

    return data;
  }

  return cachedCallback as T;
}
