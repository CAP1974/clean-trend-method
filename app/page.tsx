"use client";
import { useState, useEffect } from "react";

const FAQS = [
  {
    q: "O CTM Pro é uma escola ou curso de investimento?",
    a: "Não. O CTM Pro é uma comunidade privada de análise e curadoria de dados de mercado. Não somos escola, não damos formação certificada, não prestamos consultoria financeira. Organizamos informação para te ajudar a acompanhar o mercado com mais clareza."
  },
  {
    q: "O CTM recomenda o que comprar ou vender?",
    a: "Não. O CTM nunca dá recomendações de compra ou venda. Apresentamos dados, análises técnicas e contexto de mercado. A decisão de investir é sempre e exclusivamente tua."
  },
  {
    q: "Para quem é o CTM Pro?",
    a: "Para quem quer acompanhar acções e mercados financeiros sem depender de gurus, sem gastar em múltiplas ferramentas caras e sem tempo para filtrar o excesso de informação. Não é necessário ter experiência — a linguagem é simples e directa."
  },
  {
    q: "Que mercados o CTM acompanha?",
    a: "O CTM acompanha acções da NYSE e NASDAQ (EUA). A cobertura de mercados europeus (Portugal, Espanha, Alemanha) e Brasil está no roadmap e será expandida progressivamente."
  },
  {
    q: "O que é o /analisa, /fundamentais e /carteira?",
    a: "São comandos do bot CTM no Telegram. O /analisa devolve uma ficha técnica do ativo. O /fundamentais apresenta os dados financeiros da empresa. O /carteira regista os ativos que queres acompanhar e envia-te um radar diário automático."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelização e sem penalização. Cancelas a qualquer momento pela plataforma de pagamento. O acesso mantém-se activo até ao fim do período já pago."
  },
  {
    q: "Existe garantia de reembolso?",
    a: "Sim. Oferecemos 7 dias de garantia. Se não ficares satisfeito nos primeiros 7 dias, devolvemos o valor integral sem perguntas."
  },
  {
    q: "O CTM substitui o TradingView, Investing Pro ou FMP?",
    a: "O CTM agrega e filtra informação dessas e outras plataformas para te entregar o essencial já organizado. Em vez de pagares €15 + €20 + €19 por mês em ferramentas separadas, acedes ao resultado desse trabalho por €9,99/mês."
  },
];

const PROBLEMA = [
  { icon: "◈", title: "Excesso de informação", desc: "Notícias, opiniões, gráficos, redes sociais — tudo ao mesmo tempo, sem contexto. Difícil saber o que realmente importa." },
  { icon: "◉", title: "Ferramentas caras", desc: "TradingView Pro, Investing Pro, FMP, Bloomberg — cada uma custa €15 a €50/mês. A maioria das pessoas não precisa de tudo isso separado." },
  { icon: "◆", title: "Falta de tempo", desc: "Acompanhar mercados exige horas diárias de análise. Para quem trabalha, é simplesmente impossível fazer isso sozinho." },
  { icon: "◇", title: "Jargão técnico", desc: "RSI, EMA, P/E ratio, short squeeze — termos que afastam quem quer começar a acompanhar o mercado." },
  { icon: "◎", title: "Ruído sem sinal", desc: "Gurus nas redes sociais, calls de compra, promessas de lucro fácil. Difícil separar análise séria de entretenimento financeiro." },
  { icon: "◐", title: "Sem ponto de referência", desc: "Sem um método claro, as decisões tornam-se emocionais. Compra-se no pico por euforia, vende-se no fundo por medo." },
];

const SERVICOS = [
  { icon: "⌘", title: "/analisa TICKER", badge: "100 pedidos/mês", desc: "Ficha técnica completa de qualquer ativo — EMA21, RSI14, volume, força relativa e leitura CTM em linguagem simples. Resultado em segundos." },
  { icon: "◈", title: "/fundamentais TICKER", badge: "20 pedidos/mês", desc: "Dados financeiros da empresa — receita, margens, dívida, ROE, P/E e Score CTM 0–10. Interpretação clara sem jargão." },
  { icon: "◎", title: "/carteira — Radar às 22h", badge: "10 ativos · diário", desc: "Regista os ativos que queres acompanhar. Todas as noites recebes um relatório automático com o estado de cada um: INTACTA / ATENÇÃO / COMPROMETIDA." },
  { icon: "◉", title: "Morning Briefing", badge: "7h30 dias úteis", desc: "Todos os dias antes da abertura do mercado: dados dos índices, contexto geopolítico e macro, e o Princípio do Dia para manter o foco." },
  { icon: "◆", title: "Radar CTM — Setups em observação", badge: "2–3x por semana", desc: "Ativos em zonas técnicas relevantes, com critérios de acompanhamento explicados. Não é uma recomendação — é informação organizada." },
  { icon: "◇", title: "Market Pulse semanal", badge: "Sextas", desc: "Resumo semanal do estado geral do mercado — contexto, setores, o que mudou e o que continuar a vigiar." },
  { icon: "◑", title: "Biblioteca CTM", badge: "Acesso permanente", desc: "Conceitos de análise técnica e fundamental explicados em linguagem simples. Para quem quer perceber o que está a ver, não só vê-lo." },
  { icon: "◒", title: "Comunidade Pro", badge: "Telegram privado", desc: "Canal privado com outros membros, discussão de dados e contexto de mercado. Um espaço sério, sem ruído e sem calls." },
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
    } catch {
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
          <a href="#problema" onClick={() => setMenuOpen(false)}>O Problema</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#nao-fazemos" onClick={() => setMenuOpen(false)}>O que não fazemos</a>
          <a href="#precos" onClick={() => setMenuOpen(false)}>Preços</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#comunidade" className="ctm-nav-cta" onClick={() => setMenuOpen(false)}>Entrar na comunidade →</a>
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
            Comunidade activa · PT · BR · ES · Europa · NYSE
          </div>
          <h1 className="ctm-h1">
            O mercado recompensa<br />
            <em>quem sabe o que está a ver.</em>
          </h1>
          <p className="ctm-hero-sub">
            O CTM organiza dados, análises e contexto de mercado para te ajudar a acompanhar
            acções com mais clareza. Não damos recomendações. A decisão é sempre tua.
          </p>
          <div className="ctm-hero-ctas">
            <a href="#comunidade" className="ctm-btn-primary">Entrar na comunidade →</a>
            <a href="#exemplo" className="ctm-btn-secondary">Ver exemplo de análise</a>
          </div>
          <a href="https://t.me/cleantrendmethod" target="_blank" rel="noopener" className="ctm-hero-telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
            Seguir canal gratuito no Telegram
          </a>
        </div>
        <div className="ctm-hero-grid" aria-hidden="true" />
      </section>

      {/* ── PROBLEMA ── */}
      <section className="ctm-section ctm-section--dark" id="problema">
        <div className="ctm-section-inner">
          <div className="ctm-label">O problema</div>
          <h2 className="ctm-h2">Acompanhar o mercado<br />é mais difícil do que devia ser.</h2>
          <p className="ctm-body">
            O pequeno investidor enfrenta hoje um paradoxo: nunca houve tanta informação disponível,
            mas nunca foi tão difícil saber o que realmente importa.
          </p>
          <div className="ctm-grid-3">
            {PROBLEMA.map((item) => (
              <div className="ctm-problema-card" key={item.title}>
                <span className="ctm-feature-icon">{item.icon}</span>
                <div className="ctm-feature-title">{item.title}</div>
                <div className="ctm-feature-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE É ── */}
      <section className="ctm-section" id="oque">
        <div className="ctm-section-inner">
          <div className="ctm-label">O que é o CTM</div>
          <h2 className="ctm-h2">Uma comunidade privada<br />de curadoria de dados.</h2>
          <div className="ctm-oque-grid">
            <div className="ctm-oque-texto">
              <p className="ctm-body-inline">
                O CTM Pro reúne num único lugar o trabalho de acompanhar ferramentas, dados,
                gráficos e contexto de mercado — e entrega-te esse trabalho já filtrado e organizado.
              </p>
              <p className="ctm-body-inline">
                Em vez de pagares €15 + €20 + €19/mês em plataformas separadas e gastares horas
                a tentar perceber o que está a acontecer, acedes por €9,99/mês a uma comunidade
                que faz esse trabalho por ti.
              </p>
              <p className="ctm-body-inline">
                Não somos escola. Não damos cursos. Não fazemos consultoria.
                Somos um radar de dados e análises para quem quer acompanhar o mercado
                com mais clareza e menos ruído.
              </p>
            </div>
            <div className="ctm-oque-pilares">
              {[
                { n: "01", title: "Clareza", desc: "Transformamos excesso de informação em leitura simples e objectiva." },
                { n: "02", title: "Tempo poupado", desc: "Já acompanhamos as ferramentas e os dados. Tu recebes o essencial filtrado." },
                { n: "03", title: "Acesso acessível", desc: "€9,99/mês em vez de €60–100/mês em plataformas separadas." },
                { n: "04", title: "Transparência", desc: "Explicamos sempre os critérios usados, os riscos e os cenários possíveis." },
                { n: "05", title: "A decisão é tua", desc: "O CTM fornece contexto e dados. A responsabilidade é sempre individual." },
              ].map((p) => (
                <div className="ctm-pilar" key={p.n}>
                  <div className="ctm-pilar-n">{p.n}</div>
                  <div>
                    <div className="ctm-pilar-title">{p.title}</div>
                    <div className="ctm-pilar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="ctm-section ctm-section--dark" id="servicos">
        <div className="ctm-section-inner">
          <div className="ctm-label">O que recebes</div>
          <h2 className="ctm-h2">Tudo o que um investidor<br />precisa, organizado.</h2>
          <p className="ctm-body">
            O CTM Pro entrega diariamente dados, análises e contexto de mercado através
            de bot no Telegram, canal privado e briefings automáticos.
          </p>
          <div className="ctm-grid-3">
            {SERVICOS.map((s) => (
              <div className={`ctm-feature-card ${["⌘","◈","◎"].includes(s.icon) ? "ctm-feature-card--featured" : ""}`} key={s.title}>
                <span className="ctm-feature-icon">{s.icon}</span>
                <div className="ctm-feature-title">{s.title}</div>
                {s.badge && <div className="ctm-feature-badge">{s.badge}</div>}
                <div className="ctm-feature-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXEMPLO ── */}
      <section className="ctm-section" id="exemplo">
        <div className="ctm-section-inner ctm-section-inner--narrow">
          <div className="ctm-label">Exemplo de análise</div>
          <h2 className="ctm-h2">O que recebes<br />numa ficha CTM.</h2>
          <p className="ctm-body">
            Cada análise apresenta os dados disponíveis de forma organizada, com os critérios
            usados e os cenários possíveis — sem recomendações, sem preços-alvo, sem calls.
          </p>
          <div className="ctm-exemplo">
            <div className="ctm-exemplo-header">
              <div>
                <div className="ctm-exemplo-ticker">NVDA — Nvidia Corporation</div>
                <div className="ctm-exemplo-setor">Sector: Tecnologia · Semicondutores · NYSE</div>
              </div>
              <div className="ctm-exemplo-score">Score CTM<br /><span>7.4</span><small>/10</small></div>
            </div>
            <div className="ctm-exemplo-grid">
              <div className="ctm-exemplo-bloco">
                <div className="ctm-exemplo-bloco-title">Dados técnicos</div>
                <div className="ctm-exemplo-linha"><span>Preço</span><span>875.40</span></div>
                <div className="ctm-exemplo-linha"><span>EMA 21</span><span className="pos">851.20 ▲</span></div>
                <div className="ctm-exemplo-linha"><span>RSI 14</span><span className="neu">62.3</span></div>
                <div className="ctm-exemplo-linha"><span>Volume</span><span className="pos">1.2× média</span></div>
              </div>
              <div className="ctm-exemplo-bloco">
                <div className="ctm-exemplo-bloco-title">Dados fundamentais</div>
                <div className="ctm-exemplo-linha"><span>Revenue</span><span>+122% YoY</span></div>
                <div className="ctm-exemplo-linha"><span>Margem líquida</span><span>55.8%</span></div>
                <div className="ctm-exemplo-linha"><span>P/E ratio</span><span className="neu">38.2×</span></div>
                <div className="ctm-exemplo-linha"><span>Dívida/Capital</span><span className="pos">Baixa</span></div>
              </div>
            </div>
            <div className="ctm-exemplo-leitura">
              <div className="ctm-exemplo-bloco-title">Leitura CTM</div>
              <p>Estrutura técnica preservada com preço acima da zona de referência dinâmica (EMA21). Momentum positivo com volume acima da média. Dados fundamentais robustos com crescimento acelerado de receita. Zona de atenção: RSI em níveis elevados pode indicar abrandamento de curto prazo.</p>
            </div>
            <div className="ctm-exemplo-estado">
              <span className="ctm-estado-badge ctm-estado--intacta">🟢 Zona técnica INTACTA</span>
            </div>
            <div className="ctm-exemplo-legal">
              Esta análise é exclusivamente informativa e não constitui recomendação de investimento.
              Os dados apresentados são públicos e não garantem qualquer resultado. A decisão de
              investir é sempre da responsabilidade do utilizador.
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE NÃO FAZEMOS ── */}
      <section className="ctm-section ctm-section--dark" id="nao-fazemos">
        <div className="ctm-section-inner ctm-section-inner--narrow">
          <div className="ctm-label">Transparência</div>
          <h2 className="ctm-h2">O que o CTM<br />não faz.</h2>
          <p className="ctm-body">
            A transparência é um dos pilares do CTM. Por isso deixamos claro o que não somos
            e o que não fazemos — antes de te pedirmos que entres na comunidade.
          </p>
          <div className="ctm-naofaz-grid">
            {[
              "Não recomendamos a compra de qualquer activo",
              "Não recomendamos a venda de qualquer activo",
              "Não prestamos consultoria financeira ou de investimento",
              "Não gerimos carteiras de valores mobiliários",
              "Não prometemos qualquer rentabilidade ou resultado",
              "Não somos escola, curso ou formação certificada",
              "Não personalizamos recomendações com base no teu perfil",
              "Não substituímos um profissional financeiro autorizado",
            ].map((item, i) => (
              <div className="ctm-naofaz-item" key={i}>
                <span className="ctm-naofaz-icon">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="ctm-naofaz-positivo">
            <strong>O que fazemos:</strong> organizamos dados públicos de mercado, apresentamos análises técnicas e fundamentais informativas, e entregamos esse trabalho filtrado numa comunidade privada. A decisão é sempre tua.
          </div>
        </div>
      </section>

      {/* ── PREÇOS ── */}
      <section className="ctm-section" id="precos">
        <div className="ctm-section-inner">
          <div className="ctm-label">Planos</div>
          <h2 className="ctm-h2">Simples e transparente.</h2>
          <p className="ctm-body">Sem fidelização. Cancelas quando quiseres. 7 dias de garantia.</p>
          <div className="ctm-pricing-grid">

            {/* FREE */}
            <div className="ctm-plan">
              <div className="ctm-plan-name">Free</div>
              <div className="ctm-plan-price">€0</div>
              <div className="ctm-plan-period">para sempre</div>
              <ul className="ctm-plan-features">
                <li>Canal Telegram público</li>
                <li>Resumo semanal de mercado</li>
                <li>Conceito simples da semana</li>
                <li>Exemplo de análise CTM</li>
                <li>1 /analisa por dia (FMP)</li>
                <li>Morning Briefing básico</li>
              </ul>
              <a href="https://t.me/cleantrendmethod" className="ctm-plan-btn ctm-plan-btn--telegram" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
                Seguir no Telegram →
              </a>
            </div>

            {/* PRO */}
            <div className="ctm-plan ctm-plan--featured" id="comunidade">
              <div className="ctm-plan-badge">Mais popular</div>
              <div className="ctm-plan-name">Pro</div>
              <div className="ctm-plan-price">€9,99</div>
              <div className="ctm-plan-period">por mês · sem fidelização</div>
              <div className="ctm-plan-savings">7 dias de garantia · cancela quando quiseres</div>
              <ul className="ctm-plan-features">
                <li>Tudo do Free, mais:</li>
                <li>/analisa — 100 pedidos/mês</li>
                <li>/fundamentais — 20 pedidos/mês</li>
                <li>/carteira — 10 ativos · radar às 22h</li>
                <li>Morning Briefing completo</li>
                <li>Radar CTM — ativos em observação</li>
                <li>Market Pulse semanal</li>
                <li>Biblioteca CTM</li>
                <li>Comunidade Pro Telegram</li>
              </ul>
              <a href="#lista-espera" className="ctm-plan-btn ctm-plan-btn--gold">
                Entrar na comunidade →
              </a>
            </div>

            {/* DASHBOARD */}
            <div className="ctm-plan ctm-plan--soon">
              <div className="ctm-plan-badge ctm-plan-badge--soon">Em breve</div>
              <div className="ctm-plan-name">Dashboard CTM</div>
              <div className="ctm-plan-price">€39,99</div>
              <div className="ctm-plan-period">venda única · sem mensalidade</div>
              <ul className="ctm-plan-features">
                <li>Diário de trades pessoal</li>
                <li>Calculadora de posição</li>
                <li>Watchlist pessoal</li>
                <li>Score CTM por ativo</li>
                <li>Equity curve automática</li>
                <li>Export Excel + JSON local</li>
                <li>Dados ficam no teu computador</li>
              </ul>
              <div className="ctm-plan-btn ctm-plan-btn--disabled">
                Disponível em breve
              </div>
            </div>
          </div>
          <p className="ctm-pricing-note">
            Preços em EUR com IVA incluído. Pagamento seguro via Lemon Squeezy.
            Membros do Brasil: equivalente em BRL à taxa do dia.
          </p>
        </div>
      </section>

      {/* ── LISTA ESPERA ── */}
      <section className="ctm-section ctm-section--cta" id="lista-espera">
        <div className="ctm-section-inner ctm-section-inner--center">
          <div className="ctm-label">Começa hoje</div>
          <h2 className="ctm-h2">Pronto para acompanhar<br />o mercado com clareza?</h2>
          <p className="ctm-body ctm-body--center">
            Junta-te à lista de espera. Avisamos quando o acesso Pro abrir.
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
          <a href="https://t.me/cleantrendmethod" target="_blank" rel="noopener" className="ctm-hero-telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
            Ou seguir o canal gratuito no Telegram
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ctm-section ctm-section--dark" id="faq">
        <div className="ctm-section-inner ctm-section-inner--narrow">
          <div className="ctm-label">Perguntas frequentes</div>
          <h2 className="ctm-h2">Respostas directas.</h2>
          <div className="ctm-faq-list">
            {FAQS.map((f, i) => (
              <div className={`ctm-faq-item ${openFaq === i ? "open" : ""}`} key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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

      {/* ── FOOTER ── */}
      <footer className="ctm-footer">
        <div className="ctm-footer-inner">
          <div className="ctm-footer-brand">
            <span className="ctm-logo-mark">CTM</span>
            <span className="ctm-logo-name">Clean Trend Method</span>
          </div>
          <div className="ctm-footer-links">
            <a href="https://t.me/cleantrendmethod" target="_blank" rel="noopener">Telegram</a>
            <a href="#servicos">Serviços</a>
            <a href="#precos">Preços</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ctm-footer-legal-links">
            <a href="/termos">Termos de Serviço</a>
            <span>·</span>
            <a href="/privacidade">Política de Privacidade</a>
            <span>·</span>
            <a href="/reembolso">Política de Reembolso</a>
          </div>
          <div className="ctm-footer-legal">
            <p>
              O CTM Pro é uma comunidade privada de análise e curadoria de dados de mercado.
              Não presta consultoria financeira, não recomenda a compra ou venda de activos,
              não gere carteiras e não promete qualquer rentabilidade. Toda a informação é
              exclusivamente informativa. Investir comporta risco de perda de capital.
            </p>
            <p style={{ marginTop: "8px" }}>
              © 2026 Clean Trend Method · Portugal · Actividade individual
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        :root {
          --gold: #c8b97a; --gold-light: #ddd0a0;
          --bg-dark: #060605; --bg-card: #0f0f0c;
          --border: #1e1e16; --text: #f0ead8;
          --muted: #777060; --subtle: #2a2a20;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .ctm-root { background-color: #09090f; color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }

        .ctm-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 20px 48px; transition: background 0.3s, border-color 0.3s, padding 0.3s; border-bottom: 1px solid transparent; }
        .ctm-nav--scrolled { background: rgba(9,9,15,0.95); backdrop-filter: blur(12px); border-bottom-color: var(--border); padding: 14px 48px; }
        .ctm-nav-brand { display: flex; align-items: baseline; gap: 10px; text-decoration: none; }
        .ctm-logo-mark { font-family: 'DM Mono', monospace; font-size: 1rem; font-weight: 500; color: var(--gold); letter-spacing: 0.15em; }
        .ctm-logo-name { font-size: 0.75rem; color: #444; letter-spacing: 0.05em; }
        .ctm-nav-links { display: flex; align-items: center; gap: 28px; }
        .ctm-nav-links a { font-size: 0.82rem; color: var(--muted); text-decoration: none; letter-spacing: 0.03em; transition: color 0.2s; }
        .ctm-nav-links a:hover { color: var(--text); }
        .ctm-nav-cta { color: var(--gold) !important; border: 1px solid #2a2a18 !important; padding: 8px 18px !important; font-family: 'DM Mono', monospace !important; font-size: 0.72rem !important; letter-spacing: 0.08em !important; }
        .ctm-nav-cta:hover { background: #1a1a10 !important; }
        .ctm-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .ctm-hamburger span { display: block; width: 22px; height: 1.5px; background: var(--muted); }

        .ctm-hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 48px 80px; position: relative; overflow: hidden; }
        .ctm-hero-grid { position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(200,185,122,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,185,122,0.04) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%); }
        .ctm-hero-inner { max-width: 800px; width: 100%; text-align: center; position: relative; z-index: 1; }
        .ctm-hero-badge { display: inline-flex; align-items: center; gap: 8px; font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.12em; color: var(--gold); border: 1px solid #222214; background: #0d0d08; padding: 6px 16px; border-radius: 2px; margin-bottom: 40px; }
        .ctm-pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
        .ctm-h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 6vw, 5.2rem); font-weight: 900; line-height: 1.07; color: #f5eedc; margin-bottom: 28px; }
        .ctm-h1 em { color: var(--gold); font-style: italic; }
        .ctm-hero-sub { font-size: 1.05rem; line-height: 1.75; color: var(--muted); font-weight: 300; max-width: 620px; margin: 0 auto 40px; }
        .ctm-hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
        .ctm-btn-primary { background: var(--gold); color: #09090f; padding: 16px 32px; font-family: 'DM Mono', monospace; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.06em; text-decoration: none; transition: background 0.2s; }
        .ctm-btn-primary:hover { background: var(--gold-light); }
        .ctm-btn-secondary { border: 1px solid var(--border); color: var(--muted); padding: 16px 32px; font-family: 'DM Mono', monospace; font-size: 0.78rem; letter-spacing: 0.06em; text-decoration: none; transition: all 0.2s; }
        .ctm-btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
        .ctm-hero-telegram { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; font-family: 'DM Mono', monospace; font-size: 0.72rem; color: #5b9bd5; text-decoration: none; letter-spacing: 0.05em; transition: color 0.2s; }
        .ctm-hero-telegram:hover { color: #7ab3e0; }

        .ctm-section { padding: 100px 48px; }
        .ctm-section--dark { background: var(--bg-dark); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .ctm-section--cta { text-align: center; }
        .ctm-section-inner { max-width: 960px; margin: 0 auto; }
        .ctm-section-inner--narrow { max-width: 680px; margin: 0 auto; }
        .ctm-section-inner--center { text-align: center; }
        .ctm-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; }
        .ctm-h2 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; line-height: 1.12; color: #f5eedc; margin-bottom: 20px; }
        .ctm-h2 em { color: var(--gold); font-style: italic; }
        .ctm-body { font-size: 1rem; line-height: 1.8; color: var(--muted); font-weight: 300; max-width: 580px; margin-bottom: 56px; }
        .ctm-body-inline { font-size: 0.95rem; line-height: 1.8; color: var(--muted); font-weight: 300; margin-bottom: 20px; }
        .ctm-body--center { margin-left: auto; margin-right: auto; }

        .ctm-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; border: 1px solid var(--border); background: var(--border); }
        .ctm-problema-card { background: var(--bg-card); padding: 28px 24px; transition: background 0.2s; }
        .ctm-problema-card:hover { background: #131310; }
        .ctm-feature-card { background: var(--bg-card); padding: 28px 24px; transition: background 0.2s; }
        .ctm-feature-card:hover { background: #131310; }
        .ctm-feature-card--featured { background: #0e0e09; border-top: 2px solid var(--gold); }
        .ctm-feature-card--featured:hover { background: #111108; }
        .ctm-feature-icon { display: block; font-size: 1.1rem; color: var(--gold); margin-bottom: 14px; }
        .ctm-feature-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 6px; }
        .ctm-feature-badge { font-family: 'DM Mono', monospace; font-size: 0.62rem; color: var(--gold); letter-spacing: 0.08em; margin-bottom: 8px; }
        .ctm-feature-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.65; font-weight: 300; }

        .ctm-oque-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .ctm-pilar { display: flex; gap: 20px; padding: 16px 0; border-bottom: 1px solid var(--border); }
        .ctm-pilar:first-child { border-top: 1px solid var(--border); }
        .ctm-pilar-n { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--gold); letter-spacing: 0.1em; padding-top: 2px; min-width: 24px; }
        .ctm-pilar-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 4px; }
        .ctm-pilar-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.6; font-weight: 300; }

        .ctm-exemplo { border: 1px solid var(--border); background: var(--bg-card); }
        .ctm-exemplo-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 24px 28px; border-bottom: 1px solid var(--border); }
        .ctm-exemplo-ticker { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: #f5eedc; margin-bottom: 4px; }
        .ctm-exemplo-setor { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.06em; }
        .ctm-exemplo-score { text-align: right; font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.08em; }
        .ctm-exemplo-score span { display: block; font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 900; color: var(--gold); line-height: 1; }
        .ctm-exemplo-score small { font-size: 0.8rem; }
        .ctm-exemplo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); }
        .ctm-exemplo-bloco { background: var(--bg-card); padding: 20px 24px; }
        .ctm-exemplo-bloco-title { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--gold); text-transform: uppercase; margin-bottom: 14px; }
        .ctm-exemplo-linha { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #151510; font-size: 0.82rem; }
        .ctm-exemplo-linha span:first-child { color: var(--muted); }
        .ctm-exemplo-linha span:last-child { color: var(--text); font-weight: 500; }
        .ctm-exemplo-linha .pos { color: #5a7a3a; }
        .ctm-exemplo-linha .neg { color: #8a3a3a; }
        .ctm-exemplo-linha .neu { color: #7a6a3a; }
        .ctm-exemplo-leitura { padding: 20px 24px; border-top: 1px solid var(--border); }
        .ctm-exemplo-leitura p { font-size: 0.85rem; color: var(--muted); line-height: 1.7; font-weight: 300; margin-top: 8px; }
        .ctm-exemplo-estado { padding: 16px 24px; border-top: 1px solid var(--border); }
        .ctm-estado-badge { font-family: 'DM Mono', monospace; font-size: 0.72rem; padding: 6px 16px; letter-spacing: 0.06em; }
        .ctm-estado--intacta { background: #0a1a08; border: 1px solid #1a3a14; color: #5a7a3a; }
        .ctm-exemplo-legal { padding: 14px 24px; border-top: 1px solid var(--border); font-size: 0.7rem; color: #444; line-height: 1.6; font-family: 'DM Mono', monospace; letter-spacing: 0.02em; }

        .ctm-naofaz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border); background: var(--border); margin-bottom: 24px; }
        .ctm-naofaz-item { display: flex; align-items: flex-start; gap: 12px; background: var(--bg-dark); padding: 14px 18px; font-size: 0.83rem; color: var(--muted); line-height: 1.5; }
        .ctm-naofaz-icon { color: #5a3a3a; font-size: 0.8rem; flex-shrink: 0; margin-top: 2px; font-weight: 500; }
        .ctm-naofaz-positivo { background: #0a1008; border: 1px solid #1a3014; padding: 20px 24px; font-size: 0.85rem; color: var(--muted); line-height: 1.7; }
        .ctm-naofaz-positivo strong { color: var(--gold); }

        .ctm-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-bottom: 24px; }
        .ctm-plan { background: var(--bg-card); padding: 40px 32px; position: relative; }
        .ctm-plan--featured { background: #0e0e09; border-left: 2px solid var(--gold); border-right: 2px solid var(--gold); }
        .ctm-plan--soon { opacity: 0.7; }
        .ctm-plan-badge { font-family: 'DM Mono', monospace; font-size: 0.62rem; letter-spacing: 0.1em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; }
        .ctm-plan-badge--soon { color: var(--muted); }
        .ctm-plan-name { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #f5eedc; margin-bottom: 12px; }
        .ctm-plan-price { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 900; color: var(--gold); line-height: 1; }
        .ctm-plan-period { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 8px; }
        .ctm-plan-savings { font-size: 0.75rem; color: #5a7a4a; margin-bottom: 24px; font-weight: 300; }
        .ctm-plan-features { list-style: none; margin-bottom: 32px; }
        .ctm-plan-features li { font-size: 0.83rem; color: var(--muted); padding: 7px 0; border-bottom: 1px solid #151510; font-weight: 300; }
        .ctm-plan-features li:first-child { color: #666; }
        .ctm-plan-features li::before { content: "— "; color: var(--gold); }
        .ctm-plan-btn { display: block; text-align: center; text-decoration: none; padding: 14px; font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.08em; transition: all 0.2s; }
        .ctm-plan-btn--gold { background: var(--gold); color: #09090f; }
        .ctm-plan-btn--gold:hover { background: var(--gold-light); }
        .ctm-plan-btn--telegram { background: #229ED9; color: #fff; display: flex; align-items: center; justify-content: center; }
        .ctm-plan-btn--telegram:hover { background: #1a8bbf; }
        .ctm-plan-btn--disabled { background: #1a1a14; color: #444; cursor: not-allowed; }
        .ctm-pricing-note { font-size: 0.75rem; color: var(--muted); text-align: center; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; }

        .ctm-form { display: flex; max-width: 480px; margin: 0 auto 14px; border: 1px solid var(--border); }
        .ctm-input { flex: 1; background: #0d0d0a; border: none; outline: none; padding: 16px 20px; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; }
        .ctm-input::placeholder { color: #333; }
        .ctm-btn { background: var(--gold); color: #09090f; border: none; padding: 16px 24px; font-family: 'DM Mono', monospace; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.06em; cursor: pointer; white-space: nowrap; transition: background 0.2s; }
        .ctm-btn:hover:not(:disabled) { background: var(--gold-light); }
        .ctm-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .ctm-success { font-family: 'DM Mono', monospace; font-size: 0.88rem; color: var(--gold); padding: 20px; border: 1px solid var(--border); max-width: 480px; margin: 0 auto 14px; }

        .ctm-faq-list { display: flex; flex-direction: column; }
        .ctm-faq-item { border-bottom: 1px solid var(--border); cursor: pointer; }
        .ctm-faq-item:first-child { border-top: 1px solid var(--border); }
        .ctm-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; gap: 24px; }
        .ctm-faq-q span:first-child { font-size: 0.9rem; color: var(--text); line-height: 1.5; }
        .ctm-faq-icon { font-family: 'DM Mono', monospace; font-size: 1.2rem; color: var(--gold); flex-shrink: 0; }
        .ctm-faq-a { padding: 0 0 20px; font-size: 0.85rem; color: var(--muted); line-height: 1.75; font-weight: 300; }

        .ctm-footer { border-top: 1px solid var(--border); padding: 48px; }
        .ctm-footer-inner { max-width: 960px; margin: 0 auto; }
        .ctm-footer-brand { display: flex; align-items: baseline; gap: 10px; margin-bottom: 24px; }
        .ctm-footer-links { display: flex; gap: 32px; margin-bottom: 16px; flex-wrap: wrap; }
        .ctm-footer-links a { font-size: 0.8rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .ctm-footer-links a:hover { color: var(--text); }
        .ctm-footer-legal-links { display: flex; gap: 12px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }
        .ctm-footer-legal-links a { font-size: 0.72rem; color: #555; text-decoration: none; font-family: 'DM Mono', monospace; letter-spacing: 0.03em; transition: color 0.2s; }
        .ctm-footer-legal-links a:hover { color: var(--gold); }
        .ctm-footer-legal-links span { color: #333; font-size: 0.72rem; }
        .ctm-footer-legal p { font-size: 0.7rem; color: #333; line-height: 1.7; max-width: 700px; }

        @media (max-width: 768px) {
          .ctm-nav { padding: 16px 24px; }
          .ctm-nav--scrolled { padding: 12px 24px; }
          .ctm-nav-links { display: none; flex-direction: column; align-items: flex-start; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(9,9,15,0.98); padding: 80px 32px 32px; gap: 24px; z-index: 99; }
          .ctm-nav-links.open { display: flex; }
          .ctm-nav-links a { font-size: 1.1rem; }
          .ctm-hamburger { display: flex; z-index: 100; }
          .ctm-hero { padding: 100px 24px 60px; }
          .ctm-hero-ctas { flex-direction: column; align-items: center; }
          .ctm-section { padding: 70px 24px; }
          .ctm-grid-3 { grid-template-columns: 1fr; }
          .ctm-oque-grid { grid-template-columns: 1fr; gap: 40px; }
          .ctm-exemplo-grid { grid-template-columns: 1fr; }
          .ctm-naofaz-grid { grid-template-columns: 1fr; }
          .ctm-pricing-grid { grid-template-columns: 1fr; }
          .ctm-plan--featured { border: 1px solid var(--gold); }
          .ctm-form { flex-direction: column; }
          .ctm-btn { width: 100%; }
          .ctm-footer { padding: 40px 24px; }
        }
      `}</style>
    </main>
  );
}
