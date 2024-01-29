import type { ComponentProps, FC } from "react";
import {
  CodeIcon,
  HomeIcon,
  Pencil2Icon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export interface Page {
  name: string;
  icon: FC<ComponentProps<typeof HomeIcon>>;
}

export const pages: Record<string, Page> = {
  "/": {
    name: "home",
    icon: HomeIcon,
  },
  "/about": {
    name: "about",
    icon: PersonIcon,
  },
  "/projects": {
    name: "projects",
    icon: CodeIcon,
  },
  "/blog": {
    name: "blog",
    icon: ReaderIcon,
  },
  "/guestbook": {
    name: "guestbook",
    icon: Pencil2Icon,
  },
};
