import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Clock, User, Heart, MessageCircle, AlertTriangle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "user_signup",
    message: "New user registered: Sarah Johnson",
    time: "2 minutes ago",
    icon: User,
    color: "text-blue-500",
    badge: "New User",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    type: "match",
    message: "Match created between Alex and Jordan",
    time: "5 minutes ago",
    icon: Heart,
    color: "text-pink-500",
    badge: "Match",
    badgeColor: "bg-pink-100 text-pink-800",
  },
  {
    id: 3,
    type: "report",
    message: "User reported inappropriate content",
    time: "12 minutes ago",
    icon: AlertTriangle,
    color: "text-red-500",
    badge: "Report",
    badgeColor: "bg-red-100 text-red-800",
  },
  {
    id: 4,
    type: "message",
    message: "1,247 messages sent in the last hour",
    time: "1 hour ago",
    icon: MessageCircle,
    color: "text-green-500",
    badge: "Activity",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 5,
    type: "user_signup",
    message: "New user registered: Mike Chen",
    time: "2 hours ago",
    icon: User,
    color: "text-blue-500",
    badge: "New User",
    badgeColor: "bg-blue-100 text-blue-800",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <Badge className={activity.badgeColor}>{activity.badge}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
