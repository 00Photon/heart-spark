import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export function ModerationHeader() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Moderation</h1>
          <p className="text-gray-600">Review and moderate user-reported content</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50 bg-transparent">
            <CheckCircle className="h-4 w-4 mr-2" />
            Approve All
          </Button>
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Review Queue
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-800">Pending Review</span>
          </div>
          <p className="text-2xl font-bold text-yellow-900 mt-1">23</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Approved Today</span>
          </div>
          <p className="text-2xl font-bold text-green-900 mt-1">156</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-sm font-medium text-red-800">Actions Taken</span>
          </div>
          <p className="text-2xl font-bold text-red-900 mt-1">12</p>
        </div>
      </div>
    </div>
  )
}
