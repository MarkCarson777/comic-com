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
