import { variants } from "@catppuccin/palette";
import anime from "animejs";
import { useTheme } from "next-themes";
import { useState, useEffect, MouseEvent } from "react";
import { useWindowSize } from "react-use";

export default function Tiles() {
  const { width, height } = useWindowSize();
  const { theme } = useTheme();

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [total, setTotal] = useState(1);

  function getInitialBgTileColor(): string {
    const color =
      theme === "light" ? variants.mocha.red.hex : variants.latte.red.hex;
    return color;
  }

  function handleStagger(
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    const el = (event.target as HTMLDivElement).id;
    anime({
      targets: ".tile",
      backgroundColor: variants.latte.red.hex,
      delay: anime.stagger(50, { grid: [columns, rows], from: +el }),
    });
  }

  useEffect(() => {
    const newColumns = Math.floor(width / 50);
    const newRows = Math.floor(height / 50);

    setColumns(newColumns);
    setRows(newRows);
    setTotal(newRows * newColumns);
    console.log(theme);

    anime({
      targets: ".tile",
      backgroundColor:
        theme === "light" ? variants.mocha.red.hex : variants.latte.red.hex,
      duration: 0,
      easing: "linear",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

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
          style={{
            backgroundColor: getInitialBgTileColor(),
          }}
          id={i.toString()}
          onClick={(e) => handleStagger(e)}
          key={i}
        />
      ))}
    </div>
  );
}
