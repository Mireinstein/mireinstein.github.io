/**
 * @copyright 2025 Admire Madyira
 * @license Apache-2.0
 */

import { useState, useEffect, useRef } from 'react'

// ── Floating petal / emoji particle ──────────────────────────────────────────
const FLOWERS = ['🌸', '🌹', '🌷', '💐', '🌺', '🌼', '💮', '🌻', '💗', '💖', '💝', '✨', '⭐', '💫']

const randomBetween = (a, b) => Math.random() * (b - a) + a

const Petal = ({ id }) => {
  const style = {
    position: 'fixed',
    top: '-60px',
    left: `${randomBetween(0, 100)}vw`,
    fontSize: `${randomBetween(18, 38)}px`,
    animation: `fall ${randomBetween(4, 9)}s linear ${randomBetween(0, 6)}s infinite`,
    pointerEvents: 'none',
    zIndex: 0,
    userSelect: 'none',
  }
  return <span key={id} style={style}>{FLOWERS[id % FLOWERS.length]}</span>
}

// ── Sparkle cursor trail ──────────────────────────────────────────────────────
const SparkleTrail = () => {
  const [sparks, setSparks] = useState([])
  const counter = useRef(0)

  useEffect(() => {
    const onMove = (e) => {
      const id = counter.current++
      const spark = {
        id,
        x: e.clientX,
        y: e.clientY,
        symbol: FLOWERS[id % FLOWERS.length],
      }
      setSparks(prev => [...prev.slice(-20), spark])
      setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 800)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {sparks.map(s => (
        <span
          key={s.id}
          style={{
            position: 'fixed',
            left: s.x - 12,
            top: s.y - 12,
            fontSize: '20px',
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'sparkFade 0.8s ease-out forwards',
          }}
        >
          {s.symbol}
        </span>
      ))}
    </>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
const Valentines = () => {
  const [stage, setStage] = useState('intro')   // intro → reveal → yes
  const [noPos, setNoPos] = useState({ x: null, y: null })
  const noRef = useRef(null)

  const runAway = () => {
    const btnW = noRef.current?.offsetWidth  || 100
    const btnH = noRef.current?.offsetHeight || 44
    const maxX = window.innerWidth  - btnW - 16
    const maxY = window.innerHeight - btnH - 16
    setNoPos({
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    })
  }

  const petals = Array.from({ length: 25 }, (_, i) => i)

  return (
    <>
      {/* ── Global keyframes injected once ── */}
      <style>{`
        @keyframes fall {
          0%   { transform: translateY(-60px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh)  rotate(360deg); opacity: 0.6; }
        }
        @keyframes sparkFade {
          0%   { transform: scale(1.2) translateY(0);  opacity: 1; }
          100% { transform: scale(0.2) translateY(-30px); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.15); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.1); }
          70%       { transform: scale(1); }
        }
        @keyframes floatUp {
          0%   { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes glitter {
          0%,100% { opacity: 0.6; transform: scale(1)   rotate(0deg); }
          50%      { opacity: 1;   transform: scale(1.3) rotate(180deg); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 20px 4px rgba(255, 100, 150, 0.5); }
          50%     { box-shadow: 0 0 45px 12px rgba(255, 100, 150, 0.9); }
        }
        @keyframes yesBloom {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg);   opacity: 1; }
        }
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* ── Falling petals background ── */}
      {petals.map(i => <Petal key={i} id={i} />)}

      {/* ── Cursor sparkle trail ── */}
      <SparkleTrail />

      {/* ── Page wrapper ── */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: 'radial-gradient(ellipse at 50% 30%, #ffe0ec 0%, #ffc2d4 40%, #ffb3c6 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── INTRO stage ── */}
        {stage === 'intro' && (
          <div style={{ textAlign: 'center', animation: 'floatUp 0.8s ease both', zIndex: 10 }}>
            <div style={{ fontSize: '72px', animation: 'heartbeat 1.4s ease infinite', marginBottom: '1rem' }}>
              💝
            </div>
            <p style={{
              fontSize: '1.2rem',
              color: '#8b0042',
              fontStyle: 'italic',
              marginBottom: '2.5rem',
              letterSpacing: '0.05em',
            }}>
              Something special awaits you…
            </p>
            <button
              onClick={() => setStage('reveal')}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.25rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: '#fff',
                background: 'linear-gradient(270deg, #ff6b9d, #ff1a6c, #ff9ec8, #ff1a6c, #ff6b9d)',
                backgroundSize: '300% 100%',
                animation: 'shimmer 2.5s linear infinite, pulseGlow 2s ease-in-out infinite',
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10,
              }}
            >
              ✨ Click Here ✨
            </button>
            <div style={{ marginTop: '1.5rem', fontSize: '2rem' }}>
              {'🌸 🌷 🌹 🌺 🌸'.split(' ').map((f, i) => (
                <span key={i} style={{ animation: `glitter ${1 + i * 0.2}s ease-in-out infinite`, display: 'inline-block', margin: '0 4px' }}>{f}</span>
              ))}
            </div>
          </div>
        )}

        {/* ── REVEAL stage ── */}
        {stage === 'reveal' && (
          <div style={{ textAlign: 'center', maxWidth: '640px', animation: 'floatUp 0.7s ease both', zIndex: 10 }}>

            {/* Big animated heart */}
            <div style={{ fontSize: '90px', animation: 'heartbeat 1s ease infinite', marginBottom: '0.5rem' }}>
              💖
            </div>

            {/* Shiny headline */}
            <h1 style={{
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              fontWeight: '900',
              background: 'linear-gradient(270deg, #ff1a6c, #ff9ec8, #ff1a6c)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 2s linear infinite',
              marginBottom: '0.25rem',
            }}>
              Hey Dea 🌹
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#7a0033',
              lineHeight: '1.7',
              margin: '1.25rem 0 0.75rem',
              fontStyle: 'italic',
            }}>
              Of all the stars in the sky, all the flowers in the world,<br />
              and all the moments I could ever live —<br />
              every single one feels better with you in it. 🌸
            </p>

            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: '700',
              color: '#c9004a',
              margin: '1.5rem 0',
            }}>
              Will you be my Valentine? 💝
            </p>

            {/* Flower row */}
            <div style={{ fontSize: '2.2rem', margin: '0.75rem 0 2rem' }}>
              {'🌹 💐 🌷 🌸 🌺 🌼 🌸 🌷 💐 🌹'.split(' ').map((f, i) => (
                <span
                  key={i}
                  style={{
                    animation: `glitter ${1.2 + i * 0.15}s ease-in-out ${i * 0.1}s infinite`,
                    display: 'inline-block',
                    margin: '0 3px',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Yes / No buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => setStage('yes')}
                style={{
                  padding: '0.85rem 2.5rem',
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#fff',
                  background: 'linear-gradient(270deg, #ff1a6c, #ff6b9d, #ff1a6c)',
                  backgroundSize: '200% auto',
                  animation: 'shimmer 2s linear infinite, pulseGlow 1.5s ease-in-out infinite',
                  border: 'none',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  transform: 'scale(1)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Yes, of course! 💕
              </button>

              <button
                ref={noRef}
                onMouseEnter={runAway}
                onClick={runAway}
                style={{
                  padding: '0.5rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#aaa',
                  background: 'transparent',
                  border: '1.5px solid #ccc',
                  borderRadius: '999px',
                  cursor: 'not-allowed',
                  userSelect: 'none',
                  // Once first hovered, break out of flow and roam freely
                  ...(noPos.x !== null ? {
                    position: 'fixed',
                    left: noPos.x,
                    top:  noPos.y,
                    transition: 'left 0.15s cubic-bezier(0.34,1.56,0.64,1), top 0.15s cubic-bezier(0.34,1.56,0.64,1)',
                    zIndex: 9998,
                  } : {}),
                }}
              >
                No 🙅
              </button>
            </div>
          </div>
        )}

        {/* ── YES stage ── */}
        {stage === 'yes' && (
          <div style={{ textAlign: 'center', maxWidth: '680px', animation: 'yesBloom 0.7s cubic-bezier(0.34,1.56,0.64,1) both', zIndex: 10 }}>

            {/* Confetti hearts */}
            {Array.from({ length: 18 }, (_, i) => (
              <span key={i} style={{
                position: 'fixed',
                top: '-40px',
                left: `${randomBetween(5, 95)}vw`,
                fontSize: `${randomBetween(20, 40)}px`,
                animation: `confettiFall ${randomBetween(2, 5)}s linear ${randomBetween(0, 3)}s both`,
                pointerEvents: 'none',
                zIndex: 1,
              }}>
                {['💖','🌸','🌹','💗','🌷','✨','💝','⭐'][i % 8]}
              </span>
            ))}

            <div style={{ fontSize: '100px', animation: 'heartbeat 0.7s ease infinite', marginBottom: '0.5rem' }}>
              💖
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 7vw, 4rem)',
              fontWeight: '900',
              background: 'linear-gradient(270deg, #ff1a6c, #ffb3c6, #ff9ec8, #ff1a6c)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 1.8s linear infinite',
              margin: '0 0 0.5rem',
            }}>
              She said YES! 🎉
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: '#7a0033',
              lineHeight: '1.8',
              margin: '1.2rem 0',
              fontStyle: 'italic',
            }}>
              You make every day brighter, Dea. 🌸<br />
              Happy Valentine&apos;s Day — I&apos;m the luckiest. 💝
            </p>

            <div style={{ fontSize: '2.5rem', marginTop: '1.5rem' }}>
              {'🌹 💐 🌷 🌸 💖 🌸 🌷 💐 🌹'.split(' ').map((f, i) => (
                <span key={i} style={{
                  animation: `glitter ${0.9 + i * 0.18}s ease-in-out infinite`,
                  display: 'inline-block',
                  margin: '0 4px',
                }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Valentines
