export default function Privacidade() {
  return (
    <main className="legal-root">
      <div className="legal-inner">

        <div className="legal-header">
          <a href="/" className="legal-back">← CTM Pro</a>
          <div className="legal-logo">CTM</div>
        </div>

        <h1 className="legal-h1">Política de Privacidade</h1>
        <p className="legal-meta">Última actualização: Maio de 2026 · cleantrendmethod.com</p>

        <div className="legal-aviso">
          O CTM Pro respeita a tua privacidade e cumpre o Regulamento Geral sobre a Protecção de Dados (RGPD).
          Os teus dados nunca são vendidos nem partilhados para fins comerciais.
        </div>

        <section className="legal-section">
          <h2 className="legal-h2">1. Responsável pelo Tratamento</h2>
          <p>Carlos Pinto, actividade independente, Portugal.</p>
          <p>Contacto: carlospinto08@gmail.com</p>
          <p>Website: cleantrendmethod.com</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">2. Dados Recolhidos</h2>
          <p>O CTM Pro recolhe e trata os seguintes dados pessoais:</p>
          <ul>
            <li>Nome e endereço de email — fornecidos no momento de subscrição ou registo na lista de espera</li>
            <li>ID do Telegram — para gestão do acesso ao canal privado</li>
            <li>Dados de pagamento — processados exclusivamente pela Lemon Squeezy (não são armazenados pelo CTM Pro)</li>
            <li>Dados de utilização do bot — comandos enviados para análise de ativos (tickers pesquisados)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">3. Finalidade do Tratamento</h2>
          <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
          <ul>
            <li>Gestão da subscrição e acesso ao serviço</li>
            <li>Envio de comunicações relacionadas com o serviço</li>
            <li>Cumprimento de obrigações legais e fiscais</li>
            <li>Melhoria contínua do serviço</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">4. Base Legal</h2>
          <p>O tratamento dos dados baseia-se na execução do contrato de prestação de serviços (artigo 6.º, n.º 1, alínea b) do RGPD) e no cumprimento de obrigações legais (artigo 6.º, n.º 1, alínea c) do RGPD).</p>
          <p>Para a lista de espera, o tratamento baseia-se no consentimento do titular (artigo 6.º, n.º 1, alínea a) do RGPD), que pode ser retirado a qualquer momento.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">5. Conservação dos Dados</h2>
          <p>Os dados pessoais são conservados pelo período necessário à prestação do serviço e durante o período legalmente exigido para efeitos fiscais e contabilísticos (mínimo de 10 anos, conforme legislação fiscal portuguesa).</p>
          <p>Os dados da lista de espera são conservados até ao pedido de eliminação por parte do titular ou até ao lançamento do serviço.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">6. Partilha de Dados</h2>
          <p>Os dados pessoais não são vendidos nem partilhados com terceiros para fins comerciais. São partilhados apenas com os seguintes subcontratantes, para operação do serviço:</p>
          <ul>
            <li>Lemon Squeezy — processamento seguro de pagamentos (EUA, com cláusulas contratuais-tipo)</li>
            <li>Supabase — armazenamento seguro de dados (servidores na UE, Frankfurt)</li>
            <li>Resend — envio de emails transaccionais</li>
            <li>Vercel — alojamento do website (EUA, com certificação adequada)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">7. Direitos do Titular</h2>
          <p>Ao abrigo do RGPD, tens os seguintes direitos:</p>
          <ul>
            <li>Aceder aos teus dados pessoais</li>
            <li>Rectificar dados incorrectos ou incompletos</li>
            <li>Apagar os teus dados (direito ao esquecimento)</li>
            <li>Opor-te ao tratamento</li>
            <li>Portabilidade dos dados</li>
            <li>Retirar o consentimento a qualquer momento</li>
          </ul>
          <p>Para exercer estes direitos, contacta: geral.carlospinto@outlook.com. Responderemos no prazo de 30 dias.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">8. Cookies</h2>
          <p>O website cleantrendmethod.com utiliza apenas cookies técnicos essenciais para o funcionamento do site (como manter a sessão). Não são utilizados cookies de rastreamento, publicitários ou de terceiros.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">9. Segurança</h2>
          <p>São adoptadas medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda ou destruição, em conformidade com o RGPD. O website utiliza HTTPS e os dados são armazenados em servidores com encriptação.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">10. Reclamações</h2>
          <p>Tens o direito de apresentar reclamação à autoridade de controlo competente. Em Portugal, a autoridade é a Comissão Nacional de Protecção de Dados (CNPD):</p>
          <ul>
            <li>Website: www.cnpd.pt</li>
            <li>Email: geral@cnpd.pt</li>
          </ul>
        </section>

        <div className="legal-footer">
          <a href="/termos">Termos de Serviço</a>
          <span>·</span>
          <a href="/reembolso">Política de Reembolso</a>
          <span>·</span>
          <a href="/">cleantrendmethod.com</a>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        :root { --gold: #c8b97a; --border: #1e1e16; --text: #f0ead8; --muted: #777060; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .legal-root { background-color: #09090f; color: var(--text); font-family: 'DM Sans', sans-serif; min-height: 100vh; padding: 60px 24px; }
        .legal-inner { max-width: 720px; margin: 0 auto; }
        .legal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 48px; }
        .legal-back { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted); text-decoration: none; letter-spacing: 0.06em; transition: color 0.2s; }
        .legal-back:hover { color: var(--gold); }
        .legal-logo { font-family: 'DM Mono', monospace; font-size: 1rem; font-weight: 500; color: var(--gold); letter-spacing: 0.15em; }
        .legal-h1 { font-family: 'DM Sans', sans-serif; font-size: 2rem; font-weight: 500; color: #f5eedc; margin-bottom: 8px; }
        .legal-meta { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 32px; }
        .legal-aviso { background: #0d0d08; border: 1px solid #2a2a18; border-left: 3px solid var(--gold); padding: 16px 20px; font-size: 0.85rem; color: var(--muted); line-height: 1.7; margin-bottom: 40px; }
        .legal-section { margin-bottom: 36px; padding-bottom: 36px; border-bottom: 1px solid var(--border); }
        .legal-section:last-of-type { border-bottom: none; }
        .legal-h2 { font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 500; color: var(--gold); margin-bottom: 14px; letter-spacing: 0.02em; }
        .legal-section p { font-size: 0.88rem; color: var(--muted); line-height: 1.8; font-weight: 300; margin-bottom: 12px; }
        .legal-section ul { padding-left: 0; list-style: none; margin-top: 8px; }
        .legal-section ul li { font-size: 0.88rem; color: var(--muted); line-height: 1.7; padding: 5px 0; padding-left: 16px; position: relative; }
        .legal-section ul li::before { content: "—"; position: absolute; left: 0; color: var(--gold); }
        .legal-footer { display: flex; gap: 12px; align-items: center; margin-top: 48px; padding-top: 32px; border-top: 1px solid var(--border); flex-wrap: wrap; }
        .legal-footer a { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: #555; text-decoration: none; letter-spacing: 0.04em; transition: color 0.2s; }
        .legal-footer a:hover { color: var(--gold); }
        .legal-footer span { color: #333; font-size: 0.7rem; }
      `}</style>
    </main>
  );
}
