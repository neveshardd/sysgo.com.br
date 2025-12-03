import { Plus } from "lucide-react";

const faqs = [
  { question: "Como funciona o teste grátis de 7 dias?" },
  { question: "Preciso instalar algum programa no meu computador?" },
  { question: "Como funciona o suporte técnico?" },
  { question: "Posso cancelar a qualquer momento?" },
  { question: "Meus dados estão seguros?" },
];

export default function ServicesFAQ() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-[#0d3b35] mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 mb-6">
            Tire suas dúvidas sobre nossa plataforma. Se não encontrar a resposta, entre em contato com nosso time.
          </p>
          <button className="text-[#0d3b35] font-bold underline hover:text-[#0a2e2a]">
            Falar com atendente
          </button>
        </div>
        <div className="md:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 group cursor-pointer">
              <div className="flex items-center justify-between w-full text-left py-2">
                <span className="font-medium text-[#0d3b35] text-lg group-hover:text-[#0a2e2a] transition-colors">{faq.question}</span>
                <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#0d3b35] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
