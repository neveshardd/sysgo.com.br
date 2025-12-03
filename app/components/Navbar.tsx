import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <Image src="/logo.svg" alt="SysGO" width={120} height={40} priority />

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#" className="hover:text-[#0d3b35] transition-colors">Início</Link>
        <Link href="#" className="hover:text-[#0d3b35] transition-colors">Serviços</Link>
        <Link href="#" className="hover:text-[#0d3b35] transition-colors">Sistemas</Link>
        <Link href="#" className="hover:text-[#0d3b35] transition-colors">Depoimentos</Link>
        <Link href="#" className="hover:text-[#0d3b35] transition-colors">Contato</Link>
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="#" className="hidden sm:block px-6 py-2.5 text-sm font-semibold text-[#0d3b35] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
          Entrar
        </Link>
        <Link href="#" className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0d3b35] rounded-xl hover:bg-[#0a2e2a] transition-all hover:-translate-y-0.5">
          Começar agora
        </Link>
      </div>
    </header>
  );
}
