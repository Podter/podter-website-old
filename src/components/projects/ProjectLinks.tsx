import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Props = {
  url?: string;
  action?: string;
  sourceUrl?: string;
};

export default function ProjectLinks({
  url,
  action = "Open",
  sourceUrl,
}: Props) {
  return (
    <div className="flex gap-2">
      {url && (
        <Button asChild size="sm">
          <a href={url}>
            <ExternalLink className="mr-2 h-4 w-4" size={16} />
            {action}
          </a>
        </Button>
      )}
      {sourceUrl && (
        <Button asChild variant={url ? "secondary" : "default"} size="sm">
          <a href={sourceUrl}>
            <Github className="mr-2 h-4 w-4" size={16} />
            GitHub
          </a>
        </Button>
      )}
    </div>
  );
}
