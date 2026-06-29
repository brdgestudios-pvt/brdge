import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Review', href: '#review' },
]

const problems = [
  'Strong projects hidden inside Instagram grids or PDFs',
  'Weak mobile experience reducing trust',
  'No clear enquiry path',
  'Portfolio pages that do not tell the project story',
  'Brand perception lower than the quality of the work',
]

const pillars = [
  {
    title: 'Editorial portfolio structure',
    copy: 'Projects are sequenced with the clarity and pacing of a considered publication.',
  },
  {
    title: 'High-trust brand presentation',
    copy: 'Every detail works to reflect your standards before the first conversation.',
  },
  {
    title: 'Conversion-focused enquiry flow',
    copy: 'The right clients move naturally from attention to a serious project enquiry.',
  },
]

const services = [
  {
    title: 'Portfolio Website',
    copy: 'For studios needing a refined online presence.',
  },
  {
    title: 'Campaign Landing Page',
    copy: 'For launches, ads, and targeted project enquiries.',
  },
  {
    title: 'Monthly Website Partner',
    copy: 'For ongoing updates, portfolio uploads, SEO improvements, and landing pages.',
  },
]

const workflowSteps = [
  {
    title: 'Review',
    copy: 'We audit perception, mobile experience, portfolio structure, and enquiry friction.',
    output: 'Clarity report',
  },
  {
    title: 'Structure',
    copy: 'We shape the sitemap and project narrative around how clients assess your studio.',
    output: 'Content architecture',
  },
  {
    title: 'Direction',
    copy: 'Typography, motion, image rhythm, and interface rules become one visual system.',
    output: 'Art direction',
  },
  {
    title: 'Prototype',
    copy: 'Key pages are designed responsively so the complete experience can be tested early.',
    output: 'Responsive prototype',
  },
  {
    title: 'Build',
    copy: 'We develop the system with precise interactions, performance, SEO, and accessibility.',
    output: 'Production website',
  },
  {
    title: 'Refine',
    copy: 'We test, tune, launch, and leave your team with a portfolio that can keep evolving.',
    output: 'Launch + handoff',
  },
]

const qualityPrinciples = [
  ['Project storytelling', 'Every case study has pace, hierarchy, and enough context to make the work memorable.'],
  ['Responsive composition', 'Mobile is designed as deliberately as desktop, never treated as a collapsed afterthought.'],
  ['Performance + search', 'Clean builds, focused metadata, and disciplined assets protect speed and discoverability.'],
  ['Enquiry architecture', 'Each page creates a natural route from interest to a qualified project conversation.'],
]

const projects = [
  {
    title: 'Architecture Studio Website',
    image: '/images/architecture.webp',
    alt: 'Architecture portfolio website preview featuring a restrained limestone courtyard',
    meta: [
      ['Client type', 'Architecture studio'],
      ['Problem', 'Strong work held back by an outdated, fragmented website.'],
      ['Design direction', 'Minimal, architectural, and led by project storytelling.'],
      ['Expected outcome', 'Greater credibility and better-aligned enquiries.'],
    ],
  },
  {
    title: 'Interior Design Portfolio',
    image: '/images/interior.webp',
    alt: 'Interior design portfolio website preview featuring a warm sculptural living space',
    meta: [
      ['Client type', 'Interior design studio'],
      ['Problem', 'A portfolio without enough hierarchy or visual rhythm.'],
      ['Design direction', 'Warm, tactile, and immersive with curated project flows.'],
      ['Expected outcome', 'Stronger engagement and higher-value project conversations.'],
    ],
  },
  {
    title: 'Luxury Product / Design Brand',
    image: '/images/product.webp',
    alt: 'Luxury product website preview featuring a sculptural stone object',
    meta: [
      ['Client type', 'Design-led product brand'],
      ['Problem', 'Digital presentation did not match the quality of the craft.'],
      ['Design direction', 'Understated, image-led, and editorial.'],
      ['Expected outcome', 'Higher perceived value and stronger product interest.'],
    ],
  },
]

const ease = [0.22, 1, 0.36, 1] as const

const surfaceColors = {
  ivory: '#F4F1EC',
  parchment: '#E4DDD2',
  mist: '#E5E8E2',
  sand: '#D5CBBB',
  chalk: '#FAF8F3',
  stone: '#CBC4B8',
} as const

function Logo({
  compact = false,
  inverse = false,
  size = 'nav',
  durationScale = 1,
  play = true,
}: {
  compact?: boolean
  inverse?: boolean
  size?: 'nav' | 'loader'
  durationScale?: number
  play?: boolean
}) {
  const reduceMotion = useReducedMotion()

  if (compact) {
    return (
      <svg className={`h-12 w-20 ${inverse ? 'text-ivory' : 'text-charcoal'}`} viewBox="0 0 92 52" role="img" aria-label="brdge monogram">
        <path d="M14 7v36M14 29c0-9 5-14 13-14s13 5 13 14-5 14-13 14-13-5-13-14Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M78 7v36M78 29c0-9-5-14-13-14s-13 5-13 14 5 14 13 14 13-5 13-14Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M30 29h32" fill="none" stroke="#8A8267" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <motion.svg
      className={`group block overflow-visible ${size === 'loader' ? 'h-auto w-[min(68vw,22rem)]' : 'h-12 w-[8.8rem]'} ${inverse ? 'text-ivory' : 'text-charcoal'}`}
      viewBox="0 0 176 58"
      role="img"
      aria-label="brdge"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.8 * durationScale, ease }}
      whileHover={reduceMotion ? undefined : 'hover'}
    >
      <motion.text
        x="1"
        y="46"
        fill="currentColor"
        fontFamily="Manrope, sans-serif"
        fontSize="48"
        fontWeight="300"
        letterSpacing="-5"
        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
        animate={play ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
        transition={{ duration: 0.65 * durationScale, ease }}
      >br</motion.text>
      <motion.g
        initial={reduceMotion ? false : { opacity: 0, x: 8 }}
        animate={play ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
        transition={{ duration: 0.65 * durationScale, delay: 0.08 * durationScale, ease }}
      >
        <text x="76" y="46" fill="currentColor" fontFamily="Manrope, sans-serif" fontSize="48" fontWeight="300" letterSpacing="-5">dge</text>
      </motion.g>
      <motion.g variants={{ hover: { scaleX: 1.1 } }} style={{ transformOrigin: '58px 32px' }} transition={{ duration: 0.35, ease }}>
        <motion.path
          d="M48 34 C54 34 52 27 60 27 H83"
          fill="none"
          stroke="#8A8267"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={play ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.85 * durationScale, delay: 0.24 * durationScale, ease }}
        />
        <motion.circle
          cx="83"
          cy="27"
          r="2.2"
          fill="#8A8267"
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          animate={play ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.35 * durationScale, delay: 0.9 * durationScale, ease }}
        />
      </motion.g>
    </motion.svg>
  )
}

function BrandLoader() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-ivory"
      role="status"
      aria-label="Loading brdge"
      initial={{ opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: '-3%' }}
      transition={{ duration: reduceMotion ? 0.1 : 0.65, ease }}
    >
      <div className="flex flex-col items-center gap-7">
        <Logo size="loader" />
        <motion.span
          className="h-px w-24 origin-left bg-bronze"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.42, ease }}
          aria-hidden="true"
        />
        <motion.p
          className="text-[0.58rem] uppercase tracking-[0.28em] text-charcoal/50"
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease }}
        >Digital studio for considered spaces</motion.p>
      </div>
    </motion.div>
  )
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function ImageReveal({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`image-reveal group relative overflow-hidden ${className}`}
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(8% 0 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1.05, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={reduceMotion ? false : { scale: 1.035 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
      />
      <motion.span
        className="absolute inset-y-0 left-0 w-px bg-bronze"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25, ease }}
      />
    </motion.div>
  )
}

function AuditCanvas() {
  const reduceMotion = useReducedMotion()
  const rows = ['Portfolio hierarchy', 'Mobile confidence', 'Enquiry clarity', 'Brand perception']

  return (
    <motion.div
      className="relative min-h-[34rem] overflow-hidden border border-charcoal/15 bg-charcoal p-6 text-ivory md:p-9"
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(8% 0 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease }}
    >
      <div className="flex items-center justify-between border-b border-white/20 pb-5 text-[0.58rem] uppercase tracking-[0.22em] text-white/45">
        <span>Website perception audit</span><span>Before / after</span>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="border border-white/15 p-4">
          <p className="text-[0.58rem] uppercase tracking-[0.2em] text-white/35">Current state</p>
          <div className="mt-6 grid grid-cols-3 gap-2 opacity-45">
            {[1, 2, 3, 4, 5, 6].map((item) => <span key={item} className={`block bg-white/20 ${item === 1 || item === 5 ? 'col-span-2 h-20' : 'h-20'}`} />)}
          </div>
        </div>
        <motion.div
          className="h-px w-full origin-left bg-bronze md:h-24 md:w-px md:origin-top"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          aria-hidden="true"
        />
        <div className="border border-bronze/45 bg-ivory p-4 text-charcoal">
          <p className="text-[0.58rem] uppercase tracking-[0.2em] text-bronze">Refined system</p>
          <div className="mt-6 grid grid-cols-4 gap-2">
            <span className="col-span-4 h-28 bg-taupe/55" />
            {[1, 2, 3, 4].map((item) => <motion.span key={item} className="h-14 bg-stone" initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 + item * 0.08, duration: 0.5, ease }} />)}
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {rows.map((row, index) => (
          <div key={row} className="border-t border-white/15 pt-3">
            <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.16em] text-white/55"><span>{row}</span><span className="text-bronze">Resolved</span></div>
            <motion.span className="mt-3 block h-px origin-left bg-bronze" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 + index * 0.1, ease }} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceVisual({ index }: { index: number }) {
  const reduceMotion = useReducedMotion()
  const delay = (item: number) => 0.12 + item * 0.08

  return (
    <div className="relative h-36 overflow-hidden border border-charcoal/15 bg-ivory/55 p-4 md:h-44">
      <div className="mb-3 flex gap-1" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-charcoal/25" /><span className="h-1.5 w-1.5 rounded-full bg-charcoal/15" /><span className="h-1.5 w-1.5 rounded-full bg-bronze" /></div>
      {index === 0 ? (
        <div className="grid h-[calc(100%-1rem)] grid-cols-4 gap-1.5">
          <motion.span className="col-span-3 row-span-2 bg-taupe/65" initial={reduceMotion ? false : { scale: 0.94, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} />
          {[1, 2, 3, 4, 5, 6].map((item) => <motion.span key={item} className="bg-stone" initial={reduceMotion ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: delay(item), ease }} />)}
        </div>
      ) : index === 1 ? (
        <div className="grid h-[calc(100%-1rem)] grid-cols-[1.2fr_0.8fr] gap-3">
          <div className="flex flex-col justify-center gap-2 border-r border-stone pr-3">
            {[75, 95, 58].map((width, item) => <motion.span key={width} className="h-1.5 bg-charcoal/55" style={{ width: `${width}%` }} initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: delay(item), ease }} />)}
            <motion.span className="mt-3 h-7 w-24 bg-charcoal" animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
          <motion.span className="bg-taupe/65" initial={reduceMotion ? false : { clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0 0 0 0)' }} viewport={{ once: true }} transition={{ duration: 0.9, ease }} />
        </div>
      ) : (
        <div className="relative flex h-[calc(100%-1rem)] items-center justify-between gap-2">
          <motion.span className="absolute left-4 right-4 top-1/2 h-px origin-left bg-bronze" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }} />
          {[1, 2, 3, 4].map((item) => <motion.div key={item} className="relative z-10 flex h-16 flex-1 items-center justify-center border border-charcoal/15 bg-ivory text-[0.55rem] tracking-[0.15em] text-charcoal/45" initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: item % 2 ? -6 : 6 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: delay(item), ease }}>0{item}</motion.div>)}
        </div>
      )}
    </div>
  )
}

function ProjectPreview({ src, alt, index }: { src: string; alt: string; index: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.figure
      className="group relative min-h-[25rem] overflow-hidden border border-charcoal/15 bg-charcoal p-3 lg:col-span-6"
      initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(6% 0 0 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, ease }}
    >
      <div className="flex h-8 items-center justify-between bg-ivory px-3 text-[0.5rem] uppercase tracking-[0.2em] text-charcoal/45"><span>Portfolio / 0{index + 1}</span><span>Desktop</span></div>
      <div className="relative h-[calc(100%-2rem)] overflow-hidden">
        <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]" loading="lazy" />
        <div className="absolute inset-y-0 left-0 w-14 border-r border-white/20 bg-charcoal/85 p-3">
          {[1, 2, 3, 4].map((item) => <span key={item} className="mb-3 block h-px bg-white/50" style={{ width: `${100 - item * 13}%` }} />)}
        </div>
        <motion.div className="absolute bottom-4 right-4 h-36 w-20 border-2 border-charcoal bg-ivory p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]" initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: 2 }} whileInView={{ opacity: 1, y: 0, rotate: index - 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease }}>
          <img src={src} alt="" className="h-20 w-full object-cover" loading="lazy" />
          <span className="mt-2 block h-px w-full bg-charcoal/40" /><span className="mt-2 block h-px w-2/3 bg-charcoal/25" />
        </motion.div>
      </div>
    </motion.figure>
  )
}

function ReviewCanvas() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="flex min-h-[28rem] items-center justify-center p-8 lg:p-14">
      <motion.div className="w-full max-w-xl border border-charcoal/20 bg-ivory p-6" initial={reduceMotion ? false : { opacity: 0, rotate: -1.5, y: 25 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
        <div className="flex items-center justify-between border-b border-stone pb-5"><span className="text-[0.6rem] uppercase tracking-[0.2em]">Website review</span><span className="h-2 w-2 rounded-full bg-bronze" /></div>
        {['Visual hierarchy', 'Mobile experience', 'Portfolio structure', 'Enquiry flow'].map((label, index) => (
          <div key={label} className="grid grid-cols-[1fr_3rem] items-center gap-4 border-b border-stone py-5">
            <div><p className="text-xs text-charcoal/60">{label}</p><motion.span className="mt-3 block h-1 origin-left bg-bronze" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 0.62 + index * 0.1 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: index * 0.12, ease }} /></div>
            <span className="text-right text-[0.6rem] uppercase tracking-[0.14em] text-charcoal/40">0{index + 1}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function WorkflowDiagram() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mt-16">
      <motion.div
        className="absolute left-[8.33%] right-[8.33%] top-[1.12rem] hidden h-px origin-left bg-bronze/55 md:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 1.5, ease }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-4 left-[1.12rem] top-4 w-px origin-top bg-bronze/55 md:hidden"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        aria-hidden="true"
      />
      <ol className="grid gap-0 md:grid-cols-3 xl:grid-cols-6">
        {workflowSteps.map((step, index) => (
          <motion.li
            key={step.title}
            className="relative grid min-h-52 grid-cols-[2.25rem_1fr] gap-5 border-b border-stone py-7 md:block md:min-h-[20rem] md:border-b-0 md:border-l md:px-5 md:pt-0 first:md:border-l-0 first:md:pl-0 last:md:pr-0"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, delay: index * 0.09, ease }}
          >
            <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-bronze bg-ivory text-[0.58rem] font-medium tracking-[0.14em] text-charcoal md:mx-auto md:mb-10">
              {String(index + 1).padStart(2, '0')}
              <motion.span
                className="absolute inset-[-5px] rounded-full border border-bronze/30"
                animate={reduceMotion ? undefined : { scale: [1, 1.22, 1], opacity: [0, 0.65, 0] }}
                transition={{ duration: 3.2, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
            </div>
            <div className="md:pt-0">
              <p className="mb-4 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-bronze">Phase {String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-2xl font-light tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-charcoal/60">{step.copy}</p>
              <p className="mt-7 border-t border-stone pt-3 text-[0.6rem] uppercase tracking-[0.18em] text-charcoal/45">{step.output}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

function SplitHeadline() {
  const reduceMotion = useReducedMotion()
  const words = 'Premium portfolio websites for architects and interior designers.'.split(' ')
  return (
    <motion.h1
      className="hero-title max-w-[15ch] font-display text-[clamp(2.65rem,4.1vw,4.85rem)] font-light leading-[1.02] tracking-[-0.055em]"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } } }}
    >
      {words.map((word) => (
        <span key={word} className="-mb-[0.08em] mr-[0.19em] inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: reduceMotion ? {} : { y: '102%' }, visible: { y: 0 } }}
            transition={{ duration: 0.68, ease }}
          >{word}</motion.span>
        </span>
      ))}
    </motion.h1>
  )
}

function TextLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return (
    <a href={href} className={`group inline-flex min-h-11 items-center gap-3 text-sm tracking-wide outline-none ${inverse ? 'text-ivory' : 'text-charcoal'} focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-ivory`}>
      <span>{children}</span>
      <span className={`relative block h-px w-12 overflow-hidden ${inverse ? 'bg-white/30' : 'bg-stone'}`}>
        <span className="absolute inset-0 origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [activeSurface, setActiveSurface] = useState<keyof typeof surfaceColors>('ivory')
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.25 })
  const heroImageY = useTransform(scrollYProgress, [0, 0.16], [0, 18])
  const heroImageScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.018])

  const handleNavClick = () => setMenuOpen(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowLoader(false), reduceMotion ? 100 : 1650)
    return () => window.clearTimeout(timeout)
  }, [reduceMotion])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-surface]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const surface = visible?.target.getAttribute('data-surface') as keyof typeof surfaceColors | null
        if (surface && surface in surfaceColors) setActiveSurface(surface)
      },
      { rootMargin: '-20% 0px -20% 0px', threshold: [0, 0.2, 0.45, 0.7] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="min-h-screen overflow-x-clip text-charcoal lg:pl-[156px]"
      animate={{ backgroundColor: surfaceColors[activeSurface] }}
      transition={{ duration: reduceMotion ? 0.01 : 1.15, ease }}
    >
      <AnimatePresence>{showLoader ? <BrandLoader /> : null}</AnimatePresence>
      <a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-20 bg-charcoal px-4 py-3 text-sm text-ivory transition-transform focus:translate-y-0">Skip to content</a>
      <motion.div className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-bronze lg:hidden" style={{ scaleX: progress }} />

      <aside className="fixed bottom-0 left-0 top-0 z-[80] hidden w-[156px] flex-col border-r border-charcoal/15 transition-[background-color] duration-1000 ease-out lg:flex" style={{ backgroundColor: surfaceColors[activeSurface] }}>
        <motion.div className="absolute right-[-1px] top-0 h-full w-[2px] origin-top bg-bronze" style={{ scaleY: progress }} />
        <a href="#main" aria-label="brdge home" className="flex h-32 items-center justify-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bronze">
          <Logo durationScale={2} play={!showLoader} />
        </a>
        <nav aria-label="Primary navigation" className="flex flex-1 flex-col items-center justify-center gap-8 py-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="vertical-nav-link"
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.18 + index * 0.08, ease }}
            >{item.label}</motion.a>
          ))}
        </nav>
        <a href="#review" className="vertical-rail-cta"><span>Request</span><span>Review</span></a>
      </aside>

      <header className="sticky top-0 z-50 border-b border-stone/80 backdrop-blur-sm transition-[background-color] duration-1000 ease-out lg:hidden" style={{ backgroundColor: surfaceColors[activeSurface] }}>
        <div className="page-grid flex h-[82px] items-center justify-between">
          <a href="#main" aria-label="brdge home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"><Logo durationScale={2} play={!showLoader} /></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-9 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link"
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 + index * 0.05, ease }}
              >{item.label}</motion.a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#review" className="button-outline">Request Website Review</a>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
          </button>
        </div>
        {menuOpen ? (
          <motion.nav
            aria-label="Mobile navigation"
            className="absolute left-0 top-full w-full border-b border-stone bg-ivory px-6 py-6 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={handleNavClick} className="border-b border-stone py-4 font-display text-3xl">{item.label}</a>
              ))}
              <a href="#review" onClick={handleNavClick} className="button-solid mt-6 justify-center">Request Website Review</a>
            </div>
          </motion.nav>
        ) : null}
      </header>

      <main id="main">
        <section data-surface="ivory" className="page-grid grid min-h-[calc(100svh-82px)] grid-cols-1 border-b border-stone lg:min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col justify-between gap-10 py-10 lg:py-12 lg:pr-16 xl:py-16">
            <div>
              <motion.p
                className="mb-8 flex items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-charcoal/55"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.04, ease }}
              >
                <span>Digital studio</span>
                <span className="h-px w-8 bg-bronze" aria-hidden="true" />
                <span>Architecture + interiors</span>
              </motion.p>
              <SplitHeadline />
            </div>
            <motion.div
              className="grid max-w-3xl gap-7 border-t border-stone pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease }}
            >
              <p className="max-w-[36rem] text-[0.9rem] leading-7 text-charcoal/65 md:text-[0.95rem]">
                Brdge helps design studios turn their work into a refined digital presence that builds trust, improves perception, and brings qualified project enquiries.
              </p>
              <div className="flex flex-wrap gap-5 md:flex-col md:items-start">
                <a href="#review" className="button-solid">Request Website Review</a>
                <TextLink href="#approach">View Approach</TextLink>
              </div>
            </motion.div>
          </div>
          <motion.figure
            className="hero-image relative min-h-[55svh] overflow-hidden lg:-mr-[max(1.5rem,calc((100vw-1440px)/2))] lg:min-h-full"
            initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 0 0 10%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 1.05, delay: 0.16, ease }}
          >
            <motion.img
              src="/images/studio-hero.jpg"
              alt="A responsive architecture portfolio website system shown across desktop and mobile canvases"
              className="h-[104%] w-full object-cover object-center"
              fetchPriority="high"
              style={reduceMotion ? undefined : { y: heroImageY, scale: heroImageScale }}
            />
            <motion.div
              className="absolute left-5 top-5 border border-charcoal/15 bg-ivory/95 px-4 py-3 text-[0.56rem] uppercase tracking-[0.2em]"
              animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >Responsive portfolio system</motion.div>
            <motion.div
              className="absolute bottom-16 right-5 grid grid-cols-3 gap-1.5 bg-charcoal p-3"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              aria-hidden="true"
            >
              {['bg-ivory', 'bg-taupe', 'bg-bronze', 'bg-stone', 'bg-white', 'bg-charcoal'].map((color) => <span key={color} className={`h-3 w-3 ${color}`} />)}
            </motion.div>
            <motion.span
              className="absolute bottom-0 left-0 top-0 w-px bg-bronze/80"
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.55, ease }}
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 left-0 bg-ivory px-4 py-3 text-[0.65rem] uppercase tracking-[0.22em]">Strategy / design / build / refine</figcaption>
          </motion.figure>
        </section>

        <section data-surface="parchment" className="page-grid section-space grid gap-14 border-b border-stone lg:grid-cols-12" aria-labelledby="problem-title">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="section-label">The gap</p>
            <h2 id="problem-title" className="section-title max-w-[12ch]">Your work may be premium. Your website may not be proving it.</h2>
            <ol className="mt-14 border-t border-stone">
              {problems.map((problem, index) => (
                <motion.li
                  key={problem}
                  className="problem-row group relative grid grid-cols-[3rem_1fr] items-center gap-4 overflow-hidden border-b border-stone py-5 md:grid-cols-[4rem_1fr]"
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.075, ease }}
                >
                  <span className="font-display text-2xl text-bronze">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base leading-6 transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-lg">{problem}</span>
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </motion.li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="min-w-0 lg:col-span-6" delay={0.15}><AuditCanvas /></Reveal>
        </section>

        <section data-surface="mist" id="approach" className="page-grid section-space border-b border-stone scroll-mt-24" aria-labelledby="approach-title">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="min-w-0 lg:col-span-5">
              <p className="section-label">Approach</p>
              <h2 id="approach-title" className="section-title max-w-[11ch]">We design websites like portfolios, not brochures.</h2>
            </Reveal>
            <Reveal className="min-w-0 lg:col-span-7" delay={0.12}>
              <ImageReveal src="/images/studio-process.jpg" alt="A six-stage web design process from research and structure through build and launch" className="aspect-[16/9]" />
            </Reveal>
          </div>
          <div className="mt-16 grid gap-0 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1} className="pillar relative border-t border-stone py-8 md:min-h-64 md:border-l md:border-t md:px-8 first:md:border-l-0 first:md:pl-0 last:md:pr-0">
                <div className="mb-10 flex items-center gap-4">
                  <span className="font-display text-3xl text-bronze">{String(index + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-bronze/60" />
                </div>
                <h3 className="max-w-[14ch] font-display text-2xl font-light leading-[1.2] tracking-[-0.035em] md:text-3xl">{pillar.title}</h3>
                <p className="mt-6 max-w-sm text-sm leading-6 text-charcoal/65">{pillar.copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-24 border-t border-stone pt-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="section-label">How we work</p>
                <h3 className="section-title max-w-[11ch]">From first review to a living portfolio.</h3>
              </div>
              <p className="max-w-lg text-base leading-7 text-charcoal/60 lg:col-span-5">A calm, visible process. Every phase produces something concrete, so decisions stay clear and momentum never disappears behind agency theatre.</p>
            </div>
          </Reveal>
          <WorkflowDiagram />
        </section>

        <section data-surface="sand" id="services" className="page-grid section-space border-b border-stone scroll-mt-24" aria-labelledby="services-title">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-label">Services</p>
              <h2 id="services-title" className="section-title max-w-[10ch]">Purpose-built digital for design.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-charcoal/65 lg:col-span-5 lg:pb-2">Three focused ways to make your studio easier to trust, understand, and contact.</p>
          </Reveal>
          <div className="mt-14 border-t border-stone">
            {services.map((service, index) => (
              <Reveal key={service.title}>
                <motion.article
                  className="service-row group grid min-w-0 gap-6 border-b border-stone py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(15rem,1fr)_2rem] md:items-center"
                >
                  <span className="font-display text-4xl text-bronze">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-light leading-[1.18] tracking-[-0.035em] md:text-3xl">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-charcoal/65">{service.copy}</p>
                  </div>
                  <ServiceVisual index={index} />
                  <ArrowDownRight aria-hidden="true" className="text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section data-surface="chalk" className="bg-charcoal text-ivory" aria-labelledby="quality-title">
          <div className="page-grid section-space">
            <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="section-label text-bronze">Quality standard</p>
                <h2 id="quality-title" className="section-title max-w-[12ch]">Premium is not a style. It is the quality of every decision.</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-white/55 lg:col-span-4">The visible polish matters because the invisible system beneath it is resolved with equal care.</p>
            </Reveal>
            <div className="mt-20 grid border-t border-white/20 md:grid-cols-2 xl:grid-cols-4">
              {qualityPrinciples.map(([title, copy], index) => (
                <motion.article
                  key={title}
                  className="relative min-h-64 border-b border-white/20 py-8 md:border-l md:px-7 first:md:border-l-0 first:md:pl-0 xl:border-b-0 last:md:pr-0"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: index * 0.1, ease }}
                >
                  <div className="mb-12 flex items-center gap-4">
                    <span className="text-[0.6rem] tracking-[0.2em] text-bronze">0{index + 1}</span>
                    <motion.span
                      className="h-px flex-1 origin-left bg-bronze/65"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.25 + index * 0.1, ease }}
                    />
                  </div>
                  <h3 className="max-w-[12ch] font-display text-2xl font-light tracking-[-0.04em]">{title}</h3>
                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">{copy}</p>
                  <motion.span
                    className="absolute bottom-8 left-0 h-1.5 w-1.5 rounded-full bg-bronze md:left-7"
                    animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.8, 1.15, 0.8] }}
                    transition={{ duration: 3.4, delay: index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section data-surface="chalk" id="work" className="page-grid section-space scroll-mt-24" aria-labelledby="work-title">
          <Reveal className="mb-14 flex items-end justify-between gap-8 border-b border-stone pb-8">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="work-title" className="font-display text-[clamp(3rem,5.4vw,5.75rem)] font-light leading-[1.05] tracking-[-0.055em]">Selected work</h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-charcoal/60 md:block">Concept studies for studios whose work deserves a more considered digital frame.</p>
          </Reveal>
          <div>
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <article className="project-row grid min-w-0 gap-8 border-b border-stone py-10 lg:grid-cols-12 lg:items-stretch">
                  <div className="min-w-0 lg:col-span-2">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-bronze">Study {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-7 max-w-[12ch] font-display text-3xl font-light leading-[1.15] tracking-[-0.04em] md:text-4xl">{project.title}</h3>
                  </div>
                  <ProjectPreview src={project.image} alt={project.alt} index={index} />
                  <dl className="grid min-w-0 content-start gap-5 lg:col-span-4 lg:border-l lg:border-stone lg:pl-8">
                    {project.meta.map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">{label}</dt>
                        <dd className="mt-1 max-w-md text-sm leading-5 text-charcoal/65">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section data-surface="stone" id="review" className="scroll-mt-24 border-t border-stone" aria-labelledby="review-title">
          <div className="grid min-h-[70svh] lg:grid-cols-2">
            <div className="page-grid-left flex flex-col justify-center gap-9 py-20 lg:py-28">
              <Reveal>
                <p className="section-label">Website review</p>
                <h2 id="review-title" className="section-title max-w-[12ch]">Not sure if your website is helping or hurting your studio?</h2>
                <p className="mt-8 max-w-xl text-base leading-7 text-charcoal/70 md:text-lg md:leading-8">Send us your current website. We’ll review its design, mobile experience, portfolio structure, and enquiry flow.</p>
                <a href="mailto:hello@brdge.studio?subject=Website%20Review%20Request" className="button-solid mt-9">Request a Website Review <ArrowUpRight aria-hidden="true" /></a>
              </Reveal>
            </div>
            <ReviewCanvas />
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-ivory">
        <div className="page-grid py-14 md:py-20">
          <div className="grid gap-12 border-b border-white/20 pb-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="flex items-center gap-6">
              <Logo compact inverse />
              <span className="h-14 w-px bg-bronze" />
              <p className="max-w-xs text-sm uppercase leading-6 tracking-[0.18em] text-white/80">Digital Studio for Architects &amp; Interior Designers</p>
            </div>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm md:grid-cols-4">
              {['Work', 'Approach', 'Services'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">{item}</a>)}
              <a href="mailto:hello@brdge.studio" className="footer-link">Contact</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
            <a href="mailto:hello@brdge.studio" className="transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze">hello@brdge.studio</a>
            <p>Portfolio websites for design-led studios.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
