'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Image
            src={siteConfig.logo || '/placeholder.svg'}
            alt={`${siteConfig.name} logo`}
            width={140}
            height={100}
            className="h-14 w-auto"
            priority
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-display text-sm tracking-wide px-3 py-2 transition-colors',
                  active
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-display text-sm text-foreground/90 hover:text-primary"
          >
            <Phone className="h-4 w-4 text-accent" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'h-11 rounded-sm px-5 font-display tracking-wide',
            )}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'font-display py-3 text-base tracking-wide border-b border-border/60',
                    active ? 'text-primary' : 'text-foreground/90',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 font-display text-foreground"
              >
                <Phone className="h-4 w-4 text-accent" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  'h-11 rounded-sm px-5 font-display tracking-wide',
                )}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
