import { AdminLayout } from "@/components/admin/admin-layout"
import { ReportsHeader } from "@/components/admin/reports/reports-header"
import { ReportsTabs } from "@/components/admin/reports/reports-tabs"
import { AdminProtectedRoute } from "@/components/admin/admin-protected-route"

export default function AdminReportsPage() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <ReportsHeader />
        <ReportsTabs />
      </AdminLayout>
    </AdminProtectedRoute>
  )
}
