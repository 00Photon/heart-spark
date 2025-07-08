import { ConversationItem } from "./conversation-item"

const conversations = [
  {
    id: 1,
    name: "Alex Rivera",
    lastMessage: "Hey! How was your weekend?",
    time: "2m ago",
    unread: 2,
    avatar: "/placeholder.svg?height=50&width=50",
    online: true,
  },
  {
    id: 2,
    name: "Jordan Smith",
    lastMessage: "That restaurant looks amazing! 😍",
    time: "1h ago",
    unread: 0,
    avatar: "/placeholder.svg?height=50&width=50",
    online: false,
  },
  {
    id: 3,
    name: "Taylor Johnson",
    lastMessage: "Thanks for the coffee recommendation",
    time: "3h ago",
    unread: 1,
    avatar: "/placeholder.svg?height=50&width=50",
    online: true,
  },
  {
    id: 4,
    name: "Casey Brown",
    lastMessage: "Looking forward to our date tomorrow!",
    time: "1d ago",
    unread: 0,
    avatar: "/placeholder.svg?height=50&width=50",
    online: false,
  },
]

export function ConversationList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-full overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900">Conversations</h2>
      </div>
      <div className="overflow-y-auto h-full">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  )
}
