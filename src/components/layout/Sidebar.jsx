import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutDashboard, ShoppingBag, Repeat, Users, Package, Truck, Settings, UserCircle, LogOut, X } from 'lucide-react';
import Logo from '../common/Logo';
import { logout } from '../../features/auth/authSlice';
import { closeSidebar } from '../../features/ui/uiSlice';

const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/subscriptions', label: 'Subscriptions', icon: Repeat },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/deliveries', label: 'Deliveries', icon: Truck },
];
const account = [
  { to: '/profile', label: 'Profile', icon: UserCircle },
  { to: '/settings', label: 'Settings', icon: Settings },
];

function Item({ to, label, icon: Icon, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
          isActive ? 'bg-cream text-forest shadow-sm' : 'text-cream/80 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={18} className={isActive ? 'text-fresh' : 'text-leaf'} />
          {label}
          {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gold" />}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((s) => s.ui.sidebarOpen);
  const user = useSelector((s) => s.auth.user);
  const close = () => dispatch(closeSidebar());

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };
  

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-ink/40 lg:hidden" onClick={close} aria-hidden />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-forest px-4 py-5 transition-transform duration-200 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-1">
          <Logo light />
          <button onClick={close} className="rounded-lg p-1.5 text-cream hover:bg-white/10 lg:hidden" aria-label="Close menu"><X size={20} /></button>
        </div>

        <nav className="mt-8 flex-1 space-y-1 overflow-y-auto">
          <p className="px-3.5 pb-2 text-xs text-leaf/80">Manage</p>
          {nav.map((n) => <Item key={n.to} {...n} onClick={close} />)}
          <p className="px-3.5 pb-2 pt-6 text-xs text-leaf/80">Account</p>
          {account.map((n) => <Item key={n.to} {...n} onClick={close} />)}
        </nav>

        <div className="mt-4 rounded-2xl bg-white/10 p-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-soft font-semibold text-forest">{user?.name?.[0]}</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{user?.name}</p>
              <p className="truncate text-xs text-leaf">{user?.role}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-cream py-2 text-sm font-medium text-forest transition hover:bg-gold-pale">
            <LogOut size={16} /> Log out
          </button>
        </div>
      </aside>
    </>
  );
}
