import { AdminLayout } from "@/components/admin/admin-layout"
import { AdminHeader } from "@/components/admin/admin-header"
import { StatsOverview } from "@/components/admin/stats-overview"
import { RecentActivity } from "@/components/admin/recent-activity"
import { UserGrowthChart } from "@/components/admin/user-growth-chart"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { AdminProtectedRoute } from "@/components/admin/admin-protected-route"

export default function AdminDashboardPage() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <AdminHeader />
        <div className="space-y-8">
          <StatsOverview />
          <div className="grid lg:grid-cols-2 gap-8">
            <UserGrowthChart />
            <RevenueChart />
          </div>
          <RecentActivity />
        </div>
      </AdminLayout>
    </AdminProtectedRoute>
  )
}
