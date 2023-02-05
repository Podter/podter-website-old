interface MenuItem {
  name: string;
  href: string;
}

const menus: MenuItem[] = [
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

export default menus;
