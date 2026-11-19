import { ArrowUpRight, Presentation, Sparkles } from "lucide-react";
import "./CanvaPresentationPage.css";

// Canva's embedded viewer provides the deck's slide navigation and pagination.
const CANVA_EMBED_URL =
  "https://www.canva.com/design/DAHWKeWSsJI/ZQmRBAcfNpP5gkknfAd1vA/view?embed";
const CANVA_VIEW_URL = "https://canva.link/inw62kkhh73hvl0";

export default function CanvaPresentationPage() {
  return (
    <main className="presentation-page">
      <div className="presentation-page__glow presentation-page__glow--orange" />
      <div className="presentation-page__glow presentation-page__glow--violet" />

      <div className="presentation-shell">
        <header className="presentation-header">
          <div className="presentation-brand">
            <span className="presentation-brand__mark">G</span>
            <span className="presentation-brand__name">
              GLOBAL INVESTORS FORUM
              <small>GLOBAL AI EXCELLENCE AWARDS</small>
            </span>
          </div>
          <span className="presentation-header__tag">
            <span />
            PRESENTATION
          </span>
        </header>

        <section className="presentation-intro" aria-labelledby="presentation-title">
          <p className="presentation-eyebrow">
            <Sparkles size={15} strokeWidth={1.8} />
            RECOGNISING THE PEOPLE SHAPING WHAT COMES NEXT
          </p>
          <h1 id="presentation-title">
            Global AI Excellence
            <span>Awards</span>
          </h1>
          <p className="presentation-intro__copy">
            A closer look at the innovators, ideas and impact moving artificial
            intelligence forward.
          </p>
        </section>

        <section className="presentation-stage" aria-label="Award presentation">
          <div className="presentation-stage__topline">
            <div className="presentation-stage__label">
              <Presentation size={17} />
              <span>THE AWARDS DECK</span>
            </div>
            {CANVA_EMBED_URL && (
              <a
                className="presentation-stage__open"
                href={CANVA_VIEW_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open in Canva <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          <div className="presentation-frame">
            {CANVA_EMBED_URL ? (
              <iframe
                title="Global AI Excellence Awards presentation"
                src={CANVA_EMBED_URL}
                allow="fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="presentation-placeholder">
                <div className="presentation-placeholder__icon">
                  <Presentation size={28} strokeWidth={1.5} />
                </div>
                <p className="presentation-placeholder__eyebrow">YOUR PRESENTATION GOES HERE</p>
                <h2>Bring the story to the screen.</h2>
                <p>
                  Add your Canva embed link in <code>CanvaPresentationPage.jsx</code> to
                  display the deck here.
                </p>
              </div>
            )}
          </div>
        </section>

        <footer className="presentation-footer">
          <span>GLOBAL AI EXCELLENCE AWARDS</span>
          <span>Ideas worth recognising.</span>
        </footer>
      </div>
    </main>
  );
}
