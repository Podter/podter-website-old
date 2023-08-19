import type { Social } from "@/constants/socials";
import { Button } from "@/components/ui/button";
import Iconify from "@/components/ui/iconify";

type Props = {
  name: string;
  data: Social;
};

export default function SocialLink({ name, data }: Props) {
  return (
    <Button
      asChild
      variant="ghost"
      size="xs"
      className="h-8 w-8"
      data-tooltip-id="tooltip"
      data-tooltip-content={name}
    >
      <a href={data.url}>
        <Iconify icon={data.icon} size={16} />
        <span className="sr-only">{name}</span>
      </a>
    </Button>
  );
}
