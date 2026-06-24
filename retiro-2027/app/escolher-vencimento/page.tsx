"use client";

import { useState } from "react";

export default function EscolherVencimentoPage() {
  const [dia, setDia] = useState("10");
  const [enviando, setEnviando] = useState(false);

  async function confirmarVencimento() {
    if (enviando) return;

    setEnviando(true);

    const inscricaoSalva = localStorage.getItem("inscricaoRetiro");

    if (!inscricaoSalva) {
      alert("Não encontramos sua inscrição.");
      window.location.href = "/inscricao";
      return;
    }

    const inscricao = JSON.parse(inscricaoSalva);

    const dadosCompletos = {
      codigo: inscricao.codigo,
      nome: inscricao.nome,
      idade: inscricao.idade,
      whatsapp: inscricao.whatsapp,
      igreja: inscricao.igreja,
      responsavel: inscricao.responsavel,
      telefoneResponsavel: inscricao.telefoneResponsavel,
      restricao: inscricao.restricao,
      observacao: inscricao.observacao,
      vencimento: dia,
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbxFo4EUuV2_Kws6-Znt8V87UJLQRH-Ft_8zmhzXURakMgiDN2JSk6PbS9KibKBVYOjk/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(dadosCompletos),
      }
    );

    localStorage.setItem("inscricaoRetiro", JSON.stringify(dadosCompletos));
    localStorage.setItem("diaVencimentoRetiro", dia);

    window.location.href = "/";
  }

  return (
    <main className="vencimento-page">
      <section className="vencimento-card">
        <div className="badge">Retiro Tetelestai 2027</div>

        <h1>Escolha o vencimento</h1>

        <p>
          Selecione o melhor dia para o vencimento das suas parcelas mensais.
        </p>

        <div className="options">
          {["10", "15", "20", "25"].map((opcao) => (
            <button
              key={opcao}
              type="button"
              onClick={() => setDia(opcao)}
              className={dia === opcao ? "active" : ""}
            >
              Dia {opcao}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={confirmarVencimento}
          disabled={enviando}
          className="confirm-button"
        >
          {enviando ? "Enviando..." : "Confirmar vencimento"}
        </button>
      </section>

      <style jsx>{`
        .vencimento-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.55), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(192, 57, 43, 0.35), transparent 35%),
            linear-gradient(135deg, #0d0d0d, #1a0808, #0d0d0d);
          color: #f5ecd7;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: Inter, sans-serif;
        }

        .vencimento-card {
          width: 100%;
          max-width: 720px;
          text-align: center;
          border: 1px solid rgba(201, 168, 76, 0.35);
          background: rgba(0, 0, 0, 0.42);
          border-radius: 32px;
          padding: 55px 35px;
          box-shadow: 0 0 80px rgba(201, 168, 76, 0.08);
        }

        .badge {
          display: inline-flex;
          color: #c9a84c;
          border: 1px solid rgba(201, 168, 76, 0.35);
          border-radius: 999px;
          padding: 10px 24px;
          margin-bottom: 30px;
        }

        h1 {
          font-size: clamp(36px, 6vw, 64px);
          color: white;
          font-weight: 900;
          margin-bottom: 20px;
        }

        p {
          color: rgba(245, 236, 215, 0.65);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .options {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 40px;
        }

        .options button {
          border: 1px solid rgba(201, 168, 76, 0.25);
          background: rgba(255, 255, 255, 0.04);
          color: #c9a84c;
          border-radius: 18px;
          padding: 18px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s;
        }

        .options button:hover {
          border-color: rgba(201, 168, 76, 0.55);
          transform: translateY(-2px);
        }

        .options button.active {
          background: linear-gradient(135deg, #f0d080, #c9a84c);
          color: #0d0d0d;
          box-shadow: 0 0 35px rgba(201, 168, 76, 0.25);
        }

        .confirm-button {
          width: 100%;
          border: none;
          border-radius: 18px;
          padding: 20px;
          background: linear-gradient(135deg, #f0d080, #c9a84c);
          color: #0d0d0d;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s;
        }

        .confirm-button:hover {
          transform: translateY(-2px);
        }

        .confirm-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 640px) {
          .options {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </main>
  );
}