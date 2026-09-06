import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Pause,
  Play,
  Info,
} from "lucide-react";

import {
  PeacockFeather,
  KrishnaFootprints,
} from "./DecorativePatterns";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const carouselItems = [
  {
    id: 1,
    image: img1,
    title: "Our Sweet Little Kannan",
    caption:
      "Dressed with peacock feather crown, flute, and pure innocent joy.",
    tag: "Little Krishna Moments",
  },
  {
    id: 2,
    image: img2,
    title: "The Butter Thief",
    caption:
      "Innocent glances and sweet smiles carrying Krishna's everlasting radiance.",
    tag: "Festive Delights",
  },
  {
    id: 3,
    image: img3,
    title: "Divine Footsteps in Our Home",
    caption:
      "Little baby steps welcoming auspicious prosperity, health, and laughter.",
    tag: "Home Blessings",
  },
  {
    id: 4,
    image: img4,
    title: "Radiant Smiles of Krishna",
    caption:
      "Cherishing these timeless festive memories with deep gratitude and warmth.",
    tag: "Janmashtami Joy",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const timerRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % carouselItems.length
        );
      }, 4500);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  // Previous
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  // Next
  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % carouselItems.length
    );
  };

  // Dot
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch Start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Touch Move
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Touch End
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-peacock-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-peacock-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-3 shadow-gold-glow">

            <Sparkles className="w-3.5 h-3.5 text-gold-400" />

            <span>Cherished Family Memories</span>

            <Sparkles className="w-3.5 h-3.5 text-gold-400" />

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-ivory-50 tracking-wide">

            <span className="text-gold-gradient">
              Our Little Krishna
            </span>

          </h2>

          <p className="mt-3 text-ivory-200/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Little moments filled with love, joy and Krishna's blessings.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">

            <div className="h-[1px] w-12 bg-gold-500/50" />

            <KrishnaFootprints className="w-7 h-5 text-gold-400" />

            <div className="h-[1px] w-12 bg-gold-500/50" />

          </div>

        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          className="relative rounded-3xl p-3 sm:p-5 md:p-6 bg-gradient-to-b from-peacock-950 via-peacock-900 to-navy-950 border-2 border-gold-500/40 shadow-gold-glow-lg backdrop-blur-xl"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* ================= TOP BAR ================= */}
          <div className="flex items-center justify-between px-3 py-2 mb-3 border-b border-gold-500/20">

            <div className="flex items-center gap-2 text-gold-300">

              <PeacockFeather className="w-5 h-5 -rotate-12" />

              <span className="font-serif tracking-wider uppercase font-semibold text-xs sm:text-sm">
                Balakrishna Darshan
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="text-ivory-300/70 font-mono text-[11px]">
                {currentIndex + 1} / {carouselItems.length}
              </span>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 rounded text-gold-400 hover:text-gold-200 transition-colors"
                aria-label={
                  isPlaying
                    ? "Pause slideshow"
                    : "Play slideshow"
                }
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
              </button>

            </div>

          </div>

          {/* ================= IMAGE AREA ================= */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] max-h-[620px] bg-navy-950 border border-gold-500/30">

            {carouselItems.map((item, index) => {

              const isActive = index === currentIndex;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain object-center bg-navy-950"
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />

                  {/* Golden Border */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/20 rounded-2xl pointer-events-none" />

                  {/* ================= CAPTION ================= */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-left">

                    <div className="inline-block px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-md">
                      {item.tag}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-ivory-50 tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ivory-200/90 mt-1 max-w-xl font-light drop-shadow">
                      {item.caption}
                    </p>

                  </div>

                </div>
              );
            })}

            {/* ================= PREVIOUS ================= */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/75 border border-gold-500/40 text-gold-300 hover:text-gold-100 hover:bg-peacock-900/90 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* ================= NEXT ================= */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/75 border border-gold-500/40 text-gold-300 hover:text-gold-100 hover:bg-peacock-900/90 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* ================= DOTS ================= */}
          <div className="flex items-center justify-center gap-2 mt-5">

            {carouselItems.map((_, idx) => (

              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-2.5 bg-gradient-to-r from-gold-400 to-gold-600 shadow-gold-glow"
                    : "w-2.5 h-2.5 bg-peacock-800/80 hover:bg-gold-500/50 border border-gold-500/30"
                }`}
              />

            ))}

          </div>

          {/* ================= INFO ================= */}
          <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-center">

            <p className="text-[11px] sm:text-xs text-gold-400/80 flex items-center gap-1.5 font-light">

              <Info className="w-3.5 h-3.5 text-gold-400 shrink-0" />

              <span>
                Cherished memories of our little Krishna
              </span>

            </p>

          </div>

        </div>
      </div>
    </section>
  );
}