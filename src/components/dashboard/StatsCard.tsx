import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string | number;
  color: string;
}

export const StatsCard = ({ label, value, color }: StatsCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-800',
    emerald: 'bg-emerald-50 text-emerald-800',
    amber: 'bg-amber-50 text-amber-800',
  }[color] || 'bg-gray-50 text-gray-800';

  const valueColorClasses = {
    blue: 'text-blue-900',
    emerald: 'text-emerald-900',
    amber: 'text-amber-900',
  }[color] || 'text-gray-900';

  return (
    <Card className={colorClasses}>
      <CardContent className="pt-6 pb-6">
        <div className="text-sm">{label}</div>
        <div className={`text-3xl font-semibold mt-1 ${valueColorClasses}`}>{value}</div>
      </CardContent>
    </Card>
  );
};