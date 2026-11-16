
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Education', href: '#education' },
    {/*{ name: 'Certificates', href: '#certificates' }, */},
    {/*{ name: 'Content', href: '#content' }, */},
     {/*{ name: 'Resume', href: '#resume' }*/}
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Amrudin<span className="text-purple-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-500 md:inline-block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-purple-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
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

      {/* About Me */}
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

      {/* Projects */}
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

                <h3 className="mt-3 text-xl font-bold">
                  Personal Portfolio
                </h3>

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

                <h3 className="mt-3 text-xl font-bold">
                  Task Management App
                </h3>

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

                <h3 className="mt-3 text-xl font-bold">
                  Dashboard Concept
                </h3>

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

      {/* Skills */}
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

      {/* Education & Experience */}
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
      {/* Certificates & Achievements */}
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

              <h3 className="text-xl font-bold">
                Certificates
              </h3>

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

              <h3 className="text-xl font-bold">
                Academic Achievements
              </h3>

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

              <h3 className="text-xl font-bold">
                Other Achievements
              </h3>

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

      {/* Content Creation */}
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

      {/* CV / Resume */}
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

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's <span className="text-purple-500">Connect.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Have a project idea, collaboration opportunity, or just want
              to talk about technology? I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            {/* Contact information */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Let's talk about something great.
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I'm open to learning opportunities, collaboration,
                meaningful projects, and connecting with people in tech.
              </p>

              <div className="mt-9 space-y-5">

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">Add email address</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                    🌐
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Social Platforms</p>
                    <p className="font-medium">Connect with me online</p>
                  </div>
                </div>

              </div>

              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="mb-4 text-sm font-semibold text-slate-300">
                  FIND ME ONLINE
                </p>

                <div className="flex flex-wrap gap-3">
                  {['GitHub', 'LinkedIn', 'Telegram', 'YouTube'].map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form preview */}
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Send Me a Message
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Have something in mind? The contact form will be connected
                securely when we set up the backend.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    disabled
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    disabled
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    disabled
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    disabled
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-purple-600/50 px-6 py-3.5 font-semibold text-white/70"
                >
                  Contact Form Coming Soon
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
<footer className="border-t border-white/10 bg-[#080d1b] px-6 py-10 text-gray-400">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
    <div>
      <a href="#home" className="text-2xl font-bold text-white">
        Amrudin<span className="text-purple-400">.</span>
      </a>
      <p className="mt-2 max-w-sm text-sm leading-6">
        Building software, exploring technology, and creating digital experiences.
      </p>
    </div>

    <div>
      <h3 className="mb-3 text-sm font-semibold text-white">Quick Links</h3>
      <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
        <a href="#home" className="transition hover:text-purple-400">Home</a>
        <a href="#about" className="transition hover:text-purple-400">About</a>
        <a href="#projects" className="transition hover:text-purple-400">Projects</a>
        <a href="#skills" className="transition hover:text-purple-400">Skills</a>
        <a href="#education" className="transition hover:text-purple-400">Education</a>
        <a href="#contact" className="transition hover:text-purple-400">Contact</a>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-xs">
    © {new Date().getFullYear()} Amrudin. All rights reserved.
  </div>
</footer>
    </main>

  )
}

export default App
