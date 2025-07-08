import { Bell, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function AdminNavbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 lg:ml-0">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search users, reports..."
              className="pl-10 bg-gray-50 border-0 focus:bg-white"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              5
            </span>
          </Button>

          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="text-center">
              <p className="font-semibold text-gray-900">2,847</p>
              <p className="text-xs">Active Users</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">156</p>
              <p className="text-xs">New Today</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
