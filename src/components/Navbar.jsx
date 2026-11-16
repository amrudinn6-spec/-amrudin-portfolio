
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#030617]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-bold text-white">
          Amrudin<span className="text-purple-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 md:block"
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
        <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 transition hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
