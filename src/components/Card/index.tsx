import { forwardRef, HTMLAttributes, ReactNode } from "react";
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

const Card = CardContainer as CardComponent;

Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  displayName: "Card",
});

Object.assign(Card.Header, { displayName: "CardHeader" });
Object.assign(Card.Title, { displayName: "CardTitle" });
Object.assign(Card.Description, { displayName: "CardDescription" });
Object.assign(Card.Content, { displayName: "CardContent" });

export default Card;
