import { Icon } from "@iconify/react";
import bashDark from "@iconify/icons-skill-icons/bash-dark";
import cloudflareDark from "@iconify/icons-skill-icons/cloudflare-dark";
import cssIcon from "@iconify/icons-skill-icons/css";
import dockerIcon from "@iconify/icons-skill-icons/docker";
import expressjsDark from "@iconify/icons-skill-icons/expressjs-dark";
import gitIcon from "@iconify/icons-skill-icons/git";
import githubDark from "@iconify/icons-skill-icons/github-dark";
import htmlIcon from "@iconify/icons-skill-icons/html";
import javascriptIcon from "@iconify/icons-skill-icons/javascript";
import linuxDark from "@iconify/icons-skill-icons/linux-dark";
import luaDark from "@iconify/icons-skill-icons/lua-dark";
import markdownDark from "@iconify/icons-skill-icons/markdown-dark";
import nextjsDark from "@iconify/icons-skill-icons/nextjs-dark";
import nodejsDark from "@iconify/icons-skill-icons/nodejs-dark";
import prismaIcon from "@iconify/icons-skill-icons/prisma";
import reactDark from "@iconify/icons-skill-icons/react-dark";
import raspberrypiDark from "@iconify/icons-skill-icons/raspberrypi-dark";
import tailwindcssDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import typescriptIcon from "@iconify/icons-skill-icons/typescript";
import viteDark from "@iconify/icons-skill-icons/vite-dark";
import vscodeDark from "@iconify/icons-skill-icons/vscode-dark";
import tauriDark from "@iconify/icons-skill-icons/tauri-dark";
import svelteIcon from "@iconify/icons-skill-icons/svelte";
import stackoverflowDark from "@iconify/icons-skill-icons/stackoverflow-dark";
import planetscaleDark from "@iconify/icons-skill-icons/planetscale-dark";
import mysqlDark from "@iconify/icons-skill-icons/mysql-dark";
import mongodbIcon from "@iconify/icons-skill-icons/mongodb";

export default function Skills() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-9 gap-6 md:gap-8">
      <Icon scale={64} className="h-16 w-16" icon={bashDark} />
      <Icon scale={64} className="h-16 w-16" icon={cloudflareDark} />
      <Icon scale={64} className="h-16 w-16" icon={cssIcon} />
      <Icon scale={64} className="h-16 w-16" icon={dockerIcon} />
      <Icon scale={64} className="h-16 w-16" icon={expressjsDark} />
      <Icon scale={64} className="h-16 w-16" icon={gitIcon} />
      <Icon scale={64} className="h-16 w-16" icon={githubDark} />
      <Icon scale={64} className="h-16 w-16" icon={htmlIcon} />
      <Icon scale={64} className="h-16 w-16" icon={javascriptIcon} />
      <Icon scale={64} className="h-16 w-16" icon={linuxDark} />
      <Icon scale={64} className="h-16 w-16" icon={luaDark} />
      <Icon scale={64} className="h-16 w-16" icon={markdownDark} />
      <Icon scale={64} className="h-16 w-16" icon={nextjsDark} />
      <Icon scale={64} className="h-16 w-16" icon={nodejsDark} />
      <Icon scale={64} className="h-16 w-16" icon={prismaIcon} />
      <Icon scale={64} className="h-16 w-16" icon={reactDark} />
      <Icon scale={64} className="h-16 w-16" icon={raspberrypiDark} />
      <Icon scale={64} className="h-16 w-16" icon={tailwindcssDark} />
      <Icon scale={64} className="h-16 w-16" icon={typescriptIcon} />
      <Icon scale={64} className="h-16 w-16" icon={viteDark} />
      <Icon scale={64} className="h-16 w-16" icon={vscodeDark} />
      <Icon scale={64} className="h-16 w-16" icon={tauriDark} />
      <Icon scale={64} className="h-16 w-16" icon={stackoverflowDark} />
      <Icon scale={64} className="h-16 w-16" icon={svelteIcon} />
      <Icon scale={64} className="h-16 w-16" icon={planetscaleDark} />
      <Icon scale={64} className="h-16 w-16" icon={mysqlDark} />
      <Icon scale={64} className="h-16 w-16" icon={mongodbIcon} />
    </div>
  );
}
