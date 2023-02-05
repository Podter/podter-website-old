import { useTheme } from "next-themes";
import { ReactNode } from "react";
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

  return (
    <DrawerContainer>
      <main
        className={`${className} ${
          theme === "light" ? "ctp-latte" : "ctp-mocha"
        }`}
      >
        {children}
      </main>
    </DrawerContainer>
  );
}
