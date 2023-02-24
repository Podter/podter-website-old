import { ReactNode, useEffect, useState } from "react";

type TransitionProps = {
  children: ReactNode;
};

export default function Transition({ children }: TransitionProps) {
  return <div className="fade-in">{children}</div>;
}
