"use client";

import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navigation({ children }: { children: ReactNode }) {
  return <nav className="flex justify-center bg-gray-200 px-4">{children}</nav>;
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={clsx(
        "p-4 hover:bg-gray-500 focus-visible:bg-gray-500",
        pathname === props.href ? "bg-gray-500" : "",
      )}
    />
  );
}
