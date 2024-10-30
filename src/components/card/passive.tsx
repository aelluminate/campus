import Link from "next/link"
import { PassiveCardProps } from "@/types/card"

export default function PassiveCard({ name, description, link }: PassiveCardProps) {
  return (
    <div className="flex h-full w-full rounded-md border border-neutral-700 p-4">
      <div className="flex h-full flex-col items-start gap-2">
        <div className="flex flex-col items-start gap-2">
          <span className="font-lora text-lg leading-5">{name}</span>
          <p className="text-xs text-neutral-400">{description}</p>
        </div>
        {link ? (
          <Link href={link} target="_blank" className="mt-auto">
            <span className="text-xs">Enroll Now</span>
          </Link>
        ) : (
          <div className="mt-auto text-xs text-neutral-400">Exclusively for members</div>
        )}
      </div>
    </div>
  )
}
