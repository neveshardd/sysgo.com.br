export default function SocialProof() {
  return (
    <footer className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pt-12">
        <p className="text-sm font-semibold text-[#0d3b35] max-w-[200px] text-center lg:text-left leading-snug">
          Mais de 50 empresas já confiam na SysGO
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {/* Logos as Text */}
          <span className="text-2xl font-black tracking-tighter text-gray-600 font-sans">LOGOIPSUM</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 border-gray-600"></div>
            <span className="text-xl font-semibold text-gray-600 font-sans">Company</span>
          </div>
          <span className="text-2xl font-semibold italic text-gray-600 font-serif">BrandName</span>
          <span className="text-xl font-medium text-gray-600 uppercase tracking-widest">Partner</span>
          <span className="text-2xl font-semibold text-gray-600 font-mono">IPSUM</span>
        </div>
      </div>
    </footer>
  );
}
