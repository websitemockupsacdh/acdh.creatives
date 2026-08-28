import { createRoot } from 'react-dom/client'
import './start-your-brand.css'
import logoDark from '../8.png'
import brandImage from '../branding_Acdh.jpeg'
import { PromoTimer } from './promo-timer'

const website = 'https://acdhcreatives.vercel.app/'
const contact = `${website}#contact`

const included = [
  ['01', 'Logo system', 'Create a recognizable visual mark for your business.', ['Primary logo', 'Secondary logo / variation', 'Logo usage direction']],
  ['02', 'Color system', 'A carefully selected palette that reflects your personality.', ['Primary colors', 'Secondary colors', 'HEX / RGB / CMYK references']],
  ['03', 'Typography', 'Establish a consistent typographic hierarchy.', ['Primary typeface', 'Secondary typeface', 'Heading and body styles']],
  ['04', 'Visual style', 'Define how your brand should look and feel.', ['Graphic style', 'Image direction', 'Layout principles', 'Visual references']],
  ['05', 'Brand applications', 'Extend your identity into actual business materials.', ['Business cards', 'Letterheads', 'Social media', 'Documents', 'Signage', 'Uniforms']],
]

const journey = [
  ['01', 'Discover', 'Understand your business, audience and positioning.'],
  ['02', 'Define', 'Establish your visual direction and personality.'],
  ['03', 'Design', 'Develop your logo, colors, typography and visual system.'],
  ['04', 'Develop', 'Apply the identity across your business materials.'],
  ['05', 'Deliver', 'Receive a cohesive brand system ready for use.'],
]

const reasons = [
  ['Look professional', 'Create a stronger first impression.'],
  ['Build trust', 'Consistency makes your business feel established.'],
  ['Become recognizable', 'Make your business easier to remember.'],
  ['Stand out', 'Differentiate yourself from competitors.'],
  ['Grow consistently', 'Give future marketing a clear visual direction.'],
]

function BrandNewsletter() {
  return (
    <main className="brand-newsletter">
      <header className="brand-nav">
        <a href={website}><img src={logoDark} alt="ACDH Creatives" /></a>
        <span>BRAND GUIDE / 01</span>
        <a href={contact}>Start your brand <b>+</b></a>
      </header>
      <PromoTimer newsletter="start-your-brand" />

      <section className="brand-hero">
        <div className="hero-copy">
          <p className="eyebrow"><i /> ACDH CREATIVES / INNOVATION THROUGH INSIGHT</p>
          <p className="hero-index">01 / 11</p>
          <h1>Your brand is<br /><em>more than a logo.</em></h1>
          <p className="lead">Build an identity that people remember, recognize and trust.</p>
          <p className="muted">Your business deserves more than a logo placed on a social media post. A strong brand creates consistency across every touchpoint, from your colors and documents to your signage and customer experience.</p>
          <a className="brand-button" href={contact}>Build your brand <span>-&gt;</span></a>
        </div>
        <div className="hero-visual"><div className="visual-glow" /><img src={brandImage} alt="ACDH Creatives brand identity artwork" /><span className="visual-label">ACDH / IDENTITY SYSTEM</span></div>
      </section>

      <div className="brand-marquee">BRANDING <b>*</b> STRATEGY <b>*</b> IDENTITY <b>*</b> IMPACT <b>*</b> BRANDING <b>*</b></div>

      <section className="brand-section problem-section">
        <div className="section-number">02 / THE PROBLEM</div>
        <div><h2>Does your brand look<br /><em>different everywhere?</em></h2><p className="muted section-intro">Your logo may look great, but branding goes beyond the logo.</p><div className="problem-grid">{['Different fonts across your materials', 'Inconsistent colors', 'Social media graphics with no visual direction', 'Business cards that do not match your website', 'No clear brand personality', 'Customers struggling to recognize your business'].map((item) => <div key={item}><b>x</b><span>{item}</span></div>)}</div><div className="result-line"><span>The result?</span><strong>Your business can look less established, less professional and less memorable than it actually is.</strong></div></div>
      </section>

      <section className="solution-section"><p className="eyebrow"><i /> 03 / THE SOLUTION</p><h2>Turn your business into a<br /><em>recognizable brand.</em></h2><p>At <strong>ACDH Creatives</strong>, we create visual identity systems designed to make your business look consistent, professional and unmistakably yours.</p><strong className="solution-statement">We do not just design individual graphics.<br />We build the visual foundation your business can grow on.</strong></section>

      <section className="brand-section included-section"><div className="section-number">04 / WHAT IS INCLUDED</div><div><p className="eyebrow"><i /> Branding & identity</p><h2>The pieces that make<br /><em>you recognizable.</em></h2><div className="included-grid">{included.map(([number, title, text, items]) => <article key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="journey-section"><div className="section-number">05 / YOUR BRANDING JOURNEY</div><div><p className="eyebrow"><i /> From idea -&gt; identity -&gt; impact</p><h2>A clear path from<br /><em>rough to ready.</em></h2><div className="journey-list">{journey.map(([number, title, text], index) => <div key={number} className="journey-step"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index < journey.length - 1 && <b>↓</b>}</div>)}</div></div></section>

      <section className="package-section brand-section"><div className="section-number">06 / PACKAGE SECTION</div><div><p className="eyebrow"><i /> Choose your branding level</p><h2>Start where you are.<br /><em>Grow from there.</em></h2><div className="package-table"><div className="package-head"><span>Package</span><span>Regular</span><span>Launch price</span></div><div><strong>Brand Starter</strong><span><s>PHP 5,000</s></span><b>PHP 2,500</b></div><div><strong>Brand Builder</strong><span><s>PHP 10,000</s></span><b>PHP 5,000</b></div><div className="package-pro"><strong>Brand Pro <em>Priority</em></strong><span><s>PHP 18,000</s></span><b>PHP 9,000</b></div></div><div className="package-cards"><article><h3>Brand Starter</h3><strong>PHP 2,500</strong><p>For businesses that need a clean and professional starting point.</p><b>Includes</b><p>Primary logo / Secondary variation / Color palette / Font pairing / Style guide</p></article><article><h3>Brand Builder</h3><strong>PHP 5,000</strong><p>For growing businesses ready to establish a stronger visual identity.</p><b>Includes</b><p>3 logo concepts / Typography system / Letterhead / Business card design</p></article><article className="pro-card"><h3>Brand Pro <em>Priority</em></h3><strong>PHP 9,000</strong><p>For businesses looking for a complete and scalable identity system.</p><b>Includes</b><p>Full brand system / Document templates / Uniform and signage direction / Covers / Brand guide</p></article></div></div></section>

      <section className="before-after-section"><div className="section-number">07 / BEFORE / AFTER</div><div><p className="eyebrow"><i /> The difference is in the system</p><h2>From a business<br /><em>to a brand.</em></h2><div className="comparison"><article><span>Before</span><h3>A business</h3>{['Logo', 'Random colors', 'Different fonts', 'Inconsistent materials'].map((item) => <p key={item}>{item}</p>)}<b>↓</b></article><article className="after-card"><span>After</span><h3>A brand</h3>{['Logo system', 'Defined colors', 'Consistent typography', 'Professional applications', 'Recognizable identity'].map((item) => <p key={item}>{item}</p>)}</article></div><strong className="comparison-footer">That is the difference between having a logo and having a brand.</strong></div></section>

      <section className="reasons-section brand-section"><div className="section-number">08 / WHY BRANDING MATTERS</div><div><p className="eyebrow"><i /> A strong brand helps you</p><h2>Be remembered for<br /><em>the right reasons.</em></h2><div className="reason-list">{reasons.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="approach-section"><p className="eyebrow"><i /> 09 / THE ACDH APPROACH</p><h2>Strategy first.<br /><em>Design second.</em></h2><p>We believe great branding should not be based purely on aesthetics. Your identity should answer who you are, who you are trying to reach, what makes you different and how people should perceive your business.</p><strong>INSIGHT <span>-&gt;</span> STRATEGY <span>-&gt;</span> DESIGN <span>-&gt;</span> IDENTITY</strong></section>

      <section className="launch-section"><div className="launch-mark">*</div><p className="eyebrow">10 / LIMITED LAUNCH PROMO</p><h2>7-day brand<br /><em>launch promo.</em></h2><p className="launch-offer">UP TO <strong>50% OFF</strong></p><p className="muted">Branding packages starting at</p><strong className="launch-price">PHP 2,500</strong><p className="muted">instead of PHP 5,000</p><p className="launch-note">Limited promotional period.<br />50% down payment required to lock in promotional rate.</p><a className="brand-button" href={contact}>Start your brand <span>-&gt;</span></a></section>

      <footer className="brand-footer"><img src={logoDark} alt="ACDH Creatives" /><p className="eyebrow">INNOVATION THROUGH INSIGHT</p><h2>Your business has a story.<br /><em>Let us give it an identity.</em></h2><p className="muted">Whether you are launching a new business, rebranding an existing company or simply ready to look more professional, your visual identity is where the transformation begins.</p><strong>Branding / Marketing / Design / Digital</strong><a className="brand-button" href={contact}>Build a brand people remember <span>-&gt;</span></a></footer>
    </main>
  )
}

createRoot(document.getElementById('brand-newsletter-root')).render(<BrandNewsletter />)
