
import React, { useState, useEffect } from "react";

const themes = [
  { tag: "Geopolitics", title: "SOVEREIGN AI", desc: "Nations building independent AI ecosystems, infrastructure, and data control — the new geopolitical frontier.", accent: "#C9A84C" },
  { tag: "Autonomy", title: "AGENTIC AI & AUTONOMOUS SYSTEMS", desc: "Intelligent agents, autonomous decision-making systems, and AI copilots redefining workflows and enterprise productivity.", accent: "#3B82F6" },
  { tag: "Technology", title: "GENERATIVE AI & FOUNDATION MODELS", desc: "Large language models, multimodal intelligence, and next-generation generative technologies transforming business innovation.", accent: "#8B5CF6" },
  { tag: "Infrastructure", title: "AI INFRASTRUCTURE & COMPUTE", desc: "Advanced semiconductors, cloud platforms, and edge intelligence — the infrastructure powering the future of AI.", accent: "#06B6D4" },
  { tag: "Enterprise", title: "ENTERPRISE AI TRANSFORMATION", desc: "How organizations integrate AI into core business functions to unlock efficiency and long-term competitive advantage.", accent: "#10B981" },
  { tag: "Data", title: "DATA & DECISION INTELLIGENCE", desc: "Data ecosystems, predictive intelligence, and real-time analytics becoming the foundation of smarter organizations.", accent: "#F59E0B" },
  { tag: "Governance", title: "RESPONSIBLE & TRUSTED AI", desc: "Governance, transparency, explainability, safety, and compliance — building AI systems the world can trust.", accent: "#EF4444" },
  { tag: "Security", title: "AI SECURITY & CYBER INTELLIGENCE", desc: "AI-powered cybersecurity, threat detection, fraud prevention, and digital trust in an increasingly connected world.", accent: "#EC4899" },
  { tag: "Industry", title: "AI IN CRITICAL INDUSTRIES", desc: "Healthcare, energy, finance, and manufacturing transformation — where AI moves from pilot to core business function.", accent: "#14B8A6" },
  { tag: "Society", title: "HUMAN–AI COLLABORATION", desc: "AI augmenting human capability, transforming workplaces, empowering creativity, and redefining the future of talent.", accent: "#A78BFA" },
  { tag: "Automation", title: "ROBOTICS & INTELLIGENT AUTOMATION", desc: "AI enabling autonomous machines, computer vision, industrial robotics, and automation across real-world environments.", accent: "#F97316" },
  { tag: "Frontier", title: "THE FUTURE OF AGI", desc: "Advanced reasoning systems, scientific discovery, cognitive architectures, and the next frontier of machine intelligence.", accent: "#E11D48" },
];

export const Theme = () => {
  const [hoverTheme, setHoverTheme] = useState(null);
  const [columns, setColumns] = useState("repeat(3, 1fr)");

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns("1fr");
      } else if (window.innerWidth < 1024) {
        setColumns("repeat(2, 1fr)");
      } else {
        setColumns("repeat(3, 1fr)");
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "5rem 1.5rem 7rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          gap: "3rem",
          alignItems: "flex-start",
          marginBottom: "4rem",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: ".7rem",
              letterSpacing: ".35em",
              color: "#C9A84C",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Core AI Themes
          </p>

          <h2
            style={{
              fontFamily: "Antonio, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Twelve
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-red-400  to-red-400 bg-clip-text ">Conversations</span>
          </h2>
        </div>

        <div
          style={{
            flex: 1,
            maxWidth: "650px",
            paddingTop: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              lineHeight: 1.8,
            }}
          >
            Twelve defining conversations shaping how governments,
            enterprises, investors, and innovators navigate the next decade
            of artificial intelligence.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: columns,
          gap: "1px",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        {themes.map((t, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoverTheme(i)}
            onMouseLeave={() => setHoverTheme(null)}
            style={{
              background: hoverTheme === i ? "#0A0A0A" : "#000",
              padding: "2.2rem",
              minHeight: "320px",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              transition: "all .35s ease",
              transform:
                hoverTheme === i
                  ? "translateY(-6px)"
                  : "translateY(0)",
              boxShadow:
                hoverTheme === i
                  ? "0 25px 50px rgba(0,0,0,.45)"
                  : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Accent Top Line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: t.accent,
                transform:
                  hoverTheme === i
                    ? "scaleX(1)"
                    : "scaleX(0)",
                transition: "transform .35s ease",
                transformOrigin: "left",
              }}
            />

            {/* Large Number */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontFamily: "Antonio, sans-serif",
                fontSize: "4rem",
                fontWeight: 700,
                color:
                  hoverTheme === i
                    ? "rgba(255,255,255,.08)"
                    : "rgba(255,255,255,.04)",
                lineHeight: 1,
                transition: ".3s",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Category */}
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: ".65rem",
                letterSpacing: ".18em",
                color: t.accent,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {t.tag}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "Antonio, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color:
                  hoverTheme === i
                    ? "#FFFFFF"
                    : "#E2E8F0",
                textTransform: "uppercase",
                lineHeight: 1.2,
                marginBottom: "1rem",
                transition: ".3s",
              }}
            >
              {t.title}
            </h3>

            <div
              style={{
                width: "3rem",
                height: "2px",
                background: t.accent,
                marginBottom: "1.25rem",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: ".9rem",
                color: "#94A3B8",
                lineHeight: 1.8,
                marginTop: "auto",
              }}
            >
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
