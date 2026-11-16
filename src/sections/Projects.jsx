
function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-purple-500">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A collection of projects that reflect my learning journey,
            technical interests, and passion for building useful digital
            experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-purple-900/70 via-slate-900 to-blue-900/70">
              <span className="text-6xl">🌐</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Sample Project
              </span>
              <h3 className="mt-3 text-xl font-bold">Personal Portfolio</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A personal website concept designed to showcase projects,
                skills, achievements, and professional experience.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
                Links coming soon
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-900/70 via-slate-900 to-cyan-900/70">
              <span className="text-6xl">📋</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Sample Project
              </span>
              <h3 className="mt-3 text-xl font-bold">Task Management App</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A sample productivity application concept for organizing
                tasks, tracking progress, and managing daily activities.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['React', 'JavaScript', 'CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
                Links coming soon
              </p>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-emerald-900/70 via-slate-900 to-teal-900/70">
              <span className="text-6xl">📊</span>
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Sample Project
              </span>
              <h3 className="mt-3 text-xl font-bold">Dashboard Concept</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A sample dashboard concept focused on presenting
                information through a clean and organized interface.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {['JavaScript', 'HTML', 'CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
                Links coming soon
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
