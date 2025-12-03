import { Database, Globe, Wrench, Lock, Mail } from "lucide-react";

export default function SistemasGrid() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b35] mb-4">
            Tudo o que você precisa, em um único sistema
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
            <div className="w-10 h-10 mb-6 text-gray-400">
              <Database className="w-full h-full stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0d3b35] mb-3">Hospedagem Escalável</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Planos personalizados para atender as demandas sob demanda
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
            <div className="w-10 h-10 mb-6 text-gray-400">
              <Globe className="w-full h-full stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0d3b35] mb-3">Registro e Renovação de Domínio</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Garanta seu domínio profissional .com.br, .com, .net, etc
            </p>
          </div>

          {/* Feature 3 - Highlighted */}
          <div className="p-8 rounded-2xl bg-[#FDF4D0] border border-transparent hover:shadow-lg transition-all rounded-tr-[3rem]">
            <div className="w-10 h-10 mb-6 text-gray-600">
              <Wrench className="w-full h-full stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0d3b35] mb-3">Painel Administrativo Simples</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Painel em Português BR, limpo e responsivo
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
            <div className="w-10 h-10 mb-6 text-gray-400">
              <Lock className="w-full h-full stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0d3b35] mb-3">Certificado SSL (Https)</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Certificado de segurança gratuito e vitalício com renovação para nossos (ou todos os) planos
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 mb-6 text-gray-400">
              <Mail className="w-full h-full stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0d3b35] mb-3">E-mails Corporativos</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Utilize e-mails pelo painel Roundcube e integração com aplicativos de e-mail, como Outlook, Thunderbird e outros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
