import { MatchCard } from "../ui/match-card"

const matches = [
  {
    id: 1,
    name: "Alex",
    age: 28,
    distance: "2 miles away",
    zodiacSign: "Gemini ♊",
    compatibility: 95,
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Photography", "Hiking", "Coffee"],
  },
  {
    id: 2,
    name: "Jordan",
    age: 26,
    distance: "1.5 miles away",
    zodiacSign: "Leo ♌",
    compatibility: 88,
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Music", "Travel", "Yoga"],
  },
  {
    id: 3,
    name: "Taylor",
    age: 30,
    distance: "3 miles away",
    zodiacSign: "Aquarius ♒",
    compatibility: 92,
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Art", "Cooking", "Reading"],
  },
]

export function MatchesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Matches</h2>
        <span className="text-sm text-gray-500">{matches.length} new matches</span>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  )
}
