import { AdminLayout } from "@/components/admin/admin-layout"
import { ModerationHeader } from "@/components/admin/moderation/moderation-header"
import { ModerationQueue } from "@/components/admin/moderation/moderation-queue"
import { ModerationFilters } from "@/components/admin/moderation/moderation-filters"
import { AdminProtectedRoute } from "@/components/admin/admin-protected-route"

export default function AdminModerationPage() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <ModerationHeader />
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ModerationQueue />
          </div>
          <div>
            <ModerationFilters />
          </div>
        </div>
      </AdminLayout>
    </AdminProtectedRoute>
  )
}
