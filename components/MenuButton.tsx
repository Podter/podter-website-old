import { HiOutlineMenu } from "react-icons/hi";

interface MenuButtonProps {
  onClick: () => void;
  useBlackButton: boolean;
}

const defaultProp: MenuButtonProps = {
  onClick: () => console.log("button clicked"),
  useBlackButton: false,
};

function MenuButton({ onClick, useBlackButton }: MenuButtonProps) {
  function buttonBg() {
    if (useBlackButton) {
      return "shadow-mocha-crust bg-mocha-base text-mocha-text";
    } else {
      return "shadow-latte-overlay2 dark:shadow-mocha-crust text-latte-text dark:text-mocha-text";
    }
  }

  return (
    <div
      onClick={onClick}
      className={`rounded-lg shadow-lg ${buttonBg()} p-3 cursor-pointer md:hover:scale-105 ease-in duration-75 transition-colors-transform`}
    >
      <HiOutlineMenu size={24} />
    </div>
  );
}

MenuButton.defaultProps = defaultProp;

export default MenuButton;
