import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import logoLight from '../2.png'
import logoDark from '../8.png'

const services = [
  { id: 'branding', number: '01', title: 'Branding & identity', text: 'Logos, color systems, typography and practical brand guidelines for a credible first impression.', application: 'For startups, contractors and growing teams that need one consistent identity across logos, uniforms, signage, documents and social profiles.', deliverables: 'Logo system, color palette, font pairing, business cards, profile and cover assets, plus brand guidelines.', packages: [
    { name: 'Brand Starter', price: '₱2,500', detail: '1 core logo concept + basic identity setup', featured: false },
    { name: 'Brand Builder', price: '₱5,000', detail: 'Expanded identity kit with brand usage directions', featured: false },
    { name: 'Brand Pro', price: '₱9,000', detail: 'Full strategic identity package for premium positioning', featured: true }
  ] },
  { id: 'social', number: '02', title: 'Marketing & social', text: 'On-brand content systems, pubmats, campaigns and calendars that keep your business visible.', application: 'For local businesses that need a reliable stream of promotional, announcement and social media content.', deliverables: '8 to 30 social designs, captions, content calendars, campaign concepts, story templates and basic monitoring.', packages: [
    { name: 'Social Starter', price: '₱2,000', detail: '8 social posts with templates and basic scheduling', featured: false },
    { name: 'Social Growth', price: '₱4,000', detail: 'Full monthly campaign calendar + content series', featured: false },
    { name: 'Social Pro', price: '₱7,500', detail: 'Priority content production and campaign optimization', featured: true }
  ] },
  { id: 'documents', number: '03', title: 'Documents & decks', text: 'Polished proposals, pitch decks, company profiles and corporate materials ready to present.', application: 'For teams preparing a client proposal, company profile, thesis, pitch deck or presentation that needs to feel clear and credible.', deliverables: 'Up to 10, 20 or 40 pages/slides with layout, graphics, image editing, infographics and branded templates.', packages: [
    { name: 'Document Basic', price: '₱1,250', detail: 'Simple branded document layout and clean design', featured: false },
    { name: 'Presentation Pro', price: '₱2,500', detail: 'Pitch deck styling with content visualization', featured: false },
    { name: 'Corporate Presentation', price: '₱5,000', detail: 'Full branded presentation system for serious clients', featured: true }
  ] },
  { id: 'art', number: '04', title: 'Digital & creative art', text: 'Custom illustration, mural concepts, 3D visualization and artwork built to stand out.', application: 'For brands, spaces and personal projects that need a custom visual, illustration, mural concept or presentation-ready artwork.', deliverables: 'Custom composition, multiple elements, backgrounds, high-resolution files, perspective presentation and client mockups.', packages: [
    { name: 'Creative Basic', price: '₱1,000', detail: 'Single illustration or polished artwork direction', featured: false },
    { name: 'Creative Custom', price: '₱2,500', detail: 'Custom visual system for campaigns or placements', featured: false },
    { name: 'Art & Mural Pro', price: '₱6,000', detail: 'Premium art direction with multi-scene, high-impact output', featured: true }
  ] },
  { id: 'strategy', number: '05', title: 'Marketing strategy', text: 'Market analysis, positioning and measurable roadmaps that turn good ideas into action.', application: 'For businesses ready to understand their audience, sharpen their positioning and turn marketing into a measurable plan.', deliverables: 'Market and competitor analysis, target customer profile, positioning, content plan, KPIs and a 30 or 90-day roadmap.', packages: [
    { name: 'Marketing Starter', price: '₱2,500', detail: 'Quick positioning and strategy baseline', featured: false },
    { name: 'Marketing Growth', price: '₱5,000', detail: 'Audience analysis and tactical growth planning', featured: false },
    { name: 'Strategy Pro', price: '₱10,000', detail: 'Roadmap, execution priorities and measurable growth plan', featured: true }
  ] },
  { id: 'website', number: '06', title: 'Website development', text: 'Responsive business websites with galleries, inquiry systems, SEO structure and deployment.', application: 'For construction firms, service providers and startups that need a professional online presence and a clear path for inquiries.', deliverables: 'Responsive pages, portfolio and services showcase, inquiry form, maps, social integration, domain connection and deployment.', packages: [
    { name: 'Website Starter', price: '₱12,500', detail: 'Simple business site with a few conversion pages', featured: false },
    { name: 'Business Website Pro', price: '₱18,500', detail: 'Multi-page branded website with stronger conversion flow', featured: false },
    { name: 'Complete Digital Presence', price: '₱30,000', detail: 'Premium website, portfolio and automation setup', featured: true }
  ] },
]

const mockups = [
  { name: 'Construction', type: 'Business website mockup', url: 'https://abc-construction-peach.vercel.app/' },
  { name: 'Retail / Beauty', type: 'Business website mockup', url: 'https://euphoria-lake.vercel.app/' },
]

const products = [
  { title: 'The Digital Product Blueprint', subtitle: 'Create, launch & scale digital products that sell', tag: '46-page ebook', url: 'https://acdhcreatives.gumroad.com/l/digital-product-blueprint?layout=profile', tone: 'blueprint' },
  { title: '30 AI Side Hustles', subtitle: 'Turn artificial intelligence into extra cash', tag: '30 ideas', url: 'https://acdhcreatives.gumroad.com/l/30-ai-side-hustles?layout=profile', tone: 'ai' },
  { title: 'ChatGPT for Work', subtitle: '500 prompts that save you hours every week', tag: '500 prompts', url: 'https://acdhcreatives.gumroad.com/l/chatgpt-for-work-500-prompts?layout=profile', tone: 'prompts' },
  { title: 'Tech Sales: Zero Experience', subtitle: 'A practical guide to starting your tech sales career', tag: 'career guide', url: 'https://acdhcreatives.gumroad.com/l/tech-sales-zero-experience?layout=profile', tone: 'sales' },
  { title: 'The Ultimate Wedding Planner', subtitle: 'Plan your day with clarity and confidence', tag: 'planner', url: 'https://acdhcreatives.gumroad.com/l/ultimate-wedding-planner?layout=profile', tone: 'wedding' },
  { title: 'Baby Journal', subtitle: 'A keepsake for the little moments', tag: 'guided journal', url: 'https://acdhcreatives.gumroad.com/l/babyjournal?layout=profile', tone: 'baby' },
  { title: 'Start Smart', subtitle: '15 things to do before starting a business', tag: '62-page ebook', url: 'https://acdhcreatives.gumroad.com/l/startsmartbusiness?layout=profile', tone: 'smart' },
]

const featureSamples = [
  { id: 'branding', tag: 'Branding', title: 'ABC Construction', subtitle: 'Brand identity showcase', accent: '#00bf63', glow: 'rgba(0, 191, 99, 0.35)', visual: 'brand', tip: 'Build trust in every project touchpoint', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80'] },
  { id: 'social', tag: 'Marketing', title: 'Social Engine', subtitle: 'Content marketing blueprint', accent: '#7fe9ff', glow: 'rgba(127, 233, 255, 0.28)', visual: 'social', tip: 'Turn attention into qualified leads', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80'] },
  { id: 'documents', tag: 'Documents', title: 'Proposal Kit', subtitle: 'B2B pitch & admin assets', accent: '#ffca7a', glow: 'rgba(255, 202, 122, 0.26)', visual: 'documents', tip: 'Close deals with clearer communication', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=700&q=80'] },
  { id: 'art', tag: 'Art', title: 'Portrait Studio', subtitle: 'Creative illustration portfolio', accent: '#c084fc', glow: 'rgba(192, 132, 252, 0.24)', visual: 'art', tip: 'Translate stories into art that lasts', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80'] },
  { id: 'strategy', tag: 'Strategy', title: 'Growth Radar', subtitle: 'Market intelligence roadmap', accent: '#6ee7b7', glow: 'rgba(110, 231, 183, 0.24)', visual: 'strategy', tip: 'Build the next expansion with evidence', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80'] },
  { id: 'website', tag: 'Web', title: 'Digital Presence', subtitle: 'Multi-industry web showcase', accent: '#5eead4', glow: 'rgba(94, 234, 212, 0.22)', visual: 'website', tip: 'Create websites that convert and scale', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80', mosaic: ['https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80'] },
]

function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const moveFeature = (direction) => {
    setActiveFeature((current) => (current + direction + featureSamples.length) % featureSamples.length)
  }

  const handlePointerDown = (event) => {
    setIsDragging(true)
    setStartX(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (!isDragging) return
    const delta = event.clientX - startX
    setDragOffset(delta)
  }

  const handlePointerUp = () => {
    if (!isDragging) return

    const threshold = Math.min(window.innerWidth * 0.12, 90)
    if (dragOffset > threshold) moveFeature(-1)
    if (dragOffset < -threshold) moveFeature(1)

    setDragOffset(0)
    setIsDragging(false)
  }

  return (
    <section className="feature-showcase wrap" aria-label="Service feature showcase">
      <div className="feature-showcase__header">
        <div>
          <p className="eyebrow"><span className="pulse" /> Feature studio</p>
          <h2>Creative systems<br /><em>for every stage.</em></h2>
        </div>
      </div>

      <div
        className="feature-carousel"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {featureSamples.map((sample, index) => {
          const offset = ((index - activeFeature + featureSamples.length) % featureSamples.length)
          const normalized = offset > featureSamples.length / 2 ? offset - featureSamples.length : offset < -(featureSamples.length / 2) ? offset + featureSamples.length : offset
          if (Math.abs(normalized) > 2) return null

          const abs = Math.abs(normalized)
          const translateX = normalized * 200 + (normalized === 0 ? dragOffset * 0.18 : 0)
          const translateY = abs * 12
          const scale = normalized === 0 ? 1 : 1 - abs * 0.12
          const opacity = normalized === 0 ? 1 : abs === 1 ? 0.74 : 0.28
          const blur = abs >= 2 ? '5px' : '0px'
          const rotateY = normalized === 0 ? 0 : normalized * -12
          const rotateX = normalized === 0 ? 0 : abs * 3

          return (
            <article
              key={sample.id}
              className={`feature-card feature-card--${sample.visual} ${normalized === 0 ? 'feature-card--active' : ''}`}
              style={{
                '--card-accent': sample.accent,
                '--card-glow': sample.glow,
                transform: `translate3d(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px), 0) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                opacity,
                filter: `blur(${blur})`,
                zIndex: 100 - abs,
                transition: isDragging ? 'none' : 'transform 0.62s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease, filter 0.45s ease, border-color 0.35s ease, box-shadow 0.45s ease',
              }}
            >
              <div className="feature-card__header">
                <span>{sample.tag}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="feature-card__body">
                <p className="feature-card__eyebrow">{sample.subtitle}</p>
                <h3>{sample.title}</h3>
                <p className="feature-card__tip">{sample.tip}</p>
              </div>

              <div className="feature-card__mockup">
                <div className="feature-visual feature-visual--mosaic" aria-label={sample.title}>
                  {sample.mosaic.map((tile, tileIndex) => (
                    <img
                      key={`${sample.id}-${tileIndex}`}
                      className={`feature-card__mosaic-image feature-card__mosaic-image--${tileIndex + 1}`}
                      src={tile}
                      alt={`${sample.title} preview ${tileIndex + 1}`}
                      onError={(event) => {
                        const visual = event.currentTarget.closest('.feature-visual--mosaic')
                        if (visual) {
                          visual.classList.add('feature-visual--fallback')
                        }
                        event.currentTarget.style.display = 'none'
                      }}
                    />
                  ))}
                  <div className="feature-visual__board" aria-hidden="true">
                    <span className="feature-visual__chip">{sample.tag}</span>
                    <strong>{sample.title}</strong>
                    <div className="feature-visual__bars">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function App() {
  const [light, setLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')
  const [activeService, setActiveService] = useState(null)
  const [bookingService, setBookingService] = useState(null)

  useEffect(() => {
    if (!activeService && !bookingService) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveService(null)
        setBookingService(null)
      }
    }
    document.body.classList.add('modal-open')
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeService, bookingService])

  const submitBooking = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSending(true)
    setFormError('')
    try {
      const result = await fetch('/api/book-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      const payload = await result.json()
      if (!result.ok) throw new Error(payload.error)
      setSent(true)
      form.reset()
    } catch (error) {
      setFormError(error.message || 'The inquiry could not be sent. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={light ? 'site light' : 'site'}>
      <div className="grain" />
      <header className="nav wrap">
        <a href="#top" className="logo-link"><img className="logo logo-dark" src={logoDark} alt="ACDH Creatives" /><img className="logo logo-light" src={logoLight} alt="ACDH Creatives" /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'} <i /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Mockup websites</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Digital books</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{sent ? 'Inquiry Sent' : 'Book a service'}</a>
        </nav>
        <button className="mode-toggle" onClick={() => setLight(!light)} aria-label="Toggle color mode"><b>{light ? '☾' : '☼'}</b></button>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="pulse" /> Freelance creative studio · Batangas, PH</p>
            <h1>Ideas with<br /><em>structure.</em></h1>
            <p className="hero-intro">ACDH Creatives is a design and marketing studio helping growing businesses look credible, communicate clearly and move forward.</p>
            <div className="hero-actions"><a className="button primary" href="#contact">Start a project <span>↗</span></a><a className="text-link" href="#work">See mockup websites <span>↓</span></a></div>
          </div>
          <div className="hero-art reveal delay-one" aria-label="Abstract layered glass artwork">
            <div className="art-orbit" /><div className="art-card card-a">ACDH<br /><strong>CREATIVE</strong></div><div className="art-card card-b">WEB<br />PRESENCE<br /><strong>BUILT</strong></div><div className="art-line" /><div className="glass-chip chip-a">WEB / 01</div><div className="glass-chip chip-b">BUILD<br />ONLINE</div>
            <span className="art-label">01 / 04<br /><b>Digital presence that works</b></span>
          </div>
        </section>

        <FeatureShowcase />

        <section className="ticker"><div>BRANDING <span>✳</span> MARKETING <span>✳</span> WEB DEVELOPMENT <span>✳</span> DOCUMENTATION <span>✳</span> STRATEGY <span>✳</span></div></section>

        <section id="about" className="about wrap section-grid">
          <div className="section-kicker"><span>01</span><p>About the studio</p></div>
          <div className="about-content"><h2>The technical eye<br /><em>behind the creative.</em></h2><div className="about-columns"><p>ACDH Creatives sits where construction documentation, brand development and digital marketing meet. A background in engineering and construction marketing brings both precision and imagination to the table.</p><p>We care about the details people feel: a clear deck, a considered identity, a website that earns trust. Every project is organized to be useful, not just beautiful.</p></div><div className="stats"><div><strong>06</strong><span>creative disciplines</span></div><div><strong>02</strong><span>ways of thinking</span></div><div><strong>∞</strong><span>room to build</span></div></div></div>
        </section>

        <section id="services" className="services wrap section-grid">
          <div className="section-kicker"><span>02</span><p>What we do</p></div>
          <div className="services-content"><div className="section-heading"><h2>Useful creativity,<br /><em>built around you.</em></h2><p>Tap a service to see exactly what it can do, what is included and where the sample pricing starts.</p></div><div className={activeService ? 'service-list service-list-active' : 'service-list'}>{services.map((service) => { const selected = activeService?.number === service.number; return <button className={selected ? 'service service-selected' : 'service'} style={activeService ? (selected ? { opacity: .62, transform: 'translateX(-8px) scale(.98)' } : { opacity: .24, filter: 'blur(1.5px)', transform: 'translateX(-16px) scale(.97)' }) : undefined} aria-hidden={activeService ? !selected : undefined} key={service.number} onClick={() => setActiveService(service)}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></button> })}</div></div>
        {activeService && <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-detail-title" onClick={() => setActiveService(null)}><article className="service-detail" key={activeService.number} onClick={(event) => event.stopPropagation()}><div className="detail-top"><span>{activeService.number} / SERVICE DETAIL</span><button className="detail-close" onClick={() => setActiveService(null)} aria-label="Back to all services">← Back</button></div><h3 id="service-detail-title">{activeService.title}</h3><div className="detail-columns"><div><small>Best applied to</small><p>{activeService.application}</p></div><div><small>Sample price guide</small><p>{activeService.packages.map((pkg) => `${pkg.name} ${pkg.price}`).join(' · ')}</p></div><div><small>What is included</small><p>{activeService.deliverables}</p></div></div>
        <div className="service-visual-panel" aria-label={`${activeService.title} visual sample`}>
          {featureSamples.filter((sample) => sample.id === activeService.id).map((sample) => (
            <div className="service-visual-panel__mosaic" key={sample.id}>
              {sample.mosaic.map((tile, tileIndex) => (
                <img key={`${sample.id}-${tileIndex}`} className={`panel-art panel-art--${tileIndex + 1}`} src={tile} alt={`${sample.title} sample ${tileIndex + 1}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="package-table" aria-label={`${activeService.title} pricing guide`}>
          <div className="package-table__head"><span>Package</span><span>Price</span><span>Includes</span></div>
          {activeService.packages.map((pkg) => <div key={pkg.name} className={pkg.featured ? 'package-table__row package-table__row--featured' : 'package-table__row'}><div><strong>{pkg.name}</strong></div><div><span>{pkg.price}</span></div><div><small>{pkg.detail}</small></div></div>)}
        </div>
        <button className="button primary" type="button" onClick={() => { setActiveService(null); setBookingService(activeService); }}>Book this service <span>↗</span></button></article></div>}
        {bookingService && <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={() => setBookingService(null)}><article className="service-booking" onClick={(event) => event.stopPropagation()}><div className="detail-top"><span>BOOK SERVICE</span><button className="detail-close" onClick={() => setBookingService(null)} aria-label="Close booking form">Close</button></div><h3 id="booking-title">{bookingService.title}</h3><form className="booking-form booking-form--modal" onSubmit={submitBooking}><label>Your name<input name="name" required placeholder="Jane Smith" /></label><label>Email address<input name="email" required type="email" placeholder="you@company.com" /></label><label>Estimated budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>₱1,000 – ₱5,000</option><option>₱5,000 – ₱20,000</option><option>₱20,000 – ₱40,000</option><option>₱40,000+</option></select></label><label>Service<select name="service" value={bookingService.title}><option>{bookingService.title}</option></select></label><label className="full">Tell us about it<textarea name="details" required placeholder="A few lines about your goals, timeline or what you need..." /></label>{formError && <p className="form-error full" role="alert">{formError}</p>}<button className="button primary full" type="submit" disabled={sending}>{sending ? 'Sending inquiry...' : sent ? 'Inquiry Sent' : 'Book a service'} <span>↗</span></button></form></article></div>}
        </section>

        <section id="work" className="work wrap section-grid">
          <div className="section-kicker"><span>03</span><p>Mockup websites</p></div>
          <div className="work-content"><div className="section-heading"><div><h2>Websites that<br /><em>make room.</em></h2><p className="mockup-note">These are mockup websites only, not actual businesses. An actual business mockup is created upon request.</p></div><a className="text-link" href="#contact">Request a mockup <span>↗</span></a></div><div className="mockup-grid">{mockups.map((mockup, index) => <article className="mockup-card" key={mockup.name}><a className="mockup-browser" href={mockup.url} target="_blank" rel="noreferrer"><div className="browser-bar"><span /><span /><span /><small>View live mockup ↗</small></div><iframe src={mockup.url} title={`${mockup.name} website mockup`} loading="lazy" /></a><div className="project-meta"><h3><span>0{index + 1}</span>{mockup.name}</h3><p>{mockup.type}</p></div></article>)}</div></div>
        </section>

        <section id="products" className="products wrap section-grid">
          <div className="section-kicker"><span>04</span><p>Digital books</p></div>
          <div className="products-content"><div className="section-heading"><div><h2>Ideas you can<br /><em>take with you.</em></h2><p className="mockup-note">Practical digital guides, planners and prompt libraries for building, working and creating with more clarity.</p></div><a className="text-link" href="https://acdhcreatives.gumroad.com/" target="_blank" rel="noreferrer">Shop all books <span>↗</span></a></div><div className="product-grid">{products.map((product, index) => <a className="product-card" href={product.url} target="_blank" rel="noreferrer" key={product.title}><div className={`product-cover ${product.tone}`}><span className="cover-index">0{index + 1}</span><span className="cover-brand">ACDH / DIGITAL EDITIONS</span><strong>{product.title}</strong><small>{product.subtitle}</small><i>↗</i></div><div className="product-meta"><h3>{product.tag}</h3><p>View on Gumroad</p></div></a>)}</div></div>
        </section>

        <section id="contact" className="contact wrap"><div className="contact-top"><p className="eyebrow"><span className="pulse" /> Let’s make something considered</p><h2>Have a project<br /><em>in mind?</em></h2><p className="contact-copy">Tell us what you’re building. We’ll help you find the clearest, most useful way to bring it to life. Replies are available every day.</p></div><form className="booking-form" onSubmit={submitBooking}><div className="form-title"><span>Start a service inquiry</span><small>Replies available every day</small></div><label>Your name<input name="name" required placeholder="Jane Smith" /></label><label>Email address<input name="email" required type="email" placeholder="you@company.com" /></label><label>What can I help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Branding & identity</option><option>Marketing & social media</option><option>Documents & presentations</option><option>Digital & creative artwork</option><option>Marketing plan & business support</option><option>Website development</option></select></label><label>Estimated budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>₱1,000 – ₱5,000</option><option>₱5,000 – ₱20,000</option><option>₱20,000 – ₱40,000</option><option>₱40,000+</option></select></label><label className="full">Tell us about it<textarea name="details" required placeholder="A few lines about your goals, timeline or what you need..." /></label>{formError && <p className="form-error full" role="alert">{formError}</p>}<button className="button primary full" type="submit" disabled={sending}>{sending ? 'Sending inquiry...' : sent ? 'Inquiry Sent' : 'Book a service'} <span>↗</span></button></form></section>
      </main>

      <footer className="footer wrap"><a href="#top" className="logo-link"><img className="logo logo-dark" src={logoDark} alt="ACDH Creatives" /><img className="logo logo-light" src={logoLight} alt="ACDH Creatives" /></a><p>ACDH Creatives<br />Creative & digital services</p><div className="footer-links"><a href="mailto:acdh.creatives@gmail.com">Email ↗</a><a href="#top">Back to top ↑</a></div><small>© 2025 ACDH Creative Studio</small></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)