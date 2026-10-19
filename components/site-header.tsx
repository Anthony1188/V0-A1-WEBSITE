'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Systems', href: '#systems' },
  { label: 'Services', href: '#services' },
  { label: 'FleetFlow™', href: '#fleetflow' },
  { label: 'Creator Core™', href: '#creator-core' },
  { label: 'Process', href: '#process' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="#top" aria-label="NOVAGENTEC Commercial home">NOVAGENTEC <small>· COMMERCIAL</small></a>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <a className="site-contact" href="#contact">Start a conversation ↗</a>
        <button className="header-menu" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>
      {open && <div className="mobile-menu" id="mobile-navigation"><nav aria-label="Mobile navigation">{links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a conversation ↗</a></nav></div>}
    </header>
  )
}
