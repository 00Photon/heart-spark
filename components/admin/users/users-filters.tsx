"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter } from "lucide-react"

export function UsersFilters() {
  const [filters, setFilters] = useState({
    status: [] as string[],
    verified: [] as string[],
    ageRange: [] as string[],
  })

  const statusOptions = ["Active", "Inactive", "Suspended", "Banned"]
  const verifiedOptions = ["Verified", "Unverified"]
  const ageRangeOptions = ["18-25", "26-35", "36-45", "46+"]

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

        {/* Verification Filter */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Verification</Label>
          <div className="space-y-2">
            {verifiedOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={filters.verified.includes(option)}
                  onCheckedChange={(checked) => handleFilterChange("verified", option, checked as boolean)}
                />
                <Label htmlFor={option} className="text-sm text-gray-600">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Age Range Filter */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Age Range</Label>
          <div className="space-y-2">
            {ageRangeOptions.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={range}
                  checked={filters.ageRange.includes(range)}
                  onCheckedChange={(checked) => handleFilterChange("ageRange", range, checked as boolean)}
                />
                <Label htmlFor={range} className="text-sm text-gray-600">
                  {range}
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
