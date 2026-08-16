import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { blogPosts, formatDate } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, guides, and news from A1 Services on junk removal, dumpster rental, cleanouts, and hauling.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="NEWS & TIPS"
        title="The A1 Blog"
        description="Practical guides and tips to help you tackle your next cleanout, renovation, or hauling project."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid items-center gap-8 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/60 lg:grid-cols-2 lg:p-8"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <Image
              src={featured.image || '/placeholder.svg'}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <span className="inline-block rounded-sm bg-accent/15 px-2.5 py-1 font-display text-xs tracking-wide text-accent">
              {featured.category}
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-balance sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
              {featured.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(featured.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {featured.readingTime}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 font-display text-sm tracking-wide text-primary">
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Rest */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-block w-fit rounded-sm bg-accent/15 px-2.5 py-1 font-display text-xs tracking-wide text-accent">
                  {post.category}
                </span>
                <h3 className="font-display mt-3 text-xl leading-tight text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  )
}
