import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  { number: '01', title: 'Branding & identity', text: 'Logos, color systems, typography and practical brand guidelines for a credible first impression.', application: 'For startups, contractors and growing teams that need one consistent identity across logos, uniforms, signage, documents and social profiles.', packages: 'Brand Starter ₱2,500 · Brand Builder ₱5,000 · Brand Pro ₱9,000', deliverables: 'Logo system, color palette, font pairing, business cards, profile and cover assets, plus brand guidelines.' },
  { number: '02', title: 'Marketing & social', text: 'On-brand content systems, pubmats, campaigns and calendars that keep your business visible.', application: 'For local businesses that need a reliable stream of promotional, announcement and social media content.', packages: 'Social Starter ₱2,000 · Social Growth ₱4,000 · Social Pro ₱7,500', deliverables: '8 to 30 social designs, captions, content calendars, campaign concepts, story templates and basic monitoring.' },
  { number: '03', title: 'Documents & decks', text: 'Polished proposals, pitch decks, company profiles and corporate materials ready to present.', application: 'For teams preparing a client proposal, company profile, thesis, pitch deck or presentation that needs to feel clear and credible.', packages: 'Document Basic ₱1,250 · Presentation Pro ₱2,500 · Corporate Presentation ₱5,000', deliverables: 'Up to 10, 20 or 40 pages/slides with layout, graphics, image editing, infographics and branded templates.' },
  { number: '04', title: 'Digital & creative art', text: 'Custom illustration, mural concepts, 3D visualization and artwork built to stand out.', application: 'For brands, spaces and personal projects that need a custom visual, illustration, mural concept or presentation-ready artwork.', packages: 'Creative Basic ₱1,000 · Creative Custom ₱2,500 · Art & Mural Pro from ₱6,000', deliverables: 'Custom composition, multiple elements, backgrounds, high-resolution files, perspective presentation and client mockups.' },
  { number: '05', title: 'Marketing strategy', text: 'Market analysis, positioning and measurable roadmaps that turn good ideas into action.', application: 'For businesses ready to understand their audience, sharpen their positioning and turn marketing into a measurable plan.', packages: 'Marketing Starter ₱2,500 · Marketing Growth ₱5,000 · Strategy Pro ₱10,000', deliverables: 'Market and competitor analysis, target customer profile, positioning, content plan, KPIs and a 30 or 90-day roadmap.' },
  { number: '06', title: 'Website development', text: 'Responsive business websites with galleries, inquiry systems, SEO structure and deployment.', application: 'For construction firms, service providers and startups that need a professional online presence and a clear path for inquiries.', packages: 'Website Starter ₱12,500 · Business Website Pro ₱18,500 · Complete Digital Presence ₱30,000', deliverables: 'Responsive pages, portfolio and services showcase, inquiry form, maps, social integration, domain connection and deployment.' },
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

function App() {
  const [light, setLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [activeService, setActiveService] = useState(null)

  const submitBooking = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `New service inquiry from ${data.get('name')}`
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nBudget: ${data.get('budget')}\n\nProject details:\n${data.get('details')}`
    window.location.href = `mailto:acdh.creatives@gmail.com,decastro.monica.santoc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className={light ? 'site light' : 'site'}>
      <div className="grain" />
      <header className="nav wrap">
        <a href="#top" className="logo-link"><img className="logo logo-dark" src="/8.png" alt="ACDH Creatives" /><img className="logo logo-light" src="/2.png" alt="ACDH Creatives" /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'} <i /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Mockup websites</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Digital books</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="mode-toggle" onClick={() => setLight(!light)} aria-label="Toggle color mode"><b>{light ? '☾' : '☼'}</b></button>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="pulse" /> Freelance creative studio · Batangas, PH</p>
            <h1>Ideas with<br /><em>structure.</em></h1>
            <p className="hero-intro">I’m Monica De Castro — a civil engineering graduate, designer and marketer helping growing businesses look credible, communicate clearly and move forward.</p>
            <div className="hero-actions"><a className="button primary" href="#contact">Start a project <span>↗</span></a><a className="text-link" href="#work">See mockup websites <span>↓</span></a></div>
          </div>
          <div className="hero-art reveal delay-one" aria-label="Abstract layered glass artwork">
            <div className="art-orbit" /><div className="art-card card-a">ACDH<br /><strong>CREATIVE</strong></div><div className="art-card card-b">DESIGN<br />THAT<br /><strong>WORKS</strong></div><div className="art-line" /><div className="glass-chip chip-a">GLASS / 01</div><div className="glass-chip chip-b">BUILD<br />BETTER</div>
            <span className="art-label">01 / 04<br /><b>Form follows function</b></span>
          </div>
        </section>

        <section className="ticker"><div>BRANDING <span>✳</span> MARKETING <span>✳</span> WEB DEVELOPMENT <span>✳</span> DOCUMENTATION <span>✳</span> STRATEGY <span>✳</span></div></section>

        <section id="about" className="about wrap section-grid">
          <div className="section-kicker"><span>01</span><p>About Monica</p></div>
          <div className="about-content"><h2>The technical eye<br /><em>behind the creative.</em></h2><div className="about-columns"><p>My work sits where construction documentation, brand development and digital marketing meet. Studying engineering while working in construction marketing taught me to bring both precision and imagination to the table.</p><p>I care about the details people feel: a clear deck, a considered identity, a website that earns trust. Every project is organized to be useful, not just beautiful.</p></div><div className="stats"><div><strong>06</strong><span>creative disciplines</span></div><div><strong>02</strong><span>ways of thinking</span></div><div><strong>∞</strong><span>room to build</span></div></div></div>
        </section>

        <section id="services" className="services wrap section-grid">
          <div className="section-kicker"><span>02</span><p>What I do</p></div>
          <div className="services-content"><div className="section-heading"><h2>Useful creativity,<br /><em>built around you.</em></h2><p>Tap a service to see exactly what it can do, what is included and where the sample pricing starts.</p></div><div className={activeService ? 'service-list service-list-active' : 'service-list'}>{services.map((service) => { const selected = activeService?.number === service.number; return <button className={selected ? 'service service-selected' : 'service'} style={activeService ? (selected ? { opacity: .62, transform: 'translateX(-8px) scale(.98)' } : { opacity: .24, filter: 'blur(1.5px)', transform: 'translateX(-16px) scale(.97)' }) : undefined} aria-hidden={activeService ? !selected : undefined} key={service.number} onClick={() => setActiveService(service)}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></button> })}</div>{activeService && <article className="service-detail" key={activeService.number}><div className="detail-top"><span>{activeService.number} / SERVICE DETAIL</span><button className="detail-close" onClick={() => setActiveService(null)} aria-label="Back to all services">← Back</button></div><h3>{activeService.title}</h3><div className="detail-columns"><div><small>Best applied to</small><p>{activeService.application}</p></div><div><small>Sample price guide</small><p>{activeService.packages}</p></div><div><small>What is included</small><p>{activeService.deliverables}</p></div></div><a className="button primary" href="#contact" onClick={() => setActiveService(null)}>Book this service <span>↗</span></a></article>}</div>
        </section>

        <section id="work" className="work wrap section-grid">
          <div className="section-kicker"><span>03</span><p>Mockup websites</p></div>
          <div className="work-content"><div className="section-heading"><div><h2>Websites that<br /><em>make room.</em></h2><p className="mockup-note">These are mockup websites only, not actual businesses. An actual business mockup is created upon request.</p></div><a className="text-link" href="#contact">Request a mockup <span>↗</span></a></div><div className="mockup-grid">{mockups.map((mockup, index) => <article className="mockup-card" key={mockup.name}><a className="mockup-browser" href={mockup.url} target="_blank" rel="noreferrer"><div className="browser-bar"><span /><span /><span /><small>View live mockup ↗</small></div><iframe src={mockup.url} title={`${mockup.name} website mockup`} loading="lazy" /></a><div className="project-meta"><h3><span>0{index + 1}</span>{mockup.name}</h3><p>{mockup.type}</p></div></article>)}</div></div>
        </section>

        <section id="products" className="products wrap section-grid">
          <div className="section-kicker"><span>04</span><p>Digital books</p></div>
          <div className="products-content"><div className="section-heading"><div><h2>Ideas you can<br /><em>take with you.</em></h2><p className="mockup-note">Practical digital guides, planners and prompt libraries for building, working and creating with more clarity.</p></div><a className="text-link" href="https://acdhcreatives.gumroad.com/" target="_blank" rel="noreferrer">Shop all books <span>↗</span></a></div><div className="product-grid">{products.map((product, index) => <a className="product-card" href={product.url} target="_blank" rel="noreferrer" key={product.title}><div className={`product-cover ${product.tone}`}><span className="cover-index">0{index + 1}</span><span className="cover-brand">ACDH / DIGITAL EDITIONS</span><strong>{product.title}</strong><small>{product.subtitle}</small><i>↗</i></div><div className="product-meta"><h3>{product.tag}</h3><p>View on Gumroad</p></div></a>)}</div></div>
        </section>

        <section id="contact" className="contact wrap"><div className="contact-top"><p className="eyebrow"><span className="pulse" /> Let’s make something considered</p><h2>Have a project<br /><em>in mind?</em></h2><p className="contact-copy">Tell me what you’re building. I’ll help you find the clearest, most useful way to bring it to life. Replies are available every day.</p></div><form className="booking-form" onSubmit={submitBooking}><div className="form-title"><span>Start a service inquiry</span><small>Replies available every day</small></div><label>Your name<input name="name" required placeholder="Jane Smith" /></label><label>Email address<input name="email" required type="email" placeholder="you@company.com" /></label><label>What can I help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Branding & identity</option><option>Marketing & social media</option><option>Documents & presentations</option><option>Digital & creative artwork</option><option>Marketing plan & business support</option><option>Website development</option></select></label><label>Estimated budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>₱1,000 – ₱5,000</option><option>₱5,000 – ₱20,000</option><option>₱20,000 – ₱40,000</option><option>₱40,000+</option></select></label><label className="full">Tell me about it<textarea name="details" required placeholder="A few lines about your goals, timeline or what you need..." /></label><button className="button primary full" type="submit">{sent ? 'Opening your email client...' : 'Book a service'} <span>↗</span></button></form></section>
      </main>

      <footer className="footer wrap"><a href="#top" className="logo-link"><img className="logo logo-dark" src="/8.png" alt="ACDH Creatives" /><img className="logo logo-light" src="/2.png" alt="ACDH Creatives" /></a><p>Monica De Castro<br />Creative & digital services</p><div className="footer-links"><a href="mailto:acdh.creatives@gmail.com">Email ↗</a><a href="https://facebook.com/decastro.monica.santoc" target="_blank" rel="noreferrer">Facebook ↗</a><a href="#top">Back to top ↑</a></div><small>© 2025 ACDH Creative Studio</small></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)