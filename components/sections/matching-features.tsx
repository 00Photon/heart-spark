import { FeatureCard } from "../ui/feature-card"
import { MapPin, Star, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Smart Location Matching",
    description:
      "Find compatible singles within your preferred distance range. From next door to across town, love is closer than you think.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Zodiac Compatibility",
    description:
      "Our astrology experts analyze birth charts to find your most compatible signs for lasting relationships.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Instant Chemistry Score",
    description: "Get real-time compatibility scores based on location convenience and astrological harmony.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Verified Cosmic Profiles",
    description: "All profiles are verified with birth time confirmation to ensure accurate astrological matching.",
    color: "from-green-500 to-emerald-500",
  },
]

export function MatchingFeatures() {
  return (
    <div className="space-y-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
        />
      ))}
    </div>
  )
}
