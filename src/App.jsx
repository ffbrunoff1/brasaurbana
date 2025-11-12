import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cardapio" element={<MenuPage />} />
          <Route path="/produto/:productId" element={<ProductDetail />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
