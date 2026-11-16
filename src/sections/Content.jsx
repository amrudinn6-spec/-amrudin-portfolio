
function Content() {
  return (
    <section
      id="content"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Beyond Development
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Content <span className="text-purple-500">Creation.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Exploring creativity, sharing ideas, and creating digital
            content across different platforms.
          </p>
        </div>

        <div className="rounded-3xl border border-dashed border-white/20 bg-slate-900/50 px-6 py-16 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500/10 text-4xl">
            🎬
          </div>

          <h3 className="text-2xl font-bold">
            My Creative Channels
          </h3>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-400">
            My public channels, videos, and creative projects will
            appear here as I share more content.
          </p>

          <span className="mt-7 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            More content coming soon
          </span>
        </div>
      </div>
    </section>
  )
}

export default Content
