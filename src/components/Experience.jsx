import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ChevronDown, Users, CalendarDays } from 'lucide-react'
import { experiences } from '../data/resume'
import { Reveal, SectionHeading, Tag } from './ui'

const ease = [0.22, 1, 0.36, 1]

function ExperienceItem({ exp, index, open, onToggle }) {
  return (
    <Reveal className="relative pl-10 md:pl-0">
      <div className="md:grid md:grid-cols-[200px_1fr] md:gap-12">
        {/* 왼쪽: 기간 */}
        <div className="mb-3 md:mb-0 md:pt-7 md:text-right">
          <p className="font-mono text-sm text-zinc-300">{exp.period}</p>
          <p className="mt-1 font-mono text-xs text-zinc-500">{exp.duration}</p>
        </div>

        {/* 타임라인 점 */}
        <span
          className={`absolute top-1.5 left-[3px] z-10 h-4 w-4 rounded-full border-2 transition-all duration-500 md:top-8 md:left-[218px] ${
            open ? 'scale-125 border-accent-2 bg-accent-2 shadow-[0_0_20px_4px_rgb(34_211_238/0.5)]' : 'border-zinc-600 bg-ink'
          }`}
        />

        {/* 오른쪽: 카드 */}
        <div
          className={`rounded-3xl border transition-colors duration-500 ${
            open ? 'border-white/15 bg-white/[0.04]' : 'border-line bg-white/[0.015] hover:border-white/12 hover:bg-white/[0.03]'
          }`}
        >
          <button onClick={onToggle} className="flex w-full items-start justify-between gap-4 p-6 text-left md:p-7" aria-expanded={open}>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{exp.company}</h3>
                <span className="text-sm text-accent-2">{exp.role}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{exp.about}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{exp.summary}</p>
            </div>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.4, ease }}
              className="mt-1 shrink-0 rounded-full border border-line p-2 text-zinc-400"
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="overflow-hidden"
              >
                <div className="space-y-3 px-6 pb-6 md:px-7 md:pb-7">
                  {exp.projects.map((p, pi) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + pi * 0.08, duration: 0.5, ease }}
                      className="rounded-2xl border border-line bg-ink/60 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold text-white">{p.name}</h4>
                        <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays size={12} /> {p.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Users size={12} /> {p.team}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <span className="sr-only">{index + 1}번째 경력</span>
    </Reveal>
  )
}

export default function Experience() {
  const [openSet, setOpenSet] = useState(() => new Set([0]))
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const allOpen = openSet.size === experiences.length

  return (
    <section id="experience" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={
            <>
              20년의 <span className="text-gradient">여정</span>
            </>
          }
          desc="회사를 누르면 참여한 프로젝트와 사용한 기술을 볼 수 있습니다."
        />

        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setOpenSet(allOpen ? new Set() : new Set(experiences.map((_, i) => i)))}
            className="rounded-full border border-line px-4 py-2 font-mono text-xs text-zinc-400 transition hover:border-white/30 hover:text-white"
          >
            {allOpen ? '모두 접기' : '모두 펼치기'}
          </button>
        </div>

        <div ref={lineRef} className="relative space-y-6">
          {/* 타임라인 선 */}
          <div className="absolute top-2 bottom-2 left-[10px] w-px bg-line md:left-[225px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[10px] w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-[225px]"
          />
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} index={i} open={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
