interface PageItem {
  name: string;
  href: string;
}

const pages: PageItem[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Guestbook",
    href: "/guestbook",
  },
];

export default pages;
