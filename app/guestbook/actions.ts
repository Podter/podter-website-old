"use server";

import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "~/database";
import { guestbook } from "~/database/schema/guestbook";
import { auth } from "~/lib/auth";

const FormSchema = z.object({
  message: z.string().min(1, { message: "Message is required." }),
});

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

    const validatedFields = FormSchema.safeParse({
      message: formData.get("message"),
    });
    if (!validatedFields.success) {
      return {
        success: false,
        error: validatedFields.error.flatten().fieldErrors.message![0],
      };
    }

    const existingMessage = await db
      .select({ id: guestbook.id })
      .from(guestbook)
      .where(eq(guestbook.user, session.user.user))
      .limit(1);

    if (existingMessage[0]) {
      await db
        .update(guestbook)
        .set({
          message: validatedFields.data.message,
          updatedAt: new Date(),
        })
        .where(eq(guestbook.user, session.user.user));
    } else {
      const emailHash = crypto
        .createHash("sha256")
        .update(session.user.email)
        .digest("hex");

      await db.insert(guestbook).values({
        user: session.user.user,
        message: validatedFields.data.message,
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
