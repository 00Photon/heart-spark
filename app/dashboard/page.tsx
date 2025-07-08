import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MatchesSection } from "@/components/dashboard/matches-section"
import { ProfileSection } from "@/components/dashboard/profile-section"
import { ActivitySection } from "@/components/dashboard/activity-section"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function DashboardPage() {
  return (
    <ProtectedRoute requireEmailVerification={true}>
      <DashboardLayout>
        <DashboardHeader />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <MatchesSection />
            <ActivitySection />
          </div>
          <div>
            <ProfileSection />
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
