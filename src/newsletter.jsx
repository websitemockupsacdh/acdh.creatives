import { createRoot } from 'react-dom/client'
import './newsletter.css'
import logoDark from '../8.png'

const website = 'https://acdhcreatives.vercel.app/'
const email = 'mailto:acdh.creatives@gmail.com'
const contact = `${website}#contact`
const shop = 'https://acdhcreatives.gumroad.com/'

const services = [
  ['01', 'Branding & identity', 'A credible visual system for every place your business shows up.'],
  ['02', 'Marketing & social', 'Consistent content and campaigns that keep your business visible.'],
  ['03', 'Documents & decks', 'Clear proposals, profiles and presentations ready to share.'],
  ['04', 'Website development', 'A responsive home online, built to turn attention into inquiries.'],
]

const products = [
  ['The Digital Product Blueprint', 'Create, launch & scale digital products that sell', '46-page ebook', 'https://acdhcreatives.gumroad.com/l/digital-product-blueprint?layout=profile'],
  ['ChatGPT for Work', '500 prompts that save you hours every week', '500 prompts', 'https://acdhcreatives.gumroad.com/l/chatgpt-for-work-500-prompts?layout=profile'],
  ['Start Smart', '15 things to do before starting a business', '62-page ebook', 'https://acdhcreatives.gumroad.com/l/startsmartbusiness?layout=profile'],
]

const recipientName = new URLSearchParams(window.location.search).get('name') || 'there'

function Newsletter() {
  return (
    <main className="newsletter-shell">
      <table className="email" role="presentation" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr><td className="email-header"><a href={website}><img src={logoDark} alt="ACDH Creatives" /></a><a className="view-link" href={website}>View website ↗</a></td></tr>
          <tr><td className="hero-block"><p className="greeting">Hi {recipientName}!</p><p className="eyebrow"><span /> Notes from the studio · 01</p><h1>I have exciting<br /><em>news for you.</em></h1><p className="hero-copy">ACDH Creatives is ready to help with useful design, sharper marketing and digital tools for the next thing you are building.</p><a className="button" href={contact}>Start a project <strong>↗</strong></a></td></tr>
          <tr><td className="ticker">BRANDING <b>✳</b> MARKETING <b>✳</b> WEB DEVELOPMENT <b>✳</b> DIGITAL PRODUCTS</td></tr>
          <tr><td className="content-block"><p className="kicker">What is new</p><h2>Make your next<br /><em>move clearer.</em></h2><p className="body-copy">Whether you need a stronger first impression, a website that earns trust or a practical guide to get unstuck, we build creative support around the way you actually work.</p><table className="service-table" role="presentation"> <tbody>{services.map(([number, title, text]) => <tr key={number}><td className="service-number">{number}</td><td><h3>{title}</h3><p>{text}</p></td><td className="service-arrow">↗</td></tr>)}</tbody></table><a className="text-link" href={`${website}#services`}>Explore all services <span>↗</span></a></td></tr>
          <tr><td className="promo-block"><p className="kicker">Studio promo · limited slots</p><h2>Bring the rough idea.<br /><em>We will shape it.</em></h2><p className="body-copy">Book a service inquiry and tell us what you are building. We will help you find the clearest, most useful way to bring it to life.</p><a className="button" href={contact}>Book a service <strong>↗</strong></a><p className="promo-note">Replies available every day · Batangas, PH</p></td></tr>
          <tr><td className="content-block product-block"><p className="kicker">Digital editions</p><h2>Useful ideas,<br /><em>take them with you.</em></h2><p className="body-copy">Practical ebooks, planners and prompt libraries for building, working and creating with more clarity.</p><table className="product-table" role="presentation"><tbody>{products.map(([title, subtitle, tag, url], index) => <tr key={title}><td className={`product-art art-${index + 1}`}><span>0{index + 1}</span><strong>{tag}</strong></td><td><h3>{title}</h3><p>{subtitle}</p><a href={url}>Shop edition ↗</a></td></tr>)}</tbody></table><a className="text-link" href={shop}>Shop all digital books <span>↗</span></a></td></tr>
          <tr><td className="email-footer"><a href={website}><img src={logoDark} alt="ACDH Creatives" /></a><p>Creative & digital services<br />Batangas, Philippines</p><p><a href={email}>acdh.creatives@gmail.com</a><br /><a href={contact}>Contact ACDH Creatives ↗</a></p><div className="footer-nav"><a href={website}>Website</a><a href={`${website}#services`}>Services</a><a href={`${website}#work`}>Mockup websites</a><a href={shop}>Digital books</a></div><small>You are receiving this newsletter from ACDH Creatives. <a href={email}>Reply to this email</a> to get in touch.</small></td></tr>
        </tbody>
      </table>
    </main>
  )
}

createRoot(document.getElementById('newsletter-root')).render(<Newsletter />)
