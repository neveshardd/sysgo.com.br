import Navbar from "../components/shared/SharedNavbar";
import Footer from "../components/shared/SharedFooter";
import ContactSection from "../components/shared/SharedContact";
import SistemasHero from "../components/sistemas/SistemasHero";
import SistemasFeatureDark from "../components/sistemas/SistemasFeatureDark";
import SistemasGrid from "../components/sistemas/SistemasGrid";
import SistemasPricing from "../components/sistemas/SistemasPricing";
import SistemasAppDownload from "../components/sistemas/SistemasAppDownload";
import SharedTestimonials from "../components/shared/SharedTestimonials";

export default function SistemasPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <Navbar />
      <SistemasHero />
      <SistemasFeatureDark />
      <SistemasGrid />
      <SistemasPricing />
      <SistemasAppDownload />
      <SharedTestimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
