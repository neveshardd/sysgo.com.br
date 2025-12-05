import Image from "next/image";

export default function SharedTestimonials() {
  const testimonials = [
    {
      name: "Guilherme Fernandes",
      company: "Smart Telecom",
      avatar: "/testimonials/testimonial-author-1.png",
      text: "Atendimento e serviço prestados excelentes, muito rápido e atencioso exe detalhes.",
      badge: "Instância MAP-OS"
    },
    {
      name: "Wilmar Martins",
      company: "Controller Elevadores",
      avatar: "/testimonials/testimonial-author-2.png",
      text: "Nossos projetos se tornaram realidade, sempre dentro dos prazos estipulados, superam todas as nossas expectativas!",
      badge: "Instância MAP-OS"
    },
    {
      name: "Genes Cruz",
      company: "GR Store Cell",
      avatar: "/testimonials/testimonial-author-3.png",
      text: "Atendimentos e prestação do serviço excelente, site sempre rápido e eficaz. Sucesso sempre!",
      badge: "Instância MAP-OS"
    },
    {
      name: "Bernardo Moreira",
      company: "Barão Informática",
      avatar: "/testimonials/testimonial-author-4.png",
      text: "Ótimo atendimento fiquei desesperado quando fiquei na mão com a antiga plataforma. Suporte eficiente e ágil!",
      badge: "Instância MAP-OS"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f7f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-4">
            Faça como os nossos clientes e destrave o próximo nível da sua empresa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-teal-900/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0d3b35] text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="inline-block rounded-full p-[1.5px] bg-[linear-gradient(to_bottom,var(--color-teal-200),var(--color-teal-600),var(--color-teal-200),var(--color-teal-600))]">
                <span className="block text-xs font-semibold px-3 py-1.5 bg-white rounded-full text-[#0d3b35] border border-transparent">
                  {testimonial.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 cursor-pointer bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-colors">
            Contrate Agora
          </button>
        </div>
      </div>
    </section>
  );
}
