import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { DollarSign } from "lucide-react"

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="h-5 w-5 mr-2" />
          Revenue Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
          <div className="text-center">
            <div className="text-4xl mb-2">💰</div>
            <p className="text-gray-600 mb-2">Revenue Chart</p>
            <p className="text-sm text-gray-500">Revenue visualization would go here</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">$28,450</p>
            <p className="text-xs text-gray-500">This Month</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">$1,247</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">$342K</p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
