import { Gem, CircleCheckBig } from "lucide-react";

export default function SistemasAppDownload() {
  return (
    <section className="py-12 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-32 shadow-sm max-w-6xl mx-auto">
          <div className="flex flex-col items-start w-full md:max-w-md shrink-0">
            <div className="w-8 h-8 text-[#0d3b35] mb-6">
              <Gem className="w-full h-full stroke-[1.5]" />
            </div>

            <h3 className="text-2xl font-bold text-[#0d3b35] mb-8">Servidores para aplicação</h3>

            <div className="w-full h-px bg-gray-200 mb-8"></div>

            <button className="w-full cursor-pointer py-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 text-[#0d3b35] font-semibold text-sm hover:bg-white hover:shadow-md transition-all shadow-sm">
              Assinar agora
            </button>
          </div>

          <div className="grid grid-cols-1 gap-y-4 w-full md:pt-4">
            {[
              "20 caixas de e-mail",
              "20GB Armazenamento",
              "SSL Grátis",
              "Backup Diário",
              "LiteSpeed Cache"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <CircleCheckBig className="w-5 h-5 text-[#0d3b35] shrink-0 stroke-[1.5]" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
