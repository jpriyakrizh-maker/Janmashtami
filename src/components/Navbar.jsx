import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { PeacockFeather } from './DecorativePatterns';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Janmashtami', path: '/about' },
    { name: 'Celebration', path: '/celebration' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-solid py-3 shadow-2xl'
          : 'glass-nav py-4 bg-navy-950/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-peacock-700 via-royal-900 to-navy-900 border border-gold-500/50 shadow-gold-glow group-hover:scale-105 transition-transform">
            <PeacockFeather className="w-7 h-7 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            <div className="absolute -inset-1 rounded-full bg-gold-400/20 blur-sm pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-300 transition-colors flex items-center gap-1.5">
              <span className="text-gold-400 font-serif">JP</span>
              <span className="text-gold-500 text-xs">◆</span>
              <span>Janmashtami</span>
            </span>
            <span className="text-[10px] sm:text-xs text-peacock-400 tracking-widest uppercase font-light -mt-1 flex items-center gap-1">
              <span>Divine Celebration</span>
              <Sparkles className="w-2.5 h-2.5 text-gold-400 inline" />
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  isActive
                    ? 'text-gold-300 bg-gold-500/15 border border-gold-500/40 shadow-gold-glow'
                    : 'text-ivory-200/90 hover:text-gold-300 hover:bg-peacock-900/40 border border-transparent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Special Explore Action */}
          <NavLink
            to="/celebration"
            className="ml-3 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
          >
            <span>Festivities</span>
            <span>✦</span>
          </NavLink>
        </nav>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-gold-400 hover:text-gold-300 hover:bg-peacock-900/60 border border-gold-500/30 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-gold-500/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'text-gold-300 bg-peacock-900/70 border border-gold-500/40'
                      : 'text-ivory-100 hover:text-gold-300 hover:bg-navy-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-gold-400 text-xs">✦</span>
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-gold-500/20">
              <NavLink
                to="/celebration"
                onClick={closeMobileMenu}
                className="w-full py-3 px-4 text-center rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-semibold tracking-wider text-sm shadow-gold-glow block"
              >
                Join the Celebration ✦
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
