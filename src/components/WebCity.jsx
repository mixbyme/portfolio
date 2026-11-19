import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Building2, Car, CloudSun, Hammer } from 'lucide-react'
import { webCity as wc } from '../data/resume'
import { Reveal, SectionHeading, SpotlightCard, Tag } from './ui'

const icons = { hammer: Hammer, building: Building2, car: Car, season: CloudSun }

function Gallery() {
  const [active, setActive] = useState(0)
  const current = wc.shots[active]

  return (
    <SpotlightCard className="overflow-hidden">
      {/* 브라우저 창 상단 */}
      <div className="flex items-center gap-3 border-b border-line px-5 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <a
          href={wc.play}
          target="_blank"
          rel="noreferrer"
          className="truncate rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-500 transition hover:text-zinc-200"
        >
          mixbyme-webcity.vercel.app
        </a>
      </div>

      {/* 장면 선택 */}
      <div role="tablist" aria-label="WebCity 장면" className="flex gap-1.5 overflow-x-auto px-5 pt-4 [scrollbar-width:none]">
        {wc.shots.map((s, i) => (
          <button
            key={s.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-xs transition-colors ${i === active ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}
          >
            {i === active && (
              <motion.span
                layoutId="wc-shot-pill"
                className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {s.name}
          </button>
        ))}
      </div>

      {/* 캡처 이미지 */}
      <div role="tabpanel" aria-label={current.name} className="relative mx-5 mt-4 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current.file}
            src={`/projects/webcity/${current.file}`}
            alt={`WebCity ${current.name} 장면: ${current.desc}`}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <p className="px-5 pt-3 pb-5 text-sm text-zinc-400">
        <span className="font-semibold text-zinc-200">{current.name}</span> · {current.desc}
      </p>
    </SpotlightCard>
  )
}

export default function WebCity() {
  return (
    <section id="webcity" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Side Project"
          title={
            <>
              브라우저에서 자라는 <span className="text-gradient">3D 도시</span>
            </>
          }
          desc="Three.js로 직접 만든 도시 건설 게임입니다. 지금 바로 브라우저에서 플레이해 볼 수 있습니다."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <Reveal delay={0.1} className="min-w-0 md:order-2 md:col-span-7">
            <Gallery />
          </Reveal>

          <div className="min-w-0 md:order-1 md:col-span-5">
            <Reveal>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">{wc.name}</span>
              <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">{wc.summary}</p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {wc.points.map((p, i) => {
                const Icon = icons[p.icon]
                return (
                  <Reveal as="li" key={p.title} delay={0.06 * i} className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent-2">
                      <Icon size={17} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {wc.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-8">
              <a
                href={wc.play}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-2"
              >
                지금 플레이하기
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
