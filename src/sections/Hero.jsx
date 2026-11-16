
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 md:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm text-purple-200">
              Welcome to my portfolio
            </span>
          </div>

          <p className="mb-4 text-lg font-medium text-purple-400">
            Software Engineering Student
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-purple-500">Amrudin.</span>
            <br />
            <span className="text-slate-300">
              I build things for the web.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Aspiring Software Developer and Digital Content Creator.
            Building software, exploring technology, and creating
            digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-purple-600 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-purple-500"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-purple-400 hover:text-purple-400"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
            <span>Software Development</span>
            <span className="h-1 w-1 rounded-full bg-purple-500" />
            <span>Content Creation</span>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">
                MY CREATIVE SPACE
              </span>
              <span className="text-purple-400">✦</span>
            </div>

            <div className="flex aspect-square items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 via-slate-900 to-blue-600/20">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 text-5xl font-bold text-purple-300 shadow-lg shadow-purple-900/30">
                  A.
                </div>
                <h2 className="text-3xl font-bold">Amrudin</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Developer in Progress
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-semibold">Development</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Passion</p>
                <p className="mt-2 font-semibold">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
