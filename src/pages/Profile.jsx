import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, KeyRound, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { updateProfile } from '../features/auth/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const [form, setForm] = useState({ name: user.name, phone: user.phone, address: user.address });
  const [saved, setSaved] = useState(false);
  const [pw, setPw] = useState({ current: '', next: '', confirm: '' });
  const [pwMsg, setPwMsg] = useState(null);

  const save = (e) => {
    e.preventDefault();
    dispatch(updateProfile(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const changePw = (e) => {
    e.preventDefault();
    if (pw.next.length < 8) return setPwMsg({ ok: false, text: 'New password must be at least 8 characters.' });
    if (pw.next !== pw.confirm) return setPwMsg({ ok: false, text: 'New password and confirmation do not match.' });
    // TODO: call your change-password API here
    setPwMsg({ ok: true, text: 'Password updated.' });
    setPw({ current: '', next: '', confirm: '' });
  };

  const field = (k) => ({ value: form[k], onChange: (e) => setForm({ ...form, [k]: e.target.value }) });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">My <span className="text-forest">profile</span></h1>
        <p className="mt-1 text-sm text-ink/60">Update your details and keep your account secure.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <aside className="card overflow-hidden lg:col-span-1">
          <div className="h-24 bg-gradient-to-br from-forest to-fresh" />
          <div className="-mt-12 px-6 pb-6 text-center">
            <span className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-gold-soft font-display text-4xl font-bold text-forest">{user.name[0]}</span>
            <h2 className="mt-3 font-display text-2xl font-bold">{user.name}</h2>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-leaf-light px-3 py-1 text-xs font-medium text-forest"><ShieldCheck size={13} />{user.role}</span>
            <ul className="mt-6 space-y-3 text-left text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-fresh" />{user.email}</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-fresh" />{user.phone}</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-fresh" />{user.address}</li>
            </ul>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-2">
          <form onSubmit={save} className="card p-6">
            <h3 className="font-display text-xl font-bold">Personal details</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="label">Full name</label><input className="input" {...field('name')} required /></div>
              <div><label className="label">Contact number</label><input className="input" {...field('phone')} /></div>
              <div className="sm:col-span-2"><label className="label">Email address</label><input className="input bg-cream-200/60" value={user.email} disabled /></div>
              <div className="sm:col-span-2"><label className="label">Address</label><input className="input" {...field('address')} /></div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="btn-primary" type="submit">Save changes</button>
              {saved && <span className="inline-flex items-center gap-1.5 text-sm text-forest"><Check size={16} /> Changes saved</span>}
            </div>
          </form>

          <form onSubmit={changePw} className="card p-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold"><KeyRound size={18} className="text-gold" /> Change password</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div><label className="label">Current password</label><input type="password" className="input" required value={pw.current} onChange={(e) => setPw({ ...pw, current: e.target.value })} /></div>
              <div><label className="label">New password</label><input type="password" className="input" required value={pw.next} onChange={(e) => setPw({ ...pw, next: e.target.value })} /></div>
              <div><label className="label">Confirm password</label><input type="password" className="input" required value={pw.confirm} onChange={(e) => setPw({ ...pw, confirm: e.target.value })} /></div>
            </div>
            {pwMsg && <p role="status" className={`mt-4 text-sm ${pwMsg.ok ? 'text-forest' : 'text-red-700'}`}>{pwMsg.text}</p>}
            <button className="btn-ghost mt-5" type="submit">Update password</button>
          </form>
        </div>
      </div>
    </div>
  );
}
