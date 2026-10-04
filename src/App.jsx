import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedCollections from './components/FeaturedCollections.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactBand from './components/ContactBand.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>

      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <FeaturedCollections />
        <AboutSection />
      </main>
      <div className="bg-dark text-white">
        <ContactBand />
        <Footer />
      </div>
    </div>
  );
}
