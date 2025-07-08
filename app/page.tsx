import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { LocationZodiacMatching } from "@/components/sections/location-zodiac-matching"
import { SuccessStories } from "@/components/sections/success-stories"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <LocationZodiacMatching />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}
