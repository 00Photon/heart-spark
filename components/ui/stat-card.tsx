interface StatCardProps {
  number: string
  label: string
  description: string
}

export function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-pink-100 font-semibold mb-1">{label}</div>
      <div className="text-pink-200 text-sm">{description}</div>
    </div>
  )
}
