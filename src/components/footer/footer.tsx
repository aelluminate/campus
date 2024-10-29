import { RiLinkedinFill, RiGithubLine, RiTwitterXLine, RiThreadsLine } from "@remixicon/react"
import SocialLink from "./social-link"

export default function Footer() {
  // Getting current year
  const currentYear = new Date().getFullYear()

  // Social links
  const socialLinks = [
    {
      url: "https://linkedin.com/company/aelluminate",
      icon: RiLinkedinFill,
    },
    {
      url: "https://github.com/aelluminate",
      icon: RiGithubLine,
    },
    {
      url: "https://x.com/aelluminate",
      icon: RiTwitterXLine,
    },
    {
      url: "https://www.threads.net/@aelluminate",
      icon: RiThreadsLine,
    },
  ]

  return (
    <footer className="z-20 flex w-full justify-center gap-4 bg-neutral-900 p-8 text-slate-50">
      <div className="flex w-full max-w-xl flex-col items-center justify-between gap-4 md:flex-row lg:flex-row">
        <div className="order-2 text-sm md:order-1 lg:order-1">
          &copy; {currentYear} Aelluminate. All Rights Reserved.
        </div>
        <ul className="order-1 flex flex-row items-center justify-center gap-4 text-slate-400 md:order-2 lg:order-2">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} url={link.url} Icon={link.icon} />
          ))}
        </ul>
      </div>
    </footer>
  )
}
