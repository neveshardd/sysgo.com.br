import { Database, Globe, Wrench, Lock, Mail } from "lucide-react";

export default function SistemasGrid() {
  return (
    <section className="py-24 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl font-semibold text-[#0d3b35] mb-4">
            Tudo o que você precisa, em um único sistema
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Feature 1 */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-[#f8f9fa] border border-gray-200 transition-all">
            <div className="w-10 h-10 mb-6 text-[#0d3b35]">
              <Database className="w-full h-full stroke-[1.2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">Hospedagem Escalável</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Planos personalizados para atender ao tamanho da sua demanda
            </p>
          </div>

          {/* Feature 2 */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-[#f8f9fa] border border-gray-200 transition-all">
            <div className="w-10 h-10 mb-6 text-[#0d3b35]">
              <Globe className="w-full h-full stroke-[1.2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">Registro e Renovação de Domínio</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Contrate seu domínio profissional .com.br, .com, .net, etc
            </p>
          </div>

          {/* Feature 3 - Highlighted */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-[#FDF4D0] border border-transparent transition-all rounded-tr-[4rem]">
            <div className="w-10 h-10 mb-6 text-[#0d3b35]">
              <Wrench className="w-full h-full stroke-[1.2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">Painel Administrativo Simples</h3>
            <p className="text-[#0d3b35]/80 text-sm leading-relaxed">
              Painel em Português BR, limpo e responsivo
            </p>
          </div>

          {/* Feature 4 */}
          <div className="lg:col-span-3 p-8 rounded-2xl bg-[#f8f9fa] border border-gray-200 transition-all">
            <div className="w-10 h-10 mb-6 text-[#0d3b35]">
              <Lock className="w-full h-full stroke-[1.2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">Certificado SSL (https)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Certificado de segurança gratuito emitido e boa pontuação para nossos IPs (evitando Blacklist)
            </p>
          </div>

          {/* Feature 5 */}
          <div className="lg:col-span-3 p-8 rounded-2xl bg-[#f8f9fa] border border-gray-200 transition-all">
            <div className="w-10 h-10 mb-6 text-[#0d3b35]">
              <Mail className="w-full h-full stroke-[1.2]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0d3b35] mb-3">E-mails Corporativos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utilize e-mails pelo painel Roundcube e integração com aplicativos de e-mail, como: Outlook, Thunderbird e outros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
