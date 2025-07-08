import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Video, MoreHorizontal } from "lucide-react"

export function ChatHeader() {
  return (
    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Alex Rivera"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Alex Rivera</h3>
          <p className="text-sm text-green-600">Online now</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
