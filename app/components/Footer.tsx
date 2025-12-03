import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7f8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo and Address */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-icon.png" alt="SysGO" width={40} height={40} className="flex-shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl tracking-tight text-[#0d3b35]">SysGO</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide">Soluções que simplificam</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Avenida Anhanguera 5389 Sala 2005, Set Central, Goiânia GO
            </p>
          </div>

          {/* Right Side - Navigation and Badges */}
          <div className="flex flex-col items-end gap-6">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-2 justify-end">
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Início</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Serviços</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Sistemas</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Depoimentos</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Quem somos</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#0d3b35] transition-colors">Contato</Link>
            </nav>

            {/* Security Badges */}
            <div className="flex items-center gap-3">
              <Image src="/norton-icon.png" alt="Norton Secured" width={80} height={40} className="object-contain" />
              <Image src="/ssl-icon.png" alt="SSL Secured" width={60} height={40} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center md:text-left">
            <p>©2025 Powered by SYSGO LTDA | CNPJ: 55.997.256/0001-07</p>
            <p>Todos os direitos reservados.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <Link href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
