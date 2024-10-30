import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { SideNavItemProps } from "@/types/sidenav"

export default function SideNavItem({ href, icon, label }: SideNavItemProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon

  return (
    <li className="flex w-full gap-1 rounded-md hover:text-neutral-50">
      <Link href={href} className="w-full">
        <Icon className="h-5 w-5 group-hover:hidden" strokeWidth={1} />
        <div className="hidden w-full flex-row items-center gap-2 group-hover:flex">
          <Icon className="h-5 w-5" strokeWidth={1} />
          <span className="text-sm font-light">{label}</span>
        </div>
      </Link>
    </li>
  )
}
