"use client";

import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxFo4EUuV2_Kws6-Znt8V87UJLQRH-Ft_8zmhzXURakMgiDN2JSk6PbS9KibKBVYOjk/exec";

export default function PainelPage() {
  const [dados, setDados] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarDados() {
      try {
        const codigo = localStorage.getItem("codigoConsulta");
        const whatsapp = localStorage.getItem("whatsappConsulta");

        if (!codigo || !whatsapp) {
          window.location.href = "/";
          return;
        }

        const resposta = await fetch(
          `${API_URL}?codigo=${encodeURIComponent(
            codigo
          )}&whatsapp=${encodeURIComponent(whatsapp)}`
        );

        const resultado = await resposta.json();

        if (!resultado.encontrado) {
          alert("Inscrição não encontrada.");
          window.location.href = "/";
          return;
        }

        setDados(resultado);
      } catch (error) {
        console.log(error);
        alert("Erro ao buscar dados.");
      } finally {
        setCarregando(false);
      }
    }

    buscarDados();
  }, []);

  if (carregando) {
    return (
      <main className="painel-page">
        <p className="loading">Carregando dados...</p>

        <Style />
      </main>
    );
  }

  if (!dados) return null;

  return (
    <main className="painel-page">

      <a href="/" className="btn-voltar">
        ← Voltar ao início
      </a>

      <div className="btn-painel">
        👥 Painel do participante
      </div>

      <section className="painel-card">

        <h1 className="titulo">
          Olá, <span>{dados.nome}</span>
        </h1>

        <p className="codigo">
          Código: {dados.codigo}
        </p>

        <div className="info-grid">

          <div className="info-box">
            <small>WhatsApp</small>
            <strong>{dados.whatsapp}</strong>
          </div>

          <div className="info-box">
            <small>Igreja</small>
            <strong>{dados.igreja}</strong>
          </div>

          <div className="info-box">
            <small>Vencimento</small>
            <strong>Dia {dados.vencimento}</strong>
          </div>

          <div className="info-box">
            <small>Status geral</small>
            <strong className="status">
              Em andamento
            </strong>
          </div>

        </div>

        <h2 className="parcelas-title">
          Minhas parcelas
        </h2>

        <div className="parcelas">

          {dados.parcelas.map(
            (status: string, index: number) => (
              <div
                key={index}
                className="parcela"
              >
                <div>
                  <small>
                    Parcela {index + 1}
                  </small>

                  <strong>
                    R$ 87,00
                  </strong>
                </div>

                <span
                  className={
                    status === "Realizado"
                      ? "realizado"
                      : "pendente"
                  }
                >
                  {status}
                </span>
              </div>
            )
          )}

        </div>

      </section>

      <Style />

    </main>
  );
}

function Style() {
  return (
    <style jsx global>{`

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Inter, sans-serif;
      }

      .painel-page {
        min-height: 90vh;
        padding: 40px 20px;
        position: relative;

        background:
          radial-gradient(circle at top left,
          rgba(120,0,0,.5),
          transparent 40%),

          linear-gradient(
            135deg,
            #140000,
            #050505
          );

        color: white;
      }

      .btn-voltar {
        position: absolute;
        top: 24px;
        left: 24px;

        padding: 12px 24px;

        border: 1px solid rgba(201,168,76,.4);
        border-radius: 999px;

        color: #c9a84c;
        text-decoration: none;
        font-weight: 700;

        background: rgba(0,0,0,.25);

        transition: .2s;
      }

      .btn-voltar:hover {
        background: rgba(201,168,76,.08);
      }

      .btn-painel {
        position: absolute;
        top: 24px;
        right: 24px;

        padding: 12px 24px;

        border: 1px solid rgba(201,168,76,.4);
        border-radius: 999px;

        color: #c9a84c;
        font-weight: 700;

        background: rgba(0,0,0,.25);
      }

      .painel-card {
        max-width: 1000px;
        width: 80%;
        margin: 80px auto 0;

        border: 1px solid rgba(201,168,76,.2);
        border-radius: 32px;

        padding: 40px;

        background: rgba(0,0,0,.2);
        backdrop-filter: blur(12px);
      }

      .titulo {
        font-size: 72px;
        font-weight: 900;
        line-height: 1.1;

        margin-bottom: 18px;
      }

      .titulo span {
        color: #c9a84c;
      }

      .codigo {
        color: rgba(255,255,255,.7);
        margin-bottom: 40px;

        font-size: 24px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
        gap: 20px;

        margin-bottom: 50px;
      }

      .info-box {
        padding: 24px;

        border-radius: 24px;

        border: 1px solid rgba(201,168,76,.15);

        background: rgba(255,255,255,.03);
      }

      .info-box small {
        display: block;
        color: rgba(255,255,255,.6);

        margin-bottom: 12px;
      }

      .info-box strong {
        font-size: 34px;
      }

      .status {
        color: #c9a84c;
      }

      .parcelas-title {
        font-size: 52px;
        margin-bottom: 24px;
      }

      .parcelas {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .parcela {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 26px;

        border-radius: 24px;

        border: 1px solid rgba(201,168,76,.15);

        background: rgba(255,255,255,.03);
      }

      .parcela small {
        display: block;
        color: rgba(255,255,255,.6);

        margin-bottom: 10px;
      }

      .parcela strong {
        font-size: 42px;
      }

      .realizado,
      .pendente {
        padding: 10px 18px;

        border-radius: 999px;

        font-weight: 700;
      }

      .realizado {
        background: rgba(0,255,120,.15);
        color: #00ff88;
      }

      .pendente {
        background: rgba(255,200,0,.15);
        color: #ffcc33;
      }

      .loading {
        text-align: center;
        margin-top: 120px;

        color: #c9a84c;

        font-size: 28px;
        font-weight: 700;
      }

      @media (max-width: 768px) {

        .painel-card {
          padding: 28px;
        }

        .titulo {
          font-size: 46px;
        }

        .parcelas-title {
          font-size: 38px;
        }

        .parcela {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .btn-painel,
        .btn-voltar {
          position: static;
          display: inline-flex;

          margin-bottom: 16px;
        }

      }

    `}</style>
  );
}