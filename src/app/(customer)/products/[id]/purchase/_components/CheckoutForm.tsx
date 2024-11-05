"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";
import Card from "@/components/Card";
import Button from "@/components/Button";

type CheckoutFormProps = {
  product: {
    imagePath: string;
    name: string;
    description: string;
    priceInCents: number;
  };
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return (
    <div>
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="flex items-center gap-4">
          <div className="relative aspect-video w-1/3 flex-shrink-0">
            <Image
              src={product.imagePath}
              fill
              alt={product.name}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-lg">
              {formatCurrency(product.priceInCents / 100)}
            </div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="line-clamp-3 text-muted-foreground">
              {product.description}
            </div>
          </div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form priceInCents={product.priceInCents} />
      </Elements>
    </div>
  );
}

function Form({ priceInCents }: { priceInCents: number }) {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form>
      <Card>
        <Card.Header>
          <Card.Title>Checkout</Card.Title>
          <Card.Description className="text-destructive">
            Error
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <PaymentElement />
        </Card.Content>
        <Card.Footer>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null}
          >
            Purchase - {formatCurrency(priceInCents / 100)}
          </Button>
        </Card.Footer>
      </Card>
    </form>
  );
}
