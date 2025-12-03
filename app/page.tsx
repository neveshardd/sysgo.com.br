import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import AboutSection from "./components/AboutSection";
import SystemsSection from "./components/SystemsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#0d3b35] font-sans relative overflow-hidden selection:bg-[#0d3b35] selection:text-white">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <AboutSection />
      <SystemsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

