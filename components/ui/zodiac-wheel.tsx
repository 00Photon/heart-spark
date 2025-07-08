import Image from "next/image"

const zodiacSigns = [
  { name: "Aries", symbol: "♈", color: "text-red-500" },
  { name: "Taurus", symbol: "♉", color: "text-green-500" },
  { name: "Gemini", symbol: "♊", color: "text-yellow-500" },
  { name: "Cancer", symbol: "♋", color: "text-blue-500" },
  { name: "Leo", symbol: "♌", color: "text-orange-500" },
  { name: "Virgo", symbol: "♍", color: "text-green-600" },
  { name: "Libra", symbol: "♎", color: "text-pink-500" },
  { name: "Scorpio", symbol: "♏", color: "text-red-600" },
  { name: "Sagittarius", symbol: "♐", color: "text-purple-500" },
  { name: "Capricorn", symbol: "♑", color: "text-gray-600" },
  { name: "Aquarius", symbol: "♒", color: "text-cyan-500" },
  { name: "Pisces", symbol: "♓", color: "text-blue-400" },
]

export function ZodiacWheel() {
  return (
    <div className="relative">
      {/* Main zodiac wheel image */}
      <div className="relative z-10">
        <Image
          src="/placeholder.svg?height=500&width=500"
          alt="Beautiful zodiac wheel with constellation patterns"
          width={500}
          height={500}
          className="rounded-full shadow-2xl mx-auto"
        />
      </div>

      {/* Floating zodiac signs */}
      <div className="absolute inset-0 z-20">
        {zodiacSigns.map((sign, index) => {
          const angle = index * 30 - 90 // 30 degrees apart, starting from top
          const radius = 220
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          return (
            <div
              key={sign.name}
              className="absolute bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
            >
              <span className={`text-2xl ${sign.color}`}>{sign.symbol}</span>
            </div>
          )
        })}
      </div>

      {/* Center compatibility indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-6 shadow-xl">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            98%
          </div>
          <div className="text-xs text-gray-500 font-medium">Match Rate</div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-200 rounded-full opacity-40 blur-2xl" />
    </div>
  )
}
