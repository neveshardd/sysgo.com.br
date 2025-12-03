import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/home/HeroSection";
import SocialProof from "./components/home/SocialProof";
import AboutSection from "./components/home/AboutSection";
import SystemsSection from "./components/home/SystemsSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import TestimonialsSection from "./components/shared/TestimonialsSection";
import ContactSection from "./components/shared/ContactSection";
import Footer from "./components/shared/Footer";

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

