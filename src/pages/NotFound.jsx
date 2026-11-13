import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-forest">404</p>
        <p className="mt-2 text-ink/60">This page does not exist.</p>
        <Link to="/" className="btn-primary mt-6">Back to dashboard</Link>
      </div>
    </div>
  );
}
