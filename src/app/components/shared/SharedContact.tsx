import { Sparkle, Star, StarHalf, Stars } from "lucide-react";
import Link from "next/link";

export default function SharedContact() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0d3b35] text-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="mb-8">
              <Sparkle strokeWidth={0.6} className="w-12 h-12" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Fale Conosco</h2>

            <div className="space-y-4 mb-8 text-white/90 leading-relaxed">
              <p>
                Gostaríamos de ouvir sua opinião, elogios ou dúvidas; será um prazer falar com você.
              </p>
              <p>
                Para papo com um de nossos atendentes utilize o Chat Online no canto inferior direito ou clique no botão abaixo e seja direcionado a nosso atendimento via WhatsApp.
              </p>
            </div>

            <Link href="https://api.whatsapp.com/send/?phone=5562992765550&text&type=phone_number&app_absent=0">
              <button className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-white text-[#0d3b35] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </button>
            </Link>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl rounded-tr-[72px] p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Nome"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="Telefone Whatsapp"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Digite sua mensagem..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d3b35] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer py-4 bg-[#0d3b35] text-white rounded-xl font-semibold hover:bg-[#0a2e2a] transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
