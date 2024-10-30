import { SectionTextProps } from "@/types/text"

export default function SectionText({ text }: SectionTextProps) {
  return <span className="text-xs font-bold uppercase text-neutral-400">{text}</span>
}
