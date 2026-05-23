import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Reembolso — CTM',
  description: 'Política de reembolso e direito de livre resolução do serviço CTM — Clean Trend Method.',
}

export default function ReembolsoPage() {
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
          <h1>Política de Reembolso</h1>
          <p className="lead">O CTM oferece o direito de livre resolução previsto na legislação europeia de consumo. Esta política explica em que condições e como solicitar o reembolso da subscrição Pro.</p>

          <section>
            <h2>1. Direito de livre resolução · 14 dias</h2>
            <p>Nos termos do Decreto-Lei nº 24/2014 (Portugal) e da Directiva 2011/83/UE relativa aos direitos dos consumidores, o utilizador tem o direito de resolver o contrato de subscrição Pro no prazo de <strong>14 dias</strong> a contar da data de adesão, sem necessidade de indicar qualquer motivo e sem encargos.</p>
            <p>Este direito aplica-se exclusivamente a consumidores (pessoas singulares que actuam fora da sua actividade profissional).</p>
          </section>

          <section>
            <h2>2. Como solicitar o reembolso</h2>
            <p>Para exercer o direito de livre resolução, envie uma mensagem para <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a> com:</p>
            <ul>
              <li>Email utilizado na subscrição;</li>
              <li>Data aproximada da subscrição;</li>
              <li>Indicação clara de que pretende exercer o direito de livre resolução.</li>
            </ul>
            <p>Não é necessária qualquer justificação. A resposta é dada nas 48 horas úteis seguintes.</p>
          </section>

          <section>
            <h2>3. Prazo de processamento</h2>
            <p>Após confirmação do pedido, o reembolso é processado <strong>no prazo máximo de 14 dias</strong> através do mesmo método de pagamento utilizado na subscrição original (Stripe). O tempo até o valor reflectir na conta do utilizador depende do banco emissor do cartão — tipicamente 3 a 5 dias úteis adicionais.</p>
          </section>

          <section>
            <h2>4. Valor reembolsado</h2>
            <p>Dentro do prazo de 14 dias após a subscrição inicial, é reembolsado o valor integral da última cobrança (<strong>€4,99</strong>), independentemente da utilização que tenha sido feita do serviço.</p>
            <p>Após esse prazo, a subscrição pode ser cancelada a qualquer momento — o cancelamento produz efeitos no final do ciclo de facturação em curso, sem reembolso pro-rata dos dias remanescentes do período já pago.</p>
          </section>

          <section>
            <h2>5. Renovações mensais subsequentes</h2>
            <p>As renovações mensais automáticas a partir do segundo mês <strong>não são abrangidas pelo prazo de 14 dias</strong>, uma vez que se trata de continuação de um contrato já em curso. O utilizador pode cancelar a renovação a qualquer momento, com efeito no final do ciclo em curso.</p>
          </section>

          <section>
            <h2>6. Excepções</h2>
            <p>O direito de livre resolução não se aplica em casos de violação dos <Link href="/termos">Termos e Condições</Link>, designadamente:</p>
            <ul>
              <li>Partilha de credenciais de acesso aos canais Pro;</li>
              <li>Redistribuição de conteúdos protegidos por direitos de autor;</li>
              <li>Utilização do serviço para fins ilícitos.</li>
            </ul>
            <p>Nestes casos, a subscrição pode ser cessada imediatamente sem direito a reembolso, conforme previsto nos termos do contrato.</p>
          </section>

          <section>
            <h2>7. Resolução alternativa de litígios</h2>
            <p>Em caso de litígio relativo a um reembolso, o consumidor pode recorrer a:</p>
            <ul>
              <li><strong>Plataforma Europeia de Resolução de Litígios em Linha</strong>: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>;</li>
              <li><strong>Centros de Arbitragem de Consumo</strong> em Portugal, conforme a localização do consumidor;</li>
              <li><strong>Direcção-Geral do Consumidor</strong>: <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer">www.consumidor.gov.pt</a>.</li>
            </ul>
          </section>

          <section>
            <h2>8. Cancelamento sem reembolso (após 14 dias)</h2>
            <p>Para cancelar a subscrição após o prazo de livre resolução, o utilizador pode:</p>
            <ul>
              <li>Cancelar directamente no portal Stripe, através do link enviado por email;</li>
              <li>Enviar pedido para <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</li>
            </ul>
            <p>O cancelamento é imediato e não implica qualquer custo adicional. O acesso ao serviço mantém-se até ao final do ciclo de facturação já pago.</p>
          </section>

          <section>
            <h2>9. Contacto</h2>
            <p>Para qualquer questão relativa a reembolsos: <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
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
.legal-nav { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; padding: 18px 32px; height: 64px; background: rgba(245,242,236,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid var(--ink-10); }
.legal-nav .back { font-family: var(--mono); font-size: 13px; color: var(--ink-60); text-decoration: none; letter-spacing: 0.02em; transition: color .2s; }
.legal-nav .back:hover { color: var(--ink); }
.legal-nav .brand { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.14em; color: var(--ink); }
.legal-content { max-width: 740px; margin: 0 auto; padding: 80px 32px 120px; }
.legal-content .eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; display: inline-block; }
.legal-content h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(40px, 6vw, 64px); line-height: 1.04; letter-spacing: -0.015em; margin-bottom: 24px; }
.legal-content .lead { font-size: 18px; font-weight: 300; color: var(--ink-60); line-height: 1.65; margin-bottom: 56px; max-width: 60ch; padding-bottom: 32px; border-bottom: 1px solid var(--ink-10); }
.legal-content section { margin-bottom: 48px; }
.legal-content section h2 { font-family: var(--serif); font-weight: 400; font-size: clamp(22px, 2.8vw, 28px); line-height: 1.2; letter-spacing: -0.005em; margin-bottom: 16px; color: var(--ink); }
.legal-content section p { font-size: 15px; color: var(--ink-60); line-height: 1.75; margin-bottom: 14px; }
.legal-content section p:last-child { margin-bottom: 0; }
.legal-content section strong { color: var(--ink); font-weight: 500; }
.legal-content section a { color: var(--ink); text-decoration: underline; text-underline-offset: 2px; text-decoration-color: var(--gold); text-decoration-thickness: 1px; }
.legal-content section a:hover { color: var(--gold); }
.legal-content section ul { list-style: none; margin: 14px 0; padding-left: 0; display: flex; flex-direction: column; gap: 10px; }
.legal-content section ul li { font-size: 15px; color: var(--ink-60); line-height: 1.65; padding-left: 20px; position: relative; }
.legal-content section ul li::before { content: '—'; position: absolute; left: 0; color: var(--gold); font-family: var(--mono); }
.legal-footer { margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--ink-10); }
.legal-footer p { font-family: var(--mono); font-size: 11px; color: var(--ink-40); letter-spacing: 0.04em; margin-bottom: 16px; }
.legal-footer .legal-links { display: flex; flex-wrap: wrap; gap: 12px; }
.legal-footer .legal-links a { font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em; color: var(--ink-60); text-decoration: none; padding: 7px 14px; border: 1px solid var(--ink-15); border-radius: 6px; transition: all .2s ease; }
.legal-footer .legal-links a:hover { color: var(--ink); border-color: var(--ink); background: var(--paper-2); }
@media (max-width: 768px) {
  .legal-nav { padding: 14px 20px; height: 56px; }
  .legal-content { padding: 48px 20px 80px; }
}
`
