import PersonalizadoHero from "../components/personalizado/PersonalizadoHero";
import PersonalizadoFeatureDark from "../components/personalizado/PersonalizadoFeatureDark";
import PersonalizadoSteps from "../components/personalizado/PersonalizadoSteps";
import PersonalizadoContact from "../components/personalizado/PersonalizadoContact";
import Navbar from "../components/shared/SharedNavbar";
import Footer from "../components/shared/SharedFooter";

export default function PersonalizadoPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <PersonalizadoHero />
      <PersonalizadoFeatureDark />
      <PersonalizadoSteps />
      <PersonalizadoContact />
      <Footer />
    </main>
  );
}
