import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-6 max-w-7xl mx-auto overflow-hidden bg-[#fcfdfd]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      {/* Radial Gradient Mask for softer edges - Only center visible */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#fcfdfd_70%)]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#0d3b35] leading-[1.1] mb-6 tracking-tight">
            Seu negócio organizado. <br />
            Seus prazos no controle.
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            O Map-OS é um sistema de ordem de serviço simples e intuitivo que te ajuda a acompanhar tudo, do pedido à entrega, sem depender de papel, WhatsApp ou memória.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#" className="px-8 py-4 text-base font-semibold text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all shadow-lg hover:shadow-xl cursor-pointer hover:-translate-y-1">
              Contrate agora
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-bold text-[#0d3b35]">5.0</span>
                </div>
                <Link href="#" className="text-sm text-gray-500 underline hover:text-[#0d3b35] transition-colors cursor-pointer">
                  Ver todas avaliações
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Image Container */}
          <div className="relative z-10 transform translate-y-4 md:translate-y-8 transition-transform duration-700">
            <Image
              src="/services/mobile-mock.jpg"
              alt="Interface do Sistema SysGo no Celular"
              width={600}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-4xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
