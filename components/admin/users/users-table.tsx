"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Eye, Ban, CheckCircle } from "lucide-react"
import Image from "next/image"

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    age: 28,
    location: "Brooklyn, NY",
    joinDate: "2024-01-15",
    status: "active",
    verified: true,
    matches: 23,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    age: 32,
    location: "San Francisco, CA",
    joinDate: "2024-01-10",
    status: "active",
    verified: true,
    matches: 45,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    age: 26,
    location: "Austin, TX",
    joinDate: "2024-01-08",
    status: "suspended",
    verified: false,
    matches: 12,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Alex Rivera",
    email: "alex.rivera@email.com",
    age: 29,
    location: "Miami, FL",
    joinDate: "2024-01-05",
    status: "active",
    verified: true,
    matches: 67,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Jordan Smith",
    email: "jordan.smith@email.com",
    age: 31,
    location: "Seattle, WA",
    joinDate: "2024-01-03",
    status: "inactive",
    verified: true,
    matches: 8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function UsersTable() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users ({users.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Contact</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Matches</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Joined</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">{user.name}</span>
                          {user.verified && <CheckCircle className="h-4 w-4 text-blue-500 ml-1" />}
                        </div>
                        <span className="text-sm text-gray-500">Age {user.age}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900">{user.email}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{user.location}</span>
                  </td>
                  <td className="py-4 px-4">{getStatusBadge(user.status)}</td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-gray-900">{user.matches}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{user.joinDate}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Ban className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
