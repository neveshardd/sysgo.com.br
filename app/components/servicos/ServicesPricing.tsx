import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 97",
    period: "/mês",
    description: "Para quem está começando a organizar a empresa.",
    features: ["Gestão de OS ilimitada", "Cadastro de Clientes", "Controle de Estoque Básico", "1 Usuário"],
  },
  {
    name: "Profissional",
    price: "R$ 197",
    period: "/mês",
    description: "O plano ideal para empresas em crescimento.",
    highlight: true,
    features: ["Tudo do Básico", "Financeiro Completo", "Emissão de Boletos e NFe", "3 Usuários", "Suporte Prioritário via WhatsApp"],
  },
  {
    name: "Empresarial",
    price: "Sob Consulta",
    period: "",
    description: "Para grandes operações que precisam de escala.",
    features: ["Tudo do Profissional", "API de Integração", "Gestão Multi-lojas", "Usuários Ilimitados", "Gerente de Conta Dedicado"],
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-4">
          Planos de Gestão de Ordens de Serviço
        </h2>
        <p className="text-gray-600 text-lg">Escolha o plano ideal para o momento do seu negócio</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border ${plan.highlight ? 'border-[#0d3b35] shadow-2xl relative scale-105 z-10' : 'border-gray-200 hover:border-gray-300'} bg-white transition-all`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d3b35] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Mais Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-[#0d3b35] mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-[#0d3b35]">{plan.price}</span>
              <span className="text-gray-500 font-medium">{plan.period}</span>
            </div>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>

            <div className="w-full h-px bg-gray-100 mb-8"></div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-[#0d3b35] shrink-0" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-bold transition-all ${plan.highlight ? 'bg-[#0d3b35] text-white hover:bg-[#0a2e2a] shadow-lg' : 'bg-gray-100 text-[#0d3b35] hover:bg-gray-200'}`}>
              {plan.highlight ? 'Começar Agora' : 'Falar com Consultor'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
