export type Project = {
  title: string;
  description: string;
  img: string;
  alias: string;
};

const projects: Project[] = [
  {
    title: "My Projects",
    description:
      "These are some of my projects that I work on it on my free time or when I'm bored.",
    img: "/assets/arch2.jpg",
    alias: "my-projects",
  },
  {
    title: "Cozmo Bot",
    description: `A music Discord bot written in TypeScript using Discord.js. It was "Podter's Bot" and my school project! Maybe I will add more features like Ben and much more if I wanted to! Feel free to invite it to your server.`,
    img: "/assets/arch2.jpg",
    alias: "cozmo-bot",
  },
  {
    title: "Lua Music Bot",
    description:
      "Another music Discord bot but written in Lua using Discordia. You can see my source code on my GitHub if you want to learn more or try it! It's very slow when you requested a song. This repository is now archived.",
    img: "/assets/arch2.jpg",
    alias: "lua-music-bot",
  },
  {
    title: "Screen Recorder",
    description:
      "A stupid WebRTC Screen Recorder on your browser! I made it because school work (why not?) Hosted using GitHub page so you can try it if you want to! or you can see my source code on my GitHub repo if you want to learn more about it.",
    img: "https://github.com/Podter/browser-screen-recorder/raw/main/assets/screenshot.png",
    alias: "screen-rec",
  },
  {
    title: "podter.xyz",
    description:
      "The website that you are currently on right now! Made with Next.js, Tailwind CSS and daisyUI! I made it for fun and learning about Next.js and React.",
    img: "/assets/arch2.jpg",
    alias: "podter-website",
  },
];

export default projects;
