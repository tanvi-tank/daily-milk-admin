import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, ChevronDown, LogOut, Menu, Search, UserCircle } from 'lucide-react';
import { openSidebar } from '../../features/ui/uiSlice';
import { logout } from '../../features/auth/authSlice';

export default function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth.user);
  const [menu, setMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => ref.current && !ref.current.contains(e.target) && setMenu(false);
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-cream-300/70 bg-cream/90 px-4 py-3 backdrop-blur sm:px-8">
      <button onClick={() => dispatch(openSidebar())} className="rounded-lg p-2 hover:bg-cream-200 lg:hidden" aria-label="Open menu"><Menu size={22} /></button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
        <input className="input pl-10" placeholder="Search orders, customers, products" />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="relative rounded-full border border-cream-300 bg-white p-2.5 text-ink/70 hover:text-forest" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold" />
        </button>

        <div className="relative" ref={ref}>
          <button onClick={() => setMenu((m) => !m)} className="flex items-center gap-2 rounded-full border border-cream-300 bg-white py-1.5 pl-1.5 pr-3 hover:border-fresh">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-sm font-semibold text-cream">{user?.name?.[0]}</span>
            <span className="hidden text-sm font-medium sm:block">{user?.name}</span>
            <ChevronDown size={14} className="text-ink/50" />
          </button>
          {menu && (
            <div className="card absolute right-0 mt-2 w-52 overflow-hidden p-1.5">
              <Link to="/profile" onClick={() => setMenu(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-cream"><UserCircle size={16} /> My profile</Link>
              <button onClick={() => { dispatch(logout()); navigate('/login', { replace: true }); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-700 hover:bg-red-50"><LogOut size={16} /> Log out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
