import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { scrollToId } from '../lib/smoothScroll'

const ease = [0.22, 1, 0.36, 1]

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease }}
          className="text-gradient whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function SplitText({ text, delay = 0, className }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.05, ease }}
          >
            {ch === ' ' ? ' ' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

const codeLines = [
  ['const', ' engineer', ' = {'],
  ['  name', ': ', "'이용호'", ','],
  ['  experience', ': ', "'20y 3m'", ','],
  ['  focus', ': [', "'Frontend'", ', ', "'Architecture'", '],'],
  ['  leads', ': ', "'Frontend Team'", ','],
  ['  motto', ': ', "'흐르는 물처럼'", ','],
  ['}'],
]

function CodeCard() {
  const color = (tok) => {
    if (tok.startsWith("'")) return 'text-accent-3'
    if (tok === 'const') return 'text-accent'
    if (/^\s+\w+$/.test(tok)) return 'text-accent-2'
    return 'text-zinc-500'
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 18 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, delay: 0.9, ease }}
      style={{ transformPerspective: 1200 }}
      className="relative w-full max-w-md rounded-2xl border border-line bg-ink-2/80 p-5 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">profile.js</span>
      </div>
      <pre className="overflow-x-auto font-mono text-[13px] leading-7">
        {codeLines.map((line, li) => (
          <motion.div
            key={li}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + li * 0.12, duration: 0.4 }}
          >
            <span className="mr-4 inline-block w-4 text-right text-zinc-700 select-none">{li + 1}</span>
            {line.map((tok, ti) => (
              <span key={ti} className={color(tok)}>
                {tok}
              </span>
            ))}
            {li === codeLines.length - 1 && (
              <motion.span
                className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </pre>
      <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-accent-2/30 blur-xl" />
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 md:px-8">
      {/* 배경 */}
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute top-[10%] left-[8%] h-[38vw] w-[38vw] animate-float rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[5%] h-[34vw] w-[34vw] animate-float rounded-full bg-cyan-500/20 blur-[120px] [animation-delay:-5s]" />
        <div className="absolute top-[40%] left-[45%] h-[22vw] w-[22vw] animate-float rounded-full bg-emerald-500/15 blur-[100px] [animation-delay:-9s]" />
        <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-400 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
            </span>
            새로운 기회에 열려 있습니다
          </motion.div>

          <h1 className="font-display leading-[0.95] font-bold tracking-tight text-white">
            <SplitText text={profile.nameEn} delay={0.4} className="block text-[13vw] sm:text-7xl lg:text-8xl" />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 font-display text-2xl font-medium text-zinc-300 sm:text-3xl md:text-4xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            <strong className="font-semibold text-white">{profile.tagline}</strong>
            <br />
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToId('experience')}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.03] hover:bg-accent-2"
            >
              경력 살펴보기
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              연락하기
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>
        </div>

        <div className="hidden justify-end lg:flex">
          <CodeCard />
        </div>
      </motion.div>

      <motion.button
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase md:flex"
        aria-label="아래로 스크롤"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent to-accent-2"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  )
}
