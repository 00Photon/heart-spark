import Image from "next/image"
import type { LucideIcon } from "lucide-react"

interface StepCardProps {
  step: number
  icon: LucideIcon
  title: string
  description: string
  image: string
  imageAlt: string
  reversed?: boolean
}

export function StepCard({ step, icon: Icon, title, description, image, imageAlt, reversed = false }: StepCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:grid-flow-col-dense" : ""}`}>
      {/* Content */}
      <div className={`space-y-6 ${reversed ? "lg:col-start-2" : ""}`}>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
            {step}
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-xl">
            <Icon className="h-6 w-6 text-pink-600" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

        <div className="flex items-center space-x-4 pt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">Join 2M+ happy users</span>
        </div>
      </div>

      {/* Image */}
      <div className={`relative ${reversed ? "lg:col-start-1" : ""}`}>
        <div className="relative z-10">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200 rounded-full opacity-60 blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60 blur-xl" />
      </div>
    </div>
  )
}
