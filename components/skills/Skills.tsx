import SkillItems from './SkillItems';

import nodeIcon from "../../public/assets/skills/node.png"
import typescriptIcon from "../../public/assets/skills/typescript.png"
import javascriptIcon from "../../public/assets/skills/javascript.png"
import luaIcon from "../../public/assets/skills/lua.png"
import dockerIcon from "../../public/assets/skills/docker.png"
import linuxIcon from "../../public/assets/skills/linux.png"
import reactIcon from "../../public/assets/skills/react.png"
import tailwindIcon from "../../public/assets/skills/tailwind.png"


export default function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2 transition-colors-transform duration-300">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-ctp-red">Skills</p>
                <h2 className='py-4'>What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillItems icon={nodeIcon} name='Node.js' width={64} height={64} />
                    <SkillItems icon={typescriptIcon} name='TypeScript' width={64} height={64} />
                    <SkillItems icon={javascriptIcon} name='JavaScript' width={64} height={64} />
                    <SkillItems icon={luaIcon} name='Lua' width={64} height={64} />
                    <SkillItems icon={dockerIcon} name='Docker' width={64} height={64} />
                    <SkillItems icon={linuxIcon} name='Linux' width={64} height={64} />
                    <SkillItems icon={reactIcon} name='React' width={64} height={64} />
                    <SkillItems icon={tailwindIcon} name='Tailwind CSS' width={64} height={64} />
                </div>
            </div>
        </div>
    )
}
