import { createRoot } from 'react-dom/client'
import './social-engine.css'
import logoDark from '../8.png'
import socialImage from '../social media.jpeg'
import { PromoTimer } from './promo-timer'

const website = 'https://acdhcreatives.vercel.app/'
const contact = `${website}#contact`

const platforms = ['f', '◎', 'G', '@', 'X', '▶']
const contentSystem = [
  ['01', 'Content direction', 'Turn scattered ideas into a recognizable visual system.', ['Content pillars', 'Visual direction', 'Campaign themes']],
  ['02', 'Social design', 'Create polished, on-brand posts that are easy to publish.', ['Promotional graphics', 'Announcement posts', 'Story templates']],
  ['03', 'Campaign planning', 'Give every post a job inside a clear monthly rhythm.', ['Content calendar', 'Campaign concepts', 'Post sequencing']],
  ['04', 'Message clarity', 'Shape the words and visuals around the people you want to reach.', ['Captions', 'Calls to action', 'Audience-first messaging']],
  ['05', 'Basic monitoring', 'Learn what is landing and use it to improve the next cycle.', ['Basic monitoring', 'Content observations', 'Next-step recommendations']],
]

const journey = [
  ['01', 'Audit', 'Review your current content, audience and visual patterns.'],
  ['02', 'Plan', 'Choose the themes, offers and content rhythm that fit your goals.'],
  ['03', 'Create', 'Develop the graphics, captions and templates for the campaign.'],
  ['04', 'Publish', 'Receive organized, ready-to-use assets for your channels.'],
  ['05', 'Improve', 'Use observations from the cycle to make the next one stronger.'],
]

const reasons = [
  ['Stay visible', 'Keep your business present without posting randomly.'],
  ['Look consistent', 'Make every channel feel like the same recognizable brand.'],
  ['Earn attention', 'Lead with useful, relevant content instead of noise.'],
  ['Promote clearly', 'Turn offers and announcements into easy-to-understand messages.'],
  ['Build momentum', 'Create a repeatable system your business can keep using.'],
]

function SocialEngine() {
  return (
    <main className="social-newsletter">
      <header className="social-nav">
        <a href={website}><img src={logoDark} alt="ACDH Creatives" /></a>
        <span>SOCIAL ENGINE / 02</span>
        <a href={contact}>Plan your content <b>+</b></a>
      </header>
      <PromoTimer newsletter="social-engine" />

      <section className="social-hero">
        <div className="social-hero-copy">
          <p className="eyebrow"><i /> ACDH CREATIVES / CONTENT MARKETING SYSTEM</p>
          <p className="hero-index">01 / 10</p>
          <h1>Social media<br /><em>with direction.</em></h1>
          <p className="lead">Turn attention into qualified leads with content that looks consistent, sounds clear and moves people to act.</p>
          <p className="muted">Social Engine is an on-brand content system for businesses that need reliable promotional posts, campaign ideas, captions, calendars and templates without losing their visual identity.</p>
          <a className="social-button" href={contact}>Build your social engine <span>-&gt;</span></a>
        </div>
        <div className="social-hero-visual"><div className="visual-glow" /><div className="platform-row">{platforms.map((platform, index) => <span key={`${platform}-${index}`}>{platform}</span>)}</div><img src={socialImage} alt="Social media content system" /><span className="visual-label">ACDH / CONTENT SYSTEM</span></div>
      </section>

      <div className="social-marquee">CONTENT <b>*</b> CAMPAIGNS <b>*</b> CAPTIONS <b>*</b> CALENDARS <b>*</b> COMMUNITY <b>*</b> CONTENT <b>*</b></div>

      <section className="social-section problem-section"><div className="section-number">02 / THE PROBLEM</div><div><h2>Does your content feel<br /><em>different every time?</em></h2><p className="muted section-intro">Your business may be active online, but activity without direction is difficult to sustain.</p><div className="problem-grid">{['Posting only when there is free time', 'Graphics that do not feel connected', 'No clear content themes or pillars', 'Captions without a strong call to action', 'Promotions getting lost in the feed', 'No repeatable content calendar'].map((item) => <div key={item}><b>x</b><span>{item}</span></div>)}</div><div className="result-line"><span>The result?</span><strong>Your business spends time creating content without building the recognition, trust or inquiries it deserves.</strong></div></div></section>

      <section className="solution-section"><p className="eyebrow"><i /> 03 / THE SOLUTION</p><h2>Make every post part of a<br /><em>bigger content system.</em></h2><p>At <strong>ACDH Creatives</strong>, we connect your message, visual direction and publishing rhythm so your audience can recognize what you do and understand why it matters.</p><strong className="solution-statement">We do not just make graphics.<br />We build a clearer way for your business to stay visible.</strong></section>

      <section className="social-section included-section"><div className="section-number">04 / WHAT IS INCLUDED</div><div><p className="eyebrow"><i /> Social Engine system</p><h2>Content that works<br /><em>together.</em></h2><div className="included-grid">{contentSystem.map(([number, title, text, items]) => <article key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="journey-section"><div className="section-number">05 / YOUR CONTENT JOURNEY</div><div><p className="eyebrow"><i /> From scattered -&gt; structured -&gt; seen</p><h2>A repeatable rhythm<br /><em>for staying visible.</em></h2><div className="journey-list">{journey.map(([number, title, text], index) => <div key={number} className="journey-step"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index < journey.length - 1 && <b>↓</b>}</div>)}</div></div></section>

      <section className="package-section social-section"><div className="section-number">06 / PACKAGE SECTION</div><div><p className="eyebrow"><i /> Choose your content level</p><h2>Start with a rhythm.<br /><em>Grow with confidence.</em></h2><div className="package-table"><div className="package-head"><span>Package</span><span>Price</span><span>Best for</span></div><div><strong>Social Starter</strong><b>PHP 2,000</b><span>Businesses starting a consistent posting system</span></div><div><strong>Social Growth</strong><b>PHP 4,000</b><span>Businesses ready for a fuller monthly content series</span></div><div className="package-pro"><strong>Social Pro <em>Priority</em></strong><b>PHP 7,500</b><span>Businesses ready for priority production and optimization</span></div></div><div className="package-cards"><article><h3>Social Starter</h3><strong>PHP 2,000</strong><p>For businesses that need a reliable starting rhythm.</p><b>Includes</b><p>8 social designs / Basic templates / Content direction / Basic scheduling</p></article><article><h3>Social Growth</h3><strong>PHP 4,000</strong><p>For businesses ready to build a stronger monthly presence.</p><b>Includes</b><p>Full monthly campaign calendar / Content series / Captions / Story templates</p></article><article className="pro-card"><h3>Social Pro <em>Priority</em></h3><strong>PHP 7,500</strong><p>For businesses that want priority content production and refinement.</p><b>Includes</b><p>Priority production / Campaign optimization / Expanded content system / Basic monitoring</p></article></div></div></section>

      <section className="before-after-section"><div className="section-number">07 / BEFORE / AFTER</div><div><p className="eyebrow"><i /> The difference is in the system</p><h2>From random posts<br /><em>to real momentum.</em></h2><div className="comparison"><article><span>Before</span><h3>Posting</h3>{['Random graphics', 'Mixed visual styles', 'Last-minute captions', 'No clear rhythm'].map((item) => <p key={item}>{item}</p>)}<b>↓</b></article><article className="after-card"><span>After</span><h3>Building</h3>{['Content pillars', 'Consistent visual system', 'Clear calls to action', 'Repeatable calendar', 'Measured improvement'].map((item) => <p key={item}>{item}</p>)}</article></div><strong className="comparison-footer">That is the difference between being active online and building an audience.</strong></div></section>

      <section className="reasons-section social-section"><div className="section-number">08 / WHY SOCIAL ENGINE</div><div><p className="eyebrow"><i /> A stronger content system helps you</p><h2>Show up with<br /><em>more intention.</em></h2><div className="reason-list">{reasons.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="approach-section"><p className="eyebrow"><i /> 09 / THE ACDH APPROACH</p><h2>Message first.<br /><em>Design with purpose.</em></h2><p>We start with what your audience needs to understand, then shape the visual system, content rhythm and calls to action around that message. The result is content that is easier to recognize, easier to manage and more useful to your business.</p><strong>INSIGHT <span>-&gt;</span> MESSAGE <span>-&gt;</span> CONTENT <span>-&gt;</span> MOMENTUM</strong></section>

      <section className="launch-section"><div className="launch-mark">*</div><p className="eyebrow">10 / START YOUR SOCIAL ENGINE</p><h2>Ready to make<br /><em>content count?</em></h2><p className="muted">Choose the Social Engine package that fits your current stage, then give your business a clearer way to stay visible online.</p><a className="social-button" href={contact}>Plan your content <span>-&gt;</span></a><p className="launch-note">Replies available every day / Batangas, PH</p></section>

      <footer className="social-footer"><img src={logoDark} alt="ACDH Creatives" /><p className="eyebrow">INNOVATION THROUGH INSIGHT</p><h2>Make your message<br /><em>easy to remember.</em></h2><p className="muted">ACDH Creatives helps growing businesses turn scattered ideas into useful branding, marketing and digital systems.</p><strong>Branding / Marketing / Design / Digital</strong><a className="social-button" href={contact}>Build your social engine <span>-&gt;</span></a></footer>
    </main>
  )
}

createRoot(document.getElementById('social-engine-root')).render(<SocialEngine />)
