export default function SystemsSection() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#fcfdfd] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '4rem 3rem'
        }}
      ></div>

      {/* Linear Gradient Mask - Fades grid at all edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #fcfdfd 0%, transparent 50%, transparent 85%, #fcfdfd 100%),
            linear-gradient(to bottom, #fcfdfd 0%, transparent 60%, transparent 85%, #fcfdfd 100%)
          `
        }}
      ></div>

      {/* Green shadow/glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(13,59,53,0.08)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-4">Nossos Sistemas</h2>
          <p className="text-lg text-gray-600">
            Nossos sistemas tornam a gestão do negócio mais acessível e simplificada, sendo ferramentas essenciais para impulsionar seu crescimento no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#fcfdfd] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-medium text-gray-500 max-w-[150px] leading-tight">Sua presença digital sem dor de cabeça</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded text-gray-600 uppercase tracking-wider">Web</span>
            </div>
            <div className="mb-4 text-[#0d3b35]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0d3b35] mb-4">Hospedagem de sites</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Hospedagem, domínio, painel e suporte — tudo configurado e pronto para sua empresa aparecer com estrutura profissional.
            </p>
            <button className="w-full py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#0d3b35] font-semibold text-sm transition-colors">
              Ver mais detalhes
            </button>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-[#f8fcfb] rounded-2xl p-8 border border-[#0d3b35]/20 shadow-lg relative flex flex-col transform md:-translate-y-4">
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-medium text-gray-600 max-w-[150px] leading-tight">Controle de ordens de serviço sem papelada</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-white border border-[#0d3b35]/20 rounded text-[#0d3b35] uppercase tracking-wider">Gestão</span>
            </div>
            <div className="mb-4 text-[#0d3b35]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0d3b35] mb-4">Map-OS</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Organize sua assistência técnica ou operação de campo em um só lugar, com alertas automáticos, histórico de clientes, notificações e cobranças integradas.
            </p>
            <button className="w-full py-3 rounded-lg bg-[#0d3b35] hover:bg-[#0a2e2a] text-white font-semibold text-sm transition-colors shadow-md">
              Ver mais detalhes
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfdfd] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-medium text-gray-500 max-w-[150px] leading-tight">Sistemas sob medida para o seu negócio</span>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded text-gray-600 uppercase tracking-wider">Sob-Medida</span>
            </div>
            <div className="mb-4 text-[#0d3b35]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0d3b35] mb-4">Painel Personalizado</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Criamos soluções exclusivas para empresas que precisam de um sistema específico, funcional e com suporte técnico ágil.
            </p>
            <button className="w-full py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#0d3b35] font-semibold text-sm transition-colors">
              Ver mais detalhes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
