import { AstroAuth } from "auth-astro/server";

export const prerender = false;

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { GET, POST } = AstroAuth();
