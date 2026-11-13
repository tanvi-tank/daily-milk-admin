import * as Icons from 'lucide-react';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function StatCard({ label, value, change, up, icon }) {
  const Icon = Icons[icon] ?? Icons.Circle;
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-light text-forest"><Icon size={20} /></span>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${up ? 'bg-leaf-light text-forest' : 'bg-red-50 text-red-700'}`}>
          {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{change}
        </span>
      </div>
      <p className="mt-4 font-display text-3xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-sm text-ink/60">{label}</p>
    </div>
  );
}
