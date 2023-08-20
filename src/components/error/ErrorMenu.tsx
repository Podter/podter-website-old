import { Button } from "@/components/ui/button";

export default function ErrorMenu() {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <Button asChild size="sm" className="w-20">
        <a href="/">Home</a>
      </Button>
      <Button size="sm" className="w-20" onClick={() => window.history.back()}>
        Go back
      </Button>
    </div>
  );
}
