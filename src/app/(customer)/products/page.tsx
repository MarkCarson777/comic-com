import { Suspense } from "react";
import {
  ProductCard,
  ProductCardSkeleton,
} from "@/components/Card/ProductCard";
import prisma from "@/db/db";
import { cache } from "@/lib/cache";

const getProducts = cache(() => {
  return prisma.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  });
}, ["/", "getProducts"]);

export default function ProductsPage() {
  return (
    <div className="md:grid-cold-2 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductsSuspense />
      </Suspense>
    </div>
  );
}

async function ProductsSuspense() {
  const products = await getProducts();

  return products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}
