import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { NearbyHeader } from "@/components/dashboard/nearby/nearby-header"
import { NearbyMap } from "@/components/dashboard/nearby/nearby-map"
import { NearbyList } from "@/components/dashboard/nearby/nearby-list"

export default function NearbyPage() {
  return (
    <DashboardLayout>
      <NearbyHeader />
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <NearbyMap />
        </div>
        <div>
          <NearbyList />
        </div>
      </div>
    </DashboardLayout>
  )
}
