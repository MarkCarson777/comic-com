import Card from "@/components/Card";
import { formatCurrency } from "@/utils/formatters";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  priceInCents: number;
  description: string;
  imagePath: string;
};

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-video h-auto w-full">
        <Image src={imagePath} fill alt={name} />
      </div>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>
          {formatCurrency(priceInCents / 100)}
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </Card.Content>
      <Card.Footer>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </Card.Footer>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="flex animate-pulse flex-col overflow-hidden">
      <div className="aspect-video w-full bg-gray-300" />
      <Card.Header>
        <Card.Title>
          <div className="h-6 w-3/4 rounded-full bg-gray-300" />
        </Card.Title>
        <Card.Description>
          <div className="h-4 w-1/2 rounded-full bg-gray-300" />
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex-grow">
        <div className="h-4 w-full rounded-full bg-gray-300" />
        <div className="h-4 w-full rounded-full bg-gray-300" />
        <div className="h-4 w-3/4 rounded-full bg-gray-300" />
      </Card.Content>
      <Card.Footer>
        <Button disabled size="lg" className="w-full" />
      </Card.Footer>
    </Card>
  );
}
