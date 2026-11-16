
function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Toolkit
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skills & <span className="text-purple-500">Technologies.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Technologies and tools I'm using, learning, and exploring
            throughout my software engineering journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:border-purple-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🎨
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:border-purple-500/40">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                🛠️
              </div>
              <h3 className="text-xl font-bold">Development Tools</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {['VS Code', 'Git', 'GitHub', 'Vite', 'npm'].map((skill) => (
                <span key={skill} className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Interests */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:border-purple-500/40 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-bold">Other Interests</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Content Creation', 'UI Design', 'Continuous Learning'].map((skill) => (
                <span key={skill} className="rounded-lg border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
