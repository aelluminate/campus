import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { PassiveCardProps } from "@/types/card"

export default function PassiveCard({ icon, name, description, enrollURL }: PassiveCardProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon

  return (
    <div className="flex h-full w-full rounded-md border border-neutral-700 p-2">
      <div className="flex h-full flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-2">
          <Icon className="h-4 w-4" strokeWidth={1} />
          <span className="text-sm">{name}</span>
        </div>
        <p className="text-sm text-neutral-400">{description}</p>
        {enrollURL ? (
          <Link href={enrollURL} target="_blank" className="mt-auto">
            <span className="text-xs">Enroll Now</span>
          </Link>
        ) : (
          <div className="mt-auto text-xs text-neutral-400">Available soon</div>
        )}
      </div>
    </div>
  )
}
