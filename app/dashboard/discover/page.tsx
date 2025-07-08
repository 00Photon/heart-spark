import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DiscoverHeader } from "@/components/dashboard/discover/discover-header"
import { SwipeCard } from "@/components/dashboard/discover/swipe-card"
import { DiscoverFilters } from "@/components/dashboard/discover/discover-filters"

export default function DiscoverPage() {
  return (
    <DashboardLayout>
      <DiscoverHeader />
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <SwipeCard />
        </div>
        <div>
          <DiscoverFilters />
        </div>
      </div>
    </DashboardLayout>
  )
}
