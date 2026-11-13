import { motion } from 'motion/react'
import { Award, BookOpen, GraduationCap, Languages } from 'lucide-react'
import { certifications, education, languages, skillGroups, trainings } from '../data/resume'
import { Reveal, SectionHeading, SpotlightCard } from './ui'

function Marquee({ items, reverse = false, duration = '45s' }) {
  const doubled = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': duration, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="font-display text-3xl font-semibold whitespace-nowrap text-white/15 transition-colors duration-300 hover:text-white md:text-5xl"
          >
            {s}
            <span className="ml-4 text-accent/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function CardTitle({ icon: Icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="rounded-xl border border-line bg-white/[0.03] p-2 text-accent-2">
        <Icon size={18} />
      </span>
      <h3 className="font-display text-lg font-semibold text-white">{children}</h3>
    </div>
  )
}

export default function Skills() {
  const all = skillGroups.flatMap((g) => g.items)
  const half = Math.ceil(all.length / 2)

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title={
            <>
              손에 익은 <span className="text-gradient">기술들</span>
            </>
          }
          desc="Frontend에서 출발해 Backend, 검색, 데이터까지. 문제에 맞는 도구를 고릅니다."
        />
      </div>

      <div className="space-y-4">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse duration="50s" />
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 0.08}>
              <SpotlightCard className="h-full p-6">
                <h3 className="mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">{g.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + si * 0.04, type: 'spring', stiffness: 260, damping: 18 }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-accent/50 hover:bg-accent/10"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* 학력 · 자격 · 어학 · 교육 */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <SpotlightCard className="h-full p-6">
              <CardTitle icon={GraduationCap}>Education</CardTitle>
              {education.map((e) => (
                <div key={e.name}>
                  <p className="font-mono text-xs text-zinc-500">{e.period}</p>
                  <p className="mt-1 font-semibold text-white">{e.name}</p>
                  <p className="text-sm text-zinc-400">{e.detail}</p>
                </div>
              ))}
              <div className="mt-8">
                <CardTitle icon={Languages}>Languages</CardTitle>
                <ul className="space-y-4">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-white">{l.name}</span>
                        <span className="text-zinc-500">{l.level}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(l.score / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.08}>
            <SpotlightCard className="h-full p-6">
              <CardTitle icon={Award}>Certifications</CardTitle>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-start justify-between gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-white">{c.name}</p>
                      <p className="text-xs text-zinc-500">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-zinc-500">{c.date}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.16}>
            <SpotlightCard className="h-full p-6">
              <CardTitle icon={BookOpen}>Training</CardTitle>
              <ul className="space-y-4">
                {trainings.map((t) => (
                  <li key={t.name} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="font-mono text-xs text-zinc-500">{t.period}</p>
                    <p className="mt-1 text-sm font-medium text-white">{t.name}</p>
                    {t.org && <p className="text-xs text-zinc-500">{t.org}</p>}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
