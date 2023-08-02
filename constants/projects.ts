import type { ImageProps } from "next/image";
import type { IconifyIcon } from "@iconify/types";

import nextjsDark from "@iconify/icons-skill-icons/nextjs-dark";
import nodejsDark from "@iconify/icons-skill-icons/nodejs-dark";
import planetscaleDark from "@iconify/icons-skill-icons/planetscale-dark";
import prismaIcon from "@iconify/icons-skill-icons/prisma";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import tailwindcssDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import vercelDark from "@iconify/icons-skill-icons/vercel-dark";
import discordbotsIcon from "@iconify/icons-skill-icons/discordbots";
import mongodbIcon from "@iconify/icons-skill-icons/mongodb";
import viteDark from "@iconify/icons-skill-icons/vite-dark";
import webassemblyIcon from "@iconify/icons-skill-icons/webassembly";
import tauriDark from "@iconify/icons-skill-icons/tauri-dark";
import rustIcon from "@iconify/icons-skill-icons/rust";
import luaDark from "@iconify/icons-skill-icons/lua-dark";

import PodWeb from "@/public/projects/podter-website.png";
import Cozmo from "@/public/projects/cozmo-bot.png";
import LuaBot from "@/public/projects/music-bot-lua.png";
import ScreenRec from "@/public/projects/browser-screen-recorder.png";
import JIAmusic from "@/public/projects/jiamusic.png";

export type Project = {
  title: string;
  description: string;
  img: ImageProps["src"];
  url?: string;
  action?: string;
  sourceUrl?: string;
  techStack: IconifyIcon[];
};

const projects: Project[] = [
  {
    title: "podter.me",
    description:
      "The website that you are currently on right now. Built with Next.js app router, Tailwind CSS, shadcn/ui and PlanetScale.",
    img: PodWeb,
    sourceUrl: "https://github.com/Podter/podter.me",
    techStack: [
      nextjsDark,
      nodejsDark,
      planetscaleDark,
      prismaIcon,
      reactDark,
      tailwindcssDark,
      typescriptIcon,
      vercelDark,
    ],
  },
  {
    title: "Cozmo Bot",
    description:
      "A Discord bot written in TypeScript using Discord.js. Maybe I will add more features when I wanted to. Feel free to invite it to your server.",
    img: Cozmo,
    url: "https://discord.com/api/oauth2/authorize?client_id=559323007697551381&permissions=8&scope=bot%20applications.commands",
    action: "Invite",
    techStack: [nodejsDark, typescriptIcon, discordbotsIcon, mongodbIcon],
  },
  {
    title: "Lua Music Bot",
    description:
      "Yet another music Discord bot written in Lua using Discordia. This bot is very slow. It's no longer maintained and archived on GitHub.",
    img: LuaBot,
    sourceUrl: "https://github.com/Podter/Music-Bot-Lua",
    techStack: [luaDark, discordbotsIcon],
  },
  {
    title: "Screen Recorder",
    description:
      "A WebRTC Screen Recorder on your browser. Built with React and installable as PWA. This app is hosted on GitHub page.",
    img: ScreenRec,
    url: "https://podter.github.io/browser-screen-recorder",
    sourceUrl: "https://github.com/Podter/browser-screen-recorder",
    techStack: [
      reactDark,
      typescriptIcon,
      tailwindcssDark,
      webassemblyIcon,
      viteDark,
    ],
  },
  {
    title: "JIΛmusic",
    description:
      "A music streaming service built with Tauri, React and PocketBase. Made for one of the flop companies.",
    img: JIAmusic,
    sourceUrl: "https://github.com/Podter/jiamusic",
    techStack: [
      reactDark,
      typescriptIcon,
      tailwindcssDark,
      viteDark,
      tauriDark,
      rustIcon,
    ],
  },
];

export default projects;
