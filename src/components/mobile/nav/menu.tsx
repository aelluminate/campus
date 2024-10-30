import { MobileNavItem } from "./_index"
import * as LucideIcons from "lucide-react"
import menuData from "@/data/menu.json"

export default function MobileNavMenu() {
  const mobileNav = menuData.menu.mobileNav

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full flex-row justify-center gap-16 border-t border-neutral-700 bg-neutral-900 p-2 md:hidden lg:hidden">
      {mobileNav.map((item, index) => (
        <MobileNavItem key={index} url={item.url} icon={item.icon as keyof typeof LucideIcons} />
      ))}
    </div>
  )
}
