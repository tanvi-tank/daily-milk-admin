import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { clearError, login } from '../features/auth/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((s) => s.auth);
  const [form, setForm] = useState({ email: 'admin@dailymilk.com', password: 'admin123' });
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    if (error) dispatch(clearError());
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => { e.preventDefault(); dispatch(login(form)); };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-cream px-4">
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
        <path d="M0 150 C 240 70 420 210 720 140 S 1200 60 1440 130 V320 H0Z" fill="#DCEFD9" />
        <path d="M0 210 C 300 140 500 270 800 200 S 1250 150 1440 210 V320 H0Z" fill="#A5D6A7" opacity=".7" />
        <path d="M0 260 C 260 210 520 310 820 255 S 1260 230 1440 270 V320 H0Z" fill="#2E7D32" />
        <path d="M0 295 C 300 260 600 320 900 290 S 1300 275 1440 300 V320 H0Z" fill="#1B5E20" />
      </svg>

      <div className="card relative w-full max-w-md p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <img src="/logo-light.png" alt="Daily Milk" className="h-32 w-32 object-contain" />
          <h1 className="mt-4 font-display text-3xl font-bold">Welcome <span className="text-forest">Back</span></h1>
          <p className="mt-1.5 text-sm text-ink/60">Log in to manage subscriptions, deliveries and customers.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fresh" />
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="input pl-10" placeholder="Enter email" />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fresh" />
              <input id="password" name="password" type={show ? 'text' : 'password'} required value={form.password} onChange={onChange} className="input pl-10 pr-10" placeholder="Enter password" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/50 hover:text-forest" aria-label={show ? 'Hide password' : 'Show password'}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && <p role="alert" className="rounded-xl bg-red-50 px-3.5 py-2.5 text-sm text-red-700">{error}</p>}

          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3">
            {status === 'loading' ? 'Logging in…' : 'Log in'}
          </button>
        </form>

        <p className="mt-6 rounded-xl bg-gold-pale/60 px-3.5 py-2.5 text-center text-xs text-[#6B5500]">
          Demo login: admin@dailymilk.com / admin123
        </p>
      </div>
    </div>
  );
}