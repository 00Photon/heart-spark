import Image from "next/image"

interface MessageBubbleProps {
  content: string
  sender: "me" | "other"
  time: string
  avatar?: string
}

export function MessageBubble({ content, sender, time, avatar }: MessageBubbleProps) {
  const isMe = sender === "me"

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} items-end space-x-2`}>
      {!isMe && avatar && (
        <Image
          src={avatar || "/placeholder.svg"}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      )}
      <div className={`max-w-xs lg:max-w-md ${isMe ? "order-1" : "order-2"}`}>
        <div
          className={`px-4 py-2 rounded-2xl ${
            isMe ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <p className="text-sm">{content}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${isMe ? "text-right" : "text-left"}`}>{time}</p>
      </div>
    </div>
  )
}
