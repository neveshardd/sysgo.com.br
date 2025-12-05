import Navbar from "../components/shared/SharedNavbar";
import Footer from "../components/shared/SharedFooter";
import ServicesHero from "../components/services/ServicesHero";
import ServicesFeatureHighlight from "../components/services/ServicesFeatureHighlight";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesPricing from "../components/services/ServicesPricing";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ContactSection from "../components/shared/SharedContact";

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
