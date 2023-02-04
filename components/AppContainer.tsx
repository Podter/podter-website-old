import { useTheme } from "next-themes";
import { ReactNode } from "react";

type AppContainerProps = {
  children?: ReactNode;
  className?: string;
};

export default function AppContainer({
  children,
  className,
}: AppContainerProps) {
  const { theme } = useTheme();

  return (
    <main
      className={`${className} ${
        theme === "light" ? "ctp-latte" : "ctp-mocha"
      }`}
    >
      {children}
    </main>
  );
}
