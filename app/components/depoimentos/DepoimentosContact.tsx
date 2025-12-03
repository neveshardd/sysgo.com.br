export default function DepoimentosContact() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b35] mb-6 leading-tight">
              Vamos conversar sobre sua demanda?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Preencha o formulário que um dos nossos analistas entrará em contato com você para entender o que precisa.
            </p>
          </div>

          <div className="bg-[#1a4d44] rounded-3xl p-8 lg:p-10 shadow-2xl">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg bg-[#143d36] border border-[#2a665b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d8f82] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone (Whatsapp)"
                  className="w-full px-4 py-3 rounded-lg bg-[#143d36] border border-[#2a665b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d8f82] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg bg-[#143d36] border border-[#2a665b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d8f82] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="O que deseja melhorar..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#143d36] border border-[#2a665b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d8f82] focus:border-transparent resize-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-[#0d3b35] rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
