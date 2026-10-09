import { Route, Routes } from 'react-router';
import Header from './components/Header.jsx';
import ContactBand from './components/ContactBand.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>

      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <div className="bg-dark text-white">
        <ContactBand />
        <Footer />
      </div>
    </div>
  );
}
