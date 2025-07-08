import { LocationZodiacHeader } from "./location-zodiac-header"
import { MatchingFeatures } from "./matching-features"
import { ZodiacWheel } from "../ui/zodiac-wheel"

export function LocationZodiacMatching() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationZodiacHeader />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MatchingFeatures />
          <ZodiacWheel />
        </div>
      </div>
    </section>
  )
}
