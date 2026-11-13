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

export function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}
