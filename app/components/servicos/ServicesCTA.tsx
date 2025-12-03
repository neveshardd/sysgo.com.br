export default function ServicesCTA() {
  return (
    <section className="py-24 px-6 bg-[#0d3b35] text-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
          Você não precisa acreditar. Só precisa testar
        </h2>
        <p className="text-green-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Experimente na prática como nossa solução pode transformar o dia a dia da sua empresa. Sem compromisso e sem cartão de crédito.
        </p>
        <button className="px-10 py-4 cursor-pointer bg-white text-[#0d3b35] font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl text-lg">
          Começar teste grátis
        </button>
      </div>
    </section>
  );
}
