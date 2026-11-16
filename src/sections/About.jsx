
function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-purple-500">Me.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            <p>
              I'm Amrudin, a Software Engineering student passionate about
              building software, exploring emerging technologies, and
              creating meaningful digital experiences.
            </p>

            <p>
              My journey in technology is driven by curiosity and a desire
              to turn ideas into practical solutions. I'm continuously
              strengthening my software development skills, exploring new
              technologies, and working on projects that challenge me to
              learn, improve, and grow.
            </p>

            <p>
              Beyond coding, I have a strong interest in digital content
              creation and finding creative ways to bring technology and
              storytelling together.
            </p>

            <p>
              I'm always eager to learn, collaborate, exchange ideas, and
              connect with people who share a passion for technology and
              innovation.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-purple-500/40">
            <div className="mb-5 text-3xl">💻</div>
            <h3 className="text-lg font-semibold">Software Development</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Learning, building, and turning ideas into practical software
              solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-purple-500/40">
            <div className="mb-5 text-3xl">🎨</div>
            <h3 className="text-lg font-semibold">Creative Thinking</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Exploring digital content and creative ways to communicate
              ideas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-purple-500/40">
            <div className="mb-5 text-3xl">🚀</div>
            <h3 className="text-lg font-semibold">Continuous Learning</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Exploring technologies and improving through hands-on
              experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-purple-500/40">
            <div className="mb-5 text-3xl">🤝</div>
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sharing ideas, learning from others, and building together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
