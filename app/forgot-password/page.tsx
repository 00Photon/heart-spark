import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Your Password"
      subtitle="Enter your email address and we'll send you a reset link"
      showBackToHome={true}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
