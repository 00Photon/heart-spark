"use client"

import { useState } from "react"
import Image from "next/image"

interface ConversationItemProps {
  id: number
  name: string
  lastMessage: string
  time: string
  unread: number
  avatar: string
  online: boolean
}

export function ConversationItem({ name, lastMessage, time, unread, avatar, online }: ConversationItemProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
        isActive ? "bg-pink-50 border-pink-200" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          {online && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
        </div>
        {unread > 0 && (
          <div className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unread}
          </div>
        )}
      </div>
    </div>
  )
}
