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
import { formatCurrency, formatNumber } from "@/utils/formatters";

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
              {product.isAvailableForPurchase ? (
                <>
                  <span>✔️</span>
                  <span className="sr-only">Available</span>
                </>
              ) : (
                <>
                  <span>❌</span>
                  <span className="sr-only">Unvailable</span>
                </>
              )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.priceInCents / 100)}</TableCell>
            <TableCell>{formatNumber(product._count.orders)}</TableCell>
            <TableCell>
              <span>Actions</span>
              <span className="sr-only">Actions</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
