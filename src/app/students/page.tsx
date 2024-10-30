import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { HeroWidthImage } from "@/components/image/_index"
import { SectionText, Header2Text, ParagraphText } from "@/components/text/_index"
import { SmallProfileCard, PassiveCard } from "@/components/card/_index"
import studentsData from "@/data/students.json"
import classData from "@/data/classes.json"
import { getOrdinalSuffix } from "@/helpers/get-ordinal-suffix"

export default function StudentsPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <HeroWidthImage src="https://i.imgur.com/lD348Ec.png" alt="hero" />
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <SectionText text="Who we teach" />
            <Header2Text text="Computer Engineering Students" />
          </div>
          <ParagraphText
            text="We at Aelluminate, we teach computer engineering students from Holy Angel University providing them with the necessary skills and knowledge to become successful in the field of technology.
          "
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <SectionText text="What we Teach" />
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
            {classData.class.map((cls, index) => (
              <PassiveCard
                key={index}
                icon={cls.icon as keyof typeof LucideIcons}
                name={cls.name}
                description={cls.description}
                link={cls.link}
              />
            ))}
            <div className="flex h-full w-full rounded-md border border-dashed border-neutral-700 p-2">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <span className="text-sm text-neutral-500">Stay tune!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <SectionText text={`Students (${studentsData.students.length})`} />
          <div className="flex w-full flex-col gap-2">
            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
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
            <div className="text-center text-xs text-neutral-400">
              Thanks to{" "}
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
              for these awesome avatars.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
