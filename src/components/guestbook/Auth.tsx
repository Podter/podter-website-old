import { signIn, signOut } from "auth-astro/client";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return <Button onClick={() => signIn("discord")}>Sign in</Button>;
}

export function SignOut() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
