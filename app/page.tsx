'use client'

import Image from 'next/image'
import { ArrowRight, ArrowUpRight, CircleDot, ExternalLink, Gauge, Globe2, Workflow } from 'lucide-react'

const capabilities = [
  { icon: Globe2, title: 'Web infrastructure', body: 'Professional websites, hosting and essential tools for real businesses.' },
  { icon: Workflow, title: 'Connected operations', body: 'Turn inquiries into booked work with systems that keep you organized.' },
  { icon: Gauge, title: 'Business strategy', body: 'Practical guidance to help you grow, streamline and take on what’s next.' },
]

const tiers = [
  { number: '01', title: 'Launch', body: 'Your brand, website and first customer touchpoints.', link: 'Explore this system', featured: true },
  { number: '02', title: 'Automated engine', body: 'Connect inquiries, booking and follow-up.' , link: 'Explore this system' },
  { number: '03', title: 'Custom core systems', body: 'Tools built around the way your team operates.', link: 'Explore this system' },
]

const services = [
  { title: 'Brand & identity', body: 'A consistent and professional foundation.', image: '/images/novagentec/workshop-hero.png' },
  { title: 'Automation & workflows', body: 'Save time and keep things moving.', image: '/images/novagentec/mobile-design-board.png' },
  { title: 'CRM & integrations', body: 'Bring your tools and data together.', image: '/images/novagentec/creator-core-composite.png' },
  { title: 'Local search & visibility', body: 'Get found by the right customers.', image: '/images/novagentec/workshop-hero.png' },
  { title: 'Content & social systems', body: 'Create and share with a purpose.', image: '/images/novagentec/creator-core-composite.png' },
  { title: 'Operations dashboards', body: 'See what matters and stay in control.', image: '/images/novagentec/mobile-design-board.png' },
]

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mono-label ${light ? 'mono-label-light' : ''}`}>{children}</p>
}

function AccentArrow() {
  return <ArrowRight aria-hidden="true" className="accent-arrow" size={18} strokeWidth={1.7} />
}

export default function HomePage() {
  return (
    <div className="commercial-site">
      <section className="hero-shell" id="top" data-video-slot="reserved-for-approved-environmental-loop">
        <Image
          src="/images/novagentec/workshop-hero.png"
          alt="A bright workshop with a laptop, camera equipment, notebooks and a service van outside"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-wash" />
        <div className="hero-content page-width">
          <SectionLabel>Novagentec · Commercial</SectionLabel>
          <h1>Your business.<br /><span>Connected.</span></h1>
          <p className="hero-lede">Brand, websites and connected systems<br className="desktop-only" /> for local businesses, growing teams and creators.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:hello@novagentec.example?subject=Let's%20talk%20business">Let’s talk business <ArrowRight size={19} /></a>
            <a className="text-link" href="#systems">Explore the systems <ArrowRight size={17} /></a>
          </div>
          <div className="hero-meta"><span>Commercial systems</span><span>Built around real business</span></div>
        </div>
      </section>

      <section className="capability-band page-width" aria-label="Capabilities">
        {capabilities.map(({ icon: Icon, title, body }) => (
          <article className="capability" key={title}>
            <Icon size={31} strokeWidth={1.5} aria-hidden="true" />
            <div><h2>{title}</h2><p>{body}</p></div>
          </article>
        ))}
      </section>

      <section className="section section-silver" id="systems">
        <div className="page-width">
          <SectionLabel>Start where your business is.</SectionLabel>
          <h2 className="display-heading">Three ways to build.</h2>
          <p className="section-intro">A clear starting point. Systems that grow with you.</p>
          <div className="tier-grid">
            {tiers.map((tier) => (
              <article className={`tier-card ${tier.featured ? 'tier-card-featured' : ''}`} key={tier.number}>
                <div className="tier-visual"><div className="screen-placeholder"><span>Product<br />screen</span></div><div className="device-plant" /></div>
                <div className="tier-content"><SectionLabel>Tier {tier.number}</SectionLabel><h3>{tier.title}</h3><p>{tier.body}</p><a className="inline-link" href="#contact">{tier.link}<AccentArrow /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mineral" id="services">
        <div className="page-width">
          <SectionLabel>Built for more than a website.</SectionLabel>
          <h2 className="display-heading">Beyond the website.</h2>
          <p className="section-intro">A complete foundation for your brand, operations and long-term growth.</p>
          <div className="service-list">
            {services.map((service, index) => (
              <a href="#contact" className="service-row" key={service.title}>
                <div className="service-thumb"><Image src={service.image} alt="" fill sizes="(max-width: 700px) 92vw, 27vw" className="service-image" /><span className="service-index">0{index + 1}</span></div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.body}</p><span className="inline-link">Learn more <AccentArrow /></span></div>
                <ArrowUpRight className="row-corner-arrow" size={21} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section fleet-section" id="fleetflow">
        <div className="page-width product-grid">
          <div className="product-copy">
            <SectionLabel light>Built around real work.</SectionLabel>
            <h2 className="display-heading light-heading"><span className="orange-text">FleetFlow™</span><br />For businesses<br />in the field.</h2>
            <p>A connected home for leads, jobs and daily operations.</p>
            <a className="text-link text-link-light" href="#contact">Explore this system <ArrowRight size={17} /></a>
          </div>
          <div className="fleet-visual">
            <div className="dashboard-top"><span>FLEETFLOW<span className="orange-text">™</span></span><span>DEMO WORKSPACE</span></div>
            <div className="dashboard-body">
              <aside><div className="dash-logo">FF</div><span className="active">Overview</span><span>Jobs</span><span>Customers</span><span>Team</span><span>Reports</span></aside>
              <div className="dash-main"><div className="dash-title"><div><small>MONDAY, OCTOBER 19</small><h3>Your operations, in view.</h3></div><button type="button">+ New job</button></div><div className="metric-grid"><div><small>OPEN JOBS</small><strong>24</strong><span className="metric-up">+12%</span></div><div><small>THIS MONTH</small><strong>$7,360</strong><span className="metric-up">+8.4%</span></div><div><small>INVOICES</small><strong>08</strong><span>2 due soon</span></div></div><div className="chart-card"><div className="chart-head"><span>Revenue overview</span><span>Last 30 days⌄</span></div><div className="chart-bars"><i style={{ height: '42%' }} /><i style={{ height: '57%' }} /><i style={{ height: '49%' }} /><i style={{ height: '70%' }} /><i style={{ height: '63%' }} /><i style={{ height: '84%' }} /><i style={{ height: '77%' }} /><i className="bar-accent" style={{ height: '94%' }} /></div></div></div>
            </div>
            <div className="disclosure">DEMO WORKSPACE · SAMPLE DATA</div>
          </div>
        </div>
      </section>

      <section className="section creator-section" id="creator-core">
        <div className="page-width product-grid creator-grid">
          <div className="product-copy">
            <SectionLabel light>Creator Core™</SectionLabel>
            <h2 className="display-heading light-heading"><span className="cyan-text">Your brand.</span><br />Your platform.</h2>
            <p>A digital home for your content, offers and customer journey.</p>
            <a className="text-link text-link-light" href="#contact">Explore Creator Core <ArrowRight size={17} /></a>
          </div>
          <div className="creator-visual"><Image src="/images/novagentec/creator-core-composite.png" alt="Creator Core fictional demos for Alexandra Reyes, Jordan Vale and Nora Wilde" width={1122} height={1402} sizes="(max-width: 900px) 100vw, 58vw" /><div className="disclosure">DEMO PAGES · FICTIONAL CREATOR CONCEPTS</div></div>
        </div>
      </section>

      <section className="section section-mineral customer-section" id="work">
        <div className="page-width">
          <SectionLabel>Customer work.</SectionLabel>
          <h2 className="display-heading">Real work.<br />Real businesses.</h2>
          <p className="section-intro">Selected customer work will appear here after approved captures and case-study copy are ready.</p>
          <div className="proof-grid">
            {['Local service businesses', 'Creator & personal brand'].map((title) => (
              <article className="proof-card" key={title}><div className="proof-frame"><CircleDot size={20} /><span>Approved capture pending</span></div><h3>{title}</h3><p>Selected work will appear here.</p><span className="pending-label">No client proof published yet.</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-silver process-section" id="process">
        <div className="page-width process-grid">
          <div><SectionLabel>The Synergy Standard™</SectionLabel><h2 className="display-heading">A clearer way forward.</h2></div>
          <div className="process-list">
            {[['01', 'Understand the business', 'We start about your goals, operations and what’s getting in the way.'], ['02', 'Connect the right systems', 'We design and implement the tools that make the biggest difference.'], ['03', 'Build, test & improve', 'We launch, refine and support your progress over time.']].map(([number, title, body]) => <article className="process-step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="page-width cta-inner"><div><SectionLabel>Ready when you are.</SectionLabel><h2 className="display-heading">Let’s build<br /><span>what’s next.</span></h2></div><div className="cta-copy"><p>Tell us what you run, what’s slowing you down and where you want to go.</p><a className="button button-dark" href="mailto:hello@novagentec.example?subject=Start%20a%20conversation">Start a conversation <ArrowRight size={19} /></a></div></div>
      </section>

      <footer className="commercial-footer">
        <div className="page-width footer-top"><div className="footer-wordmark">NOVAGENTEC <span>· COMMERCIAL</span></div><p>Built around real business.</p><div className="footer-links"><a href="#top">Back to top <ArrowUpRight size={15} /></a><a href="mailto:hello@novagentec.example">Contact <ExternalLink size={14} /></a></div></div>
        <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} NOVAGENTEC</span><span>Demo surfaces are labeled. Customer proof is pending approval.</span><a href="#top">Commercial systems ↑</a></div>
      </footer>
    </div>
  )
}
