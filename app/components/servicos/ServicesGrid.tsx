import { ClipboardList, Box, DollarSign, BarChart3, Users, Wrench } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "OS",
    description: "Controle total de suas Ordens de Serviço.",
  },
  {
    icon: Wrench,
    title: "Soluções",
    description: "Gestão eficiente de serviços e mão de obra.",
  },
  {
    icon: Box,
    title: "Estoque",
    description: "Controle de peças e produtos em tempo real.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Cadastros",
    description: "Gestão completa de clientes e fornecedores.",
  },
  {
    icon: DollarSign,
    title: "Financeiro",
    description: "Contas a pagar, receber e fluxo de caixa.",
  },
  {
    icon: BarChart3,
    title: "Relatórios",
    description: "Dados precisos para tomar as melhores decisões.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-4 leading-tight">
            Tudo o que você precisa, em um único sistema
          </h2>
        </div>
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Centralize sua operação. Elimine o retrabalho e tenha todas as informações da sua empresa integradas e acessíveis de qualquer lugar.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border ${feature.highlight ? 'bg-[#f9eeb0] border-[#f9eeb0]' : 'bg-white border-gray-100'} transition-all hover:shadow-lg hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-xl ${feature.highlight ? 'bg-[#0d3b35]/10' : 'bg-gray-50'}`}>
                <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-[#0d3b35]' : 'text-[#0d3b35]'}`} />
              </div>
              {feature.highlight && <span className="bg-white text-[10px] font-semibold px-2 py-1 rounded-full text-[#0d3b35] uppercase tracking-wider">Novo</span>}
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 cursor-pointer bg-[#0d3b35] text-white font-semibold rounded-lg hover:bg-[#0a2e2a] transition-all shadow-md hover:shadow-lg">
          Ver todos os recursos
        </button>
      </div>
    </section>
  );
}
