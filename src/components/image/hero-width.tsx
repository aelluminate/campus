import Image from "next/image"
import { HeroWidthImageProps } from "@/types/image"

export default function HeroWidthImage({ src, alt }: HeroWidthImageProps) {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="w-full rounded-xl"
        priority
        quality={100}
      />
    </div>
  )
}
