import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDistance(distance: number): string {
  return `${distance} mile${distance !== 1 ? "s" : ""} away`
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}
