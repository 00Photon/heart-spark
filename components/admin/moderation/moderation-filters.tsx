"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter } from "lucide-react"

export function ModerationFilters() {
  const [filters, setFilters] = useState({
    type: [] as string[],
    severity: [] as string[],
    status: [] as string[],
  })

  const typeOptions = ["Inappropriate Content", "Harassment", "Fake Profile", "Spam", "Other"]
  const severityOptions = ["Critical", "High", "Medium", "Low"]
  const statusOptions = ["Pending", "Approved", "Rejected", "Under Review"]

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category as keyof typeof prev], value]
        : prev[category as keyof typeof prev].filter((item) => item !== value),
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Report Type Filter */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Report Type</Label>
          <div className="space-y-2">
            {typeOptions.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={filters.type.includes(type)}
                  onCheckedChange={(checked) => handleFilterChange("type", type, checked as boolean)}
                />
                <Label htmlFor={type} className="text-sm text-gray-600">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Severity Filter */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Severity</Label>
          <div className="space-y-2">
            {severityOptions.map((severity) => (
              <div key={severity} className="flex items-center space-x-2">
                <Checkbox
                  id={severity}
                  checked={filters.severity.includes(severity)}
                  onCheckedChange={(checked) => handleFilterChange("severity", severity, checked as boolean)}
                />
                <Label htmlFor={severity} className="text-sm text-gray-600">
                  {severity}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Status</Label>
          <div className="space-y-2">
            {statusOptions.map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox
                  id={status}
                  checked={filters.status.includes(status)}
                  onCheckedChange={(checked) => handleFilterChange("status", status, checked as boolean)}
                />
                <Label htmlFor={status} className="text-sm text-gray-600">
                  {status}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters */}
        <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600">Apply Filters</Button>

        {/* Clear Filters */}
        <Button variant="outline" className="w-full bg-transparent">
          Clear All
        </Button>
      </CardContent>
    </Card>
  )
}
