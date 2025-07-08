"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newUserAlerts: true,
    securityAlerts: true,
    systemAlerts: true,
    moderationAlerts: true,
    revenueAlerts: true,
  })

  const handleSave = () => {
    console.log("Saving notification settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="emailNotifications" className="text-sm font-medium">
                Email Notifications
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
              <Label htmlFor="pushNotifications" className="text-sm font-medium">
                Push Notifications
              </Label>
              <p className="text-sm text-gray-500">Receive browser push notifications</p>
            </div>
            <Switch
              id="pushNotifications"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="smsNotifications" className="text-sm font-medium">
                SMS Notifications
              </Label>
              <p className="text-sm text-gray-500">Receive critical alerts via SMS</p>
            </div>
            <Switch
              id="smsNotifications"
              checked={settings.smsNotifications}
              onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alert Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="newUserAlerts" className="text-sm font-medium">
                New User Registrations
              </Label>
              <p className="text-sm text-gray-500">Get notified when new users register</p>
            </div>
            <Switch
              id="newUserAlerts"
              checked={settings.newUserAlerts}
              onCheckedChange={(checked) => setSettings({ ...settings, newUserAlerts: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="securityAlerts" className="text-sm font-medium">
                Security Alerts
              </Label>
              <p className="text-sm text-gray-500">Critical security events and breaches</p>
            </div>
            <Switch
              id="securityAlerts"
              checked={settings.securityAlerts}
              onCheckedChange={(checked) => setSettings({ ...settings, securityAlerts: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="systemAlerts" className="text-sm font-medium">
                System Alerts
              </Label>
              <p className="text-sm text-gray-500">Server issues and system maintenance</p>
            </div>
            <Switch
              id="systemAlerts"
              checked={settings.systemAlerts}
              onCheckedChange={(checked) => setSettings({ ...settings, systemAlerts: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="moderationAlerts" className="text-sm font-medium">
                Moderation Alerts
              </Label>
              <p className="text-sm text-gray-500">New reports and content requiring review</p>
            </div>
            <Switch
              id="moderationAlerts"
              checked={settings.moderationAlerts}
              onCheckedChange={(checked) => setSettings({ ...settings, moderationAlerts: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="revenueAlerts" className="text-sm font-medium">
                Revenue Alerts
              </Label>
              <p className="text-sm text-gray-500">Payment failures and subscription changes</p>
            </div>
            <Switch
              id="revenueAlerts"
              checked={settings.revenueAlerts}
              onCheckedChange={(checked) => setSettings({ ...settings, revenueAlerts: checked })}
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
