import { Logo } from "../ui/logo"
import { SocialLinks } from "../ui/social-links"
import { FooterLinks } from "./footer-links"
import { AppDownloads } from "../ui/app-downloads"
import { getCurrentYear } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="text-gray-400 mb-6 max-w-md">
              The modern way to find meaningful connections. Join millions of singles who trust HeartSpark to find their
              perfect match.
            </p>
            <SocialLinks />
          </div>

          <FooterLinks />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {getCurrentYear()} HeartSpark. All rights reserved.</p>
          <AppDownloads />
        </div>
      </div>
    </footer>
  )
}
