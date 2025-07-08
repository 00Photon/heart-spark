import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersHeader } from "@/components/admin/users/users-header"
import { UsersTable } from "@/components/admin/users/users-table"
import { UsersFilters } from "@/components/admin/users/users-filters"
import { AdminProtectedRoute } from "@/components/admin/admin-protected-route"

export default function AdminUsersPage() {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <UsersHeader />
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <UsersTable />
          </div>
          <div>
            <UsersFilters />
          </div>
        </div>
      </AdminLayout>
    </AdminProtectedRoute>
  )
}
