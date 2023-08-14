import { Button } from "@/components/ui/button";
import { signOut } from "auth-astro/client";

export default function Form() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
