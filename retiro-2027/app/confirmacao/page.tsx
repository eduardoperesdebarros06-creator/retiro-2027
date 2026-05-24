"use client";

import { useEffect, useState } from "react";

export default function ConfirmacaoPage() {
  const [codigo, setCodigo] = useState("");
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const codigoSalvo = localStorage.getItem("codigoRetiro");
    setCodigo(codigoSalvo || "TETE-2027-0000");
    setCarregado(true);
  }, []);

  if (!carregado) return null;

  return (
    <main className="confirm-page">
      <div className="confirm-bg" />

      <section className="confirm-content">
        <div className="top-badge">
          ✝ 19 a 21 de fevereiro · Retiro de Jovens
        </div>

        <div className="success-badge">
          Inscrição realizada com sucesso
        </div>

        <h1>
          Seu código de <span>acompanhamento</span>
        </h1>

        <p className="subtitle">
          Guarde esse código. Você usará ele para acompanhar parcelas,
          pagamentos e status da sua inscrição.
        </p>

        <div className="code-card">
          <div className="code-label">Código</div>
          <strong>{codigo}</strong>
        </div>

        <a href="/escolher-vencimento" className="gold-button">
          Escolher vencimento das parcelas
        </a>
      </section>

      <style jsx>{`
        .confirm-page {
          min-height: 100vh;
          background: #0d0d0d;
          color: #f5ecd7;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          font-family: Inter, sans-serif;
        }

        .confirm-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.55), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(192, 57, 43, 0.35), transparent 35%),
            linear-gradient(135deg, #0d0d0d, #1a0808, #0d0d0d);
        }

        .confirm-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 980px;
          text-align: center;
        }

        .top-badge,
        .success-badge {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(201, 168, 76, 0.45);
          background: rgba(0, 0, 0, 0.35);
          color: #c9a84c;
          border-radius: 999px;
          padding: 10px 28px;
          margin-bottom: 28px;
        }

        .success-badge {
          font-weight: 700;
          margin-bottom: 55px;
        }

        h1 {
          font-size: clamp(40px, 7vw, 72px);
          line-height: 1;
          font-weight: 900;
          color: white;
          margin-bottom: 22px;
        }

        h1 span {
          color: #c9a84c;
        }

        .subtitle {
          max-width: 720px;
          margin: 0 auto 65px;
          font-size: 20px;
          line-height: 1.7;
          color: rgba(245, 236, 215, 0.7);
        }

        .code-card {
          position: relative;
          border: 1px solid rgba(201, 168, 76, 0.45);
          background: rgba(0, 0, 0, 0.45);
          border-radius: 32px;
          padding: 65px 30px;
          margin-bottom: 60px;
          box-shadow: 0 0 80px rgba(201, 168, 76, 0.08);
        }

        .code-label {
          position: absolute;
          top: -17px;
          left: 50%;
          transform: translateX(-50%);
          background: #0d0d0d;
          border: 1px solid rgba(201, 168, 76, 0.4);
          color: #c9a84c;
          border-radius: 999px;
          padding: 6px 28px;
          font-size: 14px;
        }

        .code-card strong {
          display: block;
          color: #c9a84c;
          font-size: clamp(42px, 8vw, 88px);
          letter-spacing: 0.08em;
          font-weight: 900;
        }

        .gold-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f0d080, #c9a84c);
          color: #0d0d0d;
          text-decoration: none;
          font-weight: 900;
          font-size: 20px;
          padding: 20px 46px;
          border-radius: 18px;
          box-shadow: 0 0 45px rgba(201, 168, 76, 0.35);
          transition: 0.2s;
        }

        .gold-button:hover {
          transform: translateY(-2px) scale(1.02);
        }

        @media (max-width: 640px) {
          .code-card strong {
            font-size: 36px;
          }

          .gold-button {
            width: 100%;
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}