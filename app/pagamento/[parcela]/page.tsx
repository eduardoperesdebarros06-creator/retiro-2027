"use client";

import { use } from "react";

const parcelas: any = {
  "parcela-2": { nome: "Parcela 2", valor: "R$ 87,00", vencimento: "10/02/2027" },
  "parcela-3": { nome: "Parcela 3", valor: "R$ 87,00", vencimento: "10/03/2027" },
  "parcela-4": { nome: "Parcela 4", valor: "R$ 87,00", vencimento: "10/04/2027" },
  "parcela-5": { nome: "Parcela 5", valor: "R$ 87,00", vencimento: "10/05/2027" },
  "parcela-6": { nome: "Parcela 6", valor: "R$ 87,00", vencimento: "10/06/2027" },
  "parcela-7": { nome: "Parcela 7", valor: "R$ 87,00", vencimento: "10/07/2027" },
  "parcela-8": { nome: "Parcela 8", valor: "R$ 87,00", vencimento: "10/08/2027" },
  "parcela-9": { nome: "Parcela 9", valor: "R$ 87,00", vencimento: "10/09/2027" },
};

export default function PagamentoParcelaPage({
  params,
}: {
  params: Promise<{ parcela: string }>;
}) {
  const { parcela: parcelaId } = use(params);
  const parcela = parcelas[parcelaId];
  const whatsappEquipe = "5511999999999";
  const chavePix = "11 951680139";

  if (!parcela) {
    return (
      <main className="min-h-screen bg-[#0D0D0D] text-[#F5ECD7] px-6 py-12">
        <section className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-black mb-4">Parcela não encontrada</h1>
          <a href="/pagamento" className="text-[#C9A84C]">
            ← Voltar para pagamentos
          </a>
        </section>
      </main>
    );
  }

  const mensagem = encodeURIComponent(
    `Olá! Quero enviar o comprovante da ${parcela.nome} do Retiro Tetelestai.

Valor: ${parcela.valor}
Vencimento: ${parcela.vencimento}`
  );

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5ECD7] px-6 py-12">
      <section className="max-w-2xl mx-auto">
        <a href="/pagamento" className="text-[#C9A84C] text-sm">
          ← Voltar para minhas parcelas
        </a>

        <div className="mt-8 rounded-3xl border border-[#C9A84C]/20 bg-white/5 p-6">
          <p className="text-sm text-[#C9A84C] font-bold mb-2">
            Pagamento pendente
          </p>

          <h1 className="text-4xl font-black mb-3">{parcela.nome}</h1>

          <p className="text-[#F5ECD7]/60 mb-8">
            Realize o pagamento desta parcela via Pix e envie o comprovante para a equipe.
          </p>

          <div className="grid gap-4 mb-8">
            <div className="rounded-2xl bg-black/30 border border-[#C9A84C]/10 px-6 py-6">
              <p className="text-sm text-[#C9A84C] mb-1">Valor</p>
              <p className="text-3xl font-black">{parcela.valor}</p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-[#C9A84C]/10 px-6 py-6">
              <p className="text-sm text-[#C9A84C] mb-1">Vencimento</p>
              <p className="text-xl font-bold">{parcela.vencimento}</p>
            </div>

            <div className="rounded-2xl bg-black/30 border border-[#C9A84C]/10 px-6 py-6">
              <p className="text-sm text-[#C9A84C] mb-1">Chave Pix</p>
              <p className="text-xl font-bold">{chavePix}</p>
              <div className="rounded-2xl bg-black/30 border border-[#C9A84C]/10 px-6 py-8 text-center mt-4">
  <p className="text-sm text-[#C9A84C] mb-4">
    QR Code Pix
  </p>

  <img
    src="/qrcode.png"
    alt="QR Code Pix"
    className="w-64 mx-auto rounded-2xl mt-4 mb-4"
  />
</div>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappEquipe}?text=${mensagem}`}
            target="_blank"
            className="block text-center rounded-xl bg-[#C9A84C] text-black font-black py-4 hover:bg-[#F0D080] transition"
          >
            Enviar comprovante pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}