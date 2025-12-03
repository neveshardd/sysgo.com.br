import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0d3b35] mb-6 leading-[1.1]">
            Seu negócio organizado. <br />
            Seus prazos no controle.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Transforme a gestão da sua empresa de serviços. Tenha controle total de ordens de serviço, estoque e financeiro em um único lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#" className="px-8 py-4 text-base font-semibold text-white bg-[#0d3b35] rounded-lg hover:bg-[#0a2e2a] transition-all shadow-lg hover:shadow-xl">
              Testar Grátis
            </Link>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-500 ml-2 font-medium">(4.9)</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[#f9eeb0] rounded-[3rem] -z-10 transform rotate-3"></div>
            <Image
              src="/services/mobile-mock.jpg"
              alt="Interface do Sistema SysGo no Celular"
              width={600}
              height={600}
              className="object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
