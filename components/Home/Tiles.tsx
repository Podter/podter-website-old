/* eslint-disable react-hooks/exhaustive-deps */

import { variants } from "@catppuccin/palette";
import anime from "animejs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

export default function Tiles() {
  const { width, height } = useWindowSize();
  const { theme } = useTheme();

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(1);

  function handleStagger(id: number) {
    anime({
      targets: ".tile",
      backgroundColor:
        theme === "light" ? variants.latte.red.hex : variants.mocha.red.hex,
      delay: anime.stagger(50, { grid: [columns, rows], from: id }),
    });
  }

  useEffect(() => {
    const newColumns = Math.floor(width / 50);
    const newRows = Math.floor(height / 50);

    setColumns(newColumns);
    setRows(newRows);
    setTotal(newRows * newColumns);

    anime({
      targets: ".tile",
      backgroundColor:
        theme === "light" ? variants.mocha.red.hex : variants.latte.red.hex,
      duration: 0,
      easing: "linear",
    });
  }, [width, height, total, theme]);

  return (
    <div
      className="hero-overlay grid justify-center w-screen h-screen"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
        gridTemplateRows: "repeat(auto-fit, minmax(50px, 1fr))",
      }}
    >
      {[...Array(total)].map((_x, i) => (
        <div
          className="tile opacity-100 cursor-pointer hover:opacity-80"
          id={i.toString()}
          onClick={(e) => handleStagger(+(e.target as HTMLDivElement).id)}
          key={i}
        />
      ))}
    </div>
  );
}
