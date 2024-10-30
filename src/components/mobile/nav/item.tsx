"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as LucideIcons from "lucide-react"
import { MobileNavItemProps } from "@/types/menu"

export default function MobileNavItem({ url, icon }: MobileNavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === url
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon

  return (
    <Link
      href={url}
      className={`rounded-lg border p-2 transition-all duration-300 ease-in-out hover:border hover:border-neutral-700 hover:bg-neutral-800/75 ${isActive ? "border border-neutral-700 bg-neutral-800/75" : "border-transparent"}`}
    >
      <Icon className={`h-5 w-5 ${isActive ? "text-neutral-50" : ""}`} />
    </Link>
  )
}
