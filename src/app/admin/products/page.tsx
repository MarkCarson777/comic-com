import Link from "next/link";

import Button from "@/components/Button";
import { PageHeader } from "./_components/PageHeader";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import prisma from "@/db/db";

export default function AdminProductsPage() {
  return (
    <div className="flex items-center justify-between gap-4">
      <PageHeader>AdminProductsPage</PageHeader>
      <Button asChild>
        <Link href="/admin/products/new">Add Product</Link>
      </Button>
      <ProductsTable />
    </div>
  );
}

async function ProductsTable() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              {product.isAvailableForPurchase ? <>✔️</> : <>❌</>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
