import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowUp, Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data/resume'
import { GithubIcon, Reveal } from './ui'
import { scrollToId } from '../lib/smoothScroll'


function MagneticButton({ children, className, ...rest }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.a ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className={className} {...rest}>
      {children}
    </motion.a>
  )
}

const YEAR = new Date().getFullYear()

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 pt-28 pb-10 md:px-8 md:pt-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgb(99_102_241/0.25),transparent_65%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_top,black,transparent_70%)]" />

      <div className="mx-auto max-w-6xl text-center">
        <Reveal className="mb-6 font-mono text-xs tracking-[0.25em] text-accent uppercase">05 — Contact</Reveal>
        <Reveal delay={0.08} as="h2" className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-8xl">
          함께 만들 <br className="sm:hidden" />
          <span className="text-gradient">다음 서비스</span>
          <br />
          이야기해요
        </Reveal>
        <Reveal delay={0.16} as="p" className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          누구나 쉽고 편리하게 쓰는 서비스를 만드는 팀이라면, 그동안 쌓아 온 경험을 온전히 쏟고 싶습니다.
        </Reveal>

        <Reveal delay={0.24} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink shadow-[0_0_40px_rgb(129_140_248/0.35)] transition-colors hover:bg-accent-2"
          >
            <Mail size={18} />
            {profile.email}
          </MagneticButton>
          <div className="flex gap-3">
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-4 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
              aria-label="이메일 주소 복사"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'ok' : 'copy'}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? <Check size={16} className="text-accent-3" /> : <Copy size={16} />}
                </motion.span>
              </AnimatePresence>
              {copied ? '복사됨' : '복사'}
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-4 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-32 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-zinc-500 sm:flex-row">
        <p>
          © {YEAR} {profile.nameKo} · {profile.nameEn}
        </p>
        <p className="font-mono">Built with React · Vite · Tailwind CSS · Motion</p>
        <button onClick={() => scrollToId('top')} className="group inline-flex items-center gap-1.5 transition hover:text-white">
          맨 위로
          <ArrowUp size={14} className="transition group-hover:-translate-y-0.5" />
        </button>
      </footer>
    </section>
  )
}
