import { LucideIcon } from "lucide-react"

export interface SideNavItemProps {
  href: string
  icon: LucideIcon
  label: string
}

export interface SideNavItemType {
  label: string
  icon: string
  url: string
  isRedirect: boolean
}

export interface SideNavMenuType {
  [key: string]: SideNavItemType[]
}
