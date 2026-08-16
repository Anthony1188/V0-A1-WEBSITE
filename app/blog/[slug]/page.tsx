import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { blogPosts, formatDate } from '@/lib/content'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <article>
        <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
              <span className="inline-block rounded-sm bg-accent/20 px-2.5 py-1 font-display text-xs tracking-wide text-accent">
                {post.category}
              </span>
              <h1 className="font-display mt-3 text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/90">
            {post.body.map((para, i) => (
              <p key={i} className="text-pretty">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl">Keep Reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex gap-4 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/60"
                >
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={r.image || '/placeholder.svg'}
                      alt={r.title}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-display text-xs tracking-wide text-accent">
                      {r.category}
                    </span>
                    <h3 className="font-display mt-1 text-base leading-tight text-foreground">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
