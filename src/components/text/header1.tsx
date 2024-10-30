import { Header1TextProps } from "@/types/text"

export default function Header1Text({ text, className = "" }: Header1TextProps) {
  return <h1 className={`font-lora text-4xl md:text-4xl lg:text-5xl ${className}`}>{text}</h1>
}
