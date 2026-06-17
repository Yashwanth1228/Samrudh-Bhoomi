import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/components/admin/Dashboard";
import useAdminAuth from "@/hooks/useAdminAuth";

export default function DashboardPage() {
  const loading = useAdminAuth();

  if (loading) {
    return null;
  }
  return <Dashboard />;
}
