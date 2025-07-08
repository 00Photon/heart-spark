import { StepCard } from "../ui/step-card"
import { MapPin, Star, Heart } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: MapPin,
    title: "Set Your Location",
    description:
      "Tell us where you are and how far you're willing to travel for love. We'll find amazing singles in your area.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Person using location services on phone with map background",
  },
  {
    step: 2,
    icon: Star,
    title: "Share Your Zodiac",
    description:
      "Add your birth details and let our astrology experts find your most compatible zodiac matches for deeper connections.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Beautiful zodiac constellation chart with romantic couple silhouette",
  },
  {
    step: 3,
    icon: Heart,
    title: "Start Matching",
    description:
      "Browse through carefully curated profiles based on location proximity and zodiac compatibility. Like, chat, and meet!",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Happy couple on their first date at a local coffee shop",
  },
]

export function HowItWorksSteps() {
  return (
    <div className="space-y-20">
      {steps.map((step, index) => (
        <StepCard
          key={step.step}
          step={step.step}
          icon={step.icon}
          title={step.title}
          description={step.description}
          image={step.image}
          imageAlt={step.imageAlt}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  )
}
