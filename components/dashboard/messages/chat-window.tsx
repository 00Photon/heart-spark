import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"

export function ChatWindow() {
  return (
    <div className="bg-white rounded-2xl shadow-sm h-full flex flex-col">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  )
}
