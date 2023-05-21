import { LucideIcon, Home, User, Code2, Newspaper, Edit3 } from "lucide-react";

const pages: Record<string, { name: string; icon: LucideIcon }> = {
  "/": {
    name: "Home",
    icon: Home,
  },
  "/about": {
    name: "About",
    icon: User,
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
};

export default pages;
