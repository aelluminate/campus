import Link from "next/link"
import { SocialLinkProps } from "../../types/social-link"

export default function SocialLink({ url, Icon }: SocialLinkProps) {
  return (
    <li>
      <Link href={url} target={"_blank"}>
        <Icon className="h-4 w-4 hover:text-slate-50" />
      </Link>
    </li>
  )
}
