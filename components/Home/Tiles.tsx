/* eslint-disable react-hooks/exhaustive-deps */

import { variants } from "@catppuccin/palette";
import anime from "animejs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

const latte = [
  variants.latte.rosewater.hex,
  variants.latte.flamingo.hex,
  variants.latte.pink.hex,
  variants.latte.mauve.hex,
  variants.latte.red.hex,
  variants.latte.maroon.hex,
  variants.latte.peach.hex,
  variants.latte.yellow.hex,
  variants.latte.green.hex,
  variants.latte.teal.hex,
  variants.latte.sky.hex,
  variants.latte.sapphire.hex,
  variants.latte.blue.hex,
  variants.latte.lavender.hex,
];

const mocha = [
  variants.mocha.rosewater.hex,
  variants.mocha.flamingo.hex,
  variants.mocha.pink.hex,
  variants.mocha.mauve.hex,
  variants.mocha.red.hex,
  variants.mocha.maroon.hex,
  variants.mocha.peach.hex,
  variants.mocha.yellow.hex,
  variants.mocha.green.hex,
  variants.mocha.teal.hex,
  variants.mocha.sky.hex,
  variants.mocha.sapphire.hex,
  variants.mocha.blue.hex,
  variants.mocha.lavender.hex,
];

export default function Tiles() {
  const { width, height } = useWindowSize();
  const { theme } = useTheme();

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(1);
  const [currentColor, setCurrentColor] = useState<number | undefined>(
    undefined
  );

  function handleStagger(id: number) {
    anime({
      targets: ".tile",
      backgroundColor:
        theme === "light"
          ? mocha[Math.floor(Math.random() * mocha.length)]
          : latte[Math.floor(Math.random() * latte.length)],
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
          onClick={(e) => handleStagger(i)}
          key={i}
        />
      ))}
    </div>
  );
}
