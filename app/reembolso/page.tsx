export default function Reembolso() {
  return (
    <main className="legal-root">
      <div className="legal-inner">

        <div className="legal-header">
          <a href="/" className="legal-back">← CTM Pro</a>
          <div className="legal-logo">CTM</div>
        </div>

        <h1 className="legal-h1">Política de Reembolso</h1>
        <p className="legal-meta">Última actualização: Maio de 2026 · cleantrendmethod.com</p>

        <div className="legal-aviso">
          O CTM Pro oferece uma garantia de satisfação de 7 dias. Se não ficares satisfeito
          nos primeiros 7 dias após activação, devolvemos o valor integral sem perguntas.
        </div>

        <section className="legal-section">
          <h2 className="legal-h2">1. Garantia de 7 Dias</h2>
          <p>O CTM Pro oferece uma garantia de satisfação de 7 dias a contar da data de activação da subscrição.</p>
          <p>Se, por qualquer motivo, não ficares satisfeito com o serviço nos primeiros 7 dias, podes solicitar o reembolso integral do valor pago, sem necessidade de justificação.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">2. Como Solicitar Reembolso</h2>
          <p>Para solicitar o reembolso dentro do período de garantia:</p>
          <ul>
            <li>Envia um email para geral.carlospinto@outlook.com com o assunto "Pedido de Reembolso"</li>
            <li>Indica o email utilizado na subscrição e a data de activação</li>
            <li>O reembolso será processado no prazo de 5 dias úteis</li>
            <li>O valor será devolvido através do mesmo método de pagamento utilizado</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">3. Condições</h2>
          <p>O reembolso aplica-se nas seguintes condições:</p>
          <ul>
            <li>Pedido efectuado dentro dos primeiros 7 dias após activação da subscrição</li>
            <li>Subscrição mensal activa — não se aplica a produtos de venda única</li>
          </ul>
          <p>Após o período de 7 dias, não são efectuados reembolsos parciais ou totais. O acesso mantém-se activo até ao fim do período pago.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">4. Cancelamento vs Reembolso</h2>
          <p>O cancelamento da subscrição pode ser feito a qualquer momento através da plataforma Lemon Squeezy, sem qualquer penalização.</p>
          <p>O cancelamento não dá direito a reembolso do período em curso, excepto durante os primeiros 7 dias de garantia. O acesso mantém-se até ao final do período pago.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">5. Produtos de Venda Única</h2>
          <p>O Dashboard CTM, por ser um produto digital de venda única com acesso imediato ao ficheiro, não está sujeito a reembolso após entrega do produto.</p>
          <p>Em caso de falha técnica na entrega do produto, o reembolso integral será processado dentro de 5 dias úteis após confirmação do problema.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">6. Direitos do Consumidor</h2>
          <p>Esta política não prejudica os direitos legais do consumidor ao abrigo da legislação portuguesa e europeia aplicável, nomeadamente o Decreto-Lei n.º 24/2014 relativo aos contratos celebrados à distância.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">7. Contacto</h2>
          <p>Para qualquer questão relacionada com reembolsos ou cancelamentos:</p>
          <ul>
            <li>Email: carlospinto08@gmail.com</li>
            <li>Website: cleantrendmethod.com</li>
            <li>Prazo de resposta: até 2 dias úteis</li>
          </ul>
        </section>

        <div className="legal-footer">
          <a href="/termos">Termos de Serviço</a>
          <span>·</span>
          <a href="/privacidade">Política de Privacidade</a>
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
