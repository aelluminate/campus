import Image from "next/image"
import { SmallProfileProps } from "@/types/card"
import { ToolTip } from "../others/_index"

export default function SmallProfileCard({
  src,
  alt,
  name,
  description,
  isAelluminateVerified,
  gender,
}: SmallProfileProps) {
  const avatarSrc =
    src || (gender === "F" ? "/images/avatars/female.png" : "/images/avatars/male.png")

  return (
    <div className="relative flex w-full flex-row items-center gap-2 rounded-md border border-neutral-700 p-2">
      {isAelluminateVerified && (
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
          <ToolTip content="Aelluminate Verified!" placement="top">
            <div className="absolute -right-10 top-2 h-3 w-24 rotate-45 transform cursor-pointer bg-neutral-700"></div>
          </ToolTip>
        </div>
      )}
      <Image
        src={avatarSrc}
        alt={alt}
        width={100}
        height={100}
        className="h-10 w-10 rounded-sm object-fill"
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center">
          <div className="line-clamp-1 text-sm">{name}</div>
        </div>
        <span className="text-xs text-neutral-400">{description}</span>
      </div>
    </div>
  )
}
