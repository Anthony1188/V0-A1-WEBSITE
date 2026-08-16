import Link from 'next/link'
import { Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            Got a Mess? {siteConfig.tagline}.
          </h2>
          <p className="mt-2 text-primary-foreground/85">
            Fast quotes, honest pricing, and same-day availability. Let&apos;s get it hauled.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'h-12 gap-2 rounded-sm px-6 text-base font-display tracking-wide',
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-12 rounded-sm border-primary-foreground/40 bg-transparent px-6 text-base font-display tracking-wide text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
            )}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
