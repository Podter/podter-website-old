import type { ZodType } from "zod";
import useSWR from "swr";

export function useFetch<T>(url: string, schema: ZodType<T>) {
  const swr = useSWR(url, async (...args) => {
    const rawData = await fetch(...args).then((res) => res.json());
    const data = schema.parse(rawData);
    return data;
  });
  return swr;
}
