import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesFeatureHighlight() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              src="/services/section-image.jpg"
              alt="Gestão eficiente com SysGo"
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f9eeb0] rounded-full -z-10"></div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0d3b35] mb-6 leading-tight">
            Você não nasceu pra ser uma planilha viva
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A gestão manual consome seu tempo e energia. Com nosso sistema, você automatiza processos, elimina erros e foca no que realmente importa: o crescimento do seu negócio.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Esqueça as planilhas complexas. Tenha uma visão clara e em tempo real de toda a sua operação.
          </p>

          <Link href="#" className="text-[#0d3b35] font-bold hover:underline inline-flex items-center gap-2 text-lg group">
            Ver todos os recursos disponíveis
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
