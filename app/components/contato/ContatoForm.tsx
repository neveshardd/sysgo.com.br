export default function ContatoForm() {
  return (
    <section className="py-24 bg-[#0d3b35]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Fale com quem resolve.</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Se você precisa de ajuda, quer tirar dúvidas ou iniciar um projeto personalizado, estamos aqui para te ouvir.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent bg-gray-50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone (Whatsapp)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent bg-gray-50"
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Digite sua mensagem..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent bg-gray-50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer py-4 bg-[#0d3b35] text-white rounded-lg font-semibold hover:bg-[#0a2e2a] transition-colors text-lg"
            >
              Enviar mensagem
            </button>

            <div className="text-center pt-4">
              <p className="text-gray-500 text-sm">
                Ou, se preferir, chame no WhatsApp <a href="#" className="text-[#0d3b35] font-semibold hover:underline">clicando aqui</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
