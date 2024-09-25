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
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  displayName: "Card",
});

Card.Header.displayName = "CardHeader";
Card.Title.displayName = "CardTitle";
Card.Description.displayName = "CardDescription";
Card.Content.displayName = "CardContent";

export default Card;
