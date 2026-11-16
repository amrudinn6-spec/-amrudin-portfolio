
function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Text content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Background
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-purple-500">Resume.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Interested in learning more about my academic background,
            technical skills, and professional journey?
            My resume will provide a detailed overview of my experience
            and development as a Software Engineering student.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300">
              <span>📄</span>
              CV coming soon
            </span>
          </div>
        </div>

        {/* Resume preview */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-2xl" />

          <div className="relative rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-slate-400">DOCUMENT PREVIEW</p>
                <h3 className="mt-2 text-xl font-bold">Amrudin</h3>
                <p className="mt-1 text-sm text-purple-400">
                  Software Engineering Student
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl">
                📄
              </div>
            </div>

            <div className="space-y-5 py-8">
              <div>
                <div className="mb-3 h-3 w-2/5 rounded bg-purple-500/40" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="mt-2 h-2 w-5/6 rounded bg-white/10" />
              </div>

              <div>
                <div className="mb-3 h-3 w-1/3 rounded bg-purple-500/40" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="mt-2 h-2 w-4/5 rounded bg-white/10" />
              </div>

              <div>
                <div className="mb-3 h-3 w-2/5 rounded bg-purple-500/40" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="mt-2 h-2 w-3/4 rounded bg-white/10" />
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 text-center">
              <p className="text-sm text-slate-500">
                Your latest resume will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
