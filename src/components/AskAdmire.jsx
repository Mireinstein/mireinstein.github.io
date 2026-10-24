import { useEffect, useRef, useState } from "react"
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

const WAVES_PER_BURST = 3
const PAUSE_BETWEEN_BURSTS_MS = 3500

// "Guy waving" by Suhayra Sarwar (LottieFiles, Lottie Simple License), with the
// mouth redrawn as a smile. `head` crops to the face and waving hand for the
// small round spots; the crop itself lives in the CSS.
const Avatar = ({ head = false }) => {
  const ref = useRef(null)

  useEffect(() => {
    let anim
    let timer
    let cancelled = false
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Loaded on demand so the player never weighs down the first paint
    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled || !ref.current) return
      anim = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: !still,
        path: "/ask-avatar.json",
      })
      // Waving in bursts with a rest in between catches the eye each time it
      // starts again, where a constant loop fades into the background
      let waves = 0
      anim.addEventListener("loopComplete", () => {
        if (++waves % WAVES_PER_BURST) return
        anim.pause()
        timer = setTimeout(() => anim.play(), PAUSE_BETWEEN_BURSTS_MS)
      })
    })

    return () => {
      cancelled = true
      clearTimeout(timer)
      anim?.destroy()
    }
  }, [])

  return (
    <span className={`ask-avatar__face ${head ? "ask-avatar__face--head" : ""}`} aria-hidden="true">
      <span ref={ref} className="ask-avatar__lottie" />
    </span>
  )
}

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
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        >
          <Avatar head={docked} />
          {!docked && (
            <motion.span
              className="ask-avatar__bubble"
              initial={{ opacity: 0, scale: 0.8, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.3 }}
            >
              Hi! Ask me anything about Admire
            </motion.span>
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
            <Avatar head />
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
