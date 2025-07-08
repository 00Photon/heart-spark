import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function ResetPasswordPage() {
  return (
    <AuthLayout title="Set New Password" subtitle="Create a strong password for your account" showBackToHome={false}>
      <ResetPasswordForm />
    </AuthLayout>
  )
}
