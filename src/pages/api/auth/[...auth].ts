import { AstroAuth } from "auth-astro/server";
import { authConfig } from "@/constants/auth";

export const prerender = false;

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { get, post } = AstroAuth(authConfig);
