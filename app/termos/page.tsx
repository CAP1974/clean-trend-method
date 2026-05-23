import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos e Condições — CTM',
  description: 'Termos e condições de utilização do serviço CTM — Clean Trend Method.',
}

export default function TermosPage() {
  return (
    <>
      <style>{LEGAL_STYLES}</style>
      <main className="legal-page">
        <header className="legal-nav">
          <Link href="/" className="back">← Voltar ao início</Link>
          <span className="brand">· CTM</span>
        </header>

        <article className="legal-content">
          <span className="eyebrow">Documento legal · v1.0 · Maio 2026</span>
          <h1>Termos e Condições</h1>
          <p className="lead">Estes termos regulam o acesso e a utilização do serviço CTM — Clean Trend Method e dos respectivos canais associados. Ao subscrever ou utilizar o serviço, o utilizador declara aceitar integralmente o presente documento.</p>

          <section>
            <h2>1. Identificação do prestador</h2>
            <p>O serviço CTM — Clean Trend Method (doravante &quot;CTM&quot;) é operado por <strong>Carlos Alberto de Sousa Pinto</strong>, com sede em <strong>Rua Principal, 13, 2500-637 Salir de Matos, Portugal</strong>, com o número de identificação fiscal <strong>PT 213 205 700</strong>. Contacto: <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
          </section>

          <section>
            <h2>2. Natureza do serviço</h2>
            <p>O CTM é uma comunidade de literacia financeira e análise sistemática de mercados. A função do serviço é organizar informação, estruturar contexto e apresentar dados de forma clara, em língua portuguesa.</p>
            <p><strong>O CTM não presta consultoria financeira</strong>, não gere activos de terceiros, não emite recomendações personalizadas de investimento, não emite sinais de compra ou venda e não actua como intermediário financeiro. Toda a informação publicada tem carácter exclusivamente <strong>educativo e informativo</strong>.</p>
            <p>Qualquer decisão de investimento, alocação de capital ou execução de operações em mercados financeiros é da exclusiva responsabilidade do utilizador.</p>
          </section>

          <section>
            <h2>3. Acesso ao serviço</h2>
            <p>O CTM dispõe de dois níveis de acesso:</p>
            <ul>
              <li><strong>Canal gratuito:</strong> Acesso ao Telegram público, Substack introdutório, briefings resumidos e track record mensal.</li>
              <li><strong>Membro Pro:</strong> Subscrição mensal de €4,99 que inclui briefings completos, análises Pine 1 e Pine 2, radar de carteira, watchlist por solicitação e canal Pro privado.</li>
            </ul>
            <p>O acesso ao nível Pro requer pagamento processado através do prestador Stripe Payments Europe, Ltd.</p>
          </section>

          <section>
            <h2>4. Pagamento, renovação e cancelamento</h2>
            <p>A subscrição Pro é cobrada mensalmente, em ciclos automáticos de 30 dias, à data de adesão. O utilizador pode cancelar a subscrição a qualquer momento, através do portal Stripe ou contactando <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
            <p>O cancelamento produz efeitos no final do ciclo de facturação em curso — o utilizador mantém acesso até essa data. Não há renovação automática após cancelamento confirmado.</p>
          </section>

          <section>
            <h2>5. Direito de livre resolução</h2>
            <p>Nos termos da legislação europeia de consumo aplicável a serviços digitais (Decreto-Lei nº 24/2014 e legislação correspondente), o utilizador dispõe do direito de livre resolução do contrato no prazo de <strong>14 dias</strong> a contar da subscrição, sem necessidade de justificação.</p>
            <p>O exercício deste direito está sujeito à <Link href="/reembolso">Política de Reembolso</Link>.</p>
          </section>

          <section>
            <h2>6. Propriedade intelectual</h2>
            <p>Todos os conteúdos publicados no âmbito do CTM — incluindo análises, frameworks (CTM v10, Pine 1, Pine 2), publicações, gráficos, código e materiais gráficos — são propriedade exclusiva do operador. É proibida a reprodução, distribuição ou utilização comercial sem autorização escrita.</p>
            <p>O acesso aos canais Pro é estritamente pessoal e não transferível. A partilha de credenciais ou redistribuição de conteúdos constitui causa de cessação imediata da subscrição, sem direito a reembolso.</p>
          </section>

          <section>
            <h2>7. Obrigações do utilizador</h2>
            <ul>
              <li>Utilizar o serviço de forma legal e em conformidade com os presentes termos;</li>
              <li>Não partilhar credenciais de acesso nem redistribuir conteúdos Pro;</li>
              <li>Não utilizar o serviço para fins ilícitos ou contrários à ordem pública;</li>
              <li>Assumir total responsabilidade por decisões de investimento próprias.</li>
            </ul>
          </section>

          <section>
            <h2>8. Limitação de responsabilidade</h2>
            <p>O CTM publica análises e dados de mercado obtidos de fontes consideradas fiáveis, mas não garante a sua exactidão, completude ou actualidade. Resultados passados não constituem garantia de resultados futuros.</p>
            <p>O operador não é responsável por perdas, danos ou prejuízos resultantes de decisões de investimento tomadas pelo utilizador. O investimento em mercados financeiros envolve risco de perda parcial ou total do capital investido.</p>
          </section>

          <section>
            <h2>9. Alteração dos termos</h2>
            <p>O CTM reserva-se o direito de alterar os presentes termos a qualquer momento. As alterações entram em vigor após publicação nesta página. Em caso de alterações substanciais, o utilizador será notificado por email.</p>
          </section>

          <section>
            <h2>10. Lei aplicável e foro</h2>
            <p>Os presentes termos são regidos pela lei portuguesa. Para a resolução de qualquer litígio emergente do presente contrato, é competente o foro da comarca da sede do operador, com renúncia expressa a qualquer outro.</p>
            <p>O consumidor pode ainda recorrer a entidades de resolução alternativa de litígios de consumo, conforme legislação aplicável.</p>
          </section>

          <section>
            <h2>11. Contacto</h2>
            <p>Para qualquer questão relativa aos presentes termos: <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
          </section>

          <footer className="legal-footer">
            <p>Última actualização: Maio de 2026 · Versão 1.0</p>
            <div className="legal-links">
              <Link href="/termos">Termos e Condições</Link>
              <Link href="/privacidade">Política de Privacidade</Link>
              <Link href="/reembolso">Política de Reembolso</Link>
            </div>
          </footer>
        </article>
      </main>
    </>
  )
}

const LEGAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Figtree:wght@300;400;500;600&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --ink: #0E0E0B; --ink-60: rgba(14,14,11,0.6); --ink-40: rgba(14,14,11,0.4);
  --ink-15: rgba(14,14,11,0.15); --ink-10: rgba(14,14,11,0.1);
  --paper: #F5F2EC; --paper-2: #EDEAE2;
  --gold: #B8983E; --gold-2: #D4AF5A;
  --serif: 'DM Serif Display', Georgia, serif;
  --mono: 'DM Mono', ui-monospace, monospace;
  --sans: 'Figtree', -apple-system, system-ui, sans-serif;
}
body { font-family: var(--sans); background: var(--paper); color: var(--ink); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }

.legal-page { min-height: 100vh; padding: 0; }

.legal-nav {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 32px; height: 64px;
  background: rgba(245,242,236,0.85); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--ink-10);
}
.legal-nav .back {
  font-family: var(--mono); font-size: 13px; color: var(--ink-60);
  text-decoration: none; letter-spacing: 0.02em; transition: color .2s;
}
.legal-nav .back:hover { color: var(--ink); }
.legal-nav .brand { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.14em; color: var(--ink); }

.legal-content {
  max-width: 740px; margin: 0 auto; padding: 80px 32px 120px;
}

.legal-content .eyebrow {
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--gold);
  margin-bottom: 24px; display: inline-block;
}

.legal-content h1 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(40px, 6vw, 64px); line-height: 1.04; letter-spacing: -0.015em;
  margin-bottom: 24px;
}

.legal-content .lead {
  font-size: 18px; font-weight: 300; color: var(--ink-60);
  line-height: 1.65; margin-bottom: 56px; max-width: 60ch;
  padding-bottom: 32px; border-bottom: 1px solid var(--ink-10);
}

.legal-content section { margin-bottom: 48px; }
.legal-content section h2 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(22px, 2.8vw, 28px); line-height: 1.2; letter-spacing: -0.005em;
  margin-bottom: 16px; color: var(--ink);
}
.legal-content section p {
  font-size: 15px; color: var(--ink-60); line-height: 1.75; margin-bottom: 14px;
}
.legal-content section p:last-child { margin-bottom: 0; }
.legal-content section strong { color: var(--ink); font-weight: 500; }
.legal-content section a {
  color: var(--ink); text-decoration: underline; text-underline-offset: 2px;
  text-decoration-color: var(--gold); text-decoration-thickness: 1px;
}
.legal-content section a:hover { color: var(--gold); }
.legal-content section ul {
  list-style: none; margin: 14px 0; padding-left: 0;
  display: flex; flex-direction: column; gap: 10px;
}
.legal-content section ul li {
  font-size: 15px; color: var(--ink-60); line-height: 1.65;
  padding-left: 20px; position: relative;
}
.legal-content section ul li::before {
  content: '—'; position: absolute; left: 0; color: var(--gold); font-family: var(--mono);
}

.legal-footer {
  margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--ink-10);
}
.legal-footer p {
  font-family: var(--mono); font-size: 11px; color: var(--ink-40);
  letter-spacing: 0.04em; margin-bottom: 16px;
}
.legal-footer .legal-links {
  display: flex; flex-wrap: wrap; gap: 12px;
}
.legal-footer .legal-links a {
  font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em;
  color: var(--ink-60); text-decoration: none;
  padding: 7px 14px; border: 1px solid var(--ink-15); border-radius: 6px;
  transition: all .2s ease;
}
.legal-footer .legal-links a:hover { color: var(--ink); border-color: var(--ink); background: var(--paper-2); }

@media (max-width: 768px) {
  .legal-nav { padding: 14px 20px; height: 56px; }
  .legal-content { padding: 48px 20px 80px; }
}
`
