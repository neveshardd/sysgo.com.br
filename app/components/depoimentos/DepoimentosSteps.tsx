import { PenTool, FileText, Package, UserCheck } from "lucide-react";

export default function DepoimentosSteps() {
  return (
    <section className="py-24 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35]">
            Etapas de Criação
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
            <div className="w-12 h-12 mb-6 text-[#0d3b35]">
              <PenTool className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="block text-2xl font-semibold text-[#0d3b35] mb-2">1.</span>
            <h3 className="text-lg font-medium text-gray-600">Briefing técnico alinhado</h3>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
            <div className="w-12 h-12 mb-6 text-[#0d3b35]">
              <FileText className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="block text-2xl font-semibold text-[#0d3b35] mb-2">2.</span>
            <h3 className="text-lg font-medium text-gray-600">Protótipo validado</h3>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
            <div className="w-12 h-12 mb-6 text-[#0d3b35]">
              <Package className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="block text-2xl font-semibold text-[#0d3b35] mb-2">3.</span>
            <h3 className="text-lg font-medium text-gray-600">Sistema entregue com manual</h3>
          </div>

          {/* Step 4 */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
            <div className="w-12 h-12 mb-6 text-[#0d3b35]">
              <UserCheck className="w-8 h-8 stroke-[1.5]" />
            </div>
            <span className="block text-2xl font-semibold text-[#0d3b35] mb-2">4.</span>
            <h3 className="text-lg font-medium text-gray-600">Suporte real com pessoas reais</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
