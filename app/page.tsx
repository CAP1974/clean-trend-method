"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="ctm-root">
      {/* NAV */}
      <nav className="ctm-nav">
        <span className="ctm-logo">CTM</span>
        <span className="ctm-logo-sub">Clean Trend Method</span>
      </nav>

      {/* HERO */}
      <section className="ctm-hero">
        <div className="ctm-hero-badge">🇵🇹 Sistema Europeu · Track Record Público Real</div>
        <h1 className="ctm-h1">
          O mercado recompensa<br />
          <span className="ctm-accent">quem sabe esperar.</span>
        </h1>
        <p className="ctm-sub">
          O Clean Trend Method é um sistema proprietário de momentum e qualidade de tendência —
          desenvolvido para traders PT/ES/BR que querem resultados reais, sem ilusões.
        </p>

        {/* CTA */}
        {!submitted ? (
          <form className="ctm-form" onSubmit={handleSubmit}>
            <input
              className="ctm-input"
              type="email"
              placeholder="o-teu-email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="ctm-btn" type="submit">
              Entrar na Lista de Espera →
            </button>
          </form>
        ) : (
          <div className="ctm-success">
            ✓ Estás na lista. Vemo-nos em breve.
          </div>
        )}

        <p className="ctm-disclaimer">Sem spam. Só sinais que valem a pena.</p>
      </section>

      {/* TRACK RECORD */}
      <section className="ctm-section">
        <div className="ctm-section-label">Track Record</div>
        <h2 className="ctm-h2">Resultados reais.<br />Wins <em>e</em> losses.</h2>
        <p className="ctm-body">
          O único sistema europeu com track record público real em português —
          incluindo as operações perdedoras. Sem cherry-picking.
        </p>
        <div className="ctm-stats">
          <div className="ctm-stat">
            <span className="ctm-stat-num">+10%</span>
            <span className="ctm-stat-label">resultado mensal</span>
          </div>
          <div className="ctm-stat">
            <span className="ctm-stat-num">100%</span>
            <span className="ctm-stat-label">transparência</span>
          </div>
          <div className="ctm-stat">
            <span className="ctm-stat-num">PT/ES/BR</span>
            <span className="ctm-stat-label">mercados cobertos</span>
          </div>
        </div>
      </section>

      {/* 5 COMPONENTES */}
      <section className="ctm-section ctm-section-dark">
        <div className="ctm-section-label">O Método</div>
        <h2 className="ctm-h2">5 componentes.<br />1 sistema coerente.</h2>
        <div className="ctm-components">
          {[
            { num: "01", name: "CTM Trend Filter", desc: "Zona Limpa ✓ ou Fora de Zona ✗ — output binário sem ambiguidade." },
            { num: "02", name: "Clean Base Pattern", desc: "Contração progressiva de volatilidade antes da ruptura." },
            { num: "03", name: "Momentum Score", desc: "Pontuação 0–100 que quantifica a força do setup." },
            { num: "04", name: "Entry Protocol", desc: "Entrada precisa com risco definido antes de carregar na tecla." },
            { num: "05", name: "Market Pulse", desc: "Leitura do mercado geral — só operas quando o contexto ajuda." },
          ].map((c) => (
            <div className="ctm-component" key={c.num}>
              <span className="ctm-comp-num">{c.num}</span>
              <div>
                <div className="ctm-comp-name">{c.name}</div>
                <div className="ctm-comp-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="ctm-section">
        <div className="ctm-section-label">Porquê o CTM</div>
        <h2 className="ctm-h2">Educação honesta.<br />Ferramentas reais.</h2>
        <div className="ctm-pills">
          {[
            "Track record público com perdas incluídas",
            "Indicadores Pine Script proprietários",
            "Screener europeu (PSI · IBEX · DAX)",
            "Comunidade PT/ES/BR",
            "Sem promessas de enriquecimento rápido",
            "Método baseado em Minervini/SEPA adaptado à Europa",
          ].map((p) => (
            <span className="ctm-pill" key={p}>✓ {p}</span>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ctm-section ctm-cta-section">
        <h2 className="ctm-h2">Pronto para operar<br />com método?</h2>
        {!submitted ? (
          <form className="ctm-form" onSubmit={handleSubmit}>
            <input
              className="ctm-input"
              type="email"
              placeholder="o-teu-email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="ctm-btn" type="submit">
              Entrar na Lista de Espera →
            </button>
          </form>
        ) : (
          <div className="ctm-success">✓ Estás na lista. Vemo-nos em breve.</div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="ctm-footer">
        <p className="ctm-disclaimer-full">
          Este conteúdo é exclusivamente educativo e não constitui aconselhamento de investimento.
          O trading envolve risco substancial de perda de capital. Resultados passados não garantem
          rentabilidades futuras. Invista apenas o que pode perder.
        </p>
        <p className="ctm-footer-copy">© 2026 Clean Trend Method · Portugal</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ctm-root {
          background: #0a0a08;
          color: #e8e4d9;
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* NAV */
        .ctm-nav {
          display: flex;
          align-items: baseline;
          gap: 10px;
          padding: 28px 48px;
          border-bottom: 1px solid #1e1e18;
        }
        .ctm-logo {
          font-family: 'DM Mono', monospace;
          font-size: 1.1rem;
          font-weight: 500;
          color: #c8b97a;
          letter-spacing: 0.15em;
        }
        .ctm-logo-sub {
          font-size: 0.78rem;
          color: #555;
          letter-spacing: 0.05em;
        }

        /* HERO */
        .ctm-hero {
          max-width: 820px;
          margin: 0 auto;
          padding: 100px 48px 80px;
          text-align: center;
        }
        .ctm-hero-badge {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: #c8b97a;
          border: 1px solid #2a2a1e;
          background: #111108;
          padding: 6px 16px;
          border-radius: 2px;
          margin-bottom: 40px;
        }
        .ctm-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.08;
          color: #f0ead8;
          margin-bottom: 28px;
        }
        .ctm-accent {
          color: #c8b97a;
          font-style: italic;
        }
        .ctm-sub {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #888;
          font-weight: 300;
          max-width: 580px;
          margin: 0 auto 48px;
        }

        /* FORM */
        .ctm-form {
          display: flex;
          gap: 0;
          max-width: 480px;
          margin: 0 auto 16px;
          border: 1px solid #2a2a1e;
        }
        .ctm-input {
          flex: 1;
          background: #111108;
          border: none;
          outline: none;
          padding: 16px 20px;
          color: #e8e4d9;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
        }
        .ctm-input::placeholder { color: #444; }
        .ctm-btn {
          background: #c8b97a;
          color: #0a0a08;
          border: none;
          padding: 16px 24px;
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .ctm-btn:hover { background: #ddd0a0; }
        .ctm-success {
          font-family: 'DM Mono', monospace;
          font-size: 0.9rem;
          color: #c8b97a;
          padding: 20px;
          border: 1px solid #2a2a1e;
          max-width: 480px;
          margin: 0 auto 16px;
        }
        .ctm-disclaimer {
          font-size: 0.75rem;
          color: #444;
        }

        /* SECTIONS */
        .ctm-section {
          max-width: 820px;
          margin: 0 auto;
          padding: 80px 48px;
          border-top: 1px solid #1a1a14;
        }
        .ctm-section-dark {
          background: #07070500;
          max-width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        .ctm-section-dark > * {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 48px;
          padding-right: 48px;
        }
        .ctm-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          color: #c8b97a;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .ctm-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          color: #f0ead8;
          margin-bottom: 24px;
        }
        .ctm-h2 em { color: #c8b97a; font-style: italic; }
        .ctm-body {
          font-size: 1rem;
          line-height: 1.75;
          color: #777;
          font-weight: 300;
          max-width: 560px;
          margin-bottom: 48px;
        }

        /* STATS */
        .ctm-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .ctm-stat { display: flex; flex-direction: column; gap: 4px; }
        .ctm-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          color: #c8b97a;
          line-height: 1;
        }
        .ctm-stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: #555;
          text-transform: uppercase;
        }

        /* COMPONENTS */
        .ctm-components {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-left: 48px !important;
          padding-right: 48px !important;
        }
        .ctm-component {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          padding: 28px 0;
          border-bottom: 1px solid #1a1a14;
        }
        .ctm-component:first-child { border-top: 1px solid #1a1a14; }
        .ctm-comp-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: #c8b97a;
          letter-spacing: 0.1em;
          padding-top: 4px;
          min-width: 28px;
        }
        .ctm-comp-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f0ead8;
          margin-bottom: 6px;
        }
        .ctm-comp-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          font-weight: 300;
        }

        /* PILLS */
        .ctm-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }
        .ctm-pill {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          color: #888;
          border: 1px solid #222218;
          padding: 10px 16px;
          letter-spacing: 0.03em;
          transition: border-color 0.2s, color 0.2s;
        }
        .ctm-pill:hover { border-color: #c8b97a; color: #c8b97a; }

        /* CTA SECTION */
        .ctm-cta-section { text-align: center; }
        .ctm-cta-section .ctm-h2 { margin-bottom: 40px; }
        .ctm-cta-section .ctm-form { margin: 0 auto 16px; }

        /* FOOTER */
        .ctm-footer {
          border-top: 1px solid #1a1a14;
          padding: 48px;
          text-align: center;
        }
        .ctm-disclaimer-full {
          font-size: 0.72rem;
          color: #333;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 16px;
        }
        .ctm-footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          color: #333;
          letter-spacing: 0.1em;
        }

        @media (max-width: 600px) {
          .ctm-nav { padding: 20px 24px; }
          .ctm-hero { padding: 60px 24px 60px; }
          .ctm-section { padding: 60px 24px; }
          .ctm-form { flex-direction: column; }
          .ctm-btn { width: 100%; text-align: center; }
          .ctm-stats { gap: 32px; }
          .ctm-components { padding-left: 24px !important; padding-right: 24px !important; }
          .ctm-footer { padding: 40px 24px; }
        }
      `}</style>
    </main>
  );
}
