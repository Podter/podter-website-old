"use server";

import { z } from "zod";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sign(_prevState: unknown, formData: FormData) {
  const message = z.string().parse(formData.get("message"));
  if (!message) {
    return {
      message: "error",
    };
  }
  await delay(2000);
  return {
    message: "success",
  };
}
