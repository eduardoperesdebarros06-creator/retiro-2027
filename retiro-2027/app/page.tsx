"use client";

import { useEffect } from "react";

export default function RetiroTetelestaiPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="badge">✝&nbsp; 19 a 21 de fevereiro · Retiro de Jovens</div>

            <h1 className="hero-title">
              Retiro <span className="accent">Tetelestai</span>
            </h1>

            <p className="hero-sub">
              Um tempo separado para viver algo novo com Deus, fortalecer amizades e entender o que a cruz de Cristo significa de verdade.
            </p>

            <div className="btn-group">
  <a href="/inscricao" className="btn btn-primary">
    Fazer minha inscrição
  </a>

  <a href="/pagamento" className="btn btn-ghost">
    Acompanhar pagamento
  </a>
</div>
          </div>

          <div className="scroll-hint">
            <span>Ver mais</span>
            <div className="scroll-dot" />
          </div>
        </section>

        <section className="meaning-section" id="sobre">
          <div className="container">
            <div className="meaning-inner">
              <div className="reveal">
                <div className="greek-display">Τετέλεσται</div>
                <div className="greek-label">João 19:30 — Grego Koiné</div>
              </div>

              <div className="reveal d1">
                <div className="section-tag">A palavra do tema</div>
                <h2 className="section-title">Está consumado</h2>
                <p className="section-body">
                  A última declaração de Jesus na cruz. Em grego, <em>tetelestai</em> significava “a dívida está paga por completo”. Jesus não estava encerrando — estava proclamando a maior vitória da história.
                </p>

                <blockquote>
                  <p>“Tendo Jesus tomado o vinagre, disse: Está consumado. E, inclinando a cabeça, entregou o espírito.”</p>
                  <cite>João 19:30</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="section-tag reveal">Informações</div>
            <h2 className="section-title reveal">Tudo sobre o retiro</h2>

            <div className="cards-grid">
              <div className="card reveal d1">
                <span className="card-icon">📅</span>
                <div className="card-label">Data</div>
                <div className="card-value">19 a 21 de fevereiro</div>
                <div className="card-detail">Sexta ao domingo</div>
              </div>

              <div className="card reveal d2">
                <span className="card-icon">📍</span>
                <div className="card-label">Local</div>
                <div className="card-value">Itaquacetuba-SP</div>
                <div className="card-detail">Em breve mais detalhes</div>
              </div>

              <div className="card reveal d3">
                <span className="card-icon">✝️</span>
                <div className="card-label">Tema</div>
                <div className="card-value">Tetelestai</div>
                <div className="card-detail">“Está consumado”</div>
              </div>

              <div className="card reveal d4">
                <span className="card-icon">📖</span>
                <div className="card-label">Verso-chave</div>
                <div className="card-value">João 19:30</div>
                <div className="card-detail">A obra completa de Cristo</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pillars-section">
          <div className="container">
            <div className="section-tag reveal">O que você vai encontrar</div>
            <h2 className="section-title reveal">Três dias que marcam</h2>
            <p className="section-body reveal">
              Cada momento foi pensado para que você encontre Deus de uma forma real e transformadora.
            </p>

            <div className="pillars-grid">
              <div className="pillar reveal d1">
                <div className="pillar-num">01</div>
                <h3>A Dívida Quitada</h3>
                <p>Entender o que Jesus carregou na cruz e o que isso significa para a sua identidade hoje.</p>
              </div>

              <div className="pillar reveal d2">
                <div className="pillar-num">02</div>
                <h3>A Obra Completa</h3>
                <p>Parar de tentar completar o que já foi consumado — viver da graça, não do esforço.</p>
              </div>

              <div className="pillar reveal d3">
                <div className="pillar-num">03</div>
                <h3>O Novo Começo</h3>
                <p>O que vem depois da cruz? A ressurreição que transforma tudo e abre um novo jeito de viver.</p>
              </div>

              <div className="pillar reveal d4">
                <div className="pillar-num">04</div>
                <h3>Comunidade & Louvor</h3>
                <p>Adoração, conexão real e experiências que ficam na memória e no coração.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="inscricao">
          <div className="container cta-inner">
            <div className="section-tag reveal">Inscrições</div>
            <h2 className="section-title reveal">Está pronto para viver isso?</h2>
            <p className="section-body reveal">Três dias que podem mudar tudo. Não fique de fora.</p>

            <div className="btn-group reveal center">
              <a href="/inscricao" className="btn btn-primary">
                Fazer minha inscrição
              </a>
              <a href="#" className="btn btn-ghost">
                Falar com a equipe
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Retiro de Jovens · Tetelestai · 19–21 de fevereiro</p>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap");

        :root {
          --crimson: #8b0000;
          --blood: #c0392b;
          --gold: #c9a84c;
          --gold-lt: #f0d080;
          --cream: #f5ecd7;
          --dark: #0d0d0d;
          --dark2: #110808;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", sans-serif;
          background: var(--dark);
          color: var(--cream);
          overflow-x: hidden;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 20% 30%, rgba(139, 0, 0, 0.55) 0%, transparent 65%),
            radial-gradient(ellipse 60% 55% at 80% 70%, rgba(192, 57, 43, 0.4) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 60% 15%, rgba(100, 10, 10, 0.4) 0%, transparent 60%),
            linear-gradient(135deg, #0d0d0d 0%, #1a0808 50%, #0d0d0d 100%);
          z-index: 0;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          z-index: 0;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content::before {
          content: "";
          position: absolute;
          top: -100vh;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--blood), var(--gold), transparent);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid rgba(201, 168, 76, 0.35);
          border-radius: 999px;
          padding: 0.45rem 1.2rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--gold);
          margin-bottom: 2.2rem;
          backdrop-filter: blur(6px);
          background: rgba(201, 168, 76, 0.07);
          opacity: 0;
          animation: fadeUp 0.7s 0.1s forwards;
        }

        .hero-title {
          font-family: "Inter", sans-serif;
          font-size: clamp(3.2rem, 11vw, 8rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 1.4rem;
          opacity: 0;
          animation: fadeUp 0.8s 0.25s forwards;
          color: #fff;
          text-shadow: 0 0 80px rgba(192, 57, 43, 0.5);
        }

        .hero-title .accent {
          color: var(--gold);
          font-family: "Cinzel Decorative", serif;
        }

        .hero-sub {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: rgba(245, 236, 215, 0.65);
          max-width: 540px;
          line-height: 1.65;
          margin-bottom: 2.8rem;
          font-weight: 400;
          opacity: 0;
          animation: fadeUp 0.8s 0.4s forwards;
        }

        .btn-group {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: fadeUp 0.8s 0.55s forwards;
        }

        .btn-group.center {
          justify-content: center;
        }

        .btn {
          display: inline-block;
          font-family: "Inter", sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          border: none;
          border-radius: 10px;
          padding: 0.88rem 1.9rem;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--gold-lt), var(--gold));
          color: var(--dark);
          box-shadow: 0 4px 28px rgba(201, 168, 76, 0.45);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(201, 168, 76, 0.6);
        }

        .btn-ghost {
          background: rgba(201, 168, 76, 0.08);
          color: var(--gold);
          border: 1px solid rgba(201, 168, 76, 0.3);
          backdrop-filter: blur(6px);
        }

        .btn-ghost:hover {
          background: rgba(201, 168, 76, 0.15);
          transform: translateY(-2px);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0;
          animation: fadeUp 1s 1.2s forwards;
        }

        .scroll-hint span {
          font-size: 0.62rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.4);
        }

        .scroll-dot {
          width: 5px;
          height: 5px;
          background: var(--gold);
          border-radius: 50%;
          animation: bob 1.8s ease-in-out infinite;
        }

        @keyframes bob {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }

        section {
          padding: 6rem 1.5rem;
        }

        .container {
          max-width: 980px;
          margin: 0 auto;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blood);
          margin-bottom: 0.9rem;
        }

        .section-tag::before {
          content: "";
          width: 16px;
          height: 2px;
          background: var(--blood);
          border-radius: 2px;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 1rem;
          color: #fff;
        }

        .section-body {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(245, 236, 215, 0.55);
          max-width: 600px;
        }

        .meaning-section {
          background: linear-gradient(180deg, var(--dark), #1a0808, var(--dark));
        }

        .meaning-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .greek-display {
          font-family: "Cinzel Decorative", serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900;
          color: var(--gold);
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin-bottom: 0.4rem;
          text-shadow: 0 0 40px rgba(201, 168, 76, 0.35);
        }

        .greek-label {
          font-family: "Cinzel", serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(201, 168, 76, 0.4);
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        blockquote {
          border-left: 3px solid var(--blood);
          padding: 1rem 1.5rem;
          margin-top: 2rem;
          background: rgba(139, 0, 0, 0.08);
          border-radius: 0 8px 8px 0;
        }

        blockquote p {
          font-size: 0.98rem;
          line-height: 1.72;
          color: rgba(245, 236, 215, 0.7);
          font-style: italic;
        }

        blockquote cite {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.72rem;
          font-style: normal;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 700;
        }

        .info-section {
          background: var(--dark);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .card {
          background: rgba(201, 168, 76, 0.04);
          border: 1px solid rgba(201, 168, 76, 0.12);
          border-radius: 16px;
          padding: 1.8rem 1.5rem;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .card:hover {
          background: rgba(201, 168, 76, 0.08);
          border-color: rgba(201, 168, 76, 0.3);
          transform: translateY(-3px);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card-icon {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .card-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.4);
          margin-bottom: 0.35rem;
        }

        .card-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--cream);
          line-height: 1.3;
        }

        .card-detail {
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.3rem;
          font-weight: 500;
        }

        .pillars-section {
          background: linear-gradient(180deg, var(--dark), var(--dark2));
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 1.2rem;
          margin-top: 2.5rem;
        }

        .pillar {
          padding: 2rem 1.5rem;
          border-radius: 16px;
          background: rgba(139, 0, 0, 0.06);
          border: 1px solid rgba(139, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }

        .pillar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blood), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .pillar:hover {
          border-color: rgba(192, 57, 43, 0.4);
          background: rgba(139, 0, 0, 0.1);
          transform: translateY(-3px);
        }

        .pillar:hover::before {
          opacity: 1;
        }

        .pillar-num {
          font-family: "Cinzel Decorative", serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: rgba(139, 0, 0, 0.25);
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .pillar h3 {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 0.45rem;
        }

        .pillar p {
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(245, 236, 215, 0.45);
        }

        .cta-section {
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139, 0, 0, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse 60% 60% at 80% 80%, rgba(192, 57, 43, 0.2) 0%, transparent 65%);
        }

        .cta-inner {
          position: relative;
          z-index: 1;
        }

        .cta-inner .section-tag {
          justify-content: center;
        }

        .cta-inner .section-body {
          margin: 0 auto 2.5rem;
        }

        footer {
          border-top: 1px solid rgba(201, 168, 76, 0.12);
          padding: 2rem 1.5rem;
          text-align: center;
          background: var(--dark);
        }

        footer p {
          font-family: "Cinzel", serif;
          font-size: 0.72rem;
          color: rgba(201, 168, 76, 0.25);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: none;
        }

        .d1 {
          transition-delay: 0.08s;
        }

        .d2 {
          transition-delay: 0.16s;
        }

        .d3 {
          transition-delay: 0.24s;
        }

        .d4 {
          transition-delay: 0.32s;
        }

        @media (max-width: 680px) {
          .meaning-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero {
            padding: 1.4rem;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .btn-group {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
