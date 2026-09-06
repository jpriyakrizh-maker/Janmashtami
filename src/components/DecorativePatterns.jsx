import React from 'react';

export function PeacockFeather({ className = "w-12 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="outerVane" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="45%" stopColor="#075985" />
          <stop offset="75%" stopColor="#581c87" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
        <radialGradient id="eyeCenter" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="35%" stopColor="#051b33" />
          <stop offset="70%" stopColor="#10b981" />
          <stop offset="85%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>
      {/* Quill / Shaft */}
      <path d="M50 115 C48 85 49 50 50 10" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      {/* Feather vanes */}
      <path
        d="M50 10 C32 28, 16 55, 48 95 C78 55, 68 28, 50 10 Z"
        fill="url(#outerVane)"
        opacity="0.9"
      />
      {/* Decorative barbs / lines */}
      <path d="M50 25 C35 32, 26 42, 22 55" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M50 25 C65 32, 74 42, 78 55" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M50 40 C32 50, 24 64, 26 78" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M50 40 C68 50, 76 64, 74 78" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Eye outer */}
      <ellipse cx="50" cy="48" rx="19" ry="24" fill="url(#eyeCenter)" stroke="#f59e0b" strokeWidth="2" />
      {/* Inner pupil */}
      <ellipse cx="50" cy="46" rx="9" ry="13" fill="#09101f" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="50" cy="43" r="3.5" fill="#38bdf8" />
    </svg>
  );
}

export function KrishnaFlute({ className = "w-28 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fluteGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>
      {/* Bansuri body */}
      <rect x="15" y="16" width="130" height="9" rx="4.5" fill="url(#fluteGold)" stroke="#fef08a" strokeWidth="0.8" />
      {/* Flute rings */}
      <line x1="28" y1="16" x2="28" y2="25" stroke="#78350f" strokeWidth="1.5" />
      <line x1="135" y1="16" x2="135" y2="25" stroke="#78350f" strokeWidth="1.5" />
      {/* Tone holes */}
      <circle cx="45" cy="20.5" r="2" fill="#451a03" />
      <circle cx="60" cy="20.5" r="2" fill="#451a03" />
      <circle cx="75" cy="20.5" r="2" fill="#451a03" />
      <circle cx="90" cy="20.5" r="2" fill="#451a03" />
      <circle cx="105" cy="20.5" r="2" fill="#451a03" />
      <circle cx="120" cy="20.5" r="2" fill="#451a03" />
      {/* Hanging silk tassel on left */}
      <path d="M22 23 C18 29, 14 34, 12 39" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="39" r="2.5" fill="#f59e0b" />
      <circle cx="16" cy="37" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

export function KrishnaFootprints({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="footGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="60%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
      </defs>
      {/* Left footprint */}
      <g transform="translate(5, 5)">
        {/* Sole */}
        <ellipse cx="14" cy="24" rx="7" ry="12" fill="url(#footGrad)" opacity="0.9" />
        {/* Heel */}
        <circle cx="14" cy="33" r="5.5" fill="url(#footGrad)" opacity="0.95" />
        {/* 5 toes */}
        <circle cx="18" cy="8" r="3.2" fill="url(#footGrad)" />
        <circle cx="13" cy="9" r="2.4" fill="url(#footGrad)" />
        <circle cx="9" cy="11" r="2.2" fill="url(#footGrad)" />
        <circle cx="6" cy="14" r="1.9" fill="url(#footGrad)" />
        <circle cx="4" cy="17" r="1.5" fill="url(#footGrad)" />
      </g>
      {/* Right footprint */}
      <g transform="translate(38, 2)">
        {/* Sole */}
        <ellipse cx="14" cy="24" rx="7" ry="12" fill="url(#footGrad)" opacity="0.9" />
        {/* Heel */}
        <circle cx="14" cy="33" r="5.5" fill="url(#footGrad)" opacity="0.95" />
        {/* 5 toes */}
        <circle cx="10" cy="8" r="3.2" fill="url(#footGrad)" />
        <circle cx="15" cy="9" r="2.4" fill="url(#footGrad)" />
        <circle cx="19" cy="11" r="2.2" fill="url(#footGrad)" />
        <circle cx="22" cy="14" r="1.9" fill="url(#footGrad)" />
        <circle cx="24" cy="17" r="1.5" fill="url(#footGrad)" />
      </g>
    </svg>
  );
}

export function DiyaLamp({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="flameGrad" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#d97706" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Flame */}
      <path
        d="M30 4 C24 16, 20 22, 30 28 C40 22, 36 16, 30 4 Z"
        fill="url(#flameGrad)"
        filter="drop-shadow(0 0 6px #f59e0b)"
      />
      <circle cx="30" cy="22" r="3" fill="#fef3c7" />
      {/* Brass Diya Bowl */}
      <path
        d="M10 28 Q30 46 50 28 Q44 26 30 26 Q16 26 10 28 Z"
        fill="#f59e0b"
        stroke="#fcd34d"
        strokeWidth="1.2"
      />
      {/* Diya Base */}
      <ellipse cx="30" cy="41" rx="9" ry="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
      <path d="M26 37 L24 41 M34 37 L36 41" stroke="#fcd34d" strokeWidth="1" />
    </svg>
  );
}

export function DecorativeDivider({ className = "my-8" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-500/80" />
      <div className="flex items-center gap-1.5 text-gold-400">
        <span className="text-xs">✦</span>
        <PeacockFeather className="w-6 h-8 -rotate-12 transform" />
        <span className="text-xs">✦</span>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-500/80" />
    </div>
  );
}

export function SectionHeader({
  title,
  subtitle,
  sanskrit,
  center = true,
  className = "mb-12",
}) {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} ${className}`}>
      {sanskrit && (
        <span className="inline-block text-gold-400 font-serif tracking-widest text-sm sm:text-base mb-2 font-medium px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
          {sanskrit}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-ivory-50 tracking-wide mt-2">
        <span className="text-gold-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-ivory-200/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <DecorativeDivider className="my-4" />
    </div>
  );
}
