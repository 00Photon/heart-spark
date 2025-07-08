"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivacySettings() {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    showOnlineStatus: true,
    showDistance: true,
    showLastSeen: false,
    allowMessages: true,
    showReadReceipts: true,
    dataCollection: false,
  })

  const handleSave = () => {
    console.log("Saving privacy settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Visibility</CardTitle>
          <CardDescription>Control who can see your profile and information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="profileVisibility" className="text-sm font-medium">
                Make my profile visible
              </Label>
              <p className="text-sm text-gray-500">Allow others to discover your profile</p>
            </div>
            <Switch
              id="profileVisibility"
              checked={settings.profileVisibility}
              onCheckedChange={(checked) => setSettings({ ...settings, profileVisibility: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showOnlineStatus" className="text-sm font-medium">
                Show online status
              </Label>
              <p className="text-sm text-gray-500">Let others see when you're online</p>
            </div>
            <Switch
              id="showOnlineStatus"
              checked={settings.showOnlineStatus}
              onCheckedChange={(checked) => setSettings({ ...settings, showOnlineStatus: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showDistance" className="text-sm font-medium">
                Show distance
              </Label>
              <p className="text-sm text-gray-500">Display your distance to other users</p>
            </div>
            <Switch
              id="showDistance"
              checked={settings.showDistance}
              onCheckedChange={(checked) => setSettings({ ...settings, showDistance: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showLastSeen" className="text-sm font-medium">
                Show last seen
              </Label>
              <p className="text-sm text-gray-500">Let others see when you were last active</p>
            </div>
            <Switch
              id="showLastSeen"
              checked={settings.showLastSeen}
              onCheckedChange={(checked) => setSettings({ ...settings, showLastSeen: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Messaging Privacy</CardTitle>
          <CardDescription>Control your messaging and communication preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="allowMessages" className="text-sm font-medium">
                Allow messages from matches
              </Label>
              <p className="text-sm text-gray-500">Let your matches send you messages</p>
            </div>
            <Switch
              id="allowMessages"
              checked={settings.allowMessages}
              onCheckedChange={(checked) => setSettings({ ...settings, allowMessages: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="showReadReceipts" className="text-sm font-medium">
                Show read receipts
              </Label>
              <p className="text-sm text-gray-500">Let others know when you've read their messages</p>
            </div>
            <Switch
              id="showReadReceipts"
              checked={settings.showReadReceipts}
              onCheckedChange={(checked) => setSettings({ ...settings, showReadReceipts: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data & Analytics</CardTitle>
          <CardDescription>Control how your data is used for app improvements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="dataCollection" className="text-sm font-medium">
                Allow data collection for analytics
              </Label>
              <p className="text-sm text-gray-500">Help us improve the app with anonymous usage data</p>
            </div>
            <Switch
              id="dataCollection"
              checked={settings.dataCollection}
              onCheckedChange={(checked) => setSettings({ ...settings, dataCollection: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Privacy Settings
      </Button>
    </div>
  )
}
