import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <input
          type="checkbox"
          className="toggle"
          data-toggle-theme="ctp-mocha,ctp-latte"
        />
      </div>
    </div>
  );
}
