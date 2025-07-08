import type React from "react"

export interface User {
  id: string
  name: string
  age: number
  distance: number
  avatar: string
  verified: boolean
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface FooterSection {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

export interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>
  text: string
  color: string
}
