"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserReports } from "./user-reports"
import { EngagementReports } from "./engagement-reports"
import { RevenueReports } from "./revenue-reports"
import { SecurityReports } from "./security-reports"

export function ReportsTabs() {
  return (
    <Tabs defaultValue="users" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="users">User Analytics</TabsTrigger>
        <TabsTrigger value="engagement">Engagement</TabsTrigger>
        <TabsTrigger value="revenue">Revenue</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="users">
        <UserReports />
      </TabsContent>

      <TabsContent value="engagement">
        <EngagementReports />
      </TabsContent>

      <TabsContent value="revenue">
        <RevenueReports />
      </TabsContent>

      <TabsContent value="security">
        <SecurityReports />
      </TabsContent>
    </Tabs>
  )
}
