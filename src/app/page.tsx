export default function Home() {
  return (
    <main className="w-full flex-grow px-4 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h1 className="font-lora text-5xl">Campus.</h1>
            <span className="text-sm text-neutral-500">by aelluminate.</span>
          </div>
          <div className="max-w-lg text-center text-base">
            Dynamic, student-focused organization dedicated to shaping the next generation of
            computer engineers through collaboration between students and university professors.
          </div>
        </div>
      </div>
    </main>
  )
}
