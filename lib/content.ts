// -----------------------------------------------------------------------------
// Draft content for A1 Services. Replace copy/images with the client's real info.
// -----------------------------------------------------------------------------

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'junk-removal',
    title: 'Junk Removal',
    short: 'Fast, full-service removal of household and commercial junk.',
    description:
      'From single-item pickups to full property cleanouts, we load, haul, and dispose of it all. No item too big, no mess too small — we do the heavy lifting so you don\u2019t have to.',
    image: '/images/service-junk-removal.png',
    features: [
      'Furniture, appliances & mattresses',
      'Garage, attic & basement cleanouts',
      'Estate & foreclosure cleanouts',
      'Same-day & next-day service',
    ],
  },
  {
    slug: 'dumpster-rental',
    title: 'Dumpster Rental',
    short: 'Roll-off dumpsters delivered and picked up on your schedule.',
    description:
      'Flexible roll-off dumpster sizes for renovations, roofing, and construction debris. We drop it where you need it and haul it away when you\u2019re done — simple, transparent pricing.',
    image: '/images/service-dumpster-rental.png',
    features: [
      'Multiple sizes available',
      'Driveway-safe placement',
      'Flexible rental periods',
      'Fast delivery & pickup',
    ],
  },
  {
    slug: 'hauling-debris',
    title: 'Hauling & Debris',
    short: 'Heavy hauling for construction, yard, and demolition debris.',
    description:
      'Construction leftovers, storm debris, yard waste, and more. Our trucks and trailers are built to move serious loads quickly and safely — you call, we haul.',
    image: '/images/hero-dumpster-delivery.png',
    features: [
      'Construction & demolition debris',
      'Yard waste & storm cleanup',
      'Concrete, dirt & heavy material',
      'Commercial & residential',
    ],
  },
  {
    slug: 'skid-steer-services',
    title: 'Skid Steer Services',
    short: 'Grading, clearing, and light excavation with a track loader.',
    description:
      'Our compact track loader handles lot clearing, grading, material moving, and light excavation. The right equipment to prep and clean up any job site.',
    image: '/images/service-skid-steer.png',
    features: [
      'Lot & land clearing',
      'Grading & leveling',
      'Material moving',
      'Light excavation',
    ],
  },
]

export const stats = [
  { value: '10+', label: 'Years Hauling' },
  { value: '5,000+', label: 'Jobs Completed' },
  { value: '24/7', label: 'Availability' },
  { value: '100%', label: 'Satisfaction Focus' },
]

export const whyChooseUs = [
  {
    title: 'Locally Owned & Operated',
    body: 'A local crew that treats your property like our own and stands behind every job.',
  },
  {
    title: 'Upfront, Honest Pricing',
    body: 'Clear quotes with no surprise fees. You know the price before we start.',
  },
  {
    title: 'Fast, Reliable Service',
    body: 'Same-day and next-day availability so your project never has to wait.',
  },
  {
    title: 'Fully Equipped',
    body: 'Trucks, trailers, and a skid steer ready for jobs of any size.',
  },
]

export const testimonials = [
  {
    quote:
      'Called in the morning and they hauled off a garage full of junk that afternoon. Professional, friendly, and fairly priced.',
    name: 'Sarah M.',
    role: 'Homeowner',
  },
  {
    quote:
      'We use A1 for every renovation. The dumpster shows up on time and gets swapped fast. Best hauling crew around.',
    name: 'Dave R.',
    role: 'General Contractor',
  },
  {
    quote:
      'They cleared and graded our lot ahead of schedule. Great equipment and even better people. Highly recommend.',
    name: 'Melissa T.',
    role: 'Property Manager',
  },
]

export const gallery = [
  { src: '/images/hero-dumpster-delivery.png', alt: 'Roll-off dumpster delivery on a residential driveway' },
  { src: '/images/service-junk-removal.png', alt: 'Crew loading junk into a hauling truck' },
  { src: '/images/service-dumpster-rental.png', alt: 'Black roll-off dumpster filled with debris' },
  { src: '/images/service-skid-steer.png', alt: 'Orange skid steer clearing a job site' },
  { src: '/images/about-crew.png', alt: 'A1 Services hauling crew in front of their truck' },
  { src: '/images/service-junk-removal.png', alt: 'Furniture and appliances removed from a home' },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  body: string[]
  date: string
  category: string
  image: string
  readingTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-the-right-dumpster-size',
    title: 'How to Choose the Right Dumpster Size for Your Project',
    excerpt:
      'Not sure which roll-off dumpster you need? Here\u2019s a simple guide to matching dumpster size to your cleanup or renovation project.',
    date: '2026-07-28',
    category: 'Dumpster Rental',
    image: '/images/service-dumpster-rental.png',
    readingTime: '4 min read',
    body: [
      'Choosing the right dumpster size saves money and hassle. Too small and you\u2019re paying for a second haul; too large and you\u2019re paying for space you don\u2019t use.',
      'For small cleanouts and single-room renovations, a smaller roll-off is usually plenty. For full-home projects, roofing, or construction debris, you\u2019ll want to size up.',
      'When in doubt, give us a call and describe your project. We\u2019ll recommend the right size so you only pay for what you need.',
    ],
  },
  {
    slug: 'junk-removal-vs-dumpster-rental',
    title: 'Junk Removal vs. Dumpster Rental: Which Do You Need?',
    excerpt:
      'Both get the junk gone, but one might be a better fit for your timeline and budget. Here\u2019s how to decide.',
    date: '2026-07-10',
    category: 'Tips',
    image: '/images/service-junk-removal.png',
    readingTime: '5 min read',
    body: [
      'Junk removal is the hands-off option: our crew shows up, loads everything, and hauls it away the same day. It\u2019s ideal when you want the work done for you.',
      'A dumpster rental is better when you\u2019re working at your own pace over several days and want to fill it as you go.',
      'Still unsure? We\u2019re happy to walk you through both options and help you pick the most cost-effective route.',
    ],
  },
  {
    slug: 'spring-cleanup-checklist',
    title: 'The Ultimate Spring Property Cleanup Checklist',
    excerpt:
      'Get your home or business ready for the season with this room-by-room and yard cleanup checklist.',
    date: '2026-06-15',
    category: 'Guides',
    image: '/images/about-crew.png',
    readingTime: '6 min read',
    body: [
      'Spring is the perfect time to clear out the clutter that piled up over the winter. Start with the spaces you avoid: the garage, attic, and basement.',
      'Work outside next \u2014 haul off yard waste, old fencing, and storm debris so your property is ready for the warmer months.',
      'When the pile gets bigger than your bins, that\u2019s where we come in. One call and we\u2019ll haul it all away.',
    ],
  },
]

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
