import Link from "next/link"
import { NAV_ITEMS } from "@/lib/constants"

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
