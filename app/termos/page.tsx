export default function Termos() {
  return (
    <main className="legal-root">
      <div className="legal-inner">

        <div className="legal-header">
          <a href="/" className="legal-back">← CTM Pro</a>
          <div className="legal-logo">CTM</div>
        </div>

        <h1 className="legal-h1">Termos de Serviço</h1>
        <p className="legal-meta">Última actualização: Maio de 2026 · cleantrendmethod.com</p>

        <div className="legal-aviso">
          O CTM Pro é uma comunidade privada de análise e curadoria de dados de mercado.
          Não presta consultoria financeira, não recomenda compra ou venda de activos,
          não gere carteiras e não promete qualquer rentabilidade.
        </div>

        <section className="legal-section">
          <h2 className="legal-h2">1. Identificação do Prestador</h2>
          <p>O CTM Pro (Clean Trend Method) é um serviço prestado a título individual por Carlos Pinto, residente em Portugal, operando sob o regime de actividade independente (recibos verdes), acessível através do website cleantrendmethod.com.</p>
          <p>Contacto: carlospinto08@gmail.com</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">2. Descrição do Serviço</h2>
          <p>O CTM Pro é uma comunidade privada de análise e curadoria de dados de mercado financeiro. O serviço destina-se a pessoas que pretendem acompanhar acções e mercados financeiros com mais clareza, sem depender de múltiplas ferramentas pagas.</p>
          <p>O CTM Pro inclui, consoante o plano subscrito:</p>
          <ul>
            <li>Radar diário de ativos em observação</li>
            <li>Fichas técnicas e fundamentais informativas</li>
            <li>Morning Briefing diário com dados de mercado</li>
            <li>Acesso ao bot de análise via Telegram (/analisa, /fundamentais, /carteira)</li>
            <li>Comunidade privada no Telegram</li>
            <li>Biblioteca CTM com conteúdo de apoio à compreensão de dados</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">3. O que o CTM Pro NÃO é</h2>
          <p>O CTM Pro não presta qualquer dos seguintes serviços:</p>
          <ul>
            <li>Consultoria financeira ou de investimento</li>
            <li>Gestão de carteiras de valores mobiliários</li>
            <li>Recomendações de compra ou venda de activos financeiros</li>
            <li>Aconselhamento financeiro personalizado</li>
            <li>Formação financeira certificada</li>
            <li>Serviço de sinais de trading</li>
            <li>Garantia ou promessa de rentabilidade</li>
          </ul>
          <p>Toda a informação disponibilizada pelo CTM Pro tem carácter exclusivamente informativo e analítico. A decisão de investir ou desinvestir é sempre e exclusivamente da responsabilidade do utilizador.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">4. Acesso e Conta</h2>
          <p>O acesso ao CTM Pro é feito através do canal privado no Telegram, após confirmação de pagamento via Lemon Squeezy. O utilizador é responsável por manter os seus dados de acesso em segurança e por todas as actividades realizadas na sua conta.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">5. Preços e Pagamento</h2>
          <p>O plano CTM Pro tem o valor de €9,99 por mês, sem fidelização. O pagamento é processado de forma segura através da plataforma Lemon Squeezy. Os preços incluem IVA aplicável.</p>
          <p>O Dashboard CTM, quando disponível, terá o valor de €39,99 em venda única.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">6. Cancelamento</h2>
          <p>O utilizador pode cancelar a sua subscrição a qualquer momento, sem penalização, directamente através da plataforma de pagamento Lemon Squeezy. O acesso mantém-se activo até ao fim do período já pago.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">7. Propriedade Intelectual</h2>
          <p>Todo o conteúdo produzido pelo CTM Pro — análises, fichas, textos, metodologia e materiais de apoio — é propriedade do prestador. É proibida a reprodução, distribuição ou partilha pública de qualquer conteúdo sem autorização prévia e escrita.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">8. Limitação de Responsabilidade</h2>
          <p>O CTM Pro não se responsabiliza por perdas financeiras, decisões de investimento ou quaisquer danos directos ou indirectos resultantes da utilização da informação disponibilizada. O utilizador reconhece que o investimento em mercados financeiros comporta riscos, incluindo a perda total do capital investido.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">9. Alterações aos Termos</h2>
          <p>O prestador reserva-se o direito de alterar estes Termos de Serviço a qualquer momento, com aviso prévio de 15 dias através dos canais da comunidade. A continuação da utilização do serviço após esse prazo implica a aceitação das alterações.</p>
        </section>

        <section className="legal-section">
          <h2 className="legal-h2">10. Lei Aplicável</h2>
          <p>Estes Termos de Serviço são regidos pela lei portuguesa. Em caso de litígio, as partes submetem-se à jurisdição dos tribunais portugueses competentes.</p>
        </section>

        <div className="legal-footer">
          <a href="/privacidade">Política de Privacidade</a>
          <span>·</span>
          <a href="/reembolso">Política de Reembolso</a>
          <span>·</span>
          <a href="/">cleantrendmethod.com</a>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        :root { --gold: #c8b97a; --border: #1e1e16; --text: #f0ead8; --muted: #777060; --bg-dark: #060605; }
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
