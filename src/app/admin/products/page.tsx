import Link from "next/link";

import Button from "@/components/Button";
import PageHeader from "./_components/PageHeader";

export default function AdminProductsPage() {
  return (
    <div className="flex items-center justify-between gap-4">
      <PageHeader>AdminProductsPage</PageHeader>
      <Button variant="link" size="default">
        <Link href="/admins/products/new">Add Product</Link>
      </Button>
    </div>
  );
}
