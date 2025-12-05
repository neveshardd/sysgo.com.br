import HomeHero from "./components/home/HomeHero";
import HomeSocialProof from "./components/home/HomeSocialProof";
import HomeSystems from "./components/home/HomeSystems";
import HomeWhyChoose from "./components/home/HomeWhyChoose";
import SharedFooter from "./components/shared/SharedFooter";
import HomeAbout from "./components/home/HomeAbout";
import SharedTestimonials from "./components/shared/SharedTestimonials";
import SharedContact from "./components/shared/SharedContact";
import SharedNavbar from "./components/shared/SharedNavbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#0d3b35] font-sans relative overflow-hidden selection:bg-[#0d3b35] selection:text-white">
      <SharedNavbar />
      <HomeHero />
      <HomeSocialProof />
      <HomeAbout />
      <HomeSystems />
      <HomeWhyChoose />
      <SharedTestimonials />
      <SharedContact />
      <SharedFooter />
    </div>
  );
}

