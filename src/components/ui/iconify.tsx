import type { IconifyIcon } from "@iconify/types";
import { iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";
import parse from "html-react-parser";

type Props = {
  icon: IconifyIcon & {
    default?: IconifyIcon;
  };
  size?: string | number;
  className?: string;
};

export default function Iconify({
  icon,
  size = "auto",
  className = "",
}: Props) {
  const renderData = iconToSVG(icon.default ?? icon, {
    height: size,
  });

  const svg = iconToHTML(replaceIDs(renderData.body), {
    ...renderData.attributes,
    class: className,
  });

  return <>{parse(svg)}</>;
}
