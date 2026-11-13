const styles = {
  Delivered: 'bg-leaf-light text-forest',
  'Out for delivery': 'bg-gold-pale text-[#7A5E00]',
  Pending: 'bg-cream-200 text-ink/70',
  Cancelled: 'bg-red-50 text-red-700',
};

export default function StatusBadge({ status }) {
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] ?? styles.Pending}`}>{status}</span>;
}
