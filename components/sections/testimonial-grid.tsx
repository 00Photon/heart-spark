import { TestimonialCard } from "../ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah & Mike",
    location: "Brooklyn, NY",
    zodiacMatch: "Libra ♎ + Gemini ♊",
    story:
      "We lived just 3 blocks apart but never met until HeartSpark! Our Libra-Gemini compatibility was off the charts, and now we're planning our wedding!",
    image: "/placeholder.svg?height=300&width=400",
    rating: 5,
    timeframe: "Met 8 months ago",
  },
  {
    name: "Jessica & David",
    location: "Austin, TX",
    zodiacMatch: "Scorpio ♏ + Cancer ♋",
    story:
      "The app showed we were 95% compatible based on our water signs. We met at a coffee shop 2 miles from both our homes. It was instant magic!",
    image: "/placeholder.svg?height=300&width=400",
    rating: 5,
    timeframe: "Met 1 year ago",
  },
  {
    name: "Emma & James",
    location: "Seattle, WA",
    zodiacMatch: "Taurus ♉ + Virgo ♍",
    story:
      "Both earth signs living in the same neighborhood - we were meant to be! HeartSpark's algorithm knew what we didn't even know about ourselves.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 5,
    timeframe: "Met 6 months ago",
  },
]

export function TestimonialGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  )
}
