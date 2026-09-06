import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Share2 } from 'lucide-react';
import { PeacockFeather, DiyaLamp } from './DecorativePatterns';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy-950 via-peacock-950 to-navy-950 border-t border-gold-500/25 pt-16 pb-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gold-500/20">
          
          {/* Col 1: Logo & Essence */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-peacock-900 border border-gold-500/50 flex items-center justify-center shadow-gold-glow">
                <PeacockFeather className="w-7 h-7 -rotate-12" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider text-ivory-50">
                <span className="text-gold-400 font-serif">JP</span> • Janmashtami
              </span>
            </div>

            <p className="text-ivory-200/80 text-sm max-w-md leading-relaxed font-light">
              "Celebrate the birth of Lord Krishna with love, devotion and joy."
            </p>

            {/* Hare Krishna Mantra Card */}
            <div className="p-4 rounded-xl bg-peacock-900/30 border border-gold-500/20 backdrop-blur-sm max-w-md">
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                Maha Mantra
              </p>
              <p className="text-xs sm:text-sm font-serif text-ivory-100 italic leading-relaxed">
                हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।<br />
                हरे राम हरे राम राम राम हरे हरे ॥
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-gold-300 tracking-wide flex items-center gap-2">
              <span className="text-gold-500 text-xs">✦</span>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-ivory-200/70 font-light">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> About Janmashtami
                </Link>
              </li>
              <li>
                <Link to="/celebration" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Celebrations & Rituals
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Festive Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Traditional Observance & Connect */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-gold-300 tracking-wide flex items-center gap-2">
              <span className="text-gold-500 text-xs">✦</span>
              Festive Blessings
            </h4>
            <p className="text-xs text-ivory-200/70 leading-relaxed font-light">
              May the sweet melodies of Lord Krishna's flute fill your household with perpetual peace, prosperity, and joy.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-gold-400/90 font-medium mb-3">
                Share the Auspicious Joy
              </p>
              <div className="flex items-center gap-3 text-ivory-300">
                <button
                  type="button"
                  aria-label="Instagram"
                  onClick={() => alert("May Lord Krishna bless you on this auspicious Janmashtami!")}
                  className="w-8 h-8 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center hover:text-gold-400 hover:border-gold-400 hover:scale-110 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Facebook"
                  onClick={() => alert("May Lord Krishna bless you on this auspicious Janmashtami!")}
                  className="w-8 h-8 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center hover:text-gold-400 hover:border-gold-400 hover:scale-110 transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="YouTube"
                  onClick={() => alert("Jai Shri Krishna!")}
                  className="w-8 h-8 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center hover:text-gold-400 hover:border-gold-400 hover:scale-110 transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Share page"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Janmashtami Festival Celebration',
                        text: 'Celebrate the divine birth of Lord Krishna!',
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Website link copied to clipboard!');
                    }
                  }}
                  className="w-8 h-8 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center hover:text-gold-400 hover:border-gold-400 hover:scale-110 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-200/60 gap-4">
          <div className="flex items-center gap-2">
            <DiyaLamp className="w-5 h-5" />
            <span>© 2026 Janmashtami Celebration • All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-1.5 text-gold-400/80">
            <span>Devotionally crafted for Lord Krishna</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
