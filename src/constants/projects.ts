import podWeb from "@/assets/projects/podter-website.png";
import cozmo from "@/assets/projects/cozmo-bot.png";
import luaBot from "@/assets/projects/music-bot-lua.png";
import screenRec from "@/assets/projects/browser-screen-recorder.png";
import jiamusic from "@/assets/projects/jiamusic.png";

export type Project = {
  title: string;
  shortDescription?: string;
  description: string;
  img: ImageMetadata;
  url?: string;
  action?: string;
  sourceUrl?: string;
};

export type Projects = Project[];

const projects: Projects = [
  {
    title: "podter.me",
    shortDescription: "The website you're currently on. Built with Astro",
    description:
      "The website that you are currently on right now. Built with Astro, React, Tailwind CSS, shadcn/ui and PlanetScale.",
    img: podWeb,
    sourceUrl: "https://github.com/Podter/podter.me",
  },
  {
    title: "Cozmo Bot",
    shortDescription: "Yet another Discord bot built with Discord.js",
    description:
      "A Discord bot written in TypeScript using Discord.js. It plays music and do stuff.",
    img: cozmo,
    url: "https://discord.com/api/oauth2/authorize?client_id=559323007697551381&permissions=8&scope=bot%20applications.commands",
    action: "Invite",
  },
  {
    title: "JIΛmusic",
    shortDescription: "A music player that plays Floptok songs",
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

export default projects;
