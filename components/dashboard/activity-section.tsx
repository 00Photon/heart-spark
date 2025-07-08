import { MessageCircle, Heart, Eye } from "lucide-react"

const activities = [
  {
    type: "like",
    message: "Alex liked your profile",
    time: "2 minutes ago",
    icon: Heart,
    color: "text-pink-500",
  },
  {
    type: "message",
    message: "New message from Jordan",
    time: "1 hour ago",
    icon: MessageCircle,
    color: "text-blue-500",
  },
  {
    type: "view",
    message: "Taylor viewed your profile",
    time: "3 hours ago",
    icon: Eye,
    color: "text-green-500",
  },
]

export function ActivitySection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
