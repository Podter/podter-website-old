export default function LanguageProgress({
  name,
  time,
  percent,
}: WakaTimeLanguage) {
  return (
    <div className="flex flex-col mb-1 w-full">
      <p className="text-sm mb-1">
        <span className="text-ctp-subtext0 mr-1">{name}: </span>
        {time}
      </p>
      <progress
        className="progress progress-primary w-full"
        value={percent}
        max="100"
      ></progress>
    </div>
  );
}
