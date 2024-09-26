import { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}
