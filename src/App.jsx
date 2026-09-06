import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Celebration from './pages/Celebration';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-ivory-100 relative selection:bg-gold-500 selection:text-navy-950">
      {/* Floating Sparkle / Golden Light Particles */}
      <ParticleBackground />

      {/* Auto Scroll to top on navigation */}
      <ScrollToTop />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Pages */}
      <main className="flex-grow z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Traditional Premium Footer */}
      <Footer />
    </div>
  );
}
