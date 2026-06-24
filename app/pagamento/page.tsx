"use client";

export default function PagamentoPage() {
  const whatsappEquipe = "5511999999999";

  const mensagem = encodeURIComponent(
    "Olá! Finalizei minha inscrição no Retiro Tetelestai e quero enviar o comprovante de pagamento."
  );

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5ECD7] px-6 py-12">
      <section className="max-w-3xl mx-auto">
        <a href="/" className="text-[#C9A84C] text-sm">
          ← Voltar para o início
        </a>

        <h1 className="text-4xl font-black mt-8 mb-3">
          Pagamento da inscrição
        </h1>

        <p className="text-[#F5ECD7]/60 mb-8">
          Escolha a melhor forma de pagamento e envie o comprovante para a equipe.
        </p>

        <div className="grid gap-5">
          <div className="rounded-2xl border border-[#C9A84C]/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-2">
              À vista no Pix
            </h2>

            <p className="text-[#F5ECD7]/70 mb-4">
              Valor total: <strong>R$ 783,00</strong>
            </p>

            <div className="rounded-xl bg-black/30 p-4 border border-[#C9A84C]/10">
              <p className="text-sm text-[#C9A84C] mb-1">Chave Pix</p>
              <p className="font-bold">11 951680139</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#C9A84C]/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-2">
              Carnê / Parcelado
            </h2>

            <p className="text-[#F5ECD7]/70 mb-4">
              Você pode pagar em parcelas conforme o cronograma abaixo.
            </p>

            <div className="space-y-3">

  <Parcela
    nome="Parcela 1"
    valor="R$ 87,00"
    data="Até 10/01/2027"
    status="Realizado"
  />

  <Parcela
    nome="Parcela 2"
    valor="R$ 87,00"
    data="Até 10/02/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 3"
    valor="R$ 87,00"
    data="Até 10/03/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 4"
    valor="R$ 87,00"
    data="Até 10/04/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 5"
    valor="R$ 87,00"
    data="Até 10/05/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 6"
    valor="R$ 87,00"
    data="Até 10/06/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 7"
    valor="R$ 87,00"
    data="Até 10/07/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 8"
    valor="R$ 87,00"
    data="Até 10/08/2027"
    status="Pendente"
  />

  <Parcela
    nome="Parcela 9"
    valor="R$ 87,00"
    data="Até 10/09/2027"
    status="Pendente"
  />

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

function Parcela({
  nome,
  valor,
  data,
  status,
}: {
  nome: string;
  valor: string;
  data: string;
  status: "Realizado" | "Pendente";
}) {
  const linkParcela = `/pagamento/${nome.toLowerCase().replace(" ", "-")}`;

  if (status === "Realizado") {
    return (
      <div className="flex items-center justify-between gap-4 rounded-xl bg-black/30 border border-green-500/20 p-4 opacity-80">
        <div>
          <p className="font-bold">{nome}</p>
          <p className="text-sm text-[#F5ECD7]/50">{data}</p>
        </div>

        <div className="text-right">
          <p className="text-[#C9A84C] font-black">{valor}</p>
          <span className="text-xs px-3 py-1 rounded-full font-bold bg-green-500/20 text-green-400">
            Realizado
          </span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={linkParcela}
      className="flex items-center justify-between gap-4 rounded-xl bg-black/30 border border-[#C9A84C]/10 p-4 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition"
    >
      <div>
        <p className="font-bold">{nome}</p>
        <p className="text-sm text-[#F5ECD7]/50">{data}</p>
      </div>

      <div className="text-right">
        <p className="text-[#C9A84C] font-black">{valor}</p>
        <span className="text-xs px-3 py-1 rounded-full font-bold bg-yellow-500/20 text-yellow-300">
          Pendente
        </span>
      </div>
    </a>
  );
}