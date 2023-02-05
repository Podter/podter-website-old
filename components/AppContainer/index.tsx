import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import DrawerContainer from "./DrawerContainer";

type AppContainerProps = {
  children?: ReactNode;
  className?: string;
};

export default function AppContainer({
  children,
  className,
}: AppContainerProps) {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>();

  useEffect(() => setCurrentTheme(theme), [theme]);

  return (
    <DrawerContainer>
      <main
        className={`${className} ${
          currentTheme === "light" ? "ctp-latte" : "ctp-mocha"
        }`}
      >
        {children}
      </main>
    </DrawerContainer>
  );
}
