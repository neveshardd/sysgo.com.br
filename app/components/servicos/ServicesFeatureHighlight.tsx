import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesFeatureHighlight() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="rounded-3xl overflow-hidden aspect-4/3 relative shadow-lg">
            <Image
              src="/services/section-image.jpg"
              alt="Gestão eficiente com SysGo"
              fill
              className="object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f9eeb0] rounded-full -z-10"></div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0d3b35] mb-6 leading-tight">
            Você não nasceu pra ser uma planilha viva
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Se a sua rotina é feita de anotações soltas, serviços esquecidos, cobranças manuais e retrabalho, o Map-OS é para você!
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A verdade é que, quanto mais você tenta dar conta de tudo, menos tempo sobra para fazer sua empresa crescer.
          </p>
          <p>
            Com o Map-OS, você ganha clareza, controle e tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
