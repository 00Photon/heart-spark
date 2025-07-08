"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GeneralSettings() {
  const [settings, setSettings] = useState({
    appName: "HeartSpark",
    appDescription: "The modern way to find meaningful connections",
    supportEmail: "support@heartspark.com",
    maintenanceMode: false,
    userRegistration: true,
    emailVerification: true,
    profileModeration: true,
  })

  const handleSave = () => {
    console.log("Saving general settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="appName">Application Name</Label>
            <Input
              id="appName"
              value={settings.appName}
              onChange={(e) => setSettings({ ...settings, appName: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="appDescription">Application Description</Label>
            <Textarea
              id="appDescription"
              value={settings.appDescription}
              onChange={(e) => setSettings({ ...settings, appDescription: e.target.value })}
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input
              id="supportEmail"
              type="email"
              value={settings.supportEmail}
              onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Platform Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="maintenanceMode" className="text-sm font-medium">
                Maintenance Mode
              </Label>
              <p className="text-sm text-gray-500">Temporarily disable the platform for maintenance</p>
            </div>
            <Switch
              id="maintenanceMode"
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="userRegistration" className="text-sm font-medium">
                User Registration
              </Label>
              <p className="text-sm text-gray-500">Allow new users to register accounts</p>
            </div>
            <Switch
              id="userRegistration"
              checked={settings.userRegistration}
              onCheckedChange={(checked) => setSettings({ ...settings, userRegistration: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="emailVerification" className="text-sm font-medium">
                Email Verification Required
              </Label>
              <p className="text-sm text-gray-500">Require email verification for new accounts</p>
            </div>
            <Switch
              id="emailVerification"
              checked={settings.emailVerification}
              onCheckedChange={(checked) => setSettings({ ...settings, emailVerification: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="profileModeration" className="text-sm font-medium">
                Profile Moderation
              </Label>
              <p className="text-sm text-gray-500">Require manual approval for new profiles</p>
            </div>
            <Switch
              id="profileModeration"
              checked={settings.profileModeration}
              onCheckedChange={(checked) => setSettings({ ...settings, profileModeration: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save General Settings
      </Button>
    </div>
  )
}
