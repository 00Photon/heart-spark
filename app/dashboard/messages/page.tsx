import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { MessagesHeader } from "@/components/dashboard/messages/messages-header"
import { ConversationList } from "@/components/dashboard/messages/conversation-list"
import { ChatWindow } from "@/components/dashboard/messages/chat-window"

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <MessagesHeader />
      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        <div className="lg:col-span-1">
          <ConversationList />
        </div>
        <div className="lg:col-span-2">
          <ChatWindow />
        </div>
      </div>
    </DashboardLayout>
  )
}
