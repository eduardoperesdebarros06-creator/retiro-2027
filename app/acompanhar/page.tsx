"use client";

import { useState } from "react";

export default function AcompanharPage() {
  const [codigo, setCodigo] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function entrar() {
    if (!codigo || !whatsapp) {
      alert("Preencha todos os campos.");
      return;
    }

    localStorage.setItem("codigoConsulta", codigo);
    localStorage.setItem("whatsappConsulta", whatsapp);

    window.location.href = "/painel";
  }

  return (
    <main className="acompanhar-page">
      <section className="acompanhar-card">
        <div className="badge">
          Retiro Tetelestai 2027
        </div>

        <h1>
          Acompanhar inscrição
        </h1>

        <p>
          Digite seu código de acompanhamento e seu WhatsApp para acessar suas parcelas e pagamentos.
        </p>

        <div className="field">
          <label>Código</label>

          <input
            type="text"
            placeholder="TETE-2027-0001"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className="field">
          <label>WhatsApp</label>

          <input
  type="text"
  placeholder="11 98871-8983"
  value={whatsapp}
  onChange={(e) => {
    let numero = e.target.value.replace(/\D/g, "");

    if (numero.length > 11) {
      numero = numero.slice(0, 11);
    }

    numero = numero.replace(
      /(\d{2})(\d{0,5})(\d{0,4})/,
      (_, ddd, parte1, parte2) => {
        return parte2
          ? `${ddd} ${parte1}-${parte2}`
          : `${ddd} ${parte1}`;
      }
    );

    setWhatsapp(numero);
  }}
/>
        </div>

        <button onClick={entrar}>
          Entrar
        </button>
      </section>

      <style jsx>{`
        .acompanhar-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.55), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(192, 57, 43, 0.35), transparent 35%),
            linear-gradient(135deg, #0d0d0d, #1a0808, #0d0d0d);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
          font-family: Inter, sans-serif;
        }

        .acompanhar-card {
          width: 100%;
          max-width: 620px;
          border: 1px solid rgba(201, 168, 76, 0.25);
          background: rgba(0, 0, 0, 0.42);
          border-radius: 32px;
          padding: 45px 35px;
          color: #f5ecd7;
          box-shadow: 0 0 80px rgba(201, 168, 76, 0.08);
        }

        .badge {
          display: inline-flex;
          border: 1px solid rgba(201, 168, 76, 0.35);
          border-radius: 999px;
          padding: 10px 22px;
          color: #c9a84c;
          margin-bottom: 28px;
        }

        h1 {
          font-size: clamp(36px, 6vw, 58px);
          font-weight: 900;
          color: white;
          margin-bottom: 16px;
        }

        p {
          color: rgba(245, 236, 215, 0.7);
          line-height: 1.6;
          margin-bottom: 34px;
        }

        .field {
          display: grid;
          gap: 8px;
          margin-bottom: 22px;
        }

        label {
          color: #c9a84c;
          font-size: 14px;
          font-weight: 700;
        }

        input {
          width: 100%;
          border: 1px solid rgba(201, 168, 76, 0.25);
          background: rgba(255, 255, 255, 0.05);
          color: #f5ecd7;
          border-radius: 16px;
          padding: 16px 18px;
          outline: none;
          font-size: 16px;
        }

        input:focus {
          border-color: rgba(201, 168, 76, 0.8);
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
        }

        button {
          width: 100%;
          margin-top: 12px;
          border: none;
          border-radius: 18px;
          padding: 18px;
          background: linear-gradient(135deg, #f0d080, #c9a84c);
          color: #0d0d0d;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}