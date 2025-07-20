import Image from "next/image"
import { ProfileCard } from "../ui/profile-card"
import { MatchRate } from "../ui/match-rate"

export function HeroImage() {
  return (
    <div className="relative">
      {/* <div className="relative z-10"> */}
        <Image
          src="/1.jpg"
          alt="Happy couple using HeartSpark dating app"
          width={500}
          height={600}
          className="rounded-3xl shadow-2xl mx-auto"
          priority
        />
      {/* </div> */}

      <ProfileCard />
      <MatchRate />
    </div>
  )
}
