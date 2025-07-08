import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsHeader } from "@/components/dashboard/settings/settings-header"
import { SettingsTabs } from "@/components/dashboard/settings/settings-tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsHeader />
      <SettingsTabs />
    </DashboardLayout>
  )
}
