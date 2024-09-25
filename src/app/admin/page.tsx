import prisma from "@/db/db";
import DashboardCard from "@/components/DashboardCard";
import { formatNumber, formatCurrency } from "@/utils/formatters";

async function getSalesData() {
  const data = await prisma.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

export default async function AdminDashboard() {
  const salesData = await getSalesData();

  return (
    <div className="md:grid-cold-2 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
    </div>
  );
}
