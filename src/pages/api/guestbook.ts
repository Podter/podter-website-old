import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { authConfig } from "@/constants/auth";
import prisma from "@/lib/prisma";
import getProvider from "@/lib/getProvider";

export const post: APIRoute = async ({ request }) => {
  const session = await getSession(request, authConfig);
  const provider = await getProvider(session?.user?.providerAccountId);

  const data = await request.formData();
  const message = data.get("message");

  if (
    !message ||
    typeof message !== "string" ||
    !provider ||
    !session?.user?.email ||
    !session?.user?.providerAccountId
  ) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
      }),
      { status: 400 },
    );
  }

  await prisma.messages.create({
    data: {
      email: session?.user?.email,
      provider,
      providerAccountId: session?.user?.providerAccountId,
      message,
    },
  });

  return new Response(
    JSON.stringify({
      message: "Success",
    }),
    { status: 200 },
  );
};
