import Image, { StaticImageData } from 'next/image';

interface SkillItemsProps {
    icon: StaticImageData;
    name: string;
    width: number;
    height: number;
}

export default function SkillItems({ icon, name, width, height}:SkillItemsProps) {
    return (
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in shadow-ctp-overlay2 dark:shadow-ctp-crust transition-colors-transform duration-75">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                    <Image src={icon} width={`${width}px`} height={`${height}px`} alt="/" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    )
}
