import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from 'motion/react'
import { Layers, Users, MessagesSquare, Network } from 'lucide-react'
import { competencies, philosophy, stats } from '../data/resume'
import { Reveal, SectionHeading, SpotlightCard } from './ui'

const icons = { Layers, Users, MessagesSquare, Network }

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('ko-KR')
      },
    })
    return () => controls.stop()
  }, [inView, value])
  return (
    <span className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
      <span ref={ref}>0</span>
      <span className="text-gradient ml-1 text-2xl md:text-3xl">{suffix}</span>
    </span>
  )
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

function ScrollQuote({ text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className="font-display text-2xl leading-snug font-medium text-white md:text-4xl md:leading-snug">
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              코드 너머의 <span className="text-gradient">서비스와 사람</span>을 봅니다
            </>
          }
          desc="20년 동안 이커머스, 결제, 보안, 검색, 국방, 덴탈 테크까지 다양한 도메인에서 서비스를 만들었습니다. 지금은 Frontend 팀을 이끌며 기술과 사람 사이의 다리를 놓는 일을 합니다."
        />

        {/* 숫자로 보는 경력 */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink p-6 md:p-8">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm text-zinc-400">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* 핵심 역량 */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((c, i) => {
            const Icon = icons[c.icon]
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <SpotlightCard className="group h-full p-7 transition duration-500 hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-2xl border border-line bg-gradient-to-br from-accent/20 to-accent-2/10 p-3 text-accent-2 transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{c.desc}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>

        {/* 일하는 방식 */}
        <div className="mt-28 space-y-10 border-l border-line pl-6 md:mt-36 md:pl-10">
          {philosophy.map((p) => (
            <ScrollQuote key={p} text={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
