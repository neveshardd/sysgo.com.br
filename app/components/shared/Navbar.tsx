import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Image src="/logo.svg" alt="SysGO" width={120} height={40} priority />

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-teal-900">
          <Link href="/" className="hover:text-[#0d3b35] transition-colors text-sm">Início</Link>
          <Link href="/servicos" className="hover:text-[#0d3b35] transition-colors text-sm">Serviços</Link>
          <Link href="/sistemas" className="hover:text-[#0d3b35] transition-colors text-sm">Hospedagem</Link>
          <Link href="/depoimentos" className="hover:text-[#0d3b35] transition-colors text-sm">Personalizado</Link>
        </nav>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="#" className="hidden sm:block border border-gray-200 cursor-pointer px-6 py-2.5 text-sm font-semibold text-[#0d3b35] bg-white shadow-xl rounded-xl hover:bg-gray-50 transition-all">
          Entrar
        </Link>
        <Link href="#" className="px-6 py-2.5 cursor-pointer text-sm font-semibold shadow-xl text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all hover:-translate-y-0.5">
          Começar agora
        </Link>
      </div>
    </header>
  );
}
