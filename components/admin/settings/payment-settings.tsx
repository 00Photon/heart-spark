"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PaymentSettings() {
  const [settings, setSettings] = useState({
    stripeEnabled: true,
    paypalEnabled: true,
    applePayEnabled: false,
    googlePayEnabled: false,
    premiumPrice: 19.99,
    vipPrice: 39.99,
    currency: "USD",
    taxRate: 8.5,
    trialPeriod: 7,
    refundPeriod: 30,
  })

  const handleSave = () => {
    console.log("Saving payment settings:", settings)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="stripeEnabled" className="text-sm font-medium">
                Stripe Payments
              </Label>
              <p className="text-sm text-gray-500">Accept credit/debit cards via Stripe</p>
            </div>
            <Switch
              id="stripeEnabled"
              checked={settings.stripeEnabled}
              onCheckedChange={(checked) => setSettings({ ...settings, stripeEnabled: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="paypalEnabled" className="text-sm font-medium">
                PayPal Payments
              </Label>
              <p className="text-sm text-gray-500">Accept payments via PayPal</p>
            </div>
            <Switch
              id="paypalEnabled"
              checked={settings.paypalEnabled}
              onCheckedChange={(checked) => setSettings({ ...settings, paypalEnabled: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="applePayEnabled" className="text-sm font-medium">
                Apple Pay
              </Label>
              <p className="text-sm text-gray-500">Accept Apple Pay payments</p>
            </div>
            <Switch
              id="applePayEnabled"
              checked={settings.applePayEnabled}
              onCheckedChange={(checked) => setSettings({ ...settings, applePayEnabled: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="googlePayEnabled" className="text-sm font-medium">
                Google Pay
              </Label>
              <p className="text-sm text-gray-500">Accept Google Pay payments</p>
            </div>
            <Switch
              id="googlePayEnabled"
              checked={settings.googlePayEnabled}
              onCheckedChange={(checked) => setSettings({ ...settings, googlePayEnabled: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pricing Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="premiumPrice">Premium Plan Price</Label>
              <Input
                id="premiumPrice"
                type="number"
                step="0.01"
                value={settings.premiumPrice}
                onChange={(e) => setSettings({ ...settings, premiumPrice: Number.parseFloat(e.target.value) })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="vipPrice">VIP Plan Price</Label>
              <Input
                id="vipPrice"
                type="number"
                step="0.01"
                value={settings.vipPrice}
                onChange={(e) => setSettings({ ...settings, vipPrice: Number.parseFloat(e.target.value) })}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Input
                id="currency"
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="taxRate">Tax Rate (%)</Label>
              <Input
                id="taxRate"
                type="number"
                step="0.1"
                value={settings.taxRate}
                onChange={(e) => setSettings({ ...settings, taxRate: Number.parseFloat(e.target.value) })}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="trialPeriod">Trial Period (days)</Label>
              <Input
                id="trialPeriod"
                type="number"
                value={settings.trialPeriod}
                onChange={(e) => setSettings({ ...settings, trialPeriod: Number.parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="refundPeriod">Refund Period (days)</Label>
              <Input
                id="refundPeriod"
                type="number"
                value={settings.refundPeriod}
                onChange={(e) => setSettings({ ...settings, refundPeriod: Number.parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Payment Settings
      </Button>
    </div>
  )
}
