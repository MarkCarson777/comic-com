import { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}