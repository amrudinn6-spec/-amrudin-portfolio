
function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Education & <span className="text-purple-500">Experience.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            My academic journey, professional development, and experiences
            that continue to shape my growth in technology.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🎓
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative rounded-2xl border border-purple-500/30 bg-slate-900 p-7">
              <div className="absolute left-0 top-7 h-10 w-1 rounded-r-full bg-purple-500" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-semibold text-purple-400">
                  2016 E.C. — Present
                </span>
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  In Progress
                </span>
              </div>

              <h4 className="mt-5 text-xl font-bold">
                Software Engineering
              </h4>

              <p className="mt-2 text-slate-300">
                Wachemo University
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Currently pursuing a degree in Software Engineering,
                developing technical knowledge and practical skills
                through academic learning and project work.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                <span>📚</span>
                Fourth-Year Student
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                💼
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-900/50 p-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-3xl">
                🚀
              </div>

              <h4 className="text-xl font-bold">
                More Experiences Ahead
              </h4>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                This space will showcase my internships, professional
                experience, freelance projects, and other opportunities
                as my journey grows.
              </p>

              <span className="mt-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
