import DepoimentosHero from "../components/depoimentos/DepoimentosHero";
import DepoimentosFeatureDark from "../components/depoimentos/DepoimentosFeatureDark";
import DepoimentosSteps from "../components/depoimentos/DepoimentosSteps";
import DepoimentosContact from "../components/depoimentos/DepoimentosContact";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function DepoimentosPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <DepoimentosHero />
      <DepoimentosFeatureDark />
      <DepoimentosSteps />
      <DepoimentosContact />
      <Footer />
    </main>
  );
}
