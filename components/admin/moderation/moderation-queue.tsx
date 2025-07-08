"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Eye } from "lucide-react"
import Image from "next/image"

const reports = [
  {
    id: 1,
    type: "inappropriate_content",
    reportedUser: "John Doe",
    reportedBy: "Jane Smith",
    content: "Inappropriate profile photo",
    timestamp: "2024-01-15 14:30",
    status: "pending",
    severity: "high",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    type: "harassment",
    reportedUser: "Mike Johnson",
    reportedBy: "Sarah Wilson",
    content: "Sending inappropriate messages",
    timestamp: "2024-01-15 13:45",
    status: "pending",
    severity: "critical",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    type: "fake_profile",
    reportedUser: "Alex Rivera",
    reportedBy: "Emma Davis",
    content: "Using fake photos and information",
    timestamp: "2024-01-15 12:20",
    status: "pending",
    severity: "medium",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    type: "spam",
    reportedUser: "Chris Brown",
    reportedBy: "Taylor Johnson",
    content: "Sending promotional messages",
    timestamp: "2024-01-15 11:15",
    status: "pending",
    severity: "low",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function ModerationQueue() {
  const [selectedReports, setSelectedReports] = useState<number[]>([])

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">Low</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{severity}</Badge>
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "inappropriate_content":
        return "Inappropriate Content"
      case "harassment":
        return "Harassment"
      case "fake_profile":
        return "Fake Profile"
      case "spam":
        return "Spam"
      default:
        return type
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Moderation Queue ({reports.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <Image
                  src={report.image || "/placeholder.svg"}
                  alt="Reported content"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{getTypeLabel(report.type)}</h3>
                      {getSeverityBadge(report.severity)}
                    </div>
                    <span className="text-sm text-gray-500">{report.timestamp}</span>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">{report.content}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Reported User:</span> {report.reportedUser}
                      <span className="mx-2">•</span>
                      <span className="font-medium">Reported By:</span> {report.reportedBy}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
