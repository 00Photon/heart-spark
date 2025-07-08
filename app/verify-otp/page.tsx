import { OtpVerificationForm } from "@/components/auth/otp-verification-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function VerifyOtpPage() {
  return (
    <AuthLayout
      title="Verify Your Account"
      subtitle="Enter the 6-digit code sent to your email address"
      showBackToHome={false}
    >
      <OtpVerificationForm />
    </AuthLayout>
  )
}
