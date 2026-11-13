import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

export default function App() {
  const token = useSelector((s) => s.auth.token);
  return (
    <Routes>
      <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<ComingSoon title="Orders" />} />
          <Route path="subscriptions" element={<ComingSoon title="Subscriptions" />} />
          <Route path="customers" element={<ComingSoon title="Customers" />} />
          <Route path="products" element={<ComingSoon title="Products" />} />
          <Route path="deliveries" element={<ComingSoon title="Deliveries" />} />
          <Route path="settings" element={<ComingSoon title="Settings" />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
