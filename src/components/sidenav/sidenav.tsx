import SideNavHeader from "./header"
import SideNavItem from "./item"
import sideNavMenu from "../../data/menu/sidenav.json"
import * as LucideIcons from "lucide-react"
import { SideNavMenuType, SideNavItemType } from "@/types/sidenav"

const typedSideNavMenu: SideNavMenuType = sideNavMenu.sideNavMenu

export default function SideNav() {
  const sections: string[] = Object.keys(typedSideNavMenu)

  return (
    <div className="group relative z-50 h-full flex-shrink-0 border-r border-neutral-800 bg-neutral-800/25 bg-neutral-900 p-4 font-light text-slate-500 transition-all duration-300 ease-in-out">
      <SideNavHeader />
      <div className="flex w-fit flex-col items-center space-y-4 group-hover:w-fit group-hover:items-start">
        {sections.map((section, index) => (
          <div key={section} className="w-full">
            {index > 0 && <hr className="border-0.5 mb-4 w-full border-neutral-800/50" />}
            <ul className="flex w-full flex-col gap-4">
              {typedSideNavMenu[section].map((item: SideNavItemType) => {
                const Icon = LucideIcons[
                  item.icon as keyof typeof LucideIcons
                ] as LucideIcons.LucideIcon
                return (
                  <SideNavItem key={item.label} href={item.url} icon={Icon} label={item.label} />
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
