import Link from 'next/link'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative border-b border-border bg-card">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0 2px, transparent 2px 14px)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="px-2 text-border">/</span>
          <span className="text-foreground/80">{title}</span>
        </nav>
        {eyebrow && (
          <p className="font-display text-sm tracking-[0.25em] text-accent">{eyebrow}</p>
        )}
        <h1 className="font-display mt-2 text-4xl leading-none text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
