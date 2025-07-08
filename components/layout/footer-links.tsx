import Link from "next/link"
import { FOOTER_SECTIONS } from "@/lib/constants"

export function FooterLinks() {
  return (
    <>
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
