interface StatCardProps {
  title: string;
  value: string | number;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
