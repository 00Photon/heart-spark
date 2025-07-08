"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    newMatches: true,
    messages: true,
    likes: true,
    profileViews: false,
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    weeklyDigest: true,
  })

  const handleSave = () => {
    console.log("Saving notification settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>App Notifications</CardTitle>
          <CardDescription>Choose what notifications you want to receive in the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="newMatches" className="text-sm font-medium">
                New matches
              </Label>
              <p className="text-sm text-gray-500">Get notified when you have a new match</p>
            </div>
            <Switch
              id="newMatches"
              checked={settings.newMatches}
              onCheckedChange={(checked) => setSettings({ ...settings, newMatches: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="messages" className="text-sm font-medium">
                New messages
              </Label>
              <p className="text-sm text-gray-500">Get notified when you receive a message</p>
            </div>
            <Switch
              id="messages"
              checked={settings.messages}
              onCheckedChange={(checked) => setSettings({ ...settings, messages: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="likes" className="text-sm font-medium">
                Likes received
              </Label>
              <p className="text-sm text-gray-500">Get notified when someone likes your profile</p>
            </div>
            <Switch
              id="likes"
              checked={settings.likes}
              onCheckedChange={(checked) => setSettings({ ...settings, likes: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="profileViews" className="text-sm font-medium">
                Profile views
              </Label>
              <p className="text-sm text-gray-500">Get notified when someone views your profile</p>
            </div>
            <Switch
              id="profileViews"
              checked={settings.profileViews}
              onCheckedChange={(checked) => setSettings({ ...settings, profileViews: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Methods</CardTitle>
          <CardDescription>Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="pushNotifications" className="text-sm font-medium">
                Push notifications
              </Label>
              <p className="text-sm text-gray-500">Receive notifications on your device</p>
            </div>
            <Switch
              id="pushNotifications"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="emailNotifications" className="text-sm font-medium">
                Email notifications
              </Label>
              <p className="text-sm text-gray-500">Receive notifications via email</p>
            </div>
            <Switch
              id="emailNotifications"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="smsNotifications" className="text-sm font-medium">
                SMS notifications
              </Label>
              <p className="text-sm text-gray-500">Receive notifications via text message</p>
            </div>
            <Switch
              id="smsNotifications"
              checked={settings.smsNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="weeklyDigest" className="text-sm font-medium">
                Weekly digest
              </Label>
              <p className="text-sm text-gray-500">Get a weekly summary of your activity</p>
            </div>
            <Switch
              id="weeklyDigest"
              checked={settings.weeklyDigest}
              onCheckedChange={(checked) => setSettings({ ...settings, weeklyDigest: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Notification Settings
      </Button>
    </div>
  )
}
