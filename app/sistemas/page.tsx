import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TestimonialsSection from "../components/shared/TestimonialsSection";
import ContactSection from "../components/shared/ContactSection";
import SistemasHero from "../components/sistemas/SistemasHero";
import SistemasFeatureDark from "../components/sistemas/SistemasFeatureDark";
import SistemasGrid from "../components/sistemas/SistemasGrid";
import SistemasPricing from "../components/sistemas/SistemasPricing";
import SistemasAppDownload from "../components/sistemas/SistemasAppDownload";

export default function SistemasPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <Navbar />
      <SistemasHero />
      <SistemasFeatureDark />
      <SistemasGrid />
      <SistemasPricing />
      <SistemasAppDownload />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
