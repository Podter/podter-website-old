import type { StaticImageData } from "next/image";

import screenRec from "~/public/projects/browser-screen-recorder.png";
import cozmo from "~/public/projects/cozmo-bot.png";
import jiamusic from "~/public/projects/jiamusic.png";
import luaBot from "~/public/projects/music-bot-lua.png";
import podWeb from "~/public/projects/podter-website.png";

interface Project {
  title: string;
  description: string;
  img: StaticImageData;
  url?: string;
  action?: string;
  sourceUrl?: string;
}

// TODO: update projects
export const projects: Project[] = [
  {
    title: "podter.me",
    description:
      "The website that you are currently on right now. Built with Next.js, React, Tailwind CSS, shadcn/ui and Vercel Postgres.",
    img: podWeb,
    sourceUrl: "https://github.com/Podter/podter.me",
  },
  {
    title: "Cozmo Bot",
    description:
      "A Discord bot written in TypeScript using Discord.js. It plays music and do stuff.",
    img: cozmo,
    url: "https://discord.com/api/oauth2/authorize?client_id=559323007697551381&permissions=8&scope=bot%20applications.commands",
    action: "Invite",
  },
  {
    title: "JIΛmusic",
    description:
      "A music player that plays Floptok songs. Built with Tauri, React and PocketBase. Made for one of the flop companies.",
    img: jiamusic,
    sourceUrl: "https://github.com/Podter/jiamusic",
  },
  {
    title: "Screen Recorder",
    description:
      "A WebRTC Screen Recorder on your browser. Built with React and installable as PWA. Hosted on GitHub Pages.",
    img: screenRec,
    url: "https://podter.github.io/browser-screen-recorder",
    sourceUrl: "https://github.com/Podter/browser-screen-recorder",
  },
  {
    title: "Lua Music Bot",
    description:
      "Yet another Discord music bot written in Lua using Discordia. It's no longer maintained and archived on GitHub.",
    img: luaBot,
    sourceUrl: "https://github.com/Podter/Music-Bot-Lua",
  },
];
