import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProfileHeader } from "@/components/dashboard/profile/profile-header"
import { ProfilePhotos } from "@/components/dashboard/profile/profile-photos"
import { ProfileInfo } from "@/components/dashboard/profile/profile-info"
import { ProfilePreferences } from "@/components/dashboard/profile/profile-preferences"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <ProfileHeader />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ProfilePhotos />
          <ProfileInfo />
        </div>
        <div>
          <ProfilePreferences />
        </div>
      </div>
    </DashboardLayout>
  )
}
