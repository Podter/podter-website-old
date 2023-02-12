type TotalProps = {
  title: string;
  time: string;
};

export default function Total({ title, time }: TotalProps) {
  return (
    <div className="flex flex-col w-44 justify-center items-center h-full">
      <p className="text-sm">{title}</p>
      <p className="text-lg font-semibold">{time}</p>
    </div>
  );
}
