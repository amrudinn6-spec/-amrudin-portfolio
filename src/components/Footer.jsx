
function Footer() {
  return (
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
          <h3 className="mb-3 text-sm font-semibold text-white">
            Quick Links
          </h3>

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
  )
}

export default Footer
