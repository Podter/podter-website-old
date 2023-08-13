import { Button } from "@/components/ui/button";
import { Copy, AlertCircle, Check } from "lucide-react";
import { useState, useCallback } from "react";
import Iconify from "@/components/ui/iconify";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";

type Props = {
  id: string;
};

export default function CopyCode({ id }: Props) {
  const code = document.getElementById(id)?.getElementsByTagName("code")[0]
    .innerText;

  const [copyState, setCopyState] = useState<
    "copied" | "copying" | "error" | null
  >(null);

  const copyMessage =
    copyState === "copied"
      ? "Copied!"
      : copyState === "copying"
      ? "Copying..."
      : copyState === "error"
      ? "Something went wrong!"
      : "Copy";

  const copy = useCallback(async () => {
    try {
      setCopyState("copying");
      if (!code) {
        throw new Error("Code not found");
      }
      await navigator.clipboard.writeText(code);
      setCopyState("copied");
    } catch (e) {
      console.error(e);
      setCopyState("error");
    } finally {
      setTimeout(() => {
        setCopyState(null);
      }, 1000);
    }
  }, [setCopyState, code]);

  return (
    <Button
      className="h-8 w-8 p-0 hidden group-hover:inline-flex absolute top-3 right-3 z-20"
      variant="secondary"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={copy}
      disabled={copyState === "copying"}
    >
      {copyState === "copied" ? (
        <Check size={16} className="h-4 w-4" />
      ) : copyState === "copying" ? (
        <Iconify icon={icon90RingWithBg} size={16} className="h-4 w-4" />
      ) : copyState === "error" ? (
        <AlertCircle size={16} className="h-4 w-4" />
      ) : (
        <Copy size={16} className="h-4 w-4" />
      )}
      <span className="sr-only">{copyMessage}</span>
    </Button>
  );
}
