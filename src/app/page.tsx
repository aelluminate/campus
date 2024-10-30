import { SectionText, ParagraphText, Header1Text } from "@/components/text/_index"
import { Divider } from "@/components/others/_index"
import { ActiveCard } from "@/components/card/_index"
import projectsData from "@/data/projects.json"

export default function Home() {
  const featuredProjects = projectsData.projects.featuredProjects

  return (
    <main className="w-full flex-grow px-4 py-4 md:py-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Header1Text text="Campus." />
            <span className="text-sm text-neutral-500">by aelluminate.</span>
          </div>
          <ParagraphText
            text="Dynamic, student-focused organization dedicated to shaping the next generation of
            computer engineers through collaboration between students and university professors. We
            are dedicated to turning ideas into reality, enabling organizations to unlock their
            potential and expand their horizons."
            className="text-center"
          />
        </div>
        <Divider />
        <div className="flex w-full flex-col items-start gap-4">
          <SectionText text="Featured Projects" />
          <div className="grid h-full w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ActiveCard
                key={index}
                name={project.name}
                description={project.description}
                link={project.link}
                contributors={project.contributions}
              />
            ))}
            <div className="flex h-full flex-col items-start gap-4 rounded-md border border-dashed border-neutral-700 p-4 text-neutral-400">
              <div className="flex flex-col items-start">
                <h1 className="font-lora text-lg">Stay tune!</h1>
                <p className="text-xs">
                  We are currently working on new projects. Stay tune for more updates!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex w-full flex-col items-start gap-4">
          <SectionText text="What's Happening" />
          <div className="grid-cols- grid h-full w-full gap-2">
            <div className="flex h-full flex-col items-start gap-4 rounded-md border border-dashed border-neutral-700 p-4 text-neutral-400">
              <div className="flex flex-col items-start">
                <h1 className="font-lora text-lg">Cheers, we are getting there!</h1>
                <p className="text-xs">We are just getting started. Stay tune for more updates!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
