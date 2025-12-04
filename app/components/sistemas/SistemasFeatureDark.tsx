import Image from "next/image";

export default function SistemasFeatureDark() {
  return (
    <section className="py-20 bg-[#0d3b35] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10">
              <Image
                src="/system/section2-image.jpg"
                alt="Analytics Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Por que isso importa?</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Sem um site profissional, seu negócio perde credibilidade e visibilidade.
              </p>
              <p>
                Na SysGO, você não precisa ser técnico para ter um site confiável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
