import { HowItWorksHeader } from "./how-it-works-header"
import { HowItWorksSteps } from "./how-it-works-steps"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />
        <HowItWorksSteps />
      </div>
    </section>
  )
}
