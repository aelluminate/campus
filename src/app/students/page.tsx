import Image from "next/image"

export default function ProjectsPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-8">
        <div className="w-full">
          <Image
            src={"https://i.imgur.com/lD348Ec.png"}
            alt="computer engineering students"
            width={400}
            height={400}
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-bold uppercase text-neutral-400">Who we teach</span>
            <div className="font-lora text-xl">Computer Engineering Students</div>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui officiis
            repellat. Ea et voluptatibus blanditiis inventore laborum maxime, reprehenderit,
            necessitatibus dignissimos tempore quos earum nemo at dicta voluptatum quae? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Doloremque qui officiis repellat. Ea et
            voluptatibus blanditiis inventore laborum maxime, reprehenderit, necessitatibus
            dignissimos tempore quos earum nemo at dicta voluptatum quae?
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-bold uppercase text-neutral-400">Students</span>
          <div className="grid w-full grid-cols-3 gap-2">
            <div className="flex w-full flex-row items-center gap-2 rounded-md border border-neutral-700 p-2">
              <div className="h-8 w-8">
                <Image
                  src={"/images/avatars/male.png"}
                  alt="student"
                  width={100}
                  height={100}
                  className="h-8 w-8 rounded-sm"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-sm">Francis Ignacio</div>
                <span className="text-xs text-neutral-400">4th Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
