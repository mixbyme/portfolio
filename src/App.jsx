import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { initSmoothScroll } from './lib/smoothScroll'
import { CursorGlow, Nav, ScrollProgress } from './components/Chrome'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  )
}
