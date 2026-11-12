import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Comp>
  )
}

export function SectionHeading({ index, eyebrow, title, desc }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent uppercase">
        <span className="text-zinc-500">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        {eyebrow}
      </Reveal>
      <Reveal delay={0.08} as="h2" className="font-display text-4xl leading-tight font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </Reveal>
      {desc && (
        <Reveal delay={0.16} as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {desc}
        </Reveal>
      )}
    </div>
  )
}

export function SpotlightCard({ children, className = '', ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div
      onMouseMove={onMove}
      className={`spotlight rounded-3xl border border-line bg-white/[0.02] backdrop-blur-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}


export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-400">
      {children}
    </span>
  )
}
