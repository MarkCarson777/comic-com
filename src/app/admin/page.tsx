import Card from "@/components/Card";

export default function AdminDashboard() {
  return (
    <div className="md:grid-cold-2 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card>
        <Card.Header>
          <Card.Title>Sales</Card.Title>
          <Card.Description>Desc</Card.Description>
        </Card.Header>
        <Card.Content>Text</Card.Content>
      </Card>
    </div>
  );
}
