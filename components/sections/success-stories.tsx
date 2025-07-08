import { SuccessStoriesHeader } from "./success-stories-header"
import { TestimonialGrid } from "./testimonial-grid"
import { StatsSection } from "./stats-section"

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SuccessStoriesHeader />
        <TestimonialGrid />
        <StatsSection />
      </div>
    </section>
  )
}
