import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { highlights } from '../data/resume'
import { Reveal, SectionHeading, Tag } from './ui'
import { scrollToId } from '../lib/smoothScroll'

const gradients = [
  'from-indigo-500/30 via-violet-500/10 to-transparent',
  'from-emerald-500/25 via-teal-500/10 to-transparent',
  'from-orange-500/25 via-rose-500/10 to-transparent',
  'from-cyan-500/25 via-sky-500/10 to-transparent',
]

function TiltCard({ item, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(mx, (v) => `${v * 100}%`)
  const glowY = useTransform(my, (v) => `${v * 100}%`)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => scrollToId('experience')}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative flex h-full min-h-[300px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-line bg-ink-2 p-7 md:p-9"
    >
      <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-60 transition duration-700 group-hover:opacity-100`} />
      <motion.div
        className="pointer-events-none absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ left: glowX, top: glowY }}
      />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">{item.company}</span>
        <span className="rounded-full border border-white/10 p-2 text-zinc-400 transition duration-500 group-hover:rotate-45 group-hover:border-white/40 group-hover:text-white">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="relative mt-auto pt-16">
        <span className="font-display text-7xl font-bold text-white/5 transition duration-700 group-hover:text-white/10">
          0{index + 1}
        </span>
        <h3 className="-mt-6 font-display text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300/80 md:text-base">{item.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Highlights() {
  return (
    <section id="highlights" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Highlights"
          title={
            <>
              임팩트를 만든 <span className="text-gradient">대표 프로젝트</span>
            </>
          }
          desc="규모가 크거나, 기술적으로 깊거나, 사용자에게 직접 닿았던 일들입니다."
        />
        <div className="grid gap-5 md:grid-cols-5">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.1} className={h.size === 'lg' ? 'md:col-span-3' : 'md:col-span-2'}>
              <TiltCard item={h} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
