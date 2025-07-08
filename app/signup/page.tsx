import { SignupForm } from "@/components/auth/signup-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join millions finding love through location and zodiac compatibility"
      showBackToHome={true}
    >
      <SignupForm />
    </AuthLayout>
  )
}
