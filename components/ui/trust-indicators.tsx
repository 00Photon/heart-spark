import { TRUST_INDICATORS } from "@/lib/constants"

export function TrustIndicators() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
      {TRUST_INDICATORS.map((indicator, index) => (
        <div key={index} className="flex items-center gap-2">
          <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
          <span>{indicator.text}</span>
        </div>
      ))}
    </div>
  )
}
