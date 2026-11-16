
function Contact() {
  return (
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
  )
}

export default Contact
