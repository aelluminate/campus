import { ParagraphText, Header1Text } from "@/components/text/_index"

export default function ProjectsPaage() {
  return (
    <main className="w-full flex-grow px-4 py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Header1Text text="Projects." />
          </div>
          <ParagraphText
            text="We are still working on this page. Stay tune for more updates!"
            className="text-center text-neutral-400"
          />
        </div>
      </div>
    </main>
  )
}
