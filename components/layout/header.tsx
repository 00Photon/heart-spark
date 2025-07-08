import { Navigation } from "./navigation"
import { Logo } from "../ui/logo"
import { AuthButtons } from "../ui/auth-buttons"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Navigation />
          <AuthButtons />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
