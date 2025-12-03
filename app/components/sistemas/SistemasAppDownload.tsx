import { Wifi, Check } from "lucide-react";

export default function SistemasAppDownload() {
  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-6 max-w-md">
            <div className="w-10 h-10 text-gray-600">
              <Wifi className="w-full h-full stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d3b35] mb-2">Servidores para aplicação</h3>
              <button className="mt-4 px-8 py-3 rounded-lg font-medium border border-gray-200 text-[#0d3b35] hover:bg-gray-50 transition-all text-sm w-full md:w-auto">
                Assinar agora
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            {[
              "25 caixas de e-mail",
              "25GB Armazenamento",
              "SSL Grátis",
              "Backup Diário",
              "LiteSpeed Cache"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-600 list-none">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#0d3b35]" />
                </div>
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
