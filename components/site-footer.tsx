import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src={siteConfig.logo || '/placeholder.svg'}
            alt={`${siteConfig.name} logo`}
            width={160}
            height={115}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.tagline}. Fast, dependable junk removal, dumpster rental, and
            hauling — done right the first time.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-foreground">Explore</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={siteConfig.phoneHref} className="flex items-start gap-3 hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              {siteConfig.address}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-foreground">Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  {h.day}
                </span>
                <span className="text-foreground/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
