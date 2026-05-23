'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/* ──────────────────────────────────────────────────────────────────────
   CTM — Clean Trend Method · Landing Page v4
   Notas para deploy:
   - Colocar imagens em /public/assets/
       ctm-pro-entrada.png
       ctm-pro-saida.png
       ctm-pro-watchlist.png
       ctm-pro-performance.png
   - As fonts (DM Serif Display, DM Mono, Figtree) são carregadas via Google Fonts
     pelo @import dentro do <style> — em produção podes preferir next/font.
   ────────────────────────────────────────────────────────────────────── */

const TICKERS = [
  { s: 'PSI 20',   v: '6 842',   c: '+0,4%',  up: true },
  { s: 'DAX 40',   v: '18 340',  c: '−0,2%',  up: false },
  { s: 'IBEX 35',  v: '11 210',  c: '+0,8%',  up: true },
  { s: 'CAC 40',   v: '8 050',   c: '−0,1%',  up: false },
  { s: 'IBOVESPA', v: '127 840', c: '+1,1%',  up: true },
  { s: 'S&P 500',  v: '5 620',   c: '+0,3%',  up: true },
  { s: 'NASDAQ',   v: '17 920',  c: '+0,6%',  up: true },
  { s: 'NVDA',     v: '112,40',  c: '+2,1%',  up: true },
  { s: 'ASML',     v: '728,00',  c: '+1,4%',  up: true },
  { s: 'ALAB',     v: '306,99',  c: '+3,1%',  up: true },
  { s: 'EDP',      v: '3,82',    c: '−0,5%',  up: false },
  { s: 'KGS',      v: '75,89',   c: '+0,15%', up: true },
]

const PRODUTO_SCREENS = [
  { src: '/ctm-pro-entrada.png',     alt: 'CTM PRO — Quadro de Entrada ALAB',    label: 'Quadro de Entrada', url: 'ctm pro · quadro de entrada · ALAB · NASDAQ' },
  { src: '/ctm-pro-saida.png',       alt: 'CTM PRO — Quadro de Saída KGS',       label: 'Quadro de Saída',   url: 'ctm pro · quadro de saída · KGS · NYSE' },
  { src: '/ctm-pro-watchlist.png',   alt: 'CTM PRO — Watchlist',                  label: 'Watchlist',          url: 'ctm pro · watchlist · protocolo CTM v10 com IA' },
  { src: '/ctm-pro-performance.png', alt: 'CTM PRO — Performance',                label: 'Performance',        url: 'ctm pro · performance · Triple Seven Capital · Mai 2026' },
]

const REWARDS = [
  { val: 'Disciplina', desc: 'Critérios consistentes aplicados sem excepção — independentemente do ambiente de mercado.' },
  { val: 'Contexto',   desc: 'Ler o que os dados mostram, não o que se espera ver ou o que o ruído sugere.' },
  { val: 'Paciência',  desc: 'Aguardar o momento certo em vez de perseguir movimento já desenvolvido.' },
]

const DESTROYS = [
  { val: 'Emoção',        desc: 'Decisões baseadas em FOMO, medo ou euforia de mercado — sem critério estruturado.' },
  { val: 'Ruído',         desc: 'Excesso de informação contraditória sem framework analítico para a interpretar.' },
  { val: 'Impulsividade', desc: 'Agir sem critérios definidos — ou ignorá-los sob pressão do momento.' },
]

const PILLARS = [
  { n: '01 / Pilar', t: 'Research Hub Lusófono',   p: 'Agregamos dados técnicos, fundamentais e macroeconómicos de fontes profissionais e apresentamos de forma organizada em português.' },
  { n: '02 / Pilar', t: 'Análise Sistemática',     p: 'Cada activo é avaliado segundo critérios objectivos e quantificáveis. Sem interpretações subjectivas. Sem decisões emocionais.' },
  { n: '03 / Pilar', t: 'Transparência Integral',  p: 'A carteira operacional é pública. Os erros são documentados e publicados. O track record é verificável por qualquer membro.' },
  { n: '04 / Pilar', t: 'Foco Ibérico e Lusófono', p: 'Cobertura dos mercados PSI, DAX, IBEX, CAC, B3 e NYSE — os mercados relevantes para investidores PT, ES e BR.' },
]

const FEATURES = [
  { n: '01 · DIÁRIO',         t: 'Morning Briefing',         p: 'Contexto de mercado às 7h30 — índices, situação macroeconómica relevante, enquadramento do dia antes da abertura das principais praças.', tag: 'tag-daily', tl: 'Diário · 7h30' },
  { n: '02 · AUTOMÁTICO',     t: 'Radar da Carteira',         p: 'Regista os teus activos e o sistema monitoriza-os automaticamente. Às 22h recebes o estado técnico — intacto, atenção ou comprometido.', tag: 'tag-auto', tl: 'Automático · 22h' },
  { n: '03 · PRO',            t: 'Análise Pine 1 + Pine 2',   p: 'Para cada activo acompanhado, leitura técnica completa com Price Core e Volume Core — o formato utilizado na carteira operacional CTM.', tag: 'tag-pro', tl: 'Dados Profissionais' },
  { n: '04 · PRO',            t: 'Watchlist por Solicitação', p: 'O membro solicita análise de qualquer ticker. O sistema gera a leitura completa e publica no canal Pro. As ferramentas estão ao serviço do membro.', tag: 'tag-pro', tl: 'Canal Pro' },
  { n: '05 · EDITORIAL',      t: 'Perspectiva Honesta',       p: 'O que os grandes fundos praticam. O que a evidência empírica demonstra sobre mercados. Publicações regulares — sem agenda comercial.', tag: 'tag-daily', tl: 'Regular' },
  { n: '06 · TRANSPARÊNCIA',  t: 'Track Record Público',      p: 'Publicado mensalmente com dados integrais — posições positivas e negativas, win rate, R médio, drawdown. Verificável por qualquer membro.', tag: 'tag-pro', tl: 'Verificável' },
]

const PERSPECTIVA = [
  { n: 'Tema 01', t: 'A realidade do trading a retalho',     p: 'Dados de brokers europeus regulados mostram que mais de 70% dos investidores a retalho registam resultados negativos em produtos de curto prazo. Os números existem. Publicamo-los.' },
  { n: 'Tema 02', t: 'O que os grandes gestores praticam',   p: 'Buffett, Dalio, Lynch e outros grandes alocadores partilham disciplina de processo, gestão de risco rigorosa e horizontes alargados — não previsões de curto prazo.' },
  { n: 'Tema 03', t: 'Investimento vs especulação',           p: 'A distinção não é académica — tem implicações directas na forma como se define risco, horizonte temporal e critérios de avaliação de cada posição.' },
  { n: 'Tema 04', t: 'Gestão comportamental e consistência', p: 'A maioria das perdas não resulta de análise incorrecta. Resulta de comportamento inconsistente sob pressão de mercado — tema sistematicamente ignorado pelos serviços de retalho.' },
]

const FAQ = [
  { q: 'O CTM emite recomendações de compra?',         a: 'Não. O CTM publica análise sistemática, contexto técnico e a sua carteira real. A decisão de investir é sempre e exclusivamente do utilizador.' },
  { q: 'O que distingue o CTM de outros serviços?',    a: 'Foco lusófono, framework auditável (CTM v10), transparência total — carteira real pública com posições positivas e negativas publicadas integralmente.' },
  { q: 'Posso cancelar a qualquer momento?',           a: 'Sim. Cancelamento imediato directamente no Stripe. Sem renovação automática surpresa. Sem cobrança após cancelamento.' },
  { q: 'Que mercados estão cobertos?',                 a: 'PSI 20, DAX, IBEX 35, CAC 40, B3 (Ibovespa), NYSE e NASDAQ. Foco em activos com liquidez profissional adequada.' },
]

export default function HomePage() {
  const [activeScreen, setActiveScreen] = useState(0)

  /* Reveal on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    document.querySelectorAll('.def-grid, .features-grid').forEach((grid) => {
      grid.querySelectorAll('.def-card, .feature').forEach((card, i) => {
        card.classList.add('reveal')
        ;(card as HTMLElement).style.transitionDelay = `${i * 60}ms`
        observer.observe(card)
      })
    })
    return () => observer.disconnect()
  }, [])

  /* Produto tabs auto-cycle */
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null
    let paused = false

    const stage = document.querySelector('.produto-stage')
    const produto = document.getElementById('produto')

    const start = () => {
      if (interval || paused) return
      interval = setInterval(() => {
        setActiveScreen((i) => (i + 1) % PRODUTO_SCREENS.length)
      }, 6000)
    }
    const stop = () => { if (interval) { clearInterval(interval); interval = null } }

    const onEnter = () => { paused = true; stop() }
    const onLeave = () => { paused = false; start() }

    stage?.addEventListener('mouseenter', onEnter)
    stage?.addEventListener('mouseleave', onLeave)

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting && !paused ? start() : stop()))
    }, { threshold: 0.3 })
    if (produto) io.observe(produto)

    return () => {
      stop()
      stage?.removeEventListener('mouseenter', onEnter)
      stage?.removeEventListener('mouseleave', onLeave)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Figtree:wght@300;400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

:root {
  --ink: #0E0E0B; --ink-90: rgba(14,14,11,0.9); --ink-60: rgba(14,14,11,0.6);
  --ink-40: rgba(14,14,11,0.4); --ink-30: rgba(14,14,11,0.3); --ink-15: rgba(14,14,11,0.15);
  --ink-10: rgba(14,14,11,0.1); --ink-05: rgba(14,14,11,0.05);
  --paper: #F5F2EC; --paper-2: #EDEAE2; --paper-3: #E4DFD3;
  --gold: #B8983E; --gold-2: #D4AF5A; --gold-soft: #EFE3BC;
  --green: #1A6B45; --green-2: #2E7D32; --green-bg: #EBF4EE; --green-tint: #E8F5E9;
  --red: #B71C1C; --red-bg: #FAEAEA;
  --amber: #946C00; --amber-2: #E65100; --amber-bg: #FDF3E3;
  --blue: #1565C0; --blue-bg: #E3F2FD;
  --term-bg: #0A0A08; --term-bg-2: #131310; --term-line: rgba(245,242,236,0.08);
  --term-green: #4ade80; --term-amber: #fbbf24; --term-red: #f87171; --term-blue: #60a5fa;
  --serif: 'DM Serif Display', Georgia, serif;
  --mono: 'DM Mono', ui-monospace, monospace;
  --sans: 'Figtree', -apple-system, system-ui, sans-serif;
  --r: 6px; --r-md: 10px; --r-lg: 14px; --r-xl: 20px;
  --max: 1200px; --max-narrow: 900px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
::selection { background: var(--ink); color: var(--paper); }
html, body { overflow-x: hidden; }
body {
  font-family: var(--sans); background: var(--paper); color: var(--ink);
  font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); display: inline-flex; align-items: center; gap: 10px; }
.eyebrow::before { content: ''; width: 18px; height: 1px; background: var(--gold); display: inline-block; }
.eyebrow.no-rule::before { display: none; }

.h-display { font-family: var(--serif); font-weight: 400; font-size: clamp(48px, 8vw, 104px); line-height: 0.98; letter-spacing: -0.02em; }
.h-display em { font-style: italic; color: var(--gold); }
.h-section { font-family: var(--serif); font-weight: 400; font-size: clamp(36px, 5vw, 64px); line-height: 1.04; letter-spacing: -0.015em; }
.h-section em { font-style: italic; color: var(--gold); }
.h-sub { font-family: var(--serif); font-weight: 400; font-size: clamp(24px, 3vw, 36px); line-height: 1.15; letter-spacing: -0.01em; }
.lead { font-family: var(--sans); font-weight: 300; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.65; color: var(--ink-60); max-width: 60ch; }
.body { font-size: 15px; line-height: 1.7; color: var(--ink-60); }
.mono { font-family: var(--mono); }
.label-sm { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-40); }

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px; height: 64px;
  background: rgba(245,242,236,0.78);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--ink-10);
}
.nav-logo { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.14em; color: var(--ink); text-decoration: none; display: inline-flex; align-items: center; gap: 10px; }
.nav-logo .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); display: inline-block; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { font-size: 13px; color: var(--ink-60); text-decoration: none; letter-spacing: 0.01em; transition: color .2s var(--ease-out); position: relative; padding: 4px 0; }
.nav-links a::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--ink); transform: scaleX(0); transform-origin: left; transition: transform .3s var(--ease-out); }
.nav-links a:hover { color: var(--ink); }
.nav-links a:hover::after { transform: scaleX(1); }
.nav-cta { font-family: var(--mono); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; padding: 9px 18px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); border-radius: var(--r); text-decoration: none; transition: all .25s var(--ease-out); display: inline-flex; align-items: center; gap: 8px; }
.nav-cta:hover { background: transparent; color: var(--ink); transform: translateY(-1px); }
.nav-cta .pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--gold-2); box-shadow: 0 0 0 0 rgba(212,175,90,0.6); animation: pulse 2s infinite; }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(212,175,90,0.6); }
  70% { box-shadow: 0 0 0 6px rgba(212,175,90,0); }
  100% { box-shadow: 0 0 0 0 rgba(212,175,90,0); }
}

/* HERO */
#hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; align-items: stretch; justify-content: center; padding: 140px 32px 120px; text-align: center; overflow: hidden; }
#hero::before { content: ''; position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(var(--ink-10) 1px, transparent 1px), linear-gradient(90deg, var(--ink-10) 1px, transparent 1px); background-size: 72px 72px; mask-image: radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 90%); -webkit-mask-image: radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 90%); }
#hero::after { content: ''; position: absolute; left: 50%; top: 50%; width: 1100px; height: 1100px; transform: translate(-50%, -50%); background: radial-gradient(circle, rgba(184,152,62,0.06) 0%, transparent 60%); pointer-events: none; }
.hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; width: 100%; }
.hero-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; margin-bottom: 32px; display: inline-flex; align-items: center; gap: 14px; padding: 6px 14px; border: 1px solid var(--gold); border-radius: 999px; background: rgba(184,152,62,0.06); opacity: 0; animation: fadeUp .8s .1s var(--ease-out) forwards; }
.hero-eyebrow .live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-2); box-shadow: 0 0 0 0 rgba(46,125,50,0.5); animation: pulse-g 2s infinite; }
@keyframes pulse-g {
  0% { box-shadow: 0 0 0 0 rgba(46,125,50,0.5); }
  70% { box-shadow: 0 0 0 6px rgba(46,125,50,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,125,50,0); }
}
.hero-title { font-family: var(--serif); font-weight: 400; font-size: clamp(52px, 8.6vw, 116px); line-height: 0.96; letter-spacing: -0.025em; max-width: 14ch; margin: 0 auto 36px; color: var(--ink); opacity: 0; animation: fadeUp .9s .25s var(--ease-out) forwards; }
.hero-title em { font-style: italic; color: var(--gold); }
.hero-sub { font-size: clamp(17px, 1.6vw, 20px); font-weight: 300; color: var(--ink-60); max-width: 56ch; margin: 0 auto 44px; line-height: 1.6; opacity: 0; animation: fadeUp .8s .45s var(--ease-out) forwards; }
.hero-actions { display: inline-flex; gap: 12px; justify-content: center; flex-wrap: wrap; opacity: 0; animation: fadeUp .8s .6s var(--ease-out) forwards; }
.btn-primary { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.06em; padding: 16px 28px; background: var(--ink); color: var(--paper); border: 1px solid var(--ink); border-radius: var(--r); text-decoration: none; transition: all .25s var(--ease-out); display: inline-flex; align-items: center; gap: 10px; cursor: pointer; }
.btn-primary:hover { background: transparent; color: var(--ink); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(14,14,11,0.12); }
.btn-primary .arrow { transition: transform .25s var(--ease-out); }
.btn-primary:hover .arrow { transform: translateX(4px); }
.btn-outline { font-family: var(--mono); font-size: 13px; font-weight: 500; letter-spacing: 0.06em; padding: 16px 28px; background: transparent; color: var(--ink); border: 1px solid var(--ink-30); border-radius: var(--r); text-decoration: none; transition: all .25s var(--ease-out); display: inline-flex; align-items: center; gap: 10px; }
.btn-outline:hover { border-color: var(--ink); background: rgba(14,14,11,0.04); transform: translateY(-2px); }
.hero-meta { margin-top: 56px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; max-width: 880px; margin-left: auto; margin-right: auto; border-top: 1px solid var(--ink-10); opacity: 0; animation: fadeUp .8s .75s var(--ease-out) forwards; }
.hero-meta .cell { padding: 22px 16px; border-right: 1px solid var(--ink-10); text-align: left; }
.hero-meta .cell:last-child { border-right: none; }
.hero-meta .cell .k { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-40); margin-bottom: 8px; display: block; }
.hero-meta .cell .v { font-family: var(--serif); font-size: 24px; line-height: 1; color: var(--ink); }
.hero-meta .cell .v .pos { color: var(--green); }
.hero-meta .cell .s { font-size: 11px; color: var(--ink-40); margin-top: 4px; font-family: var(--mono); }

.ticker-strip { position: absolute; bottom: 0; left: 0; right: 0; border-top: 1px solid var(--ink-10); padding: 14px 0; overflow: hidden; background: rgba(245,242,236,0.92); backdrop-filter: blur(8px); }
.ticker-track { display: flex; gap: 0; animation: ticker 50s linear infinite; width: max-content; }
.ticker-item { display: flex; align-items: baseline; gap: 10px; padding: 0 28px; font-family: var(--mono); font-size: 12px; color: var(--ink-60); white-space: nowrap; border-right: 1px solid var(--ink-10); }
.ticker-item .symbol { color: var(--ink); font-weight: 500; letter-spacing: 0.04em; }
.ticker-item .up { color: var(--green); }
.ticker-item .down { color: var(--red); }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.scroll-cue { position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%); font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; color: var(--ink-40); text-transform: uppercase; opacity: 0; animation: fadeUp .8s 1.2s var(--ease-out) forwards; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.scroll-cue .line { width: 1px; height: 36px; background: var(--ink-30); animation: lineDown 2s ease-in-out infinite; }
@keyframes lineDown {
  0%, 100% { transform: scaleY(1); transform-origin: top; }
  50% { transform: scaleY(0.4); transform-origin: top; }
}

/* SECTION */
.section { position: relative; padding: 140px 32px; max-width: var(--max); margin: 0 auto; }
.section.tight { padding: 100px 32px; }
.section.narrow { max-width: var(--max-narrow); }
.section-head { display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: end; margin-bottom: 64px; }
.section-head .num { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; display: block; }
.section-head .lead { margin-top: 4px; }
.rule { border: none; border-top: 1px solid var(--ink-10); margin: 0; max-width: var(--max); margin-left: auto; margin-right: auto; }

/* MANIFESTO */
#manifesto { padding-top: 100px; padding-bottom: 140px; }
.manifesto-quote { font-family: var(--serif); font-style: italic; font-size: clamp(28px, 4.2vw, 48px); line-height: 1.18; letter-spacing: -0.01em; color: var(--ink); max-width: 22ch; margin: 0 0 56px; }
.manifesto-quote::before { content: '"'; font-size: 1em; line-height: 0; color: var(--gold); margin-right: 4px; display: inline; }
.manifesto-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; }
.pillar-col h3 { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 1px solid var(--ink-10); display: flex; align-items: center; gap: 10px; }
.pillar-col.rewards h3 { color: var(--green); }
.pillar-col.rewards h3::before { content: '+'; color: var(--green); font-size: 16px; }
.pillar-col.destroys h3 { color: var(--red); }
.pillar-col.destroys h3::before { content: '−'; color: var(--red); font-size: 16px; }
.pillar { padding: 18px 0; border-bottom: 1px solid var(--ink-10); }
.pillar:last-child { border-bottom: none; }
.pillar .val { font-family: var(--serif); font-size: 28px; color: var(--ink); line-height: 1.1; margin-bottom: 6px; }
.pillar .desc { font-size: 14px; color: var(--ink-60); line-height: 1.55; max-width: 38ch; }

/* PROJECTO */
#projecto .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.channel-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 28px; }
.ch-badge { display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border: 1px solid var(--ink-15); border-radius: var(--r); font-size: 13px; color: var(--ink); text-decoration: none; background: var(--paper); transition: all .2s var(--ease-out); font-family: var(--mono); letter-spacing: 0.02em; }
.ch-badge:hover { border-color: var(--ink); background: var(--paper-2); transform: translateY(-2px); }
.ch-badge svg { width: 14px; height: 14px; }
.not-list { list-style: none; display: flex; flex-direction: column; gap: 8px; margin-top: 24px; }
.not-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--ink-60); padding: 14px 16px; background: rgba(192,57,43,0.04); border: 1px solid rgba(192,57,43,0.12); border-left: 2px solid var(--red); border-radius: var(--r); }
.not-list li::before { content: '✕'; color: var(--red); font-weight: 600; flex-shrink: 0; margin-top: 1px; font-size: 11px; }
.def-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: 64px; background: var(--ink-10); border: 1px solid var(--ink-10); border-radius: var(--r-lg); overflow: hidden; }
.def-card { background: var(--paper); padding: 32px 26px; transition: background .25s var(--ease-out); position: relative; }
.def-card:hover { background: var(--paper-2); }
.def-card .num { font-family: var(--mono); font-size: 10px; color: var(--gold); letter-spacing: 0.16em; margin-bottom: 28px; display: block; text-transform: uppercase; }
.def-card h4 { font-size: 15px; font-weight: 600; color: var(--ink); margin-bottom: 10px; letter-spacing: -0.005em; }
.def-card p { font-size: 13px; color: var(--ink-60); line-height: 1.65; }

/* PRODUTO */
#produto { background: var(--term-bg); color: var(--paper); padding: 140px 32px; position: relative; overflow: hidden; max-width: 100%; margin: 0; }
#produto::before { content: ''; position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px); background-size: 80px 80px; mask-image: radial-gradient(ellipse 100% 70% at 50% 30%, black 30%, transparent 100%); }
#produto .inner { max-width: var(--max); margin: 0 auto; position: relative; z-index: 2; }
#produto .eyebrow { color: var(--gold-2); }
#produto .eyebrow::before { background: var(--gold-2); }
#produto .h-section { color: var(--paper); }
#produto .lead { color: rgba(245,242,236,0.55); }
.produto-head { margin-bottom: 80px; max-width: 720px; }
.produto-tabs { display: flex; gap: 4px; padding: 4px; background: rgba(245,242,236,0.04); border-radius: 999px; border: 1px solid rgba(245,242,236,0.08); width: fit-content; margin-bottom: 40px; }
.produto-tab { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 18px; background: transparent; color: rgba(245,242,236,0.5); border: none; cursor: pointer; border-radius: 999px; transition: all .25s var(--ease-out); }
.produto-tab.active { background: rgba(74,222,128,0.12); color: var(--term-green); box-shadow: inset 0 0 0 1px rgba(74,222,128,0.25); }
.produto-tab:hover:not(.active) { color: var(--paper); }
.produto-stage { position: relative; background: linear-gradient(180deg, rgba(245,242,236,0.04), rgba(245,242,236,0)); border: 1px solid rgba(245,242,236,0.08); border-radius: var(--r-xl); padding: 24px; overflow: hidden; }
.produto-stage::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(74,222,128,0.06), transparent 70%); }
.produto-window { background: var(--term-bg-2); border: 1px solid rgba(245,242,236,0.1); border-radius: var(--r-lg); overflow: hidden; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(74,222,128,0.05); }
.produto-window-bar { display: flex; align-items: center; gap: 8px; padding: 12px 18px; border-bottom: 1px solid rgba(245,242,236,0.06); background: rgba(0,0,0,0.2); }
.win-dot { width: 11px; height: 11px; border-radius: 50%; }
.win-dot.r { background: #ff5f57; }
.win-dot.y { background: #febc2e; }
.win-dot.g { background: #28c840; }
.produto-window-bar .url { margin-left: 16px; font-family: var(--mono); font-size: 11px; color: rgba(245,242,236,0.4); letter-spacing: 0.04em; display: flex; align-items: center; gap: 8px; }
.produto-window-bar .url::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--term-green); }
.produto-screens { position: relative; }
.produto-screen { display: none; }
.produto-screen.active { display: block; animation: fadeIn .4s var(--ease-out); }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.produto-screen img { display: block; width: 100%; height: auto; }
.produto-caption { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 48px; }
.produto-caption .item .k { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-2); margin-bottom: 10px; display: block; }
.produto-caption .item .v { font-family: var(--serif); font-size: 24px; color: var(--paper); line-height: 1.2; margin-bottom: 8px; }
.produto-caption .item .d { font-size: 13px; color: rgba(245,242,236,0.55); line-height: 1.6; }
.produto-note { margin-top: 40px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.04em; color: rgba(245,242,236,0.3); text-align: center; }

/* CARTEIRA */
#carteira { background: var(--ink); color: var(--paper); padding: 140px 32px; max-width: 100%; margin: 0; position: relative; overflow: hidden; }
#carteira::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(245,242,236,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,236,0.025) 1px, transparent 1px); background-size: 60px 60px; mask-image: linear-gradient(180deg, black, transparent 90%); pointer-events: none; }
#carteira .inner { max-width: var(--max); margin: 0 auto; position: relative; z-index: 2; }
#carteira .eyebrow { color: var(--gold-2); }
#carteira .eyebrow::before { background: var(--gold-2); }
#carteira .h-section { color: var(--paper); }
#carteira .lead { color: rgba(245,242,236,0.55); }
.carteira-head { margin-bottom: 80px; max-width: 720px; }
.perf-dash { background: rgba(245,242,236,0.03); border: 1px solid rgba(245,242,236,0.08); border-radius: var(--r-xl); overflow: hidden; }
.perf-bar { display: flex; align-items: center; justify-content: space-between; padding: 18px 28px; background: rgba(245,242,236,0.05); border-bottom: 1px solid rgba(245,242,236,0.06); }
.perf-bar-left { display: flex; align-items: center; gap: 16px; font-family: var(--mono); font-size: 12px; color: rgba(245,242,236,0.9); letter-spacing: 0.06em; }
.perf-bar-left .live { display: inline-flex; align-items: center; gap: 7px; font-size: 10px; color: var(--term-green); letter-spacing: 0.12em; text-transform: uppercase; }
.perf-bar-left .live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--term-green); animation: pulse-g 2s infinite; }
.perf-bar-right { font-family: var(--mono); font-size: 10px; color: rgba(245,242,236,0.4); letter-spacing: 0.06em; }
.perf-columns { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: rgba(245,242,236,0.06); }
.perf-col { background: var(--ink); padding: 32px 28px; }
.perf-col-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.perf-col-head .name { font-family: var(--mono); font-size: 12px; color: rgba(245,242,236,0.9); letter-spacing: 0.08em; }
.perf-col-head .meta { font-family: var(--mono); font-size: 9px; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.1em; text-transform: uppercase; }
.perf-col-head .meta.ok { background: rgba(74,222,128,0.12); color: var(--term-green); }
.perf-col-head .meta.partial { background: rgba(96,165,250,0.12); color: var(--term-blue); }
.perf-col-head .meta.flag { background: rgba(212,175,90,0.14); color: var(--gold-2); }
.perf-row { margin-bottom: 22px; }
.perf-row .row-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.perf-row .row-head .label { font-family: var(--mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(245,242,236,0.4); }
.perf-row .row-head .val { font-family: var(--mono); font-size: 13px; color: var(--paper); font-weight: 500; }
.perf-row .row-head .val.pos { color: var(--term-green); }
.perf-row .pct { font-family: var(--serif); font-size: 36px; color: var(--paper); line-height: 1; margin-bottom: 8px; }
.perf-row .pct.pos { color: var(--term-green); }
.perf-row .pct.blue { color: var(--term-blue); }
.perf-row .progress { height: 6px; background: rgba(245,242,236,0.06); border-radius: 3px; overflow: hidden; position: relative; }
.perf-row .progress .fill { height: 100%; border-radius: 3px; transition: width 1.4s var(--ease-out); }
.perf-row .fill.green { background: linear-gradient(90deg, var(--term-green), #22c55e); }
.perf-row .fill.blue { background: linear-gradient(90deg, var(--term-blue), #3b82f6); }
.perf-row .note { font-family: var(--mono); font-size: 10px; color: rgba(245,242,236,0.4); margin-top: 6px; letter-spacing: 0.02em; }
.perf-summary { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid rgba(245,242,236,0.08); background: rgba(245,242,236,0.02); }
.perf-summary .cell { padding: 22px 24px; border-right: 1px solid rgba(245,242,236,0.06); }
.perf-summary .cell:last-child { border-right: none; }
.perf-summary .cell .k { font-family: var(--mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(245,242,236,0.4); margin-bottom: 8px; display: block; }
.perf-summary .cell .v { font-family: var(--serif); font-size: 22px; color: var(--paper); line-height: 1; }
.perf-summary .cell .v.pos { color: var(--term-green); }
.perf-summary .cell .v.gold { color: var(--gold-2); }
.perf-summary .cell .d { font-size: 11px; color: rgba(245,242,236,0.4); margin-top: 6px; font-family: var(--mono); }
.carteira-note { margin-top: 28px; font-family: var(--mono); font-size: 11px; color: rgba(245,242,236,0.35); letter-spacing: 0.02em; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
.carteira-note .dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(245,242,236,0.3); }

.ops-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px; }
.op-card { background: rgba(245,242,236,0.03); border: 1px solid rgba(245,242,236,0.08); border-radius: var(--r-lg); padding: 24px 28px; display: flex; flex-direction: column; gap: 14px; }
.op-card .op-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(245,242,236,0.08); padding-bottom: 14px; }
.op-card .op-head .ticker { font-family: var(--mono); font-size: 14px; font-weight: 600; color: var(--paper); letter-spacing: 0.06em; }
.op-card .op-head .ticker .market { color: rgba(245,242,236,0.4); font-weight: 400; margin-left: 8px; font-size: 11px; }
.op-card .op-head .tag { font-family: var(--mono); font-size: 10px; padding: 4px 10px; border-radius: 999px; letter-spacing: 0.08em; }
.op-card .op-head .tag.entrada { background: rgba(74,222,128,0.14); color: var(--term-green); }
.op-card .op-head .tag.saida { background: rgba(96,165,250,0.14); color: var(--term-blue); }
.op-card .op-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
.op-card .op-grid .k { font-family: var(--mono); font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(245,242,236,0.4); margin-bottom: 4px; }
.op-card .op-grid .v { font-family: var(--mono); font-size: 13px; color: var(--paper); }
.op-card .op-grid .v.pos { color: var(--term-green); }
.op-card .op-grid .v.gold { color: var(--gold-2); }
.op-card .op-result { display: flex; align-items: baseline; gap: 12px; padding-top: 6px; border-top: 1px dashed rgba(245,242,236,0.1); }
.op-card .op-result .big { font-family: var(--serif); font-size: 32px; color: var(--term-green); line-height: 1; }
.op-card .op-result .sml { font-family: var(--mono); font-size: 12px; color: rgba(245,242,236,0.5); }
.op-card .op-result.neutral .big { color: var(--gold-2); }

/* MÉTODO */
#metodo .method-frame { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 64px; }
.method-card { background: var(--paper); border: 1px solid var(--ink-10); border-radius: var(--r-lg); padding: 32px; display: flex; flex-direction: column; gap: 14px; transition: transform .25s var(--ease-out), box-shadow .25s var(--ease-out); }
.method-card:hover { transform: translateY(-3px); box-shadow: 0 24px 48px -12px rgba(14,14,11,0.08); }
.method-card .badge { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); padding: 4px 10px; background: var(--gold-soft); border-radius: 4px; width: fit-content; }
.method-card h3 { font-family: var(--serif); font-size: 28px; line-height: 1.1; color: var(--ink); letter-spacing: -0.005em; }
.method-card p { font-size: 14px; color: var(--ink-60); line-height: 1.65; }
.method-card .indicators { margin-top: 6px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; padding-top: 16px; border-top: 1px solid var(--ink-10); }
.method-card .ind { font-family: var(--mono); font-size: 11px; color: var(--ink-60); display: flex; align-items: center; gap: 8px; }
.method-card .ind::before { content: ''; width: 6px; height: 6px; background: var(--green-2); border-radius: 2px; }
.method-card.alt .ind::before { background: var(--blue); }

/* SERVIÇO */
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 64px; background: var(--ink-10); border: 1px solid var(--ink-10); border-radius: var(--r-lg); overflow: hidden; }
.feature { background: var(--paper); padding: 36px 30px; transition: background .25s var(--ease-out); display: flex; flex-direction: column; min-height: 240px; }
.feature:hover { background: var(--paper-2); }
.feature .feature-num { font-family: var(--mono); font-size: 10px; color: var(--gold); letter-spacing: 0.16em; margin-bottom: 28px; display: block; }
.feature h3 { font-size: 17px; font-weight: 600; color: var(--ink); margin-bottom: 10px; letter-spacing: -0.005em; }
.feature p { font-size: 13.5px; color: var(--ink-60); line-height: 1.65; flex-grow: 1; }
.feature-tag { display: inline-flex; align-items: center; gap: 7px; margin-top: 18px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 10px; border-radius: 4px; width: fit-content; }
.feature-tag::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.tag-daily { background: var(--green-bg); color: var(--green); }
.tag-auto { background: var(--amber-bg); color: var(--amber); }
.tag-pro { background: var(--ink-05); color: var(--ink-60); }

/* PERSPECTIVA */
.persp-strip { background: var(--paper-2); border-top: 1px solid var(--ink-10); border-bottom: 1px solid var(--ink-10); }
.persp-inner { max-width: var(--max); margin: 0 auto; padding: 140px 32px; }
.persp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
.persp-list { margin-top: 32px; }
.persp-item { padding: 22px 0; border-top: 1px solid rgba(14,14,11,0.12); display: grid; grid-template-columns: 70px 1fr; gap: 24px; align-items: start; }
.persp-item:last-child { border-bottom: 1px solid rgba(14,14,11,0.12); }
.persp-item .num { font-family: var(--mono); font-size: 10px; color: var(--ink-30); letter-spacing: 0.16em; padding-top: 4px; }
.persp-item h4 { font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
.persp-item p { font-size: 13.5px; color: var(--ink-60); line-height: 1.65; }
.origem { background: var(--ink); color: var(--paper); border-radius: var(--r-lg); padding: 44px; position: relative; overflow: hidden; }
.origem::before { content: '"'; position: absolute; top: -40px; right: 16px; font-family: var(--serif); font-size: 200px; color: rgba(212,175,90,0.18); line-height: 1; }
.origem .label-sm { color: var(--gold-2); margin-bottom: 18px; display: block; }
.origem p { font-size: 15px; line-height: 1.75; font-weight: 300; }
.origem p + p { margin-top: 18px; }
.origem strong { color: var(--gold-2); font-weight: 500; }
.origem .signature { margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(245,242,236,0.1); font-family: var(--mono); font-size: 11px; color: rgba(245,242,236,0.5); letter-spacing: 0.04em; }
.editorial { margin-top: 24px; padding: 24px; background: var(--paper); border: 1px solid var(--ink-10); border-radius: var(--r-lg); }
.editorial .label-sm { color: var(--ink); margin-bottom: 10px; display: block; font-weight: 600; }
.editorial p { font-size: 13.5px; color: var(--ink-60); line-height: 1.7; }

/* PREÇO */
#preco { padding: 140px 32px; max-width: var(--max); margin: 0 auto; text-align: center; }
#preco .h-section { max-width: 18ch; margin: 0 auto 20px; }
#preco .lead { margin: 0 auto; }
.price-cards { display: grid; grid-template-columns: 1fr 1.1fr; gap: 20px; margin: 64px auto 0; max-width: 820px; text-align: left; }
.price-card { background: var(--paper); border: 1px solid var(--ink-10); border-radius: var(--r-lg); padding: 40px 32px; transition: transform .25s var(--ease-out), box-shadow .25s var(--ease-out); position: relative; overflow: hidden; }
.price-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px -12px rgba(14,14,11,0.12); }
.price-card.featured { background: var(--ink); border-color: var(--ink); color: var(--paper); }
.price-card.featured::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 100% 60% at 50% 0%, rgba(212,175,90,0.15), transparent 70%); }
.price-badge { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 5px 10px; border-radius: 4px; margin-bottom: 24px; display: inline-block; }
.price-card:not(.featured) .price-badge { background: var(--ink-05); color: var(--ink-60); }
.price-card.featured .price-badge { background: var(--gold); color: var(--ink); }
.price-amount { font-family: var(--serif); font-size: 64px; color: var(--ink); line-height: 0.9; margin-bottom: 6px; letter-spacing: -0.02em; }
.price-amount .sub { font-size: 22px; color: var(--ink-60); }
.price-card.featured .price-amount { color: var(--paper); }
.price-card.featured .price-amount .sub { color: rgba(245,242,236,0.5); }
.price-period { font-size: 13px; color: var(--ink-60); margin-bottom: 28px; display: block; font-family: var(--mono); letter-spacing: 0.04em; }
.price-card.featured .price-period { color: rgba(245,242,236,0.5); }
.price-features { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.price-features li { display: flex; gap: 10px; font-size: 13.5px; color: var(--ink-60); align-items: flex-start; line-height: 1.55; }
.price-card.featured .price-features li { color: rgba(245,242,236,0.7); }
.price-features li::before { content: ''; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--gold); background: var(--gold-soft); flex-shrink: 0; margin-top: 5px; }
.price-card.featured .price-features li::before { background: var(--gold); border-color: var(--gold); }
.price-features li.bold { color: var(--ink); font-weight: 500; }
.price-card.featured .price-features li.bold { color: var(--paper); }
.price-cta { margin-top: 32px; display: block; width: 100%; text-align: center; padding: 16px 0; font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-decoration: none; border-radius: var(--r); transition: all .25s var(--ease-out); }
.price-card:not(.featured) .price-cta { background: transparent; color: var(--ink); border: 1px solid var(--ink-30); }
.price-card:not(.featured) .price-cta:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.price-card.featured .price-cta { background: var(--gold); color: var(--ink); border: 1px solid var(--gold); }
.price-card.featured .price-cta:hover { background: var(--gold-2); border-color: var(--gold-2); }
.price-trust { margin-top: 24px; font-family: var(--mono); font-size: 11px; color: var(--ink-30); letter-spacing: 0.06em; }
.price-trust span { display: inline-flex; align-items: center; gap: 6px; }
.price-trust span + span::before { content: '·'; margin-right: 8px; color: var(--ink-15); }

/* FAQ */
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 64px; border-top: 1px solid var(--ink-10); }
.faq-item { padding: 28px 24px; border-bottom: 1px solid var(--ink-10); }
.faq-item:nth-child(odd) { border-right: 1px solid var(--ink-10); }
.faq-item h4 { font-family: var(--serif); font-size: 20px; line-height: 1.2; color: var(--ink); margin-bottom: 12px; letter-spacing: -0.005em; }
.faq-item p { font-size: 13.5px; color: var(--ink-60); line-height: 1.65; }

/* LEGAL & FOOTER */
.legal-bar { background: var(--paper-2); border-top: 1px solid var(--ink-10); padding: 36px 32px; }
.legal-bar .inner { max-width: var(--max); margin: 0 auto; text-align: center; font-size: 12px; color: var(--ink-40); line-height: 1.7; }
.legal-bar strong { color: var(--ink-60); }
.legal-bar a { color: var(--ink-60); text-decoration: underline; text-underline-offset: 2px; }
footer { border-top: 1px solid var(--ink-10); padding: 48px 32px; }
footer .inner { max-width: var(--max); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 48px; align-items: start; }
.footer-brand { font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: var(--ink-60); }
.footer-brand .name { display: block; color: var(--ink); font-weight: 500; margin-bottom: 6px; letter-spacing: 0.14em; }
.footer-brand .tag { font-size: 11px; color: var(--ink-40); }
.footer-col h5 { font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-40); margin-bottom: 16px; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-col a { font-size: 13px; color: var(--ink); text-decoration: none; transition: color .2s; }
.footer-col a:hover { color: var(--gold); }
.footer-bottom { max-width: var(--max); margin: 32px auto 0; padding-top: 24px; border-top: 1px solid var(--ink-10); display: flex; justify-content: space-between; align-items: center; font-family: var(--mono); font-size: 11px; color: var(--ink-30); letter-spacing: 0.04em; }

/* REVEAL */
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s var(--ease-out), transform .8s var(--ease-out); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal.delay-1 { transition-delay: 0.08s; }
.reveal.delay-2 { transition-delay: 0.16s; }
.reveal.delay-3 { transition-delay: 0.24s; }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .section-head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
  #projecto .two-col { grid-template-columns: 1fr; gap: 56px; }
  .def-grid { grid-template-columns: 1fr 1fr; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .ops-pair { grid-template-columns: 1fr; }
  .perf-columns { grid-template-columns: 1fr; }
  .perf-summary { grid-template-columns: repeat(2, 1fr); }
  .perf-summary .cell { border-bottom: 1px solid rgba(245,242,236,0.06); }
  .persp-grid { grid-template-columns: 1fr; gap: 48px; }
  .price-cards { grid-template-columns: 1fr; max-width: 480px; }
  #metodo .method-frame { grid-template-columns: 1fr; }
  .faq-grid { grid-template-columns: 1fr; }
  .faq-item:nth-child(odd) { border-right: none; }
  .produto-caption { grid-template-columns: 1fr; gap: 24px; }
  .hero-meta { grid-template-columns: 1fr 1fr; gap: 0; }
  .hero-meta .cell:nth-child(2) { border-right: none; }
  .hero-meta .cell:nth-child(1), .hero-meta .cell:nth-child(2) { border-bottom: 1px solid var(--ink-10); }
  footer .inner { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 768px) {
  nav { padding: 0 20px; height: 56px; }
  .nav-links { display: none; }
  #hero { padding: 110px 20px 100px; }
  .section, #preco, #produto, #carteira { padding: 100px 20px; }
  .persp-inner { padding: 100px 20px; }
  .def-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .manifesto-grid { grid-template-columns: 1fr; gap: 32px; }
  .hero-meta { grid-template-columns: 1fr; }
  .hero-meta .cell { border-right: none; border-bottom: 1px solid var(--ink-10); }
  .hero-meta .cell:last-child { border-bottom: none; }
  .perf-summary { grid-template-columns: 1fr; }
  .perf-summary .cell { border-right: none; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
  .origem { padding: 32px 24px; }
  .scroll-cue { display: none; }
}
      `}</style>

      {/* ─────────── NAV ─────────── */}
      <nav>
        <a href="#" className="nav-logo"><span className="dot"></span> CTM</a>
        <ul className="nav-links">
          <li><a href="#manifesto">Manifesto</a></li>
          <li><a href="#projecto">Projecto</a></li>
          <li><a href="#produto">Produto</a></li>
          <li><a href="#carteira">Carteira</a></li>
          <li><a href="#metodo">Método</a></li>
          <li><a href="#preco">Acesso</a></li>
        </ul>
        <a href="https://buy.stripe.com/28E4gy1NBf2xftU3TH8Zq02" className="nav-cta">
          <span className="pulse"></span> Pro · €4,99/mês
        </a>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section id="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">
            <span className="live-dot"></span>
            Clean Trend Method · Análise sistemática de mercados
          </span>

          <h1 className="hero-title">
            O mercado recompensa<br />
            quem sabe o que<br />
            <em>está a ver.</em>
          </h1>

          <p className="hero-sub">
            Uma comunidade lusófona de literacia financeira. Dados profissionais, carteira operacional pública e método verificável — para quem sempre quis investir com estrutura, não com sorte.
          </p>

          <div className="hero-actions">
            <a href="#preco" className="btn-primary">
              Tornar-me membro <span className="arrow">→</span>
            </a>
            <a href="#produto" className="btn-outline">Ver o produto</a>
          </div>

          <div className="hero-meta">
            <div className="cell">
              <span className="k">Carteira real</span>
              <div className="v"><span className="pos">+28,2%</span></div>
              <div className="s">última operação · KGS · 19 Mai</div>
            </div>
            <div className="cell">
              <span className="k">Performance EUR</span>
              <div className="v">179,1<span style={{ fontSize: 14, color: 'var(--ink-40)' }}>%</span></div>
              <div className="s">da meta mensal · Mai 2026</div>
            </div>
            <div className="cell">
              <span className="k">Watchlist Pro</span>
              <div className="v">6<span style={{ fontSize: 14, color: 'var(--ink-40)' }}> ativos</span></div>
              <div className="s">3 premium · +3,8% média 7d</div>
            </div>
            <div className="cell">
              <span className="k">Transparência</span>
              <div className="v">100<span style={{ fontSize: 14, color: 'var(--ink-40)' }}>%</span></div>
              <div className="s">track record público</div>
            </div>
          </div>
        </div>

        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="line"></span>
        </div>

        <div className="ticker-strip">
          <div className="ticker-track">
            {[...TICKERS, ...TICKERS].map((t, i) => (
              <span key={i} className="ticker-item">
                <span className="symbol">{t.s}</span> {t.v}{' '}
                <span className={t.up ? 'up' : 'down'}>{t.c}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── MANIFESTO ─────────── */}
      <hr className="rule" />
      <section id="manifesto" className="section">
        <div className="section-head reveal">
          <div>
            <span className="num">01 · Manifesto</span>
            <h2 className="h-section">O que o mercado<br />recompensa.</h2>
          </div>
          <p className="lead">E o que destrói consistência mesmo nos investidores mais informados. Esta é a observação de base que orienta cada análise CTM.</p>
        </div>

        <blockquote className="manifesto-quote reveal">
          Não o mais rápido. Não o mais ousado. Quem compreende o que está a acontecer.
        </blockquote>

        <div className="manifesto-grid">
          <div className="pillar-col rewards reveal">
            <h3>Recompensa</h3>
            {REWARDS.map((p) => (
              <div key={p.val} className="pillar">
                <div className="val">{p.val}</div>
                <div className="desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="pillar-col destroys reveal delay-1">
            <h3>Destrói</h3>
            {DESTROYS.map((p) => (
              <div key={p.val} className="pillar">
                <div className="val">{p.val}</div>
                <div className="desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROJECTO ─────────── */}
      <hr className="rule" />
      <section id="projecto" className="section">
        <div className="section-head reveal">
          <div>
            <span className="num">02 · O Projecto</span>
            <h2 className="h-section">O que é o CTM<br /><em>— e o que não é.</em></h2>
          </div>
          <p className="lead">Uma comunidade de literacia financeira lusófona. A função é organizar dados, estruturar contexto e apresentar análise sistemática — em português, com transparência total.</p>
        </div>

        <div className="two-col">
          <div className="reveal">
            <span className="label-sm" style={{ color: 'var(--gold)', marginBottom: 14, display: 'block' }}>A nossa função</span>
            <h3 className="h-sub" style={{ marginBottom: 18 }}>Organizar informação,<br />estruturar contexto.</h3>
            <p className="body">
              O CTM — Clean Trend Method — agrega dados técnicos, fundamentais e macroeconómicos de múltiplas fontes profissionais. Aplicamos um framework consistente, publicamos a leitura em formato acessível e documentamos cada operação.<br /><br />
              Não gerimos activos. Não emitimos recomendações personalizadas. Não prometemos resultados. Fornecemos o contexto que permite a cada membro observar o mercado com maior clareza e decidir de forma autónoma.
            </p>
            <div className="channel-row">
              <a href="#" className="ch-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a href="#" className="ch-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.464.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
              <a href="#" className="ch-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                Substack
              </a>
              <a href="#" className="ch-badge">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal delay-1">
            <span className="label-sm" style={{ color: 'var(--red)', marginBottom: 14, display: 'block' }}>Uma nota de clareza</span>
            <h3 className="h-sub" style={{ marginBottom: 18 }}>O que <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>não</em> fazemos.</h3>
            <ul className="not-list">
              <li>Consultoria financeira ou aconselhamento de investimento personalizado</li>
              <li>Emissão de sinais, calls ou recomendações de compra e venda</li>
              <li>Gestão de carteiras de terceiros ou copy trading</li>
              <li>Promessas de rentabilidade, retornos garantidos ou ganhos rápidos</li>
              <li>Formação académica certificada em mercados financeiros</li>
            </ul>
          </div>
        </div>

        <div className="def-grid reveal">
          {PILLARS.map((c) => (
            <div key={c.t} className="def-card">
              <span className="num">{c.n}</span>
              <h4>{c.t}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── PRODUTO ─────────── */}
      <section id="produto">
        <div className="inner">
          <div className="produto-head reveal">
            <span className="eyebrow">03 · O Produto</span>
            <h2 className="h-section" style={{ marginTop: 24, marginBottom: 24 }}>CTM PRO.<br />O terminal de análise.</h2>
            <p className="lead">Infraestrutura analítica institucional, automatizada com inteligência artificial, em português. Os mesmos dados que os fundos profissionais utilizam — apresentados num formato auditável e acessível.</p>
          </div>

          <div className="produto-tabs reveal">
            {PRODUTO_SCREENS.map((s, i) => (
              <button
                key={s.label}
                className={`produto-tab ${activeScreen === i ? 'active' : ''}`}
                onClick={() => setActiveScreen(i)}
                type="button"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="produto-stage reveal">
            <div className="produto-window">
              <div className="produto-window-bar">
                <span className="win-dot r"></span>
                <span className="win-dot y"></span>
                <span className="win-dot g"></span>
                <span className="url">{PRODUTO_SCREENS[activeScreen].url}</span>
              </div>
              <div className="produto-screens">
                {PRODUTO_SCREENS.map((s, i) => (
                  <div key={s.src} className={`produto-screen ${activeScreen === i ? 'active' : ''}`}>
                    {/* Se usares next/image, substituir por <Image fill ... /> com container relativo */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="produto-caption reveal">
            <div className="item">
              <span className="k">Framework</span>
              <div className="v">CTM v10</div>
              <div className="d">Pine 1 (Price Core) + Pine 2 (Volume Core). 12 vectores estruturais por activo.</div>
            </div>
            <div className="item">
              <span className="k">Sinal</span>
              <div className="v">Auditável</div>
              <div className="d">Cada decisão tem score numérico, confluência e critério explícito de entrada/saída.</div>
            </div>
            <div className="item">
              <span className="k">Cadência</span>
              <div className="v">Diária</div>
              <div className="d">Briefing às 7h30. Radar automático às 22h. Watchlist actualizada todos os dias úteis.</div>
            </div>
          </div>

          <p className="produto-note">Os ecrãs apresentados são extraídos do sistema operacional CTM PRO em uso na carteira real · Maio 2026</p>
        </div>
      </section>

      {/* ─────────── CARTEIRA ─────────── */}
      <section id="carteira">
        <div className="inner">
          <div className="carteira-head reveal">
            <span className="eyebrow">04 · Carteira Real</span>
            <h2 className="h-section" style={{ marginTop: 24, marginBottom: 24 }}>Uma carteira real.<br />Documentada. <em>Pública.</em></h2>
            <p className="lead">Cada posição abre com critério técnico explícito. Cada resultado — positivo ou negativo — é publicado integralmente. Nada é omitido para preservar aparências.</p>
          </div>

          <div className="perf-dash reveal">
            <div className="perf-bar">
              <div className="perf-bar-left">
                <span>Triple Seven Capital · Performance · Mai 2026</span>
                <span className="live">LIVE</span>
              </div>
              <div className="perf-bar-right">Meta 10% / mês · Base EUR 5,89€ · Base USD 27,23$</div>
            </div>

            <div className="perf-columns">
              {/* EUR */}
              <div className="perf-col">
                <div className="perf-col-head">
                  <span className="name">EUR · 8MSN</span>
                  <span className="meta ok">Meta 5,89€</span>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">Realizado</span><span className="val pos">+10,55€</span></div>
                  <div className="pct pos">179,1<span style={{ fontSize: 18 }}>%</span></div>
                  <div className="progress"><div className="fill green" style={{ width: '100%' }} /></div>
                  <div className="note">da meta · cash confirmado</div>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">Flutuante</span><span className="val pos">+9,74€</span></div>
                  <div className="pct blue">165,4<span style={{ fontSize: 18 }}>%</span></div>
                  <div className="progress"><div className="fill blue" style={{ width: '100%' }} /></div>
                  <div className="note">da meta · posições abertas</div>
                </div>
                <div className="perf-row" style={{ marginBottom: 0 }}>
                  <div className="row-head"><span className="label">Excesso vs meta</span><span className="val pos">+14,40€</span></div>
                  <div className="note" style={{ marginTop: 8 }}>Meta já coberta em equity · proteger posições</div>
                </div>
              </div>

              {/* USD */}
              <div className="perf-col">
                <div className="perf-col-head">
                  <span className="name">USD · OMV</span>
                  <span className="meta partial">Meta 27,23$</span>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">Realizado</span><span className="val pos">+15,03$</span></div>
                  <div className="pct pos">55,2<span style={{ fontSize: 18 }}>%</span></div>
                  <div className="progress"><div className="fill green" style={{ width: '55.2%' }} /></div>
                  <div className="note">da meta · cash confirmado</div>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">Flutuante</span><span className="val pos">+10,54$</span></div>
                  <div className="pct blue">38,7<span style={{ fontSize: 18 }}>%</span></div>
                  <div className="progress"><div className="fill blue" style={{ width: '38.7%' }} /></div>
                  <div className="note">da meta · posições abertas</div>
                </div>
                <div className="perf-row" style={{ marginBottom: 0 }}>
                  <div className="row-head"><span className="label">Falta realizar</span><span className="val" style={{ color: 'var(--gold-2)' }}>+1,66$</span></div>
                  <div className="note" style={{ marginTop: 8 }}>Ainda falta para atingir meta total</div>
                </div>
              </div>

              {/* CONSOLIDADO */}
              <div className="perf-col">
                <div className="perf-col-head">
                  <span className="name">Consolidado · EUR</span>
                  <span className="meta flag">Métrica principal</span>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">Equity total</span><span className="val pos">+43,81€</span></div>
                  <div className="pct pos">141,6<span style={{ fontSize: 18 }}>%</span></div>
                  <div className="progress"><div className="fill green" style={{ width: '100%' }} /></div>
                  <div className="note">da meta consolidada 30,94€</div>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">EUR · 344,5% meta</span><span className="val">+20,29€</span></div>
                  <div className="note" style={{ marginTop: 6 }}>real +10,55€ · fluto +9,74€</div>
                </div>
                <div className="perf-row">
                  <div className="row-head"><span className="label">USD · 93,9% meta</span><span className="val">+25,57€</span></div>
                  <div className="note" style={{ marginTop: 6 }}>real +15,03€ · fluto +10,54€</div>
                </div>
              </div>
            </div>

            <div className="perf-summary">
              <div className="cell"><span className="k">Realizado EUR</span><div className="v pos">+10,55€</div><div className="d">179,1% da meta</div></div>
              <div className="cell"><span className="k">Realizado USD</span><div className="v pos">+15,03$</div><div className="d">55,2% da meta</div></div>
              <div className="cell"><span className="k">Flutuante</span><div className="v" style={{ color: 'var(--term-blue)' }}>+20,28€</div><div className="d">posições abertas · 22 Mai</div></div>
              <div className="cell"><span className="k">Equity total</span><div className="v pos">+43,81€</div><div className="d">real + flutuante</div></div>
              <div className="cell"><span className="k">% Meta consolidada</span><div className="v gold">141,6%</div><div className="d">EUR 344,5% · USD 93,9%</div></div>
            </div>
          </div>

          <div className="carteira-note">
            <span>2 meses de actividade</span>
            <span className="dot"></span>
            <span>Capital inicial €200</span>
            <span className="dot"></span>
            <span>Track record publicado mensalmente</span>
            <span className="dot"></span>
            <span>Inclui posições ganhadoras e perdedoras sem excepção</span>
          </div>

          <div className="ops-pair reveal">
            <div className="op-card">
              <div className="op-head">
                <div className="ticker">ALAB <span className="market">· Astera Labs · NASDAQ</span></div>
                <span className="tag entrada">● ENTRADA</span>
              </div>
              <div className="op-grid">
                <div><div className="k">Data</div><div className="v">22/05/2026</div></div>
                <div><div className="k">Preço</div><div className="v">307,93 USD</div></div>
                <div><div className="k">Score CTM</div><div className="v pos">11/12</div></div>
                <div><div className="k">Setup</div><div className="v gold">Clean Trend</div></div>
                <div><div className="k">Stage</div><div className="v pos">2 Premium</div></div>
                <div><div className="k">Capital</div><div className="v">40,03 USD</div></div>
              </div>
              <div className="op-result neutral">
                <div className="big">11/12</div>
                <div className="sml">PC Premium · POS 90 · ICT 92 · EFI+ · RVOL 1,67×</div>
              </div>
            </div>

            <div className="op-card">
              <div className="op-head">
                <div className="ticker">KGS <span className="market">· Kodiak Gas · NYSE</span></div>
                <span className="tag saida">● SAÍDA</span>
              </div>
              <div className="op-grid">
                <div><div className="k">Entrada</div><div className="v">58,81 USD</div></div>
                <div><div className="k">Saída</div><div className="v">75,41 USD</div></div>
                <div><div className="k">Acções</div><div className="v">0,3</div></div>
                <div><div className="k">Ganho/acção</div><div className="v pos">+16,60$</div></div>
                <div><div className="k">Duração</div><div className="v">≈ 14 dias</div></div>
                <div><div className="k">Critério</div><div className="v gold">Resist. atingida</div></div>
              </div>
              <div className="op-result">
                <div className="big">+28,2%</div>
                <div className="sml">+4,98 USD · saída com lucro · objectivo de preço atingido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── MÉTODO ─────────── */}
      <section id="metodo" className="section">
        <div className="section-head reveal">
          <div>
            <span className="num">05 · Método</span>
            <h2 className="h-section">Dois Pines.<br /><em>Doze vectores.</em></h2>
          </div>
          <p className="lead">O framework CTM v10 decompõe cada activo em duas leituras técnicas independentes que, em confluência, determinam contexto operacional.</p>
        </div>

        <div className="method-frame">
          <div className="method-card reveal">
            <span className="badge">Pine 1</span>
            <h3>Price Core</h3>
            <p>Estrutura de preço e tendência. Avalia em que stage está o activo, qualidade do setup, score técnico, referência de risco e crescimento recente. Define <strong style={{ color: 'var(--ink)' }}>se</strong> a estrutura é negociável.</p>
            <div className="indicators">
              <div className="ind">Stage</div>
              <div className="ind">P.Core</div>
              <div className="ind">Score / Pivot</div>
              <div className="ind">Ref. Risco</div>
              <div className="ind">Setup</div>
              <div className="ind">Manut.</div>
            </div>
          </div>
          <div className="method-card alt reveal delay-1">
            <span className="badge" style={{ color: 'var(--blue)', background: 'var(--blue-bg)' }}>Pine 2</span>
            <h3>Volume Core</h3>
            <p>Validação institucional. Mede fluxo, intensidade comprador/vendedor, força relativa contra benchmark, contexto VWAP e expansão de volume. Define <strong style={{ color: 'var(--ink)' }}>quando</strong> a estrutura tem convicção.</p>
            <div className="indicators">
              <div className="ind">ICT</div>
              <div className="ind">ICB · ISV · IEC</div>
              <div className="ind">Fluxo / O·V·A</div>
              <div className="ind">VWAP · EFI</div>
              <div className="ind">RVOL · PVO</div>
              <div className="ind">Def.Core</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SERVIÇO ─────────── */}
      <hr className="rule" />
      <section id="servico" className="section">
        <div className="section-head reveal">
          <div>
            <span className="num">06 · Serviço Mensal</span>
            <h2 className="h-section">O que um<br />membro recebe.</h2>
          </div>
          <p className="lead">Infraestrutura analítica profissional, automatizada com IA, em português. Para os mercados que interessam à comunidade lusófona.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.n} className="feature">
              <span className="feature-num">{f.n}</span>
              <h3>{f.t}</h3>
              <p>{f.p}</p>
              <span className={`feature-tag ${f.tag}`}>{f.tl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── PERSPECTIVA ─────────── */}
      <div className="persp-strip">
        <div className="persp-inner" id="perspectiva">
          <div className="persp-grid">
            <div className="reveal">
              <span className="eyebrow no-rule" style={{ marginBottom: 18, display: 'inline-flex' }}>07 · Perspectiva</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>O que a evidência<br />demonstra.</h2>
              <p className="lead" style={{ marginTop: 20 }}>Publicamos o que os dados mostram — incluindo o que é contrário ao senso comum e ao que os serviços de retalho habitualmente comunicam.</p>

              <div className="persp-list">
                {PERSPECTIVA.map((item) => (
                  <div key={item.n} className="persp-item">
                    <div className="num">{item.n}</div>
                    <div>
                      <h4>{item.t}</h4>
                      <p>{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-1">
              <div className="origem">
                <span className="label-sm">Origem do projecto</span>
                <p>O CTM foi criado a partir de uma experiência directa: a dificuldade de aceder a ferramentas de análise profissional sem incorrer em custos de €100–300 mensais fragmentados por múltiplos serviços, maioritariamente em inglês e desenhados para outros mercados.</p>
                <p>A comunidade lusófona de investidores merece acesso às mesmas ferramentas e ao mesmo nível de análise — em português, com transparência total sobre metodologia e resultados.</p>
                <p><strong>€4,99 por mês não é uma estratégia de preço. É uma posição sobre o que este serviço deve ser.</strong></p>
                <div className="signature">— Equipa CTM · cleantrendmethod.com</div>
              </div>

              <div className="editorial">
                <span className="label-sm">Compromissos editoriais</span>
                <p>O CTM não publica previsões de preço com datas específicas. Não apresenta resultados seleccionados. Não remove análises negativas do arquivo. Não cria conteúdo cujo objectivo principal seja gerar engagement sem substância analítica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── PREÇO ─────────── */}
      <section id="preco">
        <span className="eyebrow no-rule" style={{ marginBottom: 18 }}>08 · Acesso</span>
        <h2 className="h-section" style={{ marginTop: 14 }}>Simples.<br /><em>Sem surpresas.</em></h2>
        <p className="lead" style={{ margin: '20px auto 0' }}>Duas opções. Sem compromisso mínimo. Sem custos ocultos. Cancelas quando quiseres.</p>

        <div className="price-cards reveal">
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
              <li>Substack · introdução de cada publicação</li>
            </ul>
            <a href="https://t.me/cleantrendmethod" className="price-cta">Entrar grátis →</a>
          </div>

          <div className="price-card featured">
            <span className="price-badge">Membro Pro</span>
            <div className="price-amount">€4,99<span className="sub">/mês</span></div>
            <span className="price-period">sem compromisso · cancela quando quiseres</span>
            <ul className="price-features">
              <li className="bold">Tudo do canal gratuito</li>
              <li>Morning Briefing completo com contexto macro</li>
              <li>Radar diário automático da tua carteira</li>
              <li>Análises Pine 1 + Pine 2 completas</li>
              <li>Quadros de entrada e saída institucionais</li>
              <li>Watchlist CTM · protocolo matemático com IA</li>
              <li>Watchlist por solicitação · qualquer ticker</li>
              <li>Canal Pro Telegram + Discord</li>
              <li>Substack Pro · publicações completas</li>
              <li className="bold">Carteira real · operações públicas + track record</li>
            </ul>
            <a href="https://buy.stripe.com/28E4gy1NBf2xftU3TH8Zq02" className="price-cta">Tornar-me Membro Pro →</a>
          </div>
        </div>

        <div className="price-trust">
          <span>Pagamento seguro via Stripe</span>
          <span>Cancela a qualquer momento</span>
          <span>Sem renovação surpresa</span>
        </div>

        <div className="faq-grid reveal" style={{ textAlign: 'left', marginTop: 96 }}>
          {FAQ.map((item) => (
            <div key={item.q} className="faq-item">
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── LEGAL ─────────── */}
      <div className="legal-bar">
        <div className="inner">
          <strong>Aviso Legal:</strong> O CTM — Clean Trend Method não presta consultoria financeira, não gere activos de terceiros e não emite recomendações de investimento personalizadas. Toda a informação publicada tem carácter exclusivamente educativo e informativo. Os dados de mercado, análises técnicas e fundamentais apresentados não constituem aconselhamento financeiro nem devem ser interpretados como tal. Qualquer decisão de investimento é da exclusiva responsabilidade do utilizador. O investimento em mercados financeiros envolve risco de perda parcial ou total do capital. Resultados passados não constituem garantia de resultados futuros. ·{' '}
          <Link href="/termos">Termos e Condições</Link> ·{' '}
          <Link href="/privacidade">Privacidade</Link> ·{' '}
          <Link href="/reembolso">Reembolso</Link>
        </div>
      </div>

      {/* ─────────── FOOTER ─────────── */}
      <footer>
        <div className="inner">
          <div className="footer-brand">
            <span className="name">· CTM</span>
            <span>Clean Trend Method</span>
            <div className="tag">Análise sistemática · Comunidade lusófona</div>
          </div>
          <div className="footer-col">
            <h5>Projecto</h5>
            <ul>
              <li><a href="#manifesto">Manifesto</a></li>
              <li><a href="#projecto">O Projecto</a></li>
              <li><a href="#metodo">Método CTM v10</a></li>
              <li><a href="#produto">Produto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Canais</h5>
            <ul>
              <li><a href="https://t.me/cleantrendmethod">Telegram público</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Substack</a></li>
              <li><a href="#">Discord (Pro)</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 · CTM · Clean Trend Method · cleantrendmethod.com</span>
          <span>Lisboa · Porto · Madrid · São Paulo</span>
        </div>
      </footer>
    </>
  )
}
