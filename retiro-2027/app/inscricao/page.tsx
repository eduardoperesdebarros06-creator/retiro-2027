"use client";

import { useState } from "react";

export default function InscricaoPage() {
const [form, setForm] = useState({
  nome: "",
  idade: "",
  whatsapp: "",
  igreja: "",
  restricao: "",
  observacao: "",
  responsavel: "",
  telefoneResponsavel: "",
});

  const numeroEquipe = "155114455277";

  async function enviarInscricao(e: React.FormEvent) {
  e.preventDefault();

  const dados = {
    ...form,
    vencimento: "",
  };

  await fetch(
    "https://script.google.com/macros/s/AKfycbyFkv4kvVlCaAAGDqeZrZ7fHMnmZt_wgqUnOo0Dyfhk5W1wADsF1m-6CS3OrltPjefF/exec",
    {
      method: "POST",
      body: JSON.stringify(dados),
    }
  );

  localStorage.setItem(
    "inscricaoRetiro",
    JSON.stringify(form)
  );

  window.location.href = "/escolher-vencimento";
}

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5ECD7] px-6 py-12">
      <section className="max-w-2xl mx-auto">
        <a href="/" className="text-[#C9A84C] text-sm">
          ← Voltar para o início
        </a>

        <h1 className="text-4xl font-black mt-8 mb-3">
          Inscrição Retiro Tetelestai
        </h1>

        <p className="text-[#F5ECD7]/60 mb-8">
          Preencha seus dados abaixo. Ao enviar, sua inscrição será encaminhada para a equipe pelo WhatsApp.
        </p>

        <form onSubmit={enviarInscricao} className="space-y-5">
          <div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    Nome completo
  </label>

  <input
    required
    value={form.nome}
    onChange={(e) =>
      setForm({ ...form, nome: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    Idade
  </label>

  <input
    type="number"
    required
    value={form.idade}
    onChange={(e) =>
      setForm({ ...form, idade: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>

{Number(form.idade) < 18 && form.idade !== "" && (
  <>
    <div>
      <label className="block mb-2 text-sm text-[#C9A84C]">
        Nome do responsável
      </label>

      <input
        required
        value={form.responsavel}
        onChange={(e) =>
          setForm({
            ...form,
            responsavel: e.target.value,
          })
        }
        className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm text-[#C9A84C]">
        Telefone do responsável
      </label>

      <input
        required
        value={form.telefoneResponsavel}
        onChange={(e) =>
          setForm({
            ...form,
            telefoneResponsavel: e.target.value,
          })
        }
        className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
      />
    </div>
  </>
)}

<div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    WhatsApp
  </label>

  <input
    required
    value={form.whatsapp}
    onChange={(e) =>
      setForm({ ...form, whatsapp: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    Igreja/Congregação
  </label>

  <input
    required
    value={form.igreja}
    onChange={(e) =>
      setForm({ ...form, igreja: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    Restrição alimentar
  </label>

  <input
    value={form.restricao}
    onChange={(e) =>
      setForm({ ...form, restricao: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>

<div>
  <label className="block mb-2 text-sm text-[#C9A84C]">
    Observação
  </label>

  <input
    value={form.observacao}
    onChange={(e) =>
      setForm({ ...form, observacao: e.target.value })
    }
    className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
  />
</div>
{Number(form.idade) < 18 && form.idade !== "" && (
  <>
    <div>
      <label className="block mb-2 text-sm text-[#C9A84C]">
        Nome do responsável
      </label>

      <input
        value={form.responsavel}
        onChange={(e) =>
          setForm({
            ...form,
            responsavel: e.target.value,
          })
        }
        className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
        required
      />
    </div>

    <div>
      <label className="block mb-2 text-sm text-[#C9A84C]">
        Telefone do responsável
      </label>

      <input
        value={form.telefoneResponsavel}
        onChange={(e) =>
          setForm({
            ...form,
            telefoneResponsavel: e.target.value,
          })
        }
        className="w-full rounded-xl bg-white/5 border border-[#C9A84C]/20 px-4 py-3 outline-none focus:border-[#C9A84C]"
        required
      />
    </div>
  </>
)}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#C9A84C] text-black font-black py-4 hover:bg-[#F0D080] transition"
          >
            Enviar inscrição
          </button>
        </form>
      </section>
    </main>
  );
}