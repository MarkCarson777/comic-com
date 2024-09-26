import Link from "next/link";

import PageHeader from "./_components/PageHeader";

export default function AdminProductsPage() {
  return (
    <div className="flex items-center justify-between gap-4">
      <PageHeader>AdminProductsPage</PageHeader>
      <Button>
        <Link href="/admins/products/new">Add Product</Link>
      </Button>
    </div>
  );
}