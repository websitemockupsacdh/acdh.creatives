import { useEffect, useState } from 'react'
import './promo-timer.css'

const duration = 7 * 24 * 60 * 60 * 1000

export function PromoTimer({ newsletter }) {
  const storageKey = `acdh-promo-start-${newsletter}`
  const [remaining, setRemaining] = useState(duration)

  useEffect(() => {
    const queryStart = Number(new URLSearchParams(window.location.search).get('promoStart'))
    const storedStart = Number(window.localStorage.getItem(storageKey))
    const start = queryStart || storedStart || Date.now()
    if (queryStart || !storedStart) window.localStorage.setItem(storageKey, String(start))

    const update = () => setRemaining(Math.max(0, duration - (Date.now() - start)))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [storageKey])

  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return <aside className={`promo-timer${remaining === 0 ? ' promo-timer--ended' : ''}`} aria-live="polite"><span>50% launch promo</span><strong>{remaining === 0 ? 'Offer ended' : `${days}d ${hours}h ${minutes}m ${seconds}s`}</strong><small>Starts when you open this newsletter · valid for 7 days</small></aside>
}
