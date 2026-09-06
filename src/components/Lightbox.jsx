import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag, Sparkles } from 'lucide-react';
import { PeacockFeather } from './DecorativePatterns';

export default function Lightbox({
  isOpen,
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-navy-950/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container - Stop propagation on inner clicks */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-peacock-950/95 border-2 border-gold-500/50 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with title and close button */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gold-500/20 bg-navy-950/80">
          <div className="flex items-center gap-2">
            <PeacockFeather className="w-5 h-5 -rotate-12" />
            <span className="text-gold-300 font-heading text-lg tracking-wide">
              {image.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 hover:text-gold-200 hover:border-gold-400 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image with Next/Prev navigation */}
        <div className="relative flex-1 flex items-center justify-center bg-navy-950 min-h-[300px] max-h-[65vh] p-2 overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
          />

          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-300 hover:text-gold-100 hover:bg-peacock-900/90 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-300 hover:text-gold-100 hover:bg-peacock-900/90 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-lg focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Details */}
        <div className="px-5 py-4 border-t border-gold-500/20 bg-gradient-to-r from-peacock-950 via-navy-950 to-peacock-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-medium">
              <Tag className="w-3 h-3" />
              {image.category}
            </span>
            <p className="text-xs text-ivory-200/80 font-light">
              {image.description}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-peacock-400 font-serif italic">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Divine Janmashtami Moments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
