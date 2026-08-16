import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Junk removal, dumpster rental, hauling & debris removal, and skid steer services from A1 Services. You call, we haul.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Our Services"
        description="From single-item pickups to full property cleanouts, we've got the trucks, trailers, and equipment to get it done."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((service, i) => (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="font-display text-sm tracking-[0.25em] text-accent">
                  0{i + 1}
                </p>
                <h2 className="font-display mt-2 text-3xl leading-none text-balance sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  )
}
