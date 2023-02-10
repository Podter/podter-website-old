import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useAudio } from "react-use";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => setCurrentTheme(theme), [theme]);

  function changeTheme() {
    if (theme === "light") {
      offControls.play();

      setTheme("dark");
    } else {
      onControls.play();

      setTheme("light");
    }
  }

  const [onAudio, _onState, onControls] = useAudio({
    src: "/sounds/light-switch-on.mp3",
  });
  const [offAudio, _offState, offControls] = useAudio({
    src: "/sounds/light-switch-off.mp3",
  });

  return (
    <>
      <button
        className={`btn btn-ghost btn-circle swap swap-rotate transition-all ${
          currentTheme === "dark" ? "swap-active" : null
        } transition-none`}
        onClick={changeTheme}
      >
        <Sun className="swap-on h-6 w-6" size={24} />
        <Moon className="swap-off h-6 w-6" size={24} />
      </button>
      {onAudio}
      {offAudio}
    </>
  );
}
