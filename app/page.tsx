'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    document.querySelectorAll('.features-grid, .def-grid').forEach((grid) => {
      grid.querySelectorAll('.feature, .def-card').forEach((card, i) => {
        card.classList.add('reveal')
        ;(card as HTMLElement).style.transitionDelay = `${i * 70}ms`
        observer.observe(card)
      })
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Figtree:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        :root {
          --ink:        #0E0E0B;
          --ink-60:     rgba(14,14,11,0.6);
          --ink-30:     rgba(14,14,11,0.3);
          --ink-10:     rgba(14,14,11,0.1);
          --paper:      #F5F2EC;
          --paper-2:    #EDEAE2;
          --gold:       #B8983E;
          --gold-light: #D4AF5A;
          --green:      #1A6B45;
          --green-bg:   #EBF4EE;
          --red-bg:     #FAEAEA;
          --red:        #C0392B;
          --amber-bg:   #FDF3E3;
          --amber:      #946C00;
          --serif:      'DM Serif Display', Georgia, serif;
          --mono:       'DM Mono', monospace;
          --sans:       'Figtree', sans-serif;
          --r:          6px;
          --r-lg:       12px;
          --max:        1100px;
        }

        body {
          font-family: var(--sans);
          background: var(--paper);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 60px;
          background: rgba(245,242,236,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--ink-10);
        }
        .nav-logo { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.1em; color: var(--ink); text-decoration: none; }
        .nav-links { display: flex; gap: 28px; list-style: none; }
        .nav-links a { font-size: 13px; color: var(--ink-60); text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta { font-family: var(--mono); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; padding: 8px 18px; background: var(--ink); color: var(--paper); border: none; border-radius: var(--r); cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.1s; }
        .nav-cta:hover { background: #2a2a24; transform: translateY(-1px); }

        /* HERO */
        #hero {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 120px 40px 80px;
          text-align: center;
          position: relative; overflow: hidden;
          max-width: 100%;
        }
        #hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(var(--ink-10) 1px, transparent 1px), linear-gradient(90deg, var(--ink-10) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }
        .hero-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--gold); text-transform: uppercase; margin-bottom: 24px; opacity: 0; animation: fadeUp 0.7s 0.1s ease forwards; }
        .hero-title { font-family: var(--serif); font-size: clamp(42px, 7vw, 80px); line-height: 1.05; color: var(--ink); max-width: 820px; margin: 0 auto 28px; opacity: 0; animation: fadeUp 0.7s 0.25s ease forwards; }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-sub { font-size: 18px; font-weight: 300; color: var(--ink-60); max-width: 580px; margin: 0 auto 16px; line-height: 1.7; opacity: 0; animation: fadeUp 0.7s 0.4s ease forwards; }

        .recompensa-block { max-width: 720px; margin: 0 auto 40px; background: var(--paper-2); border: 1px solid var(--ink-10); border-radius: var(--r-lg); padding: 28px 32px; opacity: 0; animation: fadeUp 0.7s 0.5s ease forwards; }
        .rb-title { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .rb-quote { font-family: var(--serif); font-size: clamp(18px, 2.5vw, 24px); color: var(--ink); line-height: 1.3; margin-bottom: 20px; font-style: italic; }
        .recompensa-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .rp-item { background: var(--paper); border: 1px solid var(--ink-10); border-radius: var(--r); padding: 12px 14px; text-align: left; }
        .rp-label { font-family: var(--mono); font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
        .rp-val { font-size: 13px; font-weight: 500; color: var(--ink); }
        .rp-desc { font-size: 11px; color: var(--ink-60); margin-top: 2px; line-height: 1.4; }

        .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.7s 0.65s ease forwards; }
        .btn-primary { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.06em; padding: 14px 28px; background: var(--ink); color: var(--paper); border: none; border-radius: var(--r); cursor: pointer; text-decoration: none; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { background: #2a2a24; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(14,14,11,0.2); }
        .btn-outline { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.06em; padding: 14px 28px; background: transparent; color: var(--ink); border: 1px solid var(--ink-30); border-radius: var(--r); cursor: pointer; text-decoration: none; transition: all 0.2s; }
        .btn-outline:hover { border-color: var(--ink); background: var(--ink-10); }
        .hero-disclaimer { margin-top: 18px; font-size: 12px; color: var(--ink-30); letter-spacing: 0.02em; opacity: 0; animation: fadeUp 0.7s 0.8s ease forwards; }

        /* TICKER */
        .ticker-strip { position: absolute; bottom: 0; left: 0; right: 0; border-top: 1px solid var(--ink-10); padding: 12px 0; overflow: hidden; background: rgba(245,242,236,0.8); }
        .ticker-track { display: flex; animation: ticker 30s linear infinite; width: max-content; }
        .ticker-item { display: flex; align-items: center; gap: 10px; padding: 0 32px; font-family: var(--mono); font-size: 12px; color: var(--ink-60); white-space: nowrap; border-right: 1px solid var(--ink-10); }
        .ticker-item .symbol { color: var(--ink); font-weight: 500; }
        .ticker-item .up { color: var(--green); }
        .ticker-item .down { color: var(--red); }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* SECTIONS */
        section { padding: 100px 40px; max-width: var(--max); margin: 0 auto; }
        .label { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: block; }
        .section-title { font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); line-height: 1.1; color: var(--ink); margin-bottom: 20px; }
        .section-body { font-size: 17px; font-weight: 300; color: var(--ink-60); line-height: 1.75; max-width: 580px; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .rule { border: none; border-top: 1px solid var(--ink-10); margin: 0; }

        /* O QUE É */
        .def-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-top: 48px; background: var(--ink-10); border: 1px solid var(--ink-10); border-radius: var(--r-lg); overflow: hidden; }
        .def-card { background: var(--paper); padding: 28px 24px; transition: background 0.2s; }
        .def-card:hover { background: var(--paper-2); }
        .def-card .icon { font-size: 22px; margin-bottom: 12px; }
        .def-card h4 { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .def-card p { font-size: 13px; color: var(--ink-60); line-height: 1.6; }
        .not-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 32px; }
        .not-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--ink-60); padding: 12px 16px; background: var(--red-bg); border-radius: var(--r); border-left: 3px solid var(--red); }
        .not-list li::before { content: '×'; color: var(--red); font-weight: 600; flex-shrink: 0; margin-top: 1px; }
        .channel-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
        .ch-badge { display: inline-flex; align-items: center; gap: 7px; padding: 9px 16px; border: 1px solid var(--ink-10); border-radius: var(--r); font-size: 13px; color: var(--ink); text-decoration: none; background: var(--paper); transition: all 0.2s; }
        .ch-badge:hover { border-color: var(--ink-30); background: var(--paper-2); transform: translateY(-1px); }

        /* CARTEIRA */
        #carteira { background: var(--ink); color: var(--paper); padding: 100px 40px; overflow: hidden; }
        #carteira .inner { max-width: var(--max); margin: 0 auto; }
        #carteira .label { color: var(--gold-light); }
        #carteira .section-title { color: var(--paper); }
        #carteira .section-body { color: rgba(245,242,236,0.6); }

        .track-record-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: 32px; background: rgba(245,242,236,0.08); border-radius: var(--r-lg); overflow: hidden; }
        .tr-metric { background: rgba(245,242,236,0.03); padding: 24px; text-align: center; }
        .tr-metric .value { font-family: var(--serif); font-size: 32px; color: var(--paper); display: block; margin-bottom: 4px; }
        .tr-metric .vlabel { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.35); }

        /* PINE CARDS */
        .pine-wrapper { margin-top: 48px; display: flex; flex-direction: column; gap: 20px; }
        .pine-analysis-card { background: #fff; border-radius: var(--r-lg); overflow: hidden; border: 1px solid rgba(245,242,236,0.1); }
        .pine-card-header { background: rgba(245,242,236,0.05); border-bottom: 1px solid rgba(245,242,236,0.08); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; }
        .pine-card-title { font-family: var(--mono); font-size: 12px; font-weight: 500; color: rgba(245,242,236,0.9); letter-spacing: 0.06em; }
        .pine-card-signal { display: inline-flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 20px; }
        .sig-green { background: rgba(46,125,50,0.25); color: #4ade80; }
        .sig-amber { background: rgba(230,81,0,0.25); color: #fbbf24; }
        .sig-red   { background: rgba(183,28,28,0.25); color: #f87171; }
        .pine-grids { display: grid; grid-template-columns: 1fr 1fr; }
        .pine-panel { background: #FAFAF8; }
        .pine-panel + .pine-panel { border-left: 1px solid #E8E5DE; }
        .pine-panel-header { padding: 10px 16px 8px; border-bottom: 1px solid #E8E5DE; font-family: var(--mono); font-size: 11px; font-weight: 500; color: #666; letter-spacing: 0.06em; background: #F0EDE6; }
        .pine-row { display: flex; align-items: center; padding: 7px 16px; border-bottom: 1px solid rgba(0,0,0,0.04); gap: 8px; }
        .pine-row:last-child { border-bottom: none; }
        .pine-row-label { font-family: var(--mono); font-size: 11px; color: #555; min-width: 72px; flex-shrink: 0; }
        .pine-bar-wrap { flex: 1; height: 10px; background: #E8E5DE; border-radius: 3px; overflow: hidden; }
        .pine-bar { height: 100%; border-radius: 3px; transition: width 1s ease; }
        .bar-g { background: #2E7D32; }
        .bar-a { background: #E65100; }
        .bar-r { background: #B71C1C; }
        .pine-row-value { font-family: var(--mono); font-size: 11px; color: #222; text-align: right; min-width: 90px; font-weight: 500; }
        .pine-alert { margin: 6px 16px 10px; padding: 8px 12px; background: #FFF3E0; border-left: 3px solid #E65100; border-radius: 4px; font-size: 11px; color: #7A4000; line-height: 1.5; }
        .pine-alert.alert-green { background: #E8F5E9; border-color: #2E7D32; color: #1A4A1C; }
        .pine-diagnostic { background: #F5F2EC; border-top: 1px solid #E8E5DE; padding: 14px 20px; }
        .pine-diagnostic .diag-title { font-family: var(--mono); font-size: 11px; font-weight: 500; color: #444; letter-spacing: 0.06em; margin-bottom: 6px; display: flex; align-items: center; }
        .pine-diagnostic p { font-size: 12px; color: #555; line-height: 1.65; }
        .pine-diagnostic strong { color: #222; font-weight: 600; }
        .pine-note { font-family: var(--mono); font-size: 11px; color: rgba(245,242,236,0.3); margin-top: 12px; letter-spacing: 0.03em; }

        /* SERVIÇO */
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--ink-10); border: 1px solid var(--ink-10); border-radius: var(--r-lg); overflow: hidden; margin-top: 48px; }
        .feature { background: var(--paper); padding: 32px 28px; transition: background 0.2s; }
        .feature:hover { background: var(--paper-2); }
        .feature-num { font-family: var(--mono); font-size: 11px; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 16px; display: block; }
        .feature h3 { font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
        .feature p { font-size: 13px; color: var(--ink-60); line-height: 1.65; }
        .feature-tag { display: inline-block; margin-top: 14px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; }
        .tag-daily { background: var(--green-bg); color: var(--green); }
        .tag-auto  { background: var(--amber-bg); color: var(--amber); }
        .tag-pro   { background: var(--ink-10); color: var(--ink-60); }

        /* EDUCAÇÃO */
        .edu-strip { background: var(--paper-2); border-top: 1px solid var(--ink-10); border-bottom: 1px solid var(--ink-10); }
        .edu-strip-inner { max-width: var(--max); margin: 0 auto; padding: 100px 40px; }
        .edu-item { padding-top: 20px; border-top: 1px solid rgba(14,14,11,0.12); }
        .edu-item + .edu-item { margin-top: 24px; }
        .edu-item .edu-num { font-family: var(--mono); font-size: 10px; color: var(--ink-30); letter-spacing: 0.1em; margin-bottom: 8px; display: block; }
        .edu-item h4 { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .edu-item p  { font-size: 13px; color: var(--ink-60); line-height: 1.65; }
        .reality-check { background: var(--ink); color: var(--paper); border-radius: var(--r-lg); padding: 40px; font-size: 15px; line-height: 1.8; font-weight: 300; }
        .reality-check strong { color: var(--gold-light); font-weight: 500; }

        /* PREÇO */
        #preco { text-align: center; padding: 100px 40px; max-width: var(--max); margin: 0 auto; }
        .price-cards { display: grid; grid-template-columns: 1fr 1.1fr 1fr; gap: 16px; margin: 48px auto 0; max-width: 860px; }
        .price-card { background: var(--paper); border: 1px solid var(--ink-10); border-radius: var(--r-lg); padding: 32px 28px; text-align: left; transition: transform 0.2s, box-shadow 0.2s; }
        .price-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(14,14,11,0.1); }
        .price-card.featured { background: var(--ink); border-color: var(--ink); color: var(--paper); transform: scale(1.02); }
        .price-card.featured:hover { transform: scale(1.02) translateY(-3px); }
        .price-badge { font-family: var(--mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 20px; display: inline-block; }
        .price-card:not(.featured) .price-badge { background: var(--ink-10); color: var(--ink-60); }
        .price-card.featured .price-badge { background: var(--gold); color: var(--ink); }
        .price-amount { font-family: var(--serif); font-size: 42px; color: var(--ink); line-height: 1; margin-bottom: 4px; }
        .price-card.featured .price-amount { color: var(--paper); }
        .price-period { font-size: 13px; color: var(--ink-60); margin-bottom: 24px; display: block; }
        .price-card.featured .price-period { color: rgba(245,242,236,0.5); }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .price-features li { display: flex; gap: 8px; font-size: 13px; color: var(--ink-60); align-items: flex-start; }
        .price-card.featured .price-features li { color: rgba(245,242,236,0.65); }
        .price-features li::before { content: '—'; color: var(--gold); flex-shrink: 0; font-family: var(--mono); }
        .founding-note { margin: 28px auto 0; max-width: 520px; font-size: 13px; color: var(--ink-60); background: var(--amber-bg); border: 1px solid rgba(148,108,0,0.2); border-radius: var(--r); padding: 14px 20px; line-height: 1.6; }
        .founding-note strong { color: var(--amber); font-weight: 600; }

        /* LEGAL / FOOTER */
        .legal-bar { background: var(--paper-2); border-top: 1px solid var(--ink-10); padding: 28px 40px; text-align: center; }
        .legal-bar p { font-size: 12px; color: var(--ink-30); max-width: 800px; margin: 0 auto; line-height: 1.7; }
        .legal-bar a { color: inherit; text-decoration: underline; }
        footer { border-top: 1px solid var(--ink-10); padding: 40px; display: flex; align-items: center; justify-content: space-between; max-width: var(--max); margin: 0 auto; }
        .footer-logo { font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: var(--ink-60); }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 12px; color: var(--ink-30); text-decoration: none; }
        .footer-links a:hover { color: var(--ink); }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav { padding: 0 20px; }
          .nav-links { display: none; }
          #hero, section { padding: 80px 20px 60px; }
          .two-col { grid-template-columns: 1fr; gap: 40px; }
          .def-grid, .features-grid, .pine-grids { grid-template-columns: 1fr; }
          .pine-panel + .pine-panel { border-left: none; border-top: 1px solid #E8E5DE; }
          .price-cards { grid-template-columns: 1fr; max-width: 400px; }
          .price-card.featured { transform: scale(1); }
          .track-record-bar { grid-template-columns: 1fr 1fr; }
          .recompensa-pillars { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 20px; text-align: center; }
          #carteira { padding: 64px 20px; }
          .edu-strip-inner { padding: 64px 20px; }
          .legal-bar { padding: 24px 20px; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">CTM ·</a>
        <ul className="nav-links">
          <li><a href="#o-que-e">O Projecto</a></li>
          <li><a href="#carteira">Carteira</a></li>
          <li><a href="#servico">Serviço</a></li>
          <li><a href="#educacao">Perspectiva</a></li>
          <li><a href="#preco">Acesso</a></li>
        </ul>
        <a href="#preco" className="nav-cta">Tornar-me Membro</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-eyebrow">Clean Trend Method · Comunidade Lusófona de Análise de Mercados</div>
        <h1 className="hero-title">
          O mercado recompensa<br />quem sabe o que<br /><em>está a ver.</em>
        </h1>
        <p className="hero-sub">
          Uma comunidade de literacia financeira e análise sistemática de mercados. Dados reais, carteira operacional pública e contexto honesto — para quem sempre quis investir com método.
        </p>

        <div className="recompensa-block">
          <div className="rb-title">O que o mercado recompensa — e o que destrói consistência</div>
          <div className="rb-quote">&ldquo;Não o mais rápido. Não o mais ousado. Quem compreende o que está a acontecer.&rdquo;</div>
          <div className="recompensa-pillars">
            {[
              { tag: 'Recompensa', val: 'Disciplina',    desc: 'Critérios consistentes aplicados sem excepção' },
              { tag: 'Recompensa', val: 'Contexto',      desc: 'Ler o que os dados mostram, não o que se espera ver' },
              { tag: 'Recompensa', val: 'Paciência',     desc: 'Aguardar o momento certo em vez de perseguir movimento' },
              { tag: 'Destrói',    val: 'Emoção',        desc: 'Decisões baseadas em FOMO, medo ou euforia de mercado' },
              { tag: 'Destrói',    val: 'Ruído',         desc: 'Excesso de informação contraditória sem estrutura de análise' },
              { tag: 'Destrói',    val: 'Impulsividade', desc: 'Agir sem critérios definidos ou ignorá-los sob pressão' },
            ].map((item) => (
              <div key={item.val} className="rp-item">
                <div className="rp-label">{item.tag}</div>
                <div className="rp-val">{item.val}</div>
                <div className="rp-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-actions">
          <a href="#preco" className="btn-primary">Tornar-me Membro →</a>
          <a href="#o-que-e" className="btn-outline">Conhecer o Projecto</a>
        </div>
        <p className="hero-disclaimer">
          O CTM não presta consultoria financeira. Não emite sinais de compra ou venda.<br />
          Toda a informação tem carácter educativo e informativo. A decisão de investir é sempre e exclusivamente do utilizador.
        </p>

        <div className="ticker-strip">
          <div className="ticker-track">
            {[
              { s: 'PSI 20',    v: '6.842',   c: '+0,4%',  up: true },
              { s: 'DAX 40',    v: '18.340',  c: '−0,2%',  up: false },
              { s: 'IBEX 35',   v: '11.210',  c: '+0,8%',  up: true },
              { s: 'CAC 40',    v: '8.050',   c: '−0,1%',  up: false },
              { s: 'IBOVESPA',  v: '127.840', c: '+1,1%',  up: true },
              { s: 'S&P 500',   v: '5.620',   c: '+0,3%',  up: true },
              { s: 'NVDA',      v: '112,40',  c: '+2,1%',  up: true },
              { s: 'EDP',       v: '3,82',    c: '−0,5%',  up: false },
              { s: 'ASML',      v: '728,00',  c: '+1,4%',  up: true },
            ].flatMap((t, i) => [0, 1].map((r) => (
              <span key={`${i}-${r}`} className="ticker-item">
                <span className="symbol">{t.s}</span>
                {t.v}
                <span className={t.up ? 'up' : 'down'}>{t.c}</span>
              </span>
            )))}
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <hr className="rule" />
      <section id="o-que-e">
        <div className="two-col">
          <div className="reveal">
            <span className="label">01 — O Projecto</span>
            <h2 className="section-title">O que é o CTM</h2>
            <p className="section-body">
              O CTM — Clean Trend Method — é uma comunidade lusófona de literacia financeira e análise sistemática de mercados. A nossa função é organizar informação, estruturar contexto e apresentar dados de forma clara e acessível.<br /><br />
              Não gerimos activos. Não emitimos recomendações personalizadas. Não prometemos resultados. Fornecemos o contexto que permite a cada membro observar o mercado com maior clareza e tomar decisões informadas de forma autónoma.
            </p>
            <div className="channel-row">
              <a href="#" className="ch-badge"><span className="ch-icon">▶</span> YouTube</a>
              <a href="#" className="ch-badge"><span className="ch-icon">✈</span> Telegram</a>
              <a href="#" className="ch-badge"><span className="ch-icon">◎</span> Substack</a>
              <a href="#" className="ch-badge"><span className="ch-icon">◑</span> WhatsApp</a>
            </div>
          </div>
          <div className="reveal">
            <span className="label" style={{ color: 'var(--red)' }}>Uma nota de clareza</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>O que não fazemos</h2>
            <ul className="not-list">
              <li>Consultoria financeira ou aconselhamento de investimento personalizado</li>
              <li>Emissão de sinais, calls ou recomendações de compra e venda</li>
              <li>Gestão de carteiras ou copy trading</li>
              <li>Promessas de rentabilidade, retornos garantidos ou ganhos rápidos</li>
              <li>Formação académica certificada em mercados financeiros</li>
            </ul>
          </div>
        </div>
        <div className="def-grid reveal">
          {[
            { icon: '🔭', title: 'Research Hub Lusófono',   body: 'Agregamos dados técnicos, fundamentais e macroeconómicos de múltiplas fontes profissionais e apresentamos de forma organizada e acessível em português.' },
            { icon: '📊', title: 'Análise Sistemática',     body: 'Cada activo é avaliado segundo critérios objectivos e quantificáveis. Sem interpretações subjectivas. Sem decisões baseadas em emoção ou especulação.' },
            { icon: '🤝', title: 'Transparência Integral',  body: 'A carteira operacional é pública. Os erros são documentados e publicados. O track record é verificável por qualquer membro desde o primeiro dia.' },
            { icon: '🌍', title: 'Foco Ibérico e Lusófono', body: 'Cobertura dos mercados PSI, DAX, IBEX, CAC, B3 e NYSE — os mercados relevantes para investidores de Portugal, Espanha e Brasil.' },
          ].map((c) => (
            <div key={c.title} className="def-card">
              <div className="icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CARTEIRA */}
      <div id="carteira">
        <div className="inner">
          <span className="label">02 — Prova Concreta</span>
          <div className="two-col">
            <div>
              <h2 className="section-title" style={{ color: 'var(--paper)' }}>Uma carteira real.<br />Documentada.<br />100% transparente.</h2>
              <p className="section-body">
                Após um período de preparação e validação metodológica, iniciámos as operações com uma carteira real, gerida segundo os critérios CTM.<br /><br />
                Cada posição está documentada com os respectivos critérios técnicos de entrada. Cada resultado — positivo ou negativo — é publicado integralmente. O track record é público, verificável e actualizado mensalmente. Nada é omitido para preservar aparências.
              </p>
            </div>
            <div>
              <div className="track-record-bar">
                {[
                  { v: '100%', l: 'Transparência' },
                  { v: '—',    l: 'Win rate' },
                  { v: '—',    l: 'R médio' },
                  { v: 'Pub.', l: 'Track record' },
                ].map((m) => (
                  <div key={m.l} className="tr-metric">
                    <span className="value">{m.v}</span>
                    <span className="vlabel">{m.l}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(245,242,236,0.3)', marginTop: '10px', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
                Track record publicado mensalmente. Inclui posições ganhadoras e perdedoras sem excepção.
              </p>
            </div>
          </div>

          {/* PINE CARDS */}
          <div className="pine-wrapper reveal">
            {/* Card CIEN */}
            <div className="pine-analysis-card">
              <div className="pine-card-header">
                <span className="pine-card-title">CIEN — Leitura CTM · Gráfico actual</span>
                <span className="pine-card-signal sig-amber">● ATENÇÃO</span>
              </div>
              <div className="pine-grids">
                <div className="pine-panel">
                  <div className="pine-panel-header">Pine 1 — Price Core v2.8.0</div>
                  {[
                    { l: 'PCore',      w: 92, v: 'PC Premium',  c: 'bar-g' },
                    { l: 'Score/Pivot',w: 98, v: '98 | +2,2%',  c: 'bar-g' },
                    { l: 'Stage',      w: 75, v: 'Stage 2',     c: 'bar-g' },
                    { l: 'Setup',      w: 88, v: 'Clean Trend', c: 'bar-g' },
                    { l: 'Ref.Risco',  w: 55, v: 'Curto 2,15%', c: 'bar-a' },
                    { l: 'Manut.',     w: 80, v: 'Manter',      c: 'bar-g' },
                  ].map((r) => (
                    <div key={r.l} className="pine-row">
                      <span className="pine-row-label">{r.l}</span>
                      <div className="pine-bar-wrap"><div className={`pine-bar ${r.c}`} style={{ width: `${r.w}%` }} /></div>
                      <span className="pine-row-value">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="pine-panel">
                  <div className="pine-panel-header">Pine 2 — Volume Core v4.0</div>
                  {[
                    { l: 'ICT',      w: 87, v: 'SAUD. 87',      c: 'bar-g' },
                    { l: 'Fluxo',    w: 90, v: 'POS | 90',      c: 'bar-g' },
                    { l: 'Flux.Comp',w: 85, v: 'O90/V90/A90',   c: 'bar-g' },
                    { l: 'ICB',      w: 59, v: 'FRACO 59',      c: 'bar-a' },
                    { l: 'SMV',      w: 40, v: 'SEM MVCP 59',   c: 'bar-r' },
                    { l: 'EFI',      w: 85, v: 'EFI+ | 85',     c: 'bar-g' },
                    { l: 'VWAP',     w: 70, v: 'VWAP+ 0,9%',   c: 'bar-g' },
                    { l: 'RVOL/PVO', w: 15, v: '0,15x Z-2,15', c: 'bar-r' },
                  ].map((r) => (
                    <div key={r.l} className="pine-row">
                      <span className="pine-row-label">{r.l}</span>
                      <div className="pine-bar-wrap"><div className={`pine-bar ${r.c}`} style={{ width: `${r.w}%` }} /></div>
                      <span className="pine-row-value">{r.v}</span>
                    </div>
                  ))}
                  <div className="pine-alert">PVO z-score −2,15 — volume muito abaixo da média histórica</div>
                </div>
              </div>
              <div className="pine-diagnostic">
                <div className="diag-title"><span style={{ marginRight: '6px' }}>⚡</span> Diagnóstico CTM — O paradoxo CIEN</div>
                <p>ICT 87 + Fluxo 90 + EFI+ 85 + VWAP+ — <strong>estrutura técnica excelente.</strong><br />
                ICB 59 + SMV 59 + RVOL 0,15x + PVO z−2,15 — <strong>sem interesse institucional no momento actual.</strong><br />
                O activo apresenta fundamentos sólidos mas o mercado não demonstra convicção. Capital em compasso de espera.</p>
              </div>
            </div>

            {/* Card Exemplo Favorável */}
            <div className="pine-analysis-card">
              <div className="pine-card-header">
                <span className="pine-card-title">EXEMPLO — Contexto Favorável · Estrutura de referência</span>
                <span className="pine-card-signal sig-green">● FAVORÁVEL</span>
              </div>
              <div className="pine-grids">
                <div className="pine-panel">
                  <div className="pine-panel-header">Pine 1 — Price Core v2.8.0</div>
                  {[
                    { l: 'PCore',      w: 95, v: 'PC Premium',  c: 'bar-g' },
                    { l: 'Score/Pivot',w: 96, v: '96 | +1,8%',  c: 'bar-g' },
                    { l: 'Stage',      w: 80, v: 'Stage 2',     c: 'bar-g' },
                    { l: 'Setup',      w: 90, v: 'Clean Trend', c: 'bar-g' },
                    { l: 'Ref.Risco',  w: 72, v: 'Curto 1,80%', c: 'bar-g' },
                    { l: 'Manut.',     w: 85, v: 'Manter',      c: 'bar-g' },
                  ].map((r) => (
                    <div key={r.l} className="pine-row">
                      <span className="pine-row-label">{r.l}</span>
                      <div className="pine-bar-wrap"><div className={`pine-bar ${r.c}`} style={{ width: `${r.w}%` }} /></div>
                      <span className="pine-row-value">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="pine-panel">
                  <div className="pine-panel-header">Pine 2 — Volume Core v4.0</div>
                  {[
                    { l: 'ICT',      w: 91, v: 'SAUD. 91',    c: 'bar-g' },
                    { l: 'Fluxo',    w: 94, v: 'POS | 94',    c: 'bar-g' },
                    { l: 'Flux.Comp',w: 90, v: 'O90/V90/A95', c: 'bar-g' },
                    { l: 'ICB',      w: 82, v: 'FORTE 82',    c: 'bar-g' },
                    { l: 'SMV',      w: 78, v: 'MVCP+ | 78',  c: 'bar-g' },
                    { l: 'EFI',      w: 88, v: 'EFI+ | 88',   c: 'bar-g' },
                    { l: 'VWAP',     w: 76, v: 'VWAP+ 1,4%', c: 'bar-g' },
                    { l: 'RVOL/PVO', w: 84, v: '1,8x Z+1,9', c: 'bar-g' },
                  ].map((r) => (
                    <div key={r.l} className="pine-row">
                      <span className="pine-row-label">{r.l}</span>
                      <div className="pine-bar-wrap"><div className={`pine-bar ${r.c}`} style={{ width: `${r.w}%` }} /></div>
                      <span className="pine-row-value">{r.v}</span>
                    </div>
                  ))}
                  <div className="pine-alert alert-green">Volume institucional confirmado — interesse de mercado elevado</div>
                </div>
              </div>
              <div className="pine-diagnostic">
                <div className="diag-title"><span style={{ marginRight: '6px' }}>✅</span> Diagnóstico CTM — Alinhamento completo</div>
                <p>Estrutura técnica sólida com confirmação de volume institucional. <strong>ICT 91 + Fluxo 94 + ICB 82 + RVOL 1,8x</strong> — todos os indicadores convergem. Contexto favorável ao acompanhamento da posição com zona de referência intacta.</p>
              </div>
            </div>
          </div>

          <p className="pine-note">
            Formato de análise CTM · Pine 1 (Price Core) + Pine 2 (Volume Core) · Publicado no canal Pro via sistema automatizado · Não constitui recomendação de investimento
          </p>
        </div>
      </div>

      {/* SERVIÇO */}
      <section id="servico">
        <div className="reveal">
          <span className="label">03 — Serviço Mensal</span>
          <h2 className="section-title">O que um membro recebe</h2>
          <p className="section-body">Infraestrutura analítica profissional, automatizada com inteligência artificial, em português, para os mercados que interessam à comunidade lusófona.</p>
        </div>
        <div className="features-grid reveal">
          {[
            { n: '01', t: 'Morning Briefing',          p: 'Contexto de mercado diário às 7h30 — índices, situação macroeconómica relevante e enquadramento do dia antes da abertura das principais praças.', tag: 'tag-daily', tl: 'Diário · 7h30' },
            { n: '02', t: 'Radar da Carteira',          p: 'O membro regista os seus activos e o sistema monitoriza-os automaticamente. Às 22h recebe o estado técnico de cada posição — intacta, atenção ou comprometida.', tag: 'tag-auto', tl: 'Automático · 22h' },
            { n: '03', t: 'Análise Pine 1 + Pine 2',   p: 'Para cada activo acompanhado, uma leitura técnica completa com Price Core e Volume Core — o mesmo formato utilizado na carteira operacional CTM.', tag: 'tag-pro', tl: 'Dados Profissionais' },
            { n: '04', t: 'Watchlist por Solicitação', p: 'O membro solicita análise de activos fora da carteira operacional. O sistema gera a leitura completa e publica no canal Pro. As ferramentas profissionais estão ao serviço do membro.', tag: 'tag-pro', tl: 'Canal Pro' },
            { n: '05', t: 'Perspectiva Financeira Honesta', p: 'O que os grandes fundos de investimento praticam. O que a evidência empírica demonstra sobre mercados. Publicações regulares sem agenda comercial.', tag: 'tag-daily', tl: 'Regular' },
            { n: '06', t: 'Track Record Público',      p: 'Publicado mensalmente com dados integrais — posições positivas e negativas, win rate, R médio e drawdown. Verificável por qualquer membro desde o início.', tag: 'tag-pro', tl: 'Verificável' },
          ].map((f) => (
            <div key={f.n} className="feature">
              <span className="feature-num">{f.n}</span>
              <h3>{f.t}</h3>
              <p>{f.p}</p>
              <span className={`feature-tag ${f.tag}`}>{f.tl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCAÇÃO */}
      <div className="edu-strip">
        <div className="edu-strip-inner" id="educacao">
          <div className="two-col">
            <div className="reveal">
              <span className="label">04 — Perspectiva de Mercado</span>
              <h2 className="section-title">O que a evidência demonstra</h2>
              <p className="section-body">Publicamos o que os dados mostram — incluindo o que é contrário ao senso comum e ao que os serviços de investimento de retalho habitualmente comunicam.</p>
              <div style={{ marginTop: '32px' }}>
                {[
                  { n: 'TEMA 01', t: 'A realidade do trading a retalho',            p: 'Os dados de brokers europeus regulados mostram que mais de 70% dos investidores a retalho registam resultados negativos em produtos de curto prazo. Os números existem. Publicamo-los.' },
                  { n: 'TEMA 02', t: 'O que os grandes gestores de capital praticam', p: 'Buffett, Dalio, Lynch e outros grandes alocadores de capital têm em comum disciplina de processo, gestão de risco rigorosa e horizontes temporais alargados — não previsões de curto prazo.' },
                  { n: 'TEMA 03', t: 'Investimento vs especulação',                  p: 'A distinção não é académica — tem implicações directas na forma como se define risco, horizonte temporal e critérios de avaliação de cada posição.' },
                  { n: 'TEMA 04', t: 'Gestão comportamental e consistência',         p: 'A maioria das perdas não resulta de análise incorrecta. Resulta de comportamento inconsistente sob pressão de mercado — um tema sistematicamente ignorado pelos serviços de retalho.' },
                ].map((item, i) => (
                  <div key={item.n} className="edu-item" style={i > 0 ? { marginTop: '24px' } : {}}>
                    <span className="edu-num">{item.n}</span>
                    <h4>{item.t}</h4>
                    <p>{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="reality-check">
                <strong>Uma nota sobre a origem deste projecto</strong><br /><br />
                O CTM foi criado a partir de uma experiência directa: a dificuldade de aceder a ferramentas de análise profissional sem incorrer em custos de €100–300 mensais fragmentados por múltiplos serviços, maioritariamente em inglês e desenhados para outros mercados.<br /><br />
                A comunidade lusófona de investidores merece acesso às mesmas ferramentas e ao mesmo nível de análise — apresentados de forma acessível, em português, com transparência total sobre metodologia e resultados.<br /><br />
                <strong>€9,99 por mês não é uma estratégia de preço. É uma posição sobre o que este serviço deve ser.</strong>
              </div>
              <div style={{ marginTop: '24px', padding: '24px', border: '1px solid var(--ink-10)', borderRadius: 'var(--r-lg)' }}>
                <p style={{ fontSize: '13px', color: 'var(--ink-60)', lineHeight: '1.7' }}>
                  <strong style={{ color: 'var(--ink)', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Compromissos editoriais</strong>
                  O CTM não publica previsões de preço com datas específicas. Não apresenta resultados seleccionados. Não remove análises negativas do arquivo. Não cria conteúdo cujo objectivo principal seja gerar engagement sem substância analítica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PREÇO */}
      <section id="preco">
        <span className="label">05 — Acesso</span>
        <h2 className="section-title">Transparente. Sem surpresas.</h2>
        <p className="section-body" style={{ margin: '0 auto' }}>Quatro opções de acesso. Dois programas de lançamento com lugares limitados. Sem custos ocultos.</p>

        {/* Cupões */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', maxWidth: '680px', margin: '32px auto 0' }}>
          <div style={{ background: 'var(--amber-bg)', border: '1px solid rgba(148,108,0,0.25)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px' }}>Cupão · 30 lugares</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 500, color: 'var(--ink)', letterSpacing: '0.04em', marginBottom: '4px' }}>CTM50</div>
            <div style={{ fontSize: '13px', color: 'var(--ink-60)', lineHeight: '1.5' }}>50% de desconto nos primeiros 3 meses. Aplica no checkout mensal — paga €4,99/mês durante 3 meses, depois €9,99/mês.</div>
            <div style={{ marginTop: '10px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--amber)' }}>⏳ Só 30 utilizações disponíveis</div>
          </div>
          <div style={{ background: 'var(--green-bg)', border: '1px solid rgba(26,107,69,0.25)', borderRadius: 'var(--r-lg)', padding: '18px 20px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '8px' }}>Cupão · 50 lugares</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 500, color: 'var(--ink)', letterSpacing: '0.04em', marginBottom: '4px' }}>CTM3M</div>
            <div style={{ fontSize: '13px', color: 'var(--ink-60)', lineHeight: '1.5' }}>Acesso trimestral a €14,97 — pagamento único. Equivale a €4,99/mês. Aplica no checkout trimestral.</div>
            <div style={{ marginTop: '10px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--green)' }}>⏳ Só 50 lugares disponíveis</div>
          </div>
        </div>

        {/* 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr 1.05fr 1fr', gap: '12px', margin: '32px auto 0', maxWidth: '1060px' }} className="reveal">

          {/* FREE */}
          <div className="price-card">
            <span className="price-badge">Canal Gratuito</span>
            <div className="price-amount">€0</div>
            <span className="price-period">acesso permanente</span>
            <ul className="price-features">
              <li>Canal Telegram público</li>
              <li>Morning Briefing resumido</li>
              <li>1 análise /analisa por dia</li>
              <li>Perspectiva financeira honesta</li>
              <li>Track record público mensal</li>
              <li>Substack — introdução gratuita de cada publicação</li>
              <li>Telegram serviço e carteira — disponível à unidade</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <a href="https://t.me/cleantrendmethod" className="btn-outline" style={{ width: '100%', textAlign: 'center', fontSize: '12px', padding: '10px 0', display: 'block' }}>Entrar grátis →</a>
            </div>
          </div>

          {/* CTM50 */}
          <div className="price-card" style={{ border: '1.5px solid var(--amber)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--amber)', color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 500, padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>30 LUGARES · CUPÃO CTM50</div>
            <span className="price-badge" style={{ background: 'var(--amber-bg)', color: 'var(--amber)' }}>Mensal — Fundador</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '2px' }}>
              <div className="price-amount">€4,99</div>
              <div style={{ fontSize: '13px', color: 'var(--ink-30)', textDecoration: 'line-through' }}>€9,99</div>
            </div>
            <span className="price-period">por mês · primeiros 3 meses<br />depois €9,99/mês · cancela quando quiseres</span>
            <ul className="price-features">
              <li>Tudo do canal gratuito</li>
              <li>Morning Briefing completo</li>
              <li>Radar diário da carteira pessoal</li>
              <li>100 análises /analisa por mês</li>
              <li>Leitura Pine 1 + Pine 2 completa</li>
              <li>Tabelas de análise institucional</li>
              <li>Watchlist por solicitação</li>
              <li>Canal Pro Telegram + Discord</li>
              <li>Substack Pro — publicações completas</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <a href="https://buy.stripe.com/4gM9ASfErf2x81s61P8Zq00" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '12px', padding: '10px 0', display: 'block', background: 'var(--amber)' }}>Assinar com CTM50 →</a>
            </div>
          </div>

          {/* CTM3M */}
          <div className="price-card featured" style={{ border: '1.5px solid var(--gold)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 500, padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>50 LUGARES · CUPÃO CTM3M</div>
            <span className="price-badge">Trimestral — Fundador</span>
            <div className="price-amount">€14,97</div>
            <span className="price-period">pagamento único · 3 meses de acesso<br />equivale a €4,99/mês</span>
            <ul className="price-features">
              <li>Tudo do canal gratuito</li>
              <li>Morning Briefing completo</li>
              <li>Radar diário da carteira pessoal</li>
              <li>100 análises /analisa por mês</li>
              <li>Leitura Pine 1 + Pine 2 completa</li>
              <li>Tabelas de análise institucional</li>
              <li>Watchlist por solicitação</li>
              <li>Canal Pro Telegram + Discord</li>
              <li>Substack Pro — publicações completas</li>
              <li>Acesso prioritário a novas funcionalidades</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <a href="https://buy.stripe.com/28EaEWdwj2fLepQfCp8Zq01" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '12px', padding: '10px 0', display: 'block' }}>Assinar com CTM3M →</a>
            </div>
          </div>

          {/* PRO MENSAL */}
          <div className="price-card">
            <span className="price-badge">Membro Pro</span>
            <div className="price-amount">€9,99</div>
            <span className="price-period">por mês · sem compromisso</span>
            <ul className="price-features">
              <li>Tudo do canal gratuito</li>
              <li>Morning Briefing completo</li>
              <li>Radar diário da carteira pessoal</li>
              <li>100 análises /analisa por mês</li>
              <li>Leitura Pine 1 + Pine 2 completa</li>
              <li>Tabelas de análise institucional</li>
              <li>Watchlist por solicitação</li>
              <li>Canal Pro Telegram + Discord</li>
              <li>Substack Pro — publicações completas</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <a href="https://buy.stripe.com/4gM9ASfErf2x81s61P8Zq00" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '12px', padding: '10px 0', display: 'block' }}>Assinar →</a>
            </div>
          </div>

        </div>

        <div className="founding-note reveal" style={{ maxWidth: '680px' }}>
          <strong>Como usar os cupões de lançamento</strong><br />
          No checkout Stripe introduz o cupão antes de finalizar o pagamento.<br />
          <strong>CTM50</strong> — aplica no plano mensal → €4,99/mês durante 3 meses (30 lugares) ·{' '}
          <strong>CTM3M</strong> — aplica no plano trimestral → €14,97 por 3 meses de acesso (50 lugares).<br />
          Quando os lugares esgotam, os cupões são desactivados automaticamente.
        </div>

        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://t.me/cleantrendmethod" className="btn-outline">Aceder ao Canal Gratuito</a>
        </div>
      </section>

      {/* AVISO LEGAL */}
      <div className="legal-bar">
        <p>
          <strong>Aviso Legal:</strong> O CTM — Clean Trend Method não presta consultoria financeira, não gere activos de terceiros e não emite recomendações de investimento personalizadas. Toda a informação publicada tem carácter exclusivamente educativo e informativo. Os dados de mercado, análises técnicas e fundamentais apresentados não constituem aconselhamento financeiro nem devem ser interpretados como tal. Qualquer decisão de investimento é da exclusiva responsabilidade do utilizador. O investimento em mercados financeiros envolve risco de perda parcial ou total do capital investido. Resultados passados não constituem garantia de resultados futuros. ·{' '}
          <Link href="/termos">Termos e Condições</Link> ·{' '}
          <Link href="/privacidade">Privacidade</Link> ·{' '}
          <Link href="/reembolso">Reembolso</Link>
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">CTM · Clean Trend Method · cleantrendmethod.com</span>
        <ul className="footer-links">
          <li><Link href="/termos">Termos e Condições</Link></li>
          <li><Link href="/privacidade">Política de Privacidade</Link></li>
          <li><Link href="/reembolso">Política de Reembolso</Link></li>
          <li><a href="https://t.me/cleantrendmethod">@cleantrendmethod</a></li>
        </ul>
      </footer>
    </>
  )
}
