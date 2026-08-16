// -----------------------------------------------------------------------------
// A1 SERVICES — central content config
// Everything here is editable draft content. Swap in the client's real details.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: 'A1 Services',
  tagline: 'You Call, We Haul',
  logo: '/images/a1-services-logo.png',

  // TODO: replace with the client's real contact details
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'info@a1services.com',
  serviceArea: 'Serving the greater metro area & surrounding counties',
  address: '123 Industrial Way, Your City, ST 00000',
  hours: [
    { day: 'Mon – Fri', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],

  social: {
    facebook: '#',
    instagram: '#',
    google: '#',
  },
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const
