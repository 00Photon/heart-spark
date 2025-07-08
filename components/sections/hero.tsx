import { HeroContent } from "./hero-content"
import { HeroImage } from "./hero-image"
import { BackgroundDecorations } from "../ui/background-decorations"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      <BackgroundDecorations />
    </section>
  )
}
