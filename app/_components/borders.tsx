export default function Borders() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 -z-10 h-full w-full select-none bg-opacity-50">
      <div className="absolute left-2/4 top-16 h-px w-screen -translate-x-2/4 bg-border md:top-[7.5rem]"></div>
      <div className="absolute left-2/4 top-6 h-px w-screen -translate-x-2/4 bg-border md:top-20"></div>
      <div className="absolute left-4 top-0 h-screen w-px bg-border"></div>
      <div className="absolute right-4 top-0 h-screen w-px bg-border"></div>
    </div>
  );
}
