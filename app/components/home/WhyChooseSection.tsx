export default function WhyChooseSection() {
  return (
    <section className="relative py-24 lg:py-24 bg-[#0d3b35] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Por que escolher a SysGO?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {/* Card 1 */}
          <div className="bg-[#0d3b35] border border-white/10 rounded-2xl p-8 transition-colors">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Suporte direto e sempre disponível com quem resolve
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0d3b35] border border-white/10 rounded-2xl p-8 transition-colors">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Sistemas criados com base nas dores reais do dia a dia
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0d3b35] border border-white/10 rounded-2xl p-8 transition-colors">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Soluções que cabem no bolso e crescem com sua empresa
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0d3b35] border border-white/10 rounded-2xl p-8 transition-colors">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Atendimento humanizado e próximo
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0d3b35] border border-white/10 rounded-2xl p-8 transition-colors">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Integrações simples, sem dor de cabeça
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 cursor-pointer bg-white text-[#0d3b35] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
}
