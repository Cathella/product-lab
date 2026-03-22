interface StatusBadgeProps {
  status: string;
  color?: 'yellow' | 'green' | 'blue' | 'purple';
}

export function StatusBadge({ status, color = 'yellow' }: StatusBadgeProps) {
  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[color]}`}>
      {status}
    </span>
  );
}
