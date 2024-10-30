import { ParagraphTextProps } from "@/types/text"

export default function NormalText({ text, className = "" }: ParagraphTextProps) {
  return <p className={`text-sm md:text-base lg:text-base ${className}`}>{text}</p>
}
