"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { sha256 } from "ohash";

import { getD1, getUtcNow } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { auth } from "~/lib/auth";

interface FormResponse {
  success: boolean;
  error?: string;
}

export async function sign(
  _prevState: FormResponse,
  formData: FormData,
): Promise<FormResponse> {
  try {
    const session = await auth();
    if (!session) {
      return {
        success: false,
        error: "You must be logged in to sign the guestbook.",
      };
    }

    const message = formData.get("message");
    if (typeof message !== "string" || message.length <= 0) {
      return {
        success: false,
        error: "Message is required.",
      };
    }

    const db = getD1();

    const existingMessage = await db
      .select({ id: guestbook.id })
      .from(guestbook)
      .where(eq(guestbook.user, session.user.user))
      .limit(1);

    if (existingMessage[0]) {
      await db
        .update(guestbook)
        .set({
          message,
          updatedAt: getUtcNow(),
        })
        .where(eq(guestbook.user, session.user.user));
    } else {
      const emailHash = sha256(session.user.email);

      await db.insert(guestbook).values({
        user: session.user.user,
        message,
        emailHash,
      });
    }

    revalidatePath("/guestbook");
    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}

export async function deleteMessage(): Promise<FormResponse> {
  try {
    const session = await auth();
    if (!session) {
      return {
        success: false,
        error: "You must be logged in to sign the guestbook.",
      };
    }

    const db = getD1();
    await db.delete(guestbook).where(eq(guestbook.user, session.user.user));

    revalidatePath("/guestbook");
    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
