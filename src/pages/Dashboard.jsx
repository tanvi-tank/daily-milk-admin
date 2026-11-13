import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';
import StatCard from '../components/common/StatCard';
import StatusBadge from '../components/common/StatusBadge';
import { productMix, recentOrders, revenueData, slotData, stats } from '../data/mockData';

const tip = { borderRadius: 12, border: '1px solid #EFE2CD', fontSize: 12 };

export default function Dashboard() {
  const user = useSelector((s) => s.auth.user);
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">{greet}, <span className="text-forest">{user?.name.split(' ')[0]}</span></h1>
        <p className="mt-1 text-sm text-ink/60">Here is how Daily Milk is doing today.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => <StatCard key={s.id} {...s} />)}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="card p-5 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold">Revenue this week</h2>
              <p className="text-xs text-ink/50">Daily sales across all products</p>
            </div>
            <span className="rounded-full bg-gold-pale px-3 py-1 text-xs font-medium text-[#7A5E00]">₹1,22,800</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2E7D32" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE2CD" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip contentStyle={tip} formatter={(v) => [`₹${v.toLocaleString('en-IN')}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#1B5E20" strokeWidth={2.5} fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-display text-xl font-bold">Deliveries by slot</h2>
          <p className="text-xs text-ink/50">Today</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer>
              <BarChart data={slotData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EFE2CD" vertical={false} />
                <XAxis dataKey="slot" tickLine={false} axisLine={false} fontSize={11} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip contentStyle={tip} cursor={{ fill: '#FFF8F0' }} />
                <Bar dataKey="deliveries" fill="#2E7D32" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="card overflow-hidden xl:col-span-2">
          <div className="flex items-center justify-between p-5 pb-3">
            <h2 className="font-display text-xl font-bold">Recent orders</h2>
            <button className="text-sm font-medium text-fresh hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-cream text-xs text-ink/60">
                <tr><th className="px-5 py-2.5 font-medium">Order</th><th className="px-5 py-2.5 font-medium">Customer</th><th className="px-5 py-2.5 font-medium">Item</th><th className="px-5 py-2.5 font-medium">Amount</th><th className="px-5 py-2.5 font-medium">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-cream-300/60">
                {recentOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-cream/60">
                    <td className="px-5 py-3 font-medium text-forest">{o.id}</td>
                    <td className="px-5 py-3">{o.customer}</td>
                    <td className="px-5 py-3 text-ink/70">{o.item}</td>
                    <td className="px-5 py-3 font-medium">{o.amount}</td>
                    <td className="px-5 py-3"><StatusBadge status={o.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-display text-xl font-bold">Top products</h2>
          <p className="text-xs text-ink/50">Share of orders this month</p>
          <ul className="mt-5 space-y-4">
            {productMix.map((p) => (
              <li key={p.name}>
                <div className="mb-1.5 flex justify-between text-sm"><span>{p.name}</span><span className="font-medium">{p.pct}%</span></div>
                <div className="h-2 rounded-full bg-leaf-light"><div className="h-2 rounded-full bg-gradient-to-r from-forest to-leaf" style={{ width: `${Math.min(p.pct * 2, 100)}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
