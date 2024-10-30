import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { HeroWidthImage } from "@/components/image/_index"
import { SectionText, Header2Text, NormalText } from "@/components/text/_index"
import { SmallProfileCard, PassiveCard } from "@/components/card/_index"
import studentsData from "@/data/students.json"
import classData from "@/data/classes.json"
import { getOrdinalSuffix } from "@/helpers/get-ordinal-suffix"

export default function StudentsPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-8">
        <HeroWidthImage src="https://i.imgur.com/lD348Ec.png" alt="hero" />
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <SectionText text="Who we teach" />
            <Header2Text text="Computer Engineering Students" />
          </div>
          <NormalText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque qui officiis repellat. Ea
      et voluptatibus blanditiis inventore laborum maxime, reprehenderit, necessitatibus dignissimos
      tempore quos earum nemo at dicta voluptatum quae? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Doloremque qui officiis repellat. Ea et voluptatibus blanditiis inventore
      laborum maxime, reprehenderit, necessitatibus dignissimos tempore quos earum nemo at dicta
      voluptatum quae?"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <SectionText text="What we Teach" />
          <div className="grid w-full grid-cols-3 gap-2">
            {classData.class.map((cls, index) => (
              <PassiveCard
                key={index}
                icon={cls.icon as keyof typeof LucideIcons}
                name={cls.name}
                description={cls.description}
                enrollURL={cls.enrollURL}
              />
            ))}
            <div className="flex h-full w-full rounded-md border border-dashed border-neutral-700 p-2">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <span className="text-sm text-neutral-500">More courses will be available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <SectionText text={`Students (${studentsData.students.length})`} />
          <div className="flex w-full flex-col gap-2">
            <div className="grid w-full grid-cols-3 gap-2">
              {studentsData.students
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((student, index) => (
                  <SmallProfileCard
                    key={index}
                    src={student.profileImgURL}
                    alt={"student-profile"}
                    name={student.name}
                    description={`${student.yearLevel}${getOrdinalSuffix(student.yearLevel)} Year`}
                    isAelluminateVerified={student.isAelluminateVerified}
                    gender={student.gender}
                  />
                ))}
            </div>
            <div className="text-end text-xs text-neutral-400">
              Thanks for{" "}
              <Link
                href={"https://www.avatartion.com/"}
                target={"_blank"}
                className="text-neutral-50 underline"
              >
                Avatartion
              </Link>{" "}
              &{" "}
              <Link
                href={"https://www.drawkit.com/"}
                target={"_blank"}
                className="text-neutral-50 underline"
              >
                Drawkit
              </Link>{" "}
              for the customized avatars.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
