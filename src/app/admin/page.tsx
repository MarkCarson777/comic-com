import DashboardCard from "@/components/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="md:grid-cold-2 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <DashboardCard title="Sales" subtitle="Test" body="body" />
    </div>
  );
}
