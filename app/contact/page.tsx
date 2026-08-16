import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a free quote from A1 Services. Call, email, or send us a message about your junk removal, dumpster rental, or hauling job.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Request a Free Quote"
        description="Tell us about your job and we'll get right back to you. Same-day service is often available — you call, we haul."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Info column */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl">Contact Info</h2>
          <p className="mt-2 text-muted-foreground">
            Reach out however works best for you.
          </p>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm tracking-wide text-foreground">Phone</p>
                <a href={siteConfig.phoneHref} className="text-muted-foreground hover:text-primary">
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm tracking-wide text-foreground">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm tracking-wide text-foreground">Service Area</p>
                <p className="text-muted-foreground">{siteConfig.serviceArea}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm tracking-wide text-foreground">Hours</p>
                <ul className="mt-1 space-y-1 text-muted-foreground">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="text-foreground/90">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Form column */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
