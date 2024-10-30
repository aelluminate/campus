import Link from "next/link"
import { Link2 } from "lucide-react"
import { ActiveCardProps } from "@/types/card"

export default function ActiveCard({ name, description, link, contributors }: ActiveCardProps) {
  return (
    <div className="flex h-full flex-col items-start gap-4 rounded-md border border-neutral-700 p-4">
      <div className="flex flex-col items-start">
        <h1 className="font-lora text-lg">{name}</h1>
        <p className="text-xs text-neutral-400">{description}</p>
      </div>
      <div className="mt-auto flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Link
            href={link}
            target={"_blank"}
            className="flex flex-row items-center gap-2 text-neutral-400"
          >
            <Link2 className="h-4 w-4" />
            <span className="text-xs">{new URL(link).hostname}</span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center -space-x-2">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800"
              >
                <span className="text-xs text-neutral-50">{contributor.name[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
