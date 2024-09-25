import Card from "@/components/Card";

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

export default function DashboardCard({
  title,
  subtitle,
  body,
}: DashboardCardProps) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{subtitle}</Card.Description>
      </Card.Header>
      <Card.Content>{body}</Card.Content>
    </Card>
  );
}
