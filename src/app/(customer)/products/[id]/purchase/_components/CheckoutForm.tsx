import { loadStripe } from "@stripe/stripe-js";

type CheckoutFormProps = {
  product: {};
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return <h1>Form</h1>;
}
