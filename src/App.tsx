import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImmigrationServices from "./components/ImmigrationServices";
import NotaryServices from "./components/NotaryServices";
import LegalDisclaimer from "./components/LegalDisclaimer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-off-white">
        <Header />
        <main>
          <Hero />
          <ImmigrationServices />
          <NotaryServices />
          <LegalDisclaimer />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

export default App;
