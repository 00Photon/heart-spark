import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { TrendingUp } from "lucide-react"

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          User Growth
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-600 mb-2">User Growth Chart</p>
            <p className="text-sm text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">2,847</p>
            <p className="text-xs text-gray-500">This Month</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">+12.5%</p>
            <p className="text-xs text-gray-500">Growth Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">156</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
