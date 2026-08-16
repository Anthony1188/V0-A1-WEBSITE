import Image from 'next/image'
import Link from 'next/link'
import { Phone, ShieldCheck, Star, Truck, CheckCircle2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { services, stats, whyChooseUs, testimonials } from '@/lib/content'
import { ServiceCard } from '@/components/service-card'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-dumpster-delivery.png"
          alt="A1 Services delivering a roll-off dumpster"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1 font-display text-xs tracking-[0.2em] text-accent">
              <Star className="h-3.5 w-3.5 fill-accent" />
              LOCALLY OWNED & OPERATED
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
              You Call.
              <span className="block text-primary">We Haul.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Fast, reliable junk removal, dumpster rental, and hauling for homes and
              businesses. From a single item to a full cleanout — {siteConfig.name} gets it
              gone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className={cn(
                  buttonVariants(),
                  'h-14 gap-2 rounded-sm px-8 text-base font-display tracking-wide',
                )}
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-14 rounded-sm px-8 text-base font-display tracking-wide',
                )}
              >
                Get a Free Quote
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
              {['Same-Day Service', 'Upfront Pricing', 'Fully Insured'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm tracking-[0.25em] text-accent">WHAT WE DO</p>
            <h2 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl">
              Services Built for Any Job
            </h2>
          </div>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-11 rounded-sm px-6 font-display tracking-wide',
            )}
          >
            View All Services
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/about-crew.png"
                alt="The A1 Services crew"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-sm border border-border bg-background px-5 py-4 sm:flex">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <p className="font-display text-lg leading-none">Ready to Roll</p>
                <p className="text-xs text-muted-foreground">Trucks, trailers & skid steer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-display text-sm tracking-[0.25em] text-accent">WHY A1 SERVICES</p>
            <h2 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl">
              The Crew You Can Count On
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We show up on time, quote you fair, and haul it all away — the way service
              should be.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-base text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.25em] text-accent">REVIEWS</p>
          <h2 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-sm border border-border bg-card p-7"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-foreground/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-base text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
