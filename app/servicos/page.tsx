import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ServicesHero from "../components/servicos/ServicesHero";
import ServicesFeatureHighlight from "../components/servicos/ServicesFeatureHighlight";
import ServicesGrid from "../components/servicos/ServicesGrid";
import ServicesCTA from "../components/servicos/ServicesCTA";
import ServicesPricing from "../components/servicos/ServicesPricing";
import ServicesFAQ from "../components/servicos/ServicesFAQ";
import ContactSection from "../components/shared/ContactSection";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#0d3b35] font-sans relative overflow-hidden selection:bg-[#0d3b35] selection:text-white">
      <Navbar />
      <ServicesHero />
      <ServicesFeatureHighlight />
      <ServicesGrid />
      <ServicesCTA />
      <ServicesPricing />
      <ServicesFAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
