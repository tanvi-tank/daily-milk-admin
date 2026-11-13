import { Milk } from 'lucide-react';
export default function Logo({ light = false, size = 'md' }) {
  const box = size === 'lg' ? 'h-14 w-14' : 'h-10 w-10';
  return (
    <div className="flex items-center gap-3">
      <span className={`${box} grid place-items-center overflow-hidden rounded-full`}>
        <img
          src={light ? '/logo-light.png' : '/logo-dark.png'}
          alt="Daily Milk"
          className="h-full w-full object-contain"
        />
      </span>
      <div className="leading-tight">
        <p className={`font-display text-lg font-bold tracking-wide ${light ? 'text-cream' : 'text-forest'}`}>DAILY MILK</p>
        <p className={`text-[11px] ${light ? 'text-leaf' : 'text-fresh'}`}>Admin panel</p>
      </div>
    </div>
  );
}