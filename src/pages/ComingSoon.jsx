import { Sprout } from 'lucide-react';

export default function ComingSoon({ title }) {
  return (
    <div className="card mx-auto mt-10 max-w-lg p-10 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf-light text-forest"><Sprout size={26} /></span>
      <h1 className="mt-4 font-display text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-ink/60">This section is ready for you to build. Add your page in <code className="rounded bg-cream-200 px-1.5 py-0.5">src/pages</code> and swap it into <code className="rounded bg-cream-200 px-1.5 py-0.5">App.jsx</code>.</p>
    </div>
  );
}
