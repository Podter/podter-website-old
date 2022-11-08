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
        <select
          className="select select-bordered w-full max-w-xs"
          data-choose-theme
        >
          <option value="ctp-latte">Latte</option>
          <option value="ctp-mocha">Mocha</option>
        </select>
      </div>
    </div>
  );
}
