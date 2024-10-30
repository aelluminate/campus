import SideNavHeader from "./header"
import SideNavItem from "./item"
import sideNavMenu from "../../data/sidenav.json"
import * as LucideIcons from "lucide-react"
import { SideNavMenuType, SideNavItemType } from "@/types/sidenav"

const typedSideNavMenu: SideNavMenuType = sideNavMenu.sideNavMenu

export default function SideNav() {
  const sections: string[] = Object.keys(typedSideNavMenu)

  return (
    <div className="relative z-50 flex h-full w-fit flex-shrink-0 flex-col gap-4 border-r border-neutral-800 bg-neutral-900 p-2 font-light text-slate-500">
      <SideNavHeader />
      <div className="flex flex-grow flex-col items-center">
        {sections.map((section, index) => (
          <div key={section} className="w-full">
            {index > 0 && <hr className="border-0.5 mb-4 w-full border-neutral-800/50" />}
            <ul className="flex w-full flex-col gap-2">
              {typedSideNavMenu[section].map((item: SideNavItemType) => {
                return (
                  <SideNavItem
                    key={item.label}
                    href={item.url}
                    icon={item.icon as keyof typeof LucideIcons}
                    label={item.label}
                  />
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
