export const stats = [
  { id: 'revenue', label: 'Revenue this month', value: '₹4,82,350', change: '+12.4%', up: true, icon: 'IndianRupee' },
  { id: 'subs', label: 'Active subscriptions', value: '1,284', change: '+5.1%', up: true, icon: 'Repeat' },
  { id: 'deliveries', label: 'Deliveries today', value: '936', change: '-1.8%', up: false, icon: 'Truck' },
  { id: 'customers', label: 'New customers', value: '148', change: '+9.7%', up: true, icon: 'UserPlus' },
];

export const revenueData = [
  { day: 'Mon', revenue: 14200 }, { day: 'Tue', revenue: 15800 }, { day: 'Wed', revenue: 15100 },
  { day: 'Thu', revenue: 17900 }, { day: 'Fri', revenue: 18600 }, { day: 'Sat', revenue: 21400 },
  { day: 'Sun', revenue: 19800 },
];

export const slotData = [
  { slot: '5–7 AM', deliveries: 412 },
  { slot: '7–9 AM', deliveries: 356 },
  { slot: '5–7 PM', deliveries: 168 },
];

export const productMix = [
  { name: 'Cow milk 500 ml', pct: 46 },
  { name: 'Buffalo milk 500 ml', pct: 27 },
  { name: 'Curd 400 g', pct: 15 },
  { name: 'Paneer 200 g', pct: 8 },
  { name: 'Ghee 500 ml', pct: 4 },
];

export const recentOrders = [
  { id: 'DM-10482', customer: 'Riya Shah', item: 'Cow milk 1 L · Daily', amount: '₹68', status: 'Delivered' },
  { id: 'DM-10481', customer: 'Kunal Mehta', item: 'Buffalo milk 500 ml · Daily', amount: '₹42', status: 'Out for delivery' },
  { id: 'DM-10480', customer: 'Neha Desai', item: 'Paneer 200 g', amount: '₹90', status: 'Pending' },
  { id: 'DM-10479', customer: 'Jay Trivedi', item: 'Curd 400 g · Alt. days', amount: '₹35', status: 'Delivered' },
  { id: 'DM-10478', customer: 'Pooja Joshi', item: 'Cow milk 500 ml · Daily', amount: '₹34', status: 'Cancelled' },
];
