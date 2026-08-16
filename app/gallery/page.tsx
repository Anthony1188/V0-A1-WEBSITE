import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { GalleryGrid } from '@/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'See A1 Services in action — junk removal, dumpster drop-offs, hauling jobs, and skid steer work from around the community.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Project Gallery"
        description="A look at recent jobs — cleanouts, dumpster drop-offs, hauling, and equipment work. Click any photo to view it larger."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
      <CtaBand />
    </>
  )
}
