"use client";

import { useState } from "react";

export default function InscricaoPage() {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    whatsapp: "",
    igreja: "",
    responsavel: "",
    telefoneResponsavel: "",
    restricao: "",
    observacao: "",
  });

  const menorDeIdade = form.idade !== "" && Number(form.idade) < 18;

  async function enviarInscricao(e: React.FormEvent) {
    e.preventDefault();

    const numeroCodigo = Math.floor(Math.random() * 301);
    const codigo = `TETE-2027-${numeroCodigo.toString().padStart(4, "0")}`;

    const dados = {
      codigo,
      nome: form.nome,
      idade: form.idade,
      whatsapp: form.whatsapp,
      igreja: form.igreja,
      responsavel: form.responsavel,
      telefoneResponsavel: form.telefoneResponsavel,
      restricao: form.restricao,
      observacao: form.observacao,
      vencimento: "",
    };

    localStorage.setItem("inscricaoRetiro", JSON.stringify(dados));
    localStorage.setItem("codigoRetiro", codigo);

    window.location.href = "/confirmacao";
  }

  return (
    <main className="inscricao-page">
      <section className="inscricao-card">
        <div className="badge">Retiro Tetelestai 2027</div>

        <h1>Faça sua inscrição</h1>

        <p className="intro">
          Preencha seus dados abaixo. Ao enviar, você receberá seu código de
          acompanhamento.
        </p>

        <form onSubmit={enviarInscricao}>
          <Campo
            label="Nome completo"
            value={form.nome}
            onChange={(valor) => setForm({ ...form, nome: valor })}
            required
          />

          <Campo
            label="Idade"
            type="number"
            value={form.idade}
            onChange={(valor) => setForm({ ...form, idade: valor })}
            required
          />

          {menorDeIdade && (
            <>
              <Campo
                label="Nome do responsável"
                value={form.responsavel}
                onChange={(valor) => setForm({ ...form, responsavel: valor })}
                required
              />

              <Campo
                label="Telefone do responsável"
                value={form.telefoneResponsavel}
                onChange={(valor) =>
                  setForm({ ...form, telefoneResponsavel: valor })
                }
                required
              />
            </>
          )}

          <Campo
            label="WhatsApp"
            value={form.whatsapp}
            onChange={(valor) => setForm({ ...form, whatsapp: valor })}
            required
          />

          <Campo
            label="Igreja/Congregação"
            value={form.igreja}
            onChange={(valor) => setForm({ ...form, igreja: valor })}
            required
          />

          <Campo
            label="Restrição alimentar"
            value={form.restricao}
            onChange={(valor) => setForm({ ...form, restricao: valor })}
          />

          <div className="field">
            <label>Observação</label>
            <textarea
              value={form.observacao}
              onChange={(e) =>
                setForm({ ...form, observacao: e.target.value })
              }
            />
          </div>

          <button type="submit">Enviar inscrição</button>
        </form>
      </section>

      <style jsx>{`
        .inscricao-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 0, 0, 0.55), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(192, 57, 43, 0.35), transparent 35%),
            linear-gradient(135deg, #0d0d0d, #1a0808, #0d0d0d);
          color: #f5ecd7;
          display: flex;
          justify-content: center;
          padding: 50px 20px;
          font-family: Inter, sans-serif;
        }

        .inscricao-card {
          width: 100%;
          max-width: 760px;
          border: 1px solid rgba(201, 168, 76, 0.28);
          background: rgba(0, 0, 0, 0.42);
          border-radius: 32px;
          padding: 42px;
          box-shadow: 0 0 90px rgba(201, 168, 76, 0.08);
        }

        .badge {
          display: inline-flex;
          border: 1px solid rgba(201, 168, 76, 0.35);
          border-radius: 999px;
          color: #c9a84c;
          padding: 9px 22px;
          margin-bottom: 26px;
          font-size: 14px;
        }

        h1 {
          font-size: clamp(36px, 6vw, 58px);
          color: white;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .intro {
          color: rgba(245, 236, 215, 0.65);
          line-height: 1.6;
          font-size: 17px;
          margin-bottom: 34px;
        }

        form {
          display: grid;
          gap: 18px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        label {
          color: #c9a84c;
          font-size: 14px;
          font-weight: 700;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid rgba(201, 168, 76, 0.25);
          background: rgba(255, 255, 255, 0.05);
          color: #f5ecd7;
          border-radius: 16px;
          padding: 15px 18px;
          outline: none;
          font-size: 16px;
        }

        textarea {
          min-height: 110px;
          resize: vertical;
        }

        input:focus,
        textarea:focus {
          border-color: rgba(201, 168, 76, 0.8);
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
        }

        button {
          margin-top: 12px;
          border: none;
          border-radius: 18px;
          padding: 18px;
          background: linear-gradient(135deg, #f0d080, #c9a84c);
          color: #0d0d0d;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(201, 168, 76, 0.25);
        }

        @media (max-width: 640px) {
          .inscricao-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </main>
  );
}

function Campo({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (valor: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />

      <style jsx>{`
        .field {
          display: grid;
          gap: 8px;
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
          padding: 15px 18px;
          outline: none;
          font-size: 16px;
        }

        input:focus {
          border-color: rgba(201, 168, 76, 0.8);
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.08);
        }
      `}</style>
    </div>
  );
}