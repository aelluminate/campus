import Link from "next/link"
import Image from "next/image"

export default function SideNavHeader() {
  return (
    <div className="flex w-full pb-8 text-neutral-50">
      <Link href={"/"} className="">
        <Image
          src={"/images/icon.png"}
          width={100}
          height={100}
          alt="icon"
          className="flex h-5 w-5 rounded-md group-hover:hidden"
        />
        <div className="flex w-full flex-row items-center gap-2">
          <Image
            src={"/images/icon.png"}
            width={100}
            height={100}
            alt="logo"
            className="hidden h-5 w-5 rounded-md group-hover:flex"
          />
          <span className="hidden font-lora text-sm font-semibold group-hover:flex">Campus.</span>
        </div>
      </Link>
    </div>
  )
}
