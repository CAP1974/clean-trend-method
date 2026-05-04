"use client";
import { useState, useEffect, useRef } from "react";

const FAQS = [
  {
    q: "O CTM Pro substitui o TradingView, Investing Pro e Finviz?",
    a: "Sim. O Pro inclui screener europeu, brasileiro e americano + dados fundamentais + análise a pedido. A maioria dos membros cancela 2-3 subscrições ao entrar no CTM."
  },
  {
    q: "Funciona para acções brasileiras (B3)?",
    a: "Sim. O screener CTM cobre PSI, IBEX, DAX, Eurostoxx, NYSE, NASDAQ e B3. O RS é calculado vs o índice relevante de cada mercado."
  },
  {
    q: "O que é o comando /analisa?",
    a: "Envias /analisa PETR4 no Telegram ou Discord e recebes em segundos: score CTM, Trend Filter, Clean Base, RS, fundamentais e veredicto em português."
  },
  {
    q: "O track record inclui as perdas?",
    a: "Sim, sempre. Publicamos todos os trades — wins e losses — com data, preço de entrada, saída e resultado. Sem cherry-picking, sem filtros."
  },
  {
    q: "Qual a diferença entre o Pro e o Dashboard?",
    a: "O Pro é uma subscrição mensal com todos os serviços. O Dashboard é um produto de venda única (ficheiro local) para gerir o teu próprio diário de trades — os dados ficam no teu computador."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelização. Cancelas a qualquer momento pela plataforma de pagamento. Sem perguntas, sem taxas."
  },
  {
    q: "O CTM constitui aconselhamento de investimento?",
    a: "Não. O CTM é um serviço de educação e análise técnica. Todas as análises são exclusivamente educativas. As decisões de investimento são sempre da tua responsabilidade."
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      await fetch('/api/lista-espera', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ctm-root">

      {/* ── NAV ── */}
      <nav className={`ctm-nav ${scrolled ? "ctm-nav--scrolled" : ""}`}>
        <a href="#" className="ctm-nav-brand">
          <span className="ctm-logo-mark">CTM</span>
          <span className="ctm-logo-name">Clean Trend Method</span>
        </a>
        <div className={`ctm-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>O Método</a>
          <a href="#mercados" onClick={() => setMenuOpen(false)}>Mercados</a>
          <a href="#track-record" onClick={() => setMenuOpen(false)}>Track Record</a>
          <a href="#precos" onClick={() => setMenuOpen(false)}>Preços</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#precos" className="ctm-nav-cta" onClick={() => setMenuOpen(false)}>Entrar agora →</a>
        </div>
        <button className="ctm-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="ctm-hero">
        <div className="ctm-hero-inner">
          <div className="ctm-hero-badge">
            <span className="ctm-pulse" />
            Sistema activo · PT · BR · ES · Europa · NYSE · B3
          </div>
          <h1 className="ctm-h1">
            O mercado recompensa<br />
            <em>quem sabe esperar.</em>
          </h1>
          <p className="ctm-hero-sub">
            Clean Trend Method é o único sistema europeu de momentum com track record público real —
            wins e losses — desenvolvido para investidores de Portugal, Brasil e Espanha.
            Tudo o que precisas numa única subscrição.
          </p>
          <div className="ctm-hero-stats">
            <div className="ctm-stat-pill">
              <span className="ctm-stat-n">+10%</span>
              <span className="ctm-stat-l">resultado mensal</span>
            </div>
            <div className="ctm-stat-divider" />
            <div className="ctm-stat-pill">
              <span className="ctm-stat-n">100%</span>
              <span className="ctm-stat-l">transparência</span>
            </div>
            <div className="ctm-stat-divider" />
            <div className="ctm-stat-pill">
              <span className="ctm-stat-n">3</span>
              <span className="ctm-stat-l">mercados cobertos</span>
            </div>
          </div>
          {!submitted ? (
            <form className="ctm-form" onSubmit={handleSubmit}>
              <input
                className="ctm-input"
                type="email"
                placeholder="O teu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="ctm-btn" type="submit" disabled={loading}>
                {loading ? "A guardar..." : "Entrar na lista de espera →"}
              </button>
            </form>
          ) : (
            <div className="ctm-success">✓ Estás na lista. Vemo-nos em breve.</div>
          )}
          <p className="ctm-hero-disclaimer">Sem spam. Podes cancelar a qualquer momento.</p>
        </div>
        <div className="ctm-hero-grid" aria-hidden="true" />
      </section>

      {/* ── MERCADOS ── */}
      <section className="ctm-section" id="mercados">
        <div className="ctm-section-inner">
          <div className="ctm-label">Mercados cobertos</div>
          <h2 className="ctm-h2">Europa, Brasil<br />e Estados Unidos.</h2>
          <p className="ctm-body">
            O screener CTM analisa acções em todos os principais mercados. O Relative Strength é
            calculado automaticamente contra o índice de referência de cada bolsa.
          </p>
          <div className="ctm-markets-grid">
            {[
              { flag: "🇵🇹", name: "Portugal", detail: "PSI 20 · Euronext Lisboa" },
              { flag: "🇧🇷", name: "Brasil", detail: "B3 · IBOVESPA" },
              { flag: "🇪🇸", name: "Espanha", detail: "IBEX 35 · BME" },
              { flag: "🇩🇪", name: "Alemanha", detail: "DAX 40 · Xetra" },
              { flag: "🇫🇷", name: "França", detail: "CAC 40 · Euronext" },
              { flag: "🇺🇸", name: "EUA", detail: "NYSE · NASDAQ · S&P 500" },
            ].map((m) => (
              <div className="ctm-market-card" key={m.name}>
                <span className="ctm-market-flag">{m.flag}</span>
                <div>
                  <div className="ctm-market-name">{m.name}</div>
                  <div className="ctm-market-detail">{m.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTODO ── */}
      <section className="ctm-section ctm-section--dark" id="metodo">
        <div className="ctm-section-inner">
          <div className="ctm-label">O Método</div>
          <h2 className="ctm-h2">5 componentes.<br />1 sistema coerente.</h2>
          <p className="ctm-body">
            O CTM não é uma coleção de indicadores. É um sistema integrado onde cada componente
            filtra e qualifica o seguinte — do contexto macro até à execução precisa.
          </p>
          <div className="ctm-method-list">
            {[
              {
                n: "01",
                name: "CTM Trend Filter",
                badge: "Output binário",
                desc: "ZONA LIMPA ✓ ou FORA DE ZONA ✗. MA Stack limpa, MA200 crescente, RS ≥ 70 vs índice. Sem ambiguidade — ou está ou não está.",
              },
              {
                n: "02",
                name: "Clean Base Pattern",
                badge: "Confirmação visual",
                desc: "Contração progressiva de preço e volume. Mínimo 2 contrações (C1, C2, C3). O pivô é o ponto de menor resistência — onde os institucionais absorveram.",
              },
              {
                n: "03",
                name: "Momentum Score",
                badge: "Score 0–100",
                desc: "4 blocos: Contexto (25pts) + Fundamento (25pts) + Timing (25pts) + Força (25pts). Mínimo 75/100 para entrar. Objectivo, não subjectivo.",
              },
              {
                n: "04",
                name: "Entry Protocol",
                badge: "Execução precisa",
                desc: "Entrada: close acima do pivô +1%. Stop: abaixo da última contração. R/R mínimo 3:1. Tamanho da posição = risco% ÷ (entrada − stop).",
              },
              {
                n: "05",
                name: "Market Pulse",
                badge: "Semáforo de mercado",
                desc: "VERDE = até 4 posições, tamanho máximo. AMARELO = máx 2 posições, tamanho reduzido. VERMELHO = cash, sem novas posições.",
              },
            ].map((c) => (
              <div className="ctm-method-item" key={c.n}>
                <div className="ctm-method-num">{c.n}</div>
                <div className="ctm-method-content">
                  <div className="ctm-method-header">
                    <span className="ctm-method-name">{c.name}</span>
                    <span className="ctm-method-badge">{c.badge}</span>
                  </div>
                  <p className="ctm-method-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRO FEATURES ── */}
      <section className="ctm-section" id="pro">
        <div className="ctm-section-inner">
          <div className="ctm-label">CTM Pro</div>
          <h2 className="ctm-h2">Tudo o que um investidor<br />precisa.</h2>
          <p className="ctm-body">
            Uma subscrição que substitui Investing Pro, Finviz Elite, TradingView Pro e serviços de sinais.
            Poupança média de €125–275/mês.
          </p>
          <div className="ctm-features-grid">
            {[
              {
                icon: "⌘", title: "/analisa TICKER", featured: true,
                badge: "100 pedidos/mês",
                desc: "Análise técnica completa em segundos — EMA21, EMA50, RSI14, volume, alinhamento de médias e leitura CTM PRO em português. Powered by FMP."
              },
              {
                icon: "◈", title: "/fundamentais TICKER", featured: true,
                badge: "20 pedidos/mês",
                desc: "12 indicadores fundamentais — EPS, Revenue, ROE, margens, P/E, dívida e Score CTM 0–10. Interpretação em linguagem simples. NYSE e NASDAQ."
              },
              {
                icon: "◎", title: "/carteira", featured: true,
                badge: "10 ativos · radar às 22h",
                desc: "Regista os teus ativos e recebe todas as noites um relatório personalizado — estado de cada posição com EMA21, RSI e classificação INTACTA / ATENÇÃO / COMPROMETIDA."
              },
              { icon: "◆", title: "5–10 setups diários", featured: false, badge: "", desc: "Score, pivot, stop, target e ratio R — enviados às 7h30 antes da abertura de cada sessão." },
              { icon: "◉", title: "Market Pulse diário", featured: false, badge: "", desc: "Estado do mercado em VERDE / AMARELO / VERMELHO com modo de operação recomendado." },
              { icon: "◇", title: "Screener Europa + B3", featured: false, badge: "", desc: "PSI, IBEX, DAX, B3, NYSE, NASDAQ — filtrado pelos 5 componentes CTM em tempo real." },
              { icon: "◐", title: "Weekly Summary", featured: false, badge: "", desc: "Resumo semanal às sextas com track record atualizado e ativos a vigiar na semana seguinte." },
              { icon: "◑", title: "Escola CTM completa", featured: false, badge: "", desc: "Método documentado, casos reais, biblioteca de setups históricos com análise post-trade." },
              { icon: "◒", title: "Comunidade Pro", featured: false, badge: "", desc: "Canal Telegram + Discord privado com acesso direto e discussão de setups em tempo real." },
            ].map((f) => (
              <div className={`ctm-feature-card ${f.featured ? "ctm-feature-card--featured" : ""}`} key={f.title}>
                <span className="ctm-feature-icon">{f.icon}</span>
                <div className="ctm-feature-title">{f.title}</div>
                {f.badge && <div className="ctm-feature-badge">{f.badge}</div>}
                <div className="ctm-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ── */}
      <section className="ctm-section ctm-section--dark" id="track-record">
        <div className="ctm-section-inner">
          <div className="ctm-label">Track Record</div>
          <h2 className="ctm-h2">Resultados reais.<br /><em>Wins e losses.</em></h2>
          <p className="ctm-body">
            O único sistema europeu com track record público e auditável em português —
            incluindo as operações perdedoras. Todos os trades são registados em tempo real,
            sem cherry-picking, sem filtros retrospetivos.
          </p>
          <div className="ctm-tr-grid">
            <div className="ctm-tr-card ctm-tr-card--gold">
              <div className="ctm-tr-num">+10%</div>
              <div className="ctm-tr-label">Resultado mensal médio</div>
              <div className="ctm-tr-sub">histórico público</div>
            </div>
            <div className="ctm-tr-card">
              <div className="ctm-tr-num">100%</div>
              <div className="ctm-tr-label">Trades publicados</div>
              <div className="ctm-tr-sub">Wins e losses sem excepção</div>
            </div>
            <div className="ctm-tr-card">
              <div className="ctm-tr-num">≥3:1</div>
              <div className="ctm-tr-label">Risk/Reward mínimo</div>
              <div className="ctm-tr-sub">Obrigatório em todos os setups</div>
            </div>
            <div className="ctm-tr-card">
              <div className="ctm-tr-num">75+</div>
              <div className="ctm-tr-label">Score mínimo para entrar</div>
              <div className="ctm-tr-sub">De 0 a 100 pelo Momentum Score</div>
            </div>
          </div>
          <div className="ctm-tr-note">
            O track record completo está disponível no canal público do Telegram —
            cada trade com data, entrada, saída e resultado.
          </div>
        </div>
      </section>

      {/* ── PREÇOS ── */}
      <section className="ctm-section" id="precos">
        <div className="ctm-section-inner">
          <div className="ctm-label">Planos</div>
          <h2 className="ctm-h2">Simples e transparente.</h2>
          <p className="ctm-body">Sem fidelização. Cancelas quando quiseres.</p>

          <div className="ctm-pricing-grid">
            {/* FREE */}
            <div className="ctm-plan">
              <div className="ctm-plan-name">Free</div>
              <div className="ctm-plan-price">€0</div>
              <div className="ctm-plan-period">para sempre</div>
              <ul className="ctm-plan-features">
                <li>Canal Telegram público</li>
                <li>1–2 setups por semana</li>
                <li>Market Pulse semanal</li>
                <li>Track record público</li>
                <li>1 /analisa por dia (FMP)</li>
              </ul>
              <a href="https://t.me/cleantrendmethod" className="ctm-plan-btn ctm-plan-btn--outline" target="_blank" rel="noopener">
                Seguir canal →
              </a>
            </div>

            {/* PRO */}
            <div className="ctm-plan ctm-plan--featured">
              <div className="ctm-plan-badge">Mais popular</div>
              <div className="ctm-plan-name">Pro</div>
              <div className="ctm-plan-price">€39</div>
              <div className="ctm-plan-period">por mês · sem fidelização</div>
              <div className="ctm-plan-savings">Substitui €125–275/mês de outras ferramentas</div>
              <ul className="ctm-plan-features">
                <li>Tudo do Free, mais:</li>
                <li>/analisa — 100 pedidos/mês (FMP)</li>
                <li>/fundamentais — 20 pedidos/mês</li>
                <li>/carteira — 10 ativos · radar às 22h</li>
                <li>5–10 setups diários completos</li>
                <li>Market Pulse todos os dias</li>
                <li>Screener Europa + Brasil + EUA</li>
                <li>Weekly Summary às sextas</li>
                <li>Escola CTM completa</li>
                <li>Comunidade Pro (Telegram + Discord)</li>
              </ul>
              <a href="#lista-espera" className="ctm-plan-btn ctm-plan-btn--gold">
                Entrar no Pro →
              </a>
            </div>

            {/* DASHBOARD */}
            <div className="ctm-plan">
              <div className="ctm-plan-name">Dashboard CTM</div>
              <div className="ctm-plan-price">€179</div>
              <div className="ctm-plan-period">venda única · sem mensalidade</div>
              <ul className="ctm-plan-features">
                <li>Diário de trades pessoal</li>
                <li>Calculadora de posição</li>
                <li>Watchlist pessoal</li>
                <li>Score CTM por ticker</li>
                <li>Equity curve automática</li>
                <li>Mercados PT, BR, ES, EUA</li>
                <li>Export Excel + JSON local</li>
                <li>Dados ficam no teu computador</li>
                <li>Updates gratuitos 1 ano</li>
              </ul>
              <a href="#lista-espera" className="ctm-plan-btn ctm-plan-btn--outline">
                Adquirir Dashboard →
              </a>
            </div>
          </div>

          <p className="ctm-pricing-note">
            Preços em EUR. Membros do Brasil: equivalente em BRL calculado à taxa do dia.
            IVA europeu incluído no preço final via Lemon Squeezy.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ctm-section ctm-section--dark" id="faq">
        <div className="ctm-section-inner ctm-section-inner--narrow">
          <div className="ctm-label">Perguntas frequentes</div>
          <h2 className="ctm-h2">Respostas directas.</h2>
          <div className="ctm-faq-list">
            {FAQS.map((f, i) => (
              <div
                className={`ctm-faq-item ${openFaq === i ? "open" : ""}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="ctm-faq-q">
                  <span>{f.q}</span>
                  <span className="ctm-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <div className="ctm-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ctm-section ctm-section--cta" id="lista-espera">
        <div className="ctm-section-inner ctm-section-inner--center">
          <div className="ctm-label">Começa hoje</div>
          <h2 className="ctm-h2">Pronto para operar<br />com método?</h2>
          <p className="ctm-body ctm-body--center">
            Junta-te à lista de espera. Avisamos quando abrir o acesso Pro.
          </p>
          {!submitted ? (
            <form className="ctm-form" onSubmit={handleSubmit}>
              <input
                className="ctm-input"
                type="email"
                placeholder="O teu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="ctm-btn" type="submit" disabled={loading}>
                {loading ? "A guardar..." : "Entrar na lista →"}
              </button>
            </form>
          ) : (
            <div className="ctm-success">✓ Estás na lista. Vemo-nos em breve.</div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ctm-footer">
        <div className="ctm-footer-inner">
          <div className="ctm-footer-brand">
            <span className="ctm-logo-mark">CTM</span>
            <span className="ctm-logo-name">Clean Trend Method</span>
          </div>
          <div className="ctm-footer-links">
            <a href="https://t.me/cleantrendmethod" target="_blank" rel="noopener">Telegram</a>
            <a href="#metodo">O Método</a>
            <a href="#track-record">Track Record</a>
            <a href="#precos">Preços</a>
          </div>
          <div className="ctm-footer-legal">
            <p>
              Este conteúdo é exclusivamente educativo e não constitui aconselhamento de investimento.
              O trading envolve risco substancial de perda de capital. Resultados passados não garantem
              rentabilidades futuras. Invista apenas o que pode perder.
            </p>
            <p style={{ marginTop: "8px" }}>
              © 2026 Clean Trend Method · Portugal ·
              <a href="#"> Termos de Serviço</a> ·
              <a href="#"> Política de Privacidade</a>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --gold: #c8b97a;
          --gold-light: #ddd0a0;
          --bg: #09090700;
          --bg-dark: #060605;
          --bg-card: #0f0f0c;
          --border: #1e1e16;
          --text: #f0ead8;
          --muted: #777060;
          --subtle: #2a2a20;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .ctm-root {
          background: #09090f;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ctm-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          transition: background 0.3s, border-color 0.3s, padding 0.3s;
          border-bottom: 1px solid transparent;
        }
        .ctm-nav--scrolled {
          background: rgba(9,9,15,0.95);
          backdrop-filter: blur(12px);
          border-bottom-color: var(--border);
          padding: 14px 48px;
        }
        .ctm-nav-brand {
          display: flex; align-items: baseline; gap: 10px; text-decoration: none;
        }
        .ctm-logo-mark {
          font-family: 'DM Mono', monospace;
          font-size: 1rem; font-weight: 500;
          color: var(--gold); letter-spacing: 0.15em;
        }
        .ctm-logo-name { font-size: 0.75rem; color: #444; letter-spacing: 0.05em; }
        .ctm-nav-links { display: flex; align-items: center; gap: 32px; }
        .ctm-nav-links a {
          font-size: 0.82rem; color: var(--muted); text-decoration: none;
          letter-spacing: 0.03em; transition: color 0.2s;
        }
        .ctm-nav-links a:hover { color: var(--text); }
        .ctm-nav-cta {
          color: var(--gold) !important;
          border: 1px solid #2a2a18 !important;
          padding: 8px 18px !important;
          font-family: 'DM Mono', monospace !important;
          font-size: 0.72rem !important;
          letter-spacing: 0.08em !important;
        }
        .ctm-nav-cta:hover { background: #1a1a10 !important; }
        .ctm-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .ctm-hamburger span {
          display: block; width: 22px; height: 1.5px; background: var(--muted);
        }

        .ctm-hero {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 120px 48px 80px;
          position: relative; overflow: hidden;
        }
        .ctm-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(200,185,122,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,185,122,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
        }
        .ctm-hero-inner {
          max-width: 800px; width: 100%;
          text-align: center; position: relative; z-index: 1;
        }
        .ctm-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.12em;
          color: var(--gold);
          border: 1px solid #222214;
          background: #0d0d08;
          padding: 6px 16px; border-radius: 2px;
          margin-bottom: 40px;
        }
        .ctm-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .ctm-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5.2rem);
          font-weight: 900; line-height: 1.07;
          color: #f5eedc; margin-bottom: 28px;
        }
        .ctm-h1 em { color: var(--gold); font-style: italic; }
        .ctm-hero-sub {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--muted); font-weight: 300;
          max-width: 620px; margin: 0 auto 48px;
        }
        .ctm-hero-stats {
          display: inline-flex; align-items: center;
          margin-bottom: 48px;
          border: 1px solid var(--border);
          background: #0d0d0a;
        }
        .ctm-stat-pill {
          display: flex; flex-direction: column; align-items: center;
          padding: 16px 32px;
        }
        .ctm-stat-n {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem; font-weight: 900; color: var(--gold); line-height: 1;
        }
        .ctm-stat-l {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem; letter-spacing: 0.1em;
          color: var(--muted); text-transform: uppercase; margin-top: 4px;
        }
        .ctm-stat-divider { width: 1px; height: 40px; background: var(--border); }

        .ctm-form {
          display: flex; max-width: 480px; margin: 0 auto 14px;
          border: 1px solid var(--border);
        }
        .ctm-input {
          flex: 1; background: #0d0d0a; border: none; outline: none;
          padding: 16px 20px; color: var(--text);
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
        }
        .ctm-input::placeholder { color: #333; }
        .ctm-btn {
          background: var(--gold); color: #09090f; border: none;
          padding: 16px 24px;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.06em;
          cursor: pointer; white-space: nowrap; transition: background 0.2s;
        }
        .ctm-btn:hover:not(:disabled) { background: var(--gold-light); }
        .ctm-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .ctm-success {
          font-family: 'DM Mono', monospace; font-size: 0.88rem;
          color: var(--gold); padding: 20px;
          border: 1px solid var(--border);
          max-width: 480px; margin: 0 auto 14px;
        }
        .ctm-hero-disclaimer { font-size: 0.72rem; color: #333; }

        .ctm-section { padding: 100px 48px; }
        .ctm-section--dark { background: var(--bg-dark); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .ctm-section--cta { text-align: center; }
        .ctm-section-inner { max-width: 900px; margin: 0 auto; }
        .ctm-section-inner--narrow { max-width: 680px; margin: 0 auto; }
        .ctm-section-inner--center { text-align: center; }

        .ctm-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.2em;
          color: var(--gold); text-transform: uppercase; margin-bottom: 20px;
        }
        .ctm-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700; line-height: 1.12;
          color: #f5eedc; margin-bottom: 20px;
        }
        .ctm-h2 em { color: var(--gold); font-style: italic; }
        .ctm-body {
          font-size: 1rem; line-height: 1.8; color: var(--muted);
          font-weight: 300; max-width: 580px; margin-bottom: 56px;
        }
        .ctm-body--center { margin-left: auto; margin-right: auto; }

        .ctm-markets-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          border: 1px solid var(--border); background: var(--border);
        }
        .ctm-market-card {
          display: flex; align-items: center; gap: 16px;
          background: var(--bg-card); padding: 24px 28px; transition: background 0.2s;
        }
        .ctm-market-card:hover { background: #131310; }
        .ctm-market-flag { font-size: 1.6rem; }
        .ctm-market-name { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 3px; }
        .ctm-market-detail { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--muted); letter-spacing: 0.05em; }

        .ctm-method-list { display: flex; flex-direction: column; }
        .ctm-method-item {
          display: flex; align-items: flex-start; gap: 32px;
          padding: 28px 0; border-bottom: 1px solid var(--border);
        }
        .ctm-method-item:first-child { border-top: 1px solid var(--border); }
        .ctm-method-num {
          font-family: 'DM Mono', monospace; font-size: 0.68rem;
          color: var(--gold); letter-spacing: 0.1em; padding-top: 4px; min-width: 28px;
        }
        .ctm-method-content { flex: 1; }
        .ctm-method-header { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; flex-wrap: wrap; }
        .ctm-method-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #f5eedc; }
        .ctm-method-badge {
          font-family: 'DM Mono', monospace; font-size: 0.62rem;
          color: var(--gold); border: 1px solid #2a2a18; padding: 3px 10px; letter-spacing: 0.08em;
        }
        .ctm-method-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.7; font-weight: 300; }

        .ctm-features-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          border: 1px solid var(--border); background: var(--border);
        }
        .ctm-feature-card { background: var(--bg-card); padding: 28px 24px; transition: background 0.2s; }
        .ctm-feature-card:hover { background: #131310; }
        .ctm-feature-card--featured {
          background: #0e0e09;
          border-top: 2px solid var(--gold);
        }
        .ctm-feature-card--featured:hover { background: #111108; }
        .ctm-feature-icon { display: block; font-size: 1.1rem; color: var(--gold); margin-bottom: 14px; }
        .ctm-feature-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 6px; }
        .ctm-feature-badge {
          font-family: 'DM Mono', monospace; font-size: 0.62rem;
          color: var(--gold); letter-spacing: 0.08em; margin-bottom: 8px;
        }
        .ctm-feature-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.65; font-weight: 300; }

        .ctm-tr-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          border: 1px solid var(--border); background: var(--border); margin-bottom: 32px;
        }
        .ctm-tr-card { background: #080806; padding: 32px 24px; text-align: center; }
        .ctm-tr-card--gold { background: #0d0d08; }
        .ctm-tr-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem; font-weight: 900; color: var(--gold); line-height: 1; margin-bottom: 10px;
        }
        .ctm-tr-card:not(.ctm-tr-card--gold) .ctm-tr-num { color: #f5eedc; }
        .ctm-tr-label { font-size: 0.8rem; font-weight: 500; color: var(--text); margin-bottom: 6px; }
        .ctm-tr-sub { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.05em; }
        .ctm-tr-note {
          font-size: 0.82rem; color: var(--muted); text-align: center;
          border: 1px solid var(--border); padding: 16px 24px;
          font-family: 'DM Mono', monospace; letter-spacing: 0.03em;
        }

        .ctm-pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border); margin-bottom: 24px;
        }
        .ctm-plan { background: var(--bg-card); padding: 40px 32px; position: relative; }
        .ctm-plan--featured { background: #0e0e09; border-left: 2px solid var(--gold); border-right: 2px solid var(--gold); }
        .ctm-plan-badge {
          font-family: 'DM Mono', monospace; font-size: 0.62rem;
          letter-spacing: 0.1em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px;
        }
        .ctm-plan-name { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #f5eedc; margin-bottom: 12px; }
        .ctm-plan-price { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 900; color: var(--gold); line-height: 1; }
        .ctm-plan-period { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 8px; }
        .ctm-plan-savings { font-size: 0.75rem; color: #5a7a4a; margin-bottom: 24px; font-weight: 300; }
        .ctm-plan-features { list-style: none; margin-bottom: 32px; }
        .ctm-plan-features li { font-size: 0.83rem; color: var(--muted); padding: 7px 0; border-bottom: 1px solid #151510; font-weight: 300; }
        .ctm-plan-features li:first-child { color: #666; }
        .ctm-plan-features li::before { content: "— "; color: var(--gold); }
        .ctm-plan-btn {
          display: block; text-align: center; text-decoration: none;
          padding: 14px; font-family: 'DM Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.08em; transition: all 0.2s;
        }
        .ctm-plan-btn--gold { background: var(--gold); color: #09090f; }
        .ctm-plan-btn--gold:hover { background: var(--gold-light); }
        .ctm-plan-btn--outline { border: 1px solid var(--border); color: var(--muted); }
        .ctm-plan-btn--outline:hover { border-color: var(--gold); color: var(--gold); }
        .ctm-pricing-note { font-size: 0.75rem; color: var(--muted); text-align: center; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }

        .ctm-faq-list { display: flex; flex-direction: column; }
        .ctm-faq-item { border-bottom: 1px solid var(--border); cursor: pointer; }
        .ctm-faq-item:first-child { border-top: 1px solid var(--border); }
        .ctm-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; gap: 24px; }
        .ctm-faq-q span:first-child { font-size: 0.9rem; color: var(--text); line-height: 1.5; }
        .ctm-faq-icon { font-family: 'DM Mono', monospace; font-size: 1.2rem; color: var(--gold); flex-shrink: 0; }
        .ctm-faq-a { padding: 0 0 20px; font-size: 0.85rem; color: var(--muted); line-height: 1.75; font-weight: 300; }

        .ctm-footer { border-top: 1px solid var(--border); padding: 48px; }
        .ctm-footer-inner { max-width: 900px; margin: 0 auto; }
        .ctm-footer-brand { display: flex; align-items: baseline; gap: 10px; margin-bottom: 24px; }
        .ctm-footer-links { display: flex; gap: 32px; margin-bottom: 32px; flex-wrap: wrap; }
        .ctm-footer-links a { font-size: 0.8rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .ctm-footer-links a:hover { color: var(--text); }
        .ctm-footer-legal p { font-size: 0.7rem; color: #333; line-height: 1.7; max-width: 640px; }
        .ctm-footer-legal a { color: #444; text-decoration: none; }
        .ctm-footer-legal a:hover { color: var(--muted); }

        @media (max-width: 768px) {
          .ctm-nav { padding: 16px 24px; }
          .ctm-nav--scrolled { padding: 12px 24px; }
          .ctm-nav-links {
            display: none; flex-direction: column; align-items: flex-start;
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(9,9,15,0.98); padding: 80px 32px 32px;
            gap: 24px; z-index: 99;
          }
          .ctm-nav-links.open { display: flex; }
          .ctm-nav-links a { font-size: 1.1rem; }
          .ctm-hamburger { display: flex; z-index: 100; }
          .ctm-hero { padding: 100px 24px 60px; }
          .ctm-hero-stats { flex-direction: column; }
          .ctm-stat-divider { width: 80px; height: 1px; }
          .ctm-form { flex-direction: column; }
          .ctm-btn { width: 100%; }
          .ctm-section { padding: 70px 24px; }
          .ctm-markets-grid { grid-template-columns: 1fr 1fr; }
          .ctm-features-grid { grid-template-columns: 1fr; }
          .ctm-tr-grid { grid-template-columns: 1fr 1fr; }
          .ctm-pricing-grid { grid-template-columns: 1fr; }
          .ctm-plan--featured { border: 1px solid var(--gold); }
          .ctm-footer { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .ctm-markets-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
