'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o teste grátis de 7 dias?",
    answer: "Você tem acesso total a todas as funcionalidades do sistema por 7 dias. Não pedimos cartão de crédito para iniciar. Se gostar, basta escolher um plano ao final do período e continuar usando sem perder seus dados."
  },
  {
    question: "Preciso instalar algum programa no meu computador?",
    answer: "Não! O Map-OS é 100% online e em nuvem. Você pode acessar de qualquer lugar, pelo computador, tablet ou celular, basta ter acesso à internet. Não ocupa espaço no seu dispositivo."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Nosso suporte é humanizado e realizado via WhatsApp ou Ticket dentro da plataforma, em horário comercial. Ajudamos desde a configuração inicial até dúvidas do dia a dia para garantir que você tire o máximo proveito do sistema."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, não temos fidelidade nem contratos de longo prazo. Você pode cancelar sua assinatura quando quiser diretamente pelo painel, sem multas, taxas surpresa ou burocracia."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Com certeza. Utilizamos servidores de última geração com backups diários automáticos e criptografia de ponta a ponta (SSL) para garantir a segurança e privacidade total das suas informações."
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-semibold text-[#0d3b35] mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 mb-6">
            Tire suas dúvidas sobre nossa plataforma. Se não encontrar a resposta, entre em contato com nosso time.
          </p>
          <button className="text-[#0d3b35] cursor-pointer font-semibold underline hover:text-[#0a2e2a]">
            Falar com atendente
          </button>
        </div>
        <div className="md:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between w-full text-left py-2 group">
                <span className={`font-medium text-lg transition-colors ${openIndex === index ? 'text-[#0d3b35]' : 'text-gray-700 group-hover:text-[#0d3b35]'}`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#0d3b35]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#0d3b35]" />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-gray-600 leading-relaxed pb-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
