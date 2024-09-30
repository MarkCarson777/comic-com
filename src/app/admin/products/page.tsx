import Link from "next/link";

import Button from "@/components/Button";
import PageHeader from "./_components/PageHeader";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
} from "@/components/ui/table";

export default function AdminProductsPage() {
  return (
    <div className="flex items-center justify-between gap-4">
      <PageHeader>AdminProductsPage</PageHeader>
      <Button asChild>
        <Link href="/admins/products/new">Add Product</Link>
      </Button>
      <ProductsTable />
    </div>
  );
}

function ProductsTable() {
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
      <TableBody></TableBody>
    </Table>
  );
}
