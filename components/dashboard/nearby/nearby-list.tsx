import { NearbyUserCard } from "./nearby-user-card"

const nearbyUsers = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 27,
    distance: "0.5 miles away",
    zodiacSign: "Gemini ♊",
    compatibility: 92,
    avatar: "/placeholder.svg?height=60&width=60",
    lastSeen: "Active now",
    interests: ["Coffee", "Art", "Music"],
  },
  {
    id: 2,
    name: "Jordan Smith",
    age: 25,
    distance: "1.2 miles away",
    zodiacSign: "Leo ♌",
    compatibility: 88,
    avatar: "/placeholder.svg?height=60&width=60",
    lastSeen: "Active 5 min ago",
    interests: ["Fitness", "Travel", "Photography"],
  },
  {
    id: 3,
    name: "Taylor Johnson",
    age: 29,
    distance: "2.1 miles away",
    zodiacSign: "Aquarius ♒",
    compatibility: 85,
    avatar: "/placeholder.svg?height=60&width=60",
    lastSeen: "Active 1 hour ago",
    interests: ["Reading", "Hiking", "Cooking"],
  },
  {
    id: 4,
    name: "Casey Brown",
    age: 26,
    distance: "3.5 miles away",
    zodiacSign: "Scorpio ♏",
    compatibility: 90,
    avatar: "/placeholder.svg?height=60&width=60",
    lastSeen: "Active 2 hours ago",
    interests: ["Dancing", "Movies", "Yoga"],
  },
]

export function NearbyList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900">Nearby Singles</h2>
        <p className="text-sm text-gray-600">{nearbyUsers.length} people nearby</p>
      </div>

      <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        {nearbyUsers.map((user) => (
          <NearbyUserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}
