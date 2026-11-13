import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Accessibility, ArrowUpRight, Moon, Package, Palette, Puzzle, Sun } from 'lucide-react'
import { designSystem as ds } from '../data/resume'
import { GithubIcon, Reveal, SectionHeading, SpotlightCard, Tag } from './ui'

const icons = { palette: Palette, a11y: Accessibility, package: Package, puzzle: Puzzle }

const themes = [
  { value: 'light', label: '라이트', Icon: Sun, frame: 'bg-white' },
  { value: 'dark', label: '다크', Icon: Moon, frame: 'bg-[#0b1120]' },
]

function ThemeSwitch({ theme, onChange }) {
  return (
    <div role="radiogroup" aria-label="미리보기 테마" className="ml-auto flex shrink-0 gap-0.5 rounded-full border border-line bg-white/[0.03] p-0.5">
      {themes.map(({ value, label, Icon }) => (
        <button
          key={value}
          role="radio"
          aria-checked={theme === value}
          aria-label={`${label} 테마로 보기`}
          title={`${label} 테마`}
          onClick={() => onChange(value)}
          className={`relative rounded-full p-1.5 transition-colors ${theme === value ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}
        >
          {theme === value && (
            <motion.span
              layoutId="ds-theme-pill"
              className="absolute inset-0 -z-10 rounded-full bg-white/12"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          <Icon size={14} />
        </button>
      ))}
    </div>
  )
}

function Preview() {
  const [active, setActive] = useState(0)
  const [theme, setTheme] = useState('dark')
  const current = ds.components[active]
  const frame = themes.find((t) => t.value === theme).frame

  return (
    <SpotlightCard className="overflow-hidden">
      {/* 브라우저 창 상단 */}
      <div className="flex items-center gap-3 border-b border-line px-5 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="truncate rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-500">
          module-design-system.vercel.app
        </span>
        <ThemeSwitch theme={theme} onChange={setTheme} />
      </div>

      {/* 컴포넌트 선택 */}
      <div role="tablist" aria-label="컴포넌트 미리보기" className="flex gap-1.5 overflow-x-auto px-5 pt-4 [scrollbar-width:none]">
        {ds.components.map((c, i) => (
          <button
            key={c.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative shrink-0 rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
              i === active ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
            }`}
          >
            {i === active && (
              <motion.span
                layoutId="ds-preview-pill"
                className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {c.name}
          </button>
        ))}
      </div>

      {/* 캡처 이미지 */}
      <div
        role="tabpanel"
        aria-label={current.name}
        className={`relative mx-5 mt-4 aspect-[4/3] overflow-hidden rounded-2xl border border-line transition-colors duration-500 ${frame}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={`${theme}-${current.name}`}
            src={`/projects/design-system/${theme}/${current.file}`}
            alt={`${current.name} 컴포넌트 화면 (${theme === 'dark' ? '다크' : '라이트'} 테마)`}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
        </AnimatePresence>
      </div>
      <p className="px-5 pt-3 pb-5 text-sm text-zinc-400">
        <span className="font-semibold text-zinc-200">{current.name}</span> · {current.desc}
      </p>
    </SpotlightCard>
  )
}

export default function DesignSystem() {
  return (
    <section id="design-system" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Design System"
          title={
            <>
              직접 만든 <span className="text-gradient">디자인 시스템</span>
            </>
          }
          desc="팀이 같은 UI를 반복해서 만들지 않도록, 어떤 React 프로젝트에도 붙일 수 있는 컴포넌트 라이브러리를 설계했습니다."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="min-w-0 md:col-span-5">
            <Reveal>
              <span className="font-mono text-xs tracking-widest text-accent uppercase">{ds.name}</span>
              <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">{ds.summary}</p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {ds.points.map((p, i) => {
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
              {ds.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <a
                href={ds.storybook}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-2"
              >
                Storybook에서 보기
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={ds.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                <GithubIcon size={16} /> 소스 코드
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 md:col-span-7">
            <Preview />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
