import { StatCard } from "../ui/stat-card"

const stats = [
  {
    number: "2M+",
    label: "Active Users",
    description: "Singles ready to mingle",
  },
  {
    number: "150K+",
    label: "Successful Matches",
    description: "Couples found through our app",
  },
  {
    number: "95%",
    label: "Compatibility Rate",
    description: "Average zodiac match score",
  },
  {
    number: "2.3mi",
    label: "Average Distance",
    description: "Between matched couples",
  },
]

export function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Love by the Numbers</h3>
        <p className="text-pink-100 text-lg">Real results from real people finding real love</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  )
}
