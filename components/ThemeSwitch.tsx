import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";

interface ThemeSwitchProps {
  useBlackButton: boolean;
}

const defaultProp: ThemeSwitchProps = {
  useBlackButton: false,
};

function ThemeSwitch({ useBlackButton }: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function buttonBg() {
    if (useBlackButton) {
      return "shadow-mocha-crust bg-mocha-base text-mocha-text";
    } else {
      return "shadow-latte-overlay2 dark:shadow-mocha-crust text-latte-text dark:text-mocha-text";
    }
  }

  return (
    <div
      onClick={changeTheme}
      className={`rounded-lg shadow-lg ${buttonBg()} p-3 cursor-pointer md:hover:scale-105 ease-in duration-75 transition-colors-transform`}
    >
      {theme === "dark" ? (
        <HiOutlineSun size={24} />
      ) : (
        <HiOutlineMoon size={24} />
      )}
    </div>
  );
}

ThemeSwitch.defaultProps = defaultProp;

export default ThemeSwitch;
