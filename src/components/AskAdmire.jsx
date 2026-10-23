import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CHAT_URL = "https://my-muse-wine.vercel.app"
const WIDE = "(min-width: 1280px)"

// Sits beside the About section on wide screens, docks to the corner otherwise
const useDocked = () => {
  const [docked, setDocked] = useState(() => !window.matchMedia(WIDE).matches)

  useEffect(() => {
    const wide = window.matchMedia(WIDE)
    const hero = document.getElementById("home")
    let heroVisible = true
    const update = () => setDocked(!wide.matches || !heroVisible)

    // Ignore the strip under the sticky nav, and dock once most of the hero is gone
    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.intersectionRatio >= 0.5
        update()
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: [0, 0.5, 1] },
    )
    if (hero) observer.observe(hero)
    wide.addEventListener("change", update)
    update()

    return () => {
      observer.disconnect()
      wide.removeEventListener("change", update)
    }
  }, [])

  return docked
}

const Avatar = () => (
  <svg viewBox="0 0 72 72" className="ask-avatar__face" aria-hidden="true">
    <circle cx="32" cy="40" r="24" className="ask-avatar__head" />
    <g className="ask-avatar__eyes">
      <circle cx="24" cy="37" r="3.2" />
      <circle cx="40" cy="37" r="3.2" />
    </g>
    <circle cx="18" cy="46" r="3.6" className="ask-avatar__cheek" />
    <circle cx="46" cy="46" r="3.6" className="ask-avatar__cheek" />
    <path d="M25 48 q7 6 14 0" className="ask-avatar__smile" />
    <ellipse cx="62" cy="20" rx="6.5" ry="8" className="ask-avatar__hand" />
  </svg>
)

const AskAdmire = () => {
  const docked = useDocked()
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const openChat = () => {
    setLoaded(true)
    setOpen(true)
  }

  return (
    <>
      {!open && (
        <motion.button
          layout
          type="button"
          onClick={openChat}
          className={`ask-avatar ${docked ? "ask-avatar--docked" : "ask-avatar--hero"}`}
          aria-label="Ask me anything about Admire"
          title="Ask me anything about Admire"
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          <Avatar />
          {!docked && (
            <span className="ask-avatar__bubble">Hi! Ask me anything about Admire</span>
          )}
        </motion.button>
      )}

      <aside
        className={`ask-panel ${open ? "ask-panel--open" : ""}`}
        aria-label="Ask Admire"
        aria-hidden={!open}
      >
        <div className="ask-panel__header">
          <span className="ask-panel__title">
            <Avatar />
            Ask Admire
          </span>
          <button
            type="button"
            className="ask-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            &times;
          </button>
        </div>
        {loaded && <iframe src={CHAT_URL} title="Ask Admire" className="ask-panel__frame" />}
      </aside>
    </>
  )
}

export default AskAdmire
