import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, HeartHandshake, Recycle, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { siteConfig } from '@/lib/site-config'
import { stats } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'A1 Services is a locally owned and operated hauling and junk removal company. Learn about our crew, our values, and our commitment to fast, honest service.',
}

const values = [
  {
    icon: HeartHandshake,
    title: 'Honesty First',
    body: 'Transparent quotes and no hidden fees. We tell you the price before we start.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    body: 'We\u2019re your neighbors. We treat every property with respect and care.',
  },
  {
    icon: Recycle,
    title: 'Responsible Disposal',
    body: 'We donate and recycle whenever possible to keep usable items out of the landfill.',
  },
  {
    icon: Award,
    title: 'Quality Work',
    body: 'The job isn\u2019t done until you\u2019re satisfied and the site is left clean.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="About A1 Services"
        description="A locally owned hauling crew built on hard work, honest pricing, and getting the job done right."
      />

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
          <Image
            src="/images/about-crew.png"
            alt="The A1 Services crew in front of their truck"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.25em] text-accent">OUR STORY</p>
          <h2 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl">
            Built on Sweat &amp; a Handshake
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              {siteConfig.name} started with a truck, a trailer, and a simple promise: show up
              on time, work hard, and treat people right. That promise still drives everything
              we do.
            </p>
            <p>
              Today we handle everything from single-item pickups to full property cleanouts,
              dumpster rentals, and light excavation — but we&apos;ve never lost the local,
              family-first approach that got us here.
            </p>
            <p>
              When you call {siteConfig.name}, you get a crew that cares about the job as much
              as you do. {siteConfig.tagline}.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              <p className="font-display text-3xl text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.25em] text-accent">OUR VALUES</p>
          <h2 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl">
            What We Stand For
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-border bg-card p-7">
              <v.icon className="h-8 w-8 text-primary" />
              <h3 className="font-display mt-4 text-xl text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
