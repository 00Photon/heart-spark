import { MessageBubble } from "./message-bubble"

const messages = [
  {
    id: 1,
    content: "Hey! How was your weekend?",
    sender: "other",
    time: "10:30 AM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    content: "It was great! Went hiking in the mountains. How about yours?",
    sender: "me",
    time: "10:32 AM",
  },
  {
    id: 3,
    content: "That sounds amazing! I love hiking too. Which trail did you take?",
    sender: "other",
    time: "10:33 AM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    content: "The Blue Ridge Trail. The views were incredible! We should go together sometime 😊",
    sender: "me",
    time: "10:35 AM",
  },
  {
    id: 5,
    content: "I'd love that! I know some great spots too. Are you free this weekend?",
    sender: "other",
    time: "10:36 AM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} {...message} />
      ))}
    </div>
  )
}
