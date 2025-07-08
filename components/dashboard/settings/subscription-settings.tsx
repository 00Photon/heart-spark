import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    current: true,
    features: ["5 likes per day", "Basic matching", "Limited messaging", "Standard support"],
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "month",
    current: false,
    popular: true,
    features: [
      "Unlimited likes",
      "Advanced matching",
      "Unlimited messaging",
      "See who liked you",
      "Priority support",
      "Boost your profile",
    ],
  },
  {
    name: "VIP",
    price: "$39.99",
    period: "month",
    current: false,
    features: [
      "Everything in Premium",
      "VIP badge on profile",
      "Advanced filters",
      "Read receipts",
      "Incognito mode",
      "Personal matchmaker",
    ],
  },
]

export function SubscriptionSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You're currently on the Free plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900">Free Plan</h3>
              <p className="text-sm text-gray-600">Basic features included</p>
            </div>
            <Badge variant="secondary">Current Plan</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? "border-pink-200 shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-2">
                {plan.name === "VIP" && <Crown className="h-6 w-6 text-yellow-500 mr-2" />}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {plan.price}
                <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.current ? (
                <Button disabled className="w-full">
                  Current Plan
                </Button>
              ) : (
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Upgrade to {plan.name}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View your past transactions and invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No billing history available</p>
            <p className="text-sm text-gray-500">Upgrade to a paid plan to see your billing history here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
