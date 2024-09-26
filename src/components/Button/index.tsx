import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, variant, size, ...props }, ref) => {
  return <button ref={ref} className={clsx(className)} {...props} />;
});
