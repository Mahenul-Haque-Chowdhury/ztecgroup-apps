interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export function StatStrip({ stats, className = "" }: StatStripProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="premium-card px-5 py-8 text-center sm:px-6 sm:py-10">
          <div className="display-lg text-gradient">{stat.value}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
