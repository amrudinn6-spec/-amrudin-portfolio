
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Content from './sections/Content'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Content />
      <Resume />
      <Contact />

      <Footer />
    </main>
  )
}

export default App
