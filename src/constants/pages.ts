import { type LucideIcon, Home, Code2, Newspaper, Edit3 } from "lucide-react";

export type Page = {
  name: string;
  icon: LucideIcon;
};

export type Pages = Record<string, Page>;

const pages: Pages = {
  "/": {
    name: "Home",
    icon: Home,
  },
  "/projects": {
    name: "Projects",
    icon: Code2,
  },
  "/blog": {
    name: "Blog",
    icon: Newspaper,
  },
  "/guestbook": {
    name: "Guestbook",
    icon: Edit3,
  },
} as const;

export default pages;
