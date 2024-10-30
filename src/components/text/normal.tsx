import { NormalTextProps } from "@/types/text"

export default function NormalText({ text }: NormalTextProps) {
  return <p className="text-base">{text}</p>
}
