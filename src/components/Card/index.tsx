import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";

const CardContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("border shadow-sm", className)} {...props} />
));

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(className)} {...props} />
  ),
);

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={clsx(className)} {...props} />
));

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={clsx(className)} {...props} />
));

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx(className)} {...props} />
  ),
);

type CardComponent = typeof CardContainer & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
  Content: typeof CardContent;
};

const Card = Object.assign(CardContainer as CardComponent, {
  Header: Object.assign(CardHeader, { displayName: "CardHeader" }),
  Title: Object.assign(CardTitle, { displayName: "CardTitle" }),
  Description: Object.assign(CardDescription, {
    displayName: "CardDescription",
  }),
  Content: Object.assign(CardContent, { displayName: "CardContent" }),
  displayName: "Card",
});

export default Card;
