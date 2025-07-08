import { AdminLayout } from "@/components/admin/admin-layout"
import { AdminSettingsHeader } from "@/components/admin/settings/admin-settings-header"
import { AdminSettingsTabs } from "@/components/admin/settings/admin-settings-tabs"
import { AdminProtectedRoute } from "@/components/admin/admin-protected-route"

export default function AdminSettingsPage() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <AdminSettingsHeader />
        <AdminSettingsTabs />
      </AdminLayout>
    </AdminProtectedRoute>
  )
}
