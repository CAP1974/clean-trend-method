import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade — CTM',
  description: 'Política de privacidade e tratamento de dados pessoais do serviço CTM — Clean Trend Method.',
}

export default function PrivacidadePage() {
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
          <h1>Política de Privacidade</h1>
          <p className="lead">O CTM trata os seus dados pessoais com transparência e em conformidade com o Regulamento Geral de Protecção de Dados (RGPD — Regulamento UE 2016/679) e demais legislação aplicável.</p>

          <section>
            <h2>1. Responsável pelo tratamento</h2>
            <p>O responsável pelo tratamento dos dados pessoais é <strong>Carlos Alberto de Sousa Pinto</strong>, com sede em <strong>Rua Principal, 13, 2500-637 Salir de Matos, Portugal</strong>, NIF <strong>PT 213 205 700</strong>. Contacto para questões de privacidade: <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
          </section>

          <section>
            <h2>2. Dados recolhidos</h2>
            <p>No âmbito da prestação do serviço CTM, recolhemos as seguintes categorias de dados:</p>
            <ul>
              <li><strong>Dados de subscrição:</strong> email, primeiro nome (opcional).</li>
              <li><strong>Dados de pagamento:</strong> processados directamente pelo Stripe Payments Europe, Ltd. O CTM não armazena dados de cartão.</li>
              <li><strong>Dados de utilização:</strong> activos registados no radar de carteira, solicitações de análise (apenas no nível Pro).</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de browser, páginas visitadas, agregados de forma anonimizada.</li>
              <li><strong>Comunicações:</strong> mensagens enviadas para suporte por email, Telegram ou WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidades e base legal</h2>
            <ul>
              <li><strong>Prestação do serviço subscrito</strong> — base legal: execução do contrato (Art. 6º/1/b RGPD).</li>
              <li><strong>Processamento de pagamentos</strong> — execução do contrato, via Stripe.</li>
              <li><strong>Comunicações operacionais</strong> (briefings, análises, notificações de carteira) — execução do contrato.</li>
              <li><strong>Cumprimento de obrigações legais</strong> (facturação, fiscalidade) — obrigação legal (Art. 6º/1/c).</li>
              <li><strong>Análise estatística agregada do serviço</strong> — interesse legítimo (Art. 6º/1/f).</li>
            </ul>
          </section>

          <section>
            <h2>4. Subcontratantes e partilha de dados</h2>
            <p>Os dados pessoais podem ser partilhados com os seguintes subcontratantes, contratualmente vinculados ao cumprimento do RGPD:</p>
            <ul>
              <li><strong>Stripe Payments Europe, Ltd.</strong> — processamento de pagamentos.</li>
              <li><strong>Vercel Inc.</strong> — alojamento da aplicação web.</li>
              <li><strong>Telegram Messenger Inc.</strong> — entrega das comunicações nos canais Telegram.</li>
              <li><strong>Substack Inc.</strong> — entrega das publicações editoriais.</li>
              <li><strong>Google LLC</strong> — fontes web (Google Fonts) e correio electrónico.</li>
            </ul>
            <p>O CTM <strong>não vende, aluga nem cede dados pessoais a terceiros</strong> para fins de marketing.</p>
          </section>

          <section>
            <h2>5. Conservação</h2>
            <p>Os dados de conta são conservados enquanto a subscrição estiver activa e durante o período legalmente exigido para efeitos fiscais e contabilísticos (até 10 anos após cessação, nos termos da legislação portuguesa). Após esse prazo, os dados são apagados ou anonimizados.</p>
          </section>

          <section>
            <h2>6. Direitos do titular dos dados</h2>
            <p>Nos termos do RGPD, o utilizador tem direito a:</p>
            <ul>
              <li><strong>Acesso</strong> aos seus dados pessoais;</li>
              <li><strong>Rectificação</strong> de dados inexactos ou incompletos;</li>
              <li><strong>Apagamento</strong> (&quot;direito ao esquecimento&quot;);</li>
              <li><strong>Limitação</strong> do tratamento;</li>
              <li><strong>Portabilidade</strong> dos dados em formato estruturado;</li>
              <li><strong>Oposição</strong> ao tratamento baseado em interesse legítimo;</li>
              <li><strong>Retirar o consentimento</strong> a qualquer momento, quando aplicável.</li>
            </ul>
            <p>Para exercer qualquer destes direitos, contacte <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>. A resposta será dada no prazo máximo de 30 dias.</p>
            <p>O utilizador pode ainda apresentar reclamação à autoridade de controlo — em Portugal, a <strong>Comissão Nacional de Protecção de Dados (CNPD)</strong>, <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>.</p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>O website do CTM utiliza apenas cookies estritamente necessários ao funcionamento da aplicação e, eventualmente, cookies analíticos anonimizados. Não utilizamos cookies de rastreio publicitário nem partilhamos dados de navegação com redes sociais ou plataformas de adtech.</p>
          </section>

          <section>
            <h2>8. Segurança</h2>
            <p>Aplicamos medidas técnicas e organizativas adequadas para proteger os dados pessoais — incluindo transmissão em HTTPS, controlo de acessos e tokenização de pagamentos através do Stripe.</p>
            <p>Em caso de violação de dados pessoais que represente risco elevado para os direitos do utilizador, este será notificado nos termos do RGPD.</p>
          </section>

          <section>
            <h2>9. Transferências internacionais</h2>
            <p>Alguns subcontratantes (Stripe, Vercel, Google) podem processar dados fora do Espaço Económico Europeu. Nestes casos, garantimos que existem mecanismos adequados de salvaguarda — cláusulas contratuais-tipo aprovadas pela Comissão Europeia ou decisões de adequação.</p>
          </section>

          <section>
            <h2>10. Alterações a esta política</h2>
            <p>Esta política pode ser actualizada periodicamente. A versão em vigor está sempre disponível nesta página. Em caso de alterações substanciais, o utilizador será notificado por email.</p>
          </section>

          <section>
            <h2>11. Contacto</h2>
            <p>Para questões relacionadas com protecção de dados pessoais: <a href="mailto:ctmpro2026@gmail.com">ctmpro2026@gmail.com</a>.</p>
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
