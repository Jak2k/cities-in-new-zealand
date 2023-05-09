import { ReactNode } from "react";

export default function Slide({ children }: { children: ReactNode }) {
  return <div className="slide">{children}</div>;
}
