
function Certificates() {
  return (
    <section
      id="certificates"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Milestones & Recognition
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Certificates & <span className="text-purple-500">Achievements.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A collection of certifications, learning milestones, and
            achievements from my academic and professional journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Certificate placeholder */}
          <div className="group rounded-2xl border border-dashed border-white/20 bg-slate-900/50 p-7 transition hover:border-purple-500/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl">
              🏆
            </div>

            <h3 className="text-xl font-bold">Certificates</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Professional courses, technical training, and certifications
              will be showcased here.
            </p>

            <span className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
              Ready for updates
            </span>
          </div>

          {/* Academic achievements */}
          <div className="group rounded-2xl border border-dashed border-white/20 bg-slate-900/50 p-7 transition hover:border-purple-500/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
              🎓
            </div>

            <h3 className="text-xl font-bold">Academic Achievements</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Academic milestones, university recognition, and educational
              accomplishments will appear here.
            </p>

            <span className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
              Ready for updates
            </span>
          </div>

          {/* Other achievements */}
          <div className="group rounded-2xl border border-dashed border-white/20 bg-slate-900/50 p-7 transition hover:border-purple-500/50 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10 text-3xl">
              ✨
            </div>

            <h3 className="text-xl font-bold">Other Achievements</h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Competitions, community contributions, personal milestones,
              and other accomplishments.
            </p>

            <span className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
              Ready for updates
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
