import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContatoHero from "../components/contato/ContatoHero";
import ContatoForm from "../components/contato/ContatoForm";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <Navbar />
      <ContatoHero />
      <ContatoForm />
      <Footer />
    </main>
  );
}
