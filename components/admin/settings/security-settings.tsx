"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SecuritySettings() {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    passwordMinLength: 8,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    ipWhitelist: "",
    autoBlockSuspiciousActivity: true,
    requireStrongPasswords: true,
    enableCaptcha: true,
  })

  const handleSave = () => {
    console.log("Saving security settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Authentication Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="twoFactorAuth" className="text-sm font-medium">
                Two-Factor Authentication
              </Label>
              <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
            </div>
            <Switch
              id="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
            />
          </div>

          <div>
            <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
            <Input
              id="passwordMinLength"
              type="number"
              value={settings.passwordMinLength}
              onChange={(e) => setSettings({ ...settings, passwordMinLength: Number.parseInt(e.target.value) })}
              className="mt-1 max-w-xs"
            />
          </div>

          <div>
            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
            <Input
              id="sessionTimeout"
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) => setSettings({ ...settings, sessionTimeout: Number.parseInt(e.target.value) })}
              className="mt-1 max-w-xs"
            />
          </div>

          <div>
            <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
            <Input
              id="maxLoginAttempts"
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) => setSettings({ ...settings, maxLoginAttempts: Number.parseInt(e.target.value) })}
              className="mt-1 max-w-xs"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="autoBlockSuspiciousActivity" className="text-sm font-medium">
                Auto-block Suspicious Activity
              </Label>
              <p className="text-sm text-gray-500">Automatically block accounts with suspicious behavior</p>
            </div>
            <Switch
              id="autoBlockSuspiciousActivity"
              checked={settings.autoBlockSuspiciousActivity}
              onCheckedChange={(checked) => setSettings({ ...settings, autoBlockSuspiciousActivity: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="requireStrongPasswords" className="text-sm font-medium">
                Require Strong Passwords
              </Label>
              <p className="text-sm text-gray-500">Enforce strong password requirements</p>
            </div>
            <Switch
              id="requireStrongPasswords"
              checked={settings.requireStrongPasswords}
              onCheckedChange={(checked) => setSettings({ ...settings, requireStrongPasswords: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="enableCaptcha" className="text-sm font-medium">
                Enable CAPTCHA
              </Label>
              <p className="text-sm text-gray-500">Show CAPTCHA on login and registration forms</p>
            </div>
            <Switch
              id="enableCaptcha"
              checked={settings.enableCaptcha}
              onCheckedChange={(checked) => setSettings({ ...settings, enableCaptcha: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Security Settings
      </Button>
    </div>
  )
}
