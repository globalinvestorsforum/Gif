
import React, { useState } from 'react'

const signals = [
  { num: "01", text: "AI is no longer innovation — it is infrastructure." },
  { num: "02", text: "From automation to autonomy — the rise of intelligent agents." },
  { num: "03", text: "Nations are racing to own their AI — sovereign models, sovereign data, sovereign infrastructure." },
  { num: "04", text: "AI is shifting from experimentation to enterprise-scale deployment." },
  { num: "05", text: "The next competitive advantage is AI adoption speed." },
  { num: "06", text: "Open-weight models are now enterprise infrastructure — not just research tools." },
  { num: "07", text: "Inference, not training, is now the cost frontier — energy is the new bottleneck." },
  { num: "08", text: "Human–AI collaboration will redefine productivity." },
  { num: "09", text: "Multi-agent systems are moving from pilots into production at enterprise scale." },
  { num: "10", text: "AI regulation will shape global power structures." },
  { num: "11", text: "Vertical AI will disrupt every industry deeply." },
  { num: "12", text: "AI literacy is becoming a core workforce skill — not a technical speciality." },
];

export const Signal = () => {

    const [hoverSig, setHoverSig] = useState(null);

  return (
    <div>
    {/* SIGNALS SECTION */}
      <div style={{ padding: "5rem 4rem 4rem", position: "relative", zIndex: 5, maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", letterSpacing: "0.3em", color: "#3B82F6", textTransform: "uppercase", marginBottom: "1rem" }}>Directional Signals</p>
            <h2 style={{ fontFamily: "Antonio, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1, color: "#FFFFFF", textTransform: "uppercase" }}>
              WHERE THE<br /><span className='text-transparent bg-gradient-to-r from-purple-400 via-red-400  to-red-400 bg-clip-text '>WORLD IS HEADING</span>
            </h2>
          </div>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(59,130,246,0.5), transparent)", marginBottom: "0.75rem" }} />
        </div>

        {/* Signal list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {signals.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverSig(i)}
              onMouseLeave={() => setHoverSig(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                alignItems: "center",
                padding: "1.1rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                cursor: "default",
                transition: "background 0.2s",
                background: hoverSig === i ? "rgba(59,130,246,0.06)" : "transparent",
                paddingLeft: hoverSig === i ? "1rem" : 0,
              }}
            >
              <span style={{ fontFamily: "Antonio, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: hoverSig === i ? "#3B82F6" : "rgba(59,130,246,0.2)", lineHeight: 1, transition: "color 0.25s" }}>{s.num}</span>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 400, color: hoverSig === i ? "#FFFFFF" : "#94A3B8", lineHeight: 1.5, transition: "color 0.25s" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

