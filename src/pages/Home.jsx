import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Music, Crown, Heart, Moon, ShieldCheck, Flame } from 'lucide-react';
import { PeacockFeather, KrishnaFlute, DiyaLamp, KrishnaFootprints, DecorativeDivider, SectionHeader } from '../components/DecorativePatterns';

export default function Home() {
  const celebrationPillars = [
    {
      id: 'midnight',
      title: 'Midnight Janmotsav',
      time: 'Midnight (Nishita Kala)',
      description: 'The divine manifestation of Lord Krishna at the midnight hour under the Rohini Nakshatra, heralded with conch shells and sacred chants.',
      icon: Moon,
      color: 'from-peacock-800 to-royal-950',
    },
    {
      id: 'makhan',
      title: 'Makhan Chor Leela',
      time: 'Childhood Leela',
      description: 'Remembering Krishna stealing freshly churned butter from earthen pots hung high, sharing innocence and boundless joy with his companions.',
      icon: Heart,
      color: 'from-royal-900 to-peacock-900',
    },
    {
      id: 'raas',
      title: 'Divine Raas Leela',
      time: 'Spiritual Bliss',
      description: 'The ecstatic cosmic dance of love and supreme surrender in Vrindavan, where every soul merges with the infinite flute melody of the Lord.',
      icon: Music,
      color: 'from-peacock-900 to-navy-900',
    },
    {
      id: 'dahi-handi',
      title: 'Dahi Handi & Uriyadi',
      time: 'Community Joy',
      description: 'Youth forming towering human pyramids in Maharashtra and breaking swaying earthen pots in Tamil Nadu, in energetic jubilation.',
      icon: Crown,
      color: 'from-peacock-950 to-royal-900',
    },
  ];

  return (
    <div className="relative min-h-screen pt-20">
      
      {/* ========================================================================= */}
      {/* CINEMATIC HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        
        {/* Radial Background Gradients (Deep Peacock Blue & Royal Purple) */}
        <div className="absolute inset-0 bg-gradient-to-b from-peacock-950 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] md:w-[850px] h-[340px] sm:h-[650px] md:h-[850px] bg-gradient-to-tr from-peacock-800/30 via-royal-800/25 to-gold-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Traditional Mandala Rings in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[540px] md:w-[720px] h-[300px] sm:h-[540px] md:h-[720px] rounded-full border border-gold-500/10 pointer-events-none animate-spin-very-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[420px] md:w-[560px] h-[220px] sm:h-[420px] md:h-[560px] rounded-full border border-peacock-500/15 pointer-events-none" />

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Sacred Auspicious Tag */}
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-peacock-900/60 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-gold-glow backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="tracking-widest uppercase font-serif">Auspicious Rohini Ashtami</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </div>

          {/* Central Krishna Graphic & Feather Arrangement */}
          <div className="relative mb-6 flex flex-col items-center">
            {/* Peacock Feather Float */}
            <div className="relative z-20 animate-float-gentle">
              <PeacockFeather className="w-20 h-28 sm:w-24 sm:h-32 filter drop-shadow-[0_0_25px_rgba(14,165,233,0.6)]" />
            </div>

            {/* Golden Bansuri (Flute) across */}
            <div className="relative z-30 -mt-8 sm:-mt-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <KrishnaFlute className="w-48 sm:w-64 h-12 filter drop-shadow-[0_0_20px_rgba(245,158,11,0.7)]" />
            </div>

            {/* Divine Aura Glow behind Flute & Feather */}
            <div className="absolute -inset-8 bg-gold-400/20 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Primary Hindi Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider font-normal text-ivory-50 drop-shadow-2xl">
            <span className="text-gold-gradient block mb-2">श्री कृष्ण जन्माष्टमी</span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-lg sm:text-2xl md:text-3xl text-ivory-100 font-serif italic tracking-wide max-w-3xl leading-snug">
            "Celebrate the Divine Birth of Lord Krishna"
          </p>

          <p className="mt-4 text-sm sm:text-base text-ivory-200/80 max-w-2xl font-light leading-relaxed px-4">
            Welcoming the eighth avatar of Lord Vishnu—the eternal source of love, cosmic wisdom, and celestial melody who descended upon Earth to restore Dharma and illuminate the world.
          </p>

          {/* Decorative Divider */}
          <DecorativeDivider className="my-6" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              to="/about"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-semibold tracking-wider text-sm sm:text-base shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group"
            >
              <span>Explore Janmashtami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/celebration"
              className="px-8 py-4 rounded-full bg-peacock-900/60 hover:bg-peacock-800/80 border border-gold-500/40 text-gold-300 font-medium tracking-wide text-sm sm:text-base backdrop-blur-md hover:border-gold-400 transition-all duration-300 flex items-center gap-2"
            >
              <DiyaLamp className="w-5 h-5" />
              <span>Celebration Rituals</span>
            </Link>
          </div>

          {/* Krishna Footprints Motif below CTA */}
          <div className="mt-8 flex items-center gap-3 text-gold-400/80">
            <KrishnaFootprints className="w-8 h-6" />
            <span className="text-xs uppercase tracking-widest font-serif">Welcome the Lord into your home</span>
            <KrishnaFootprints className="w-8 h-6" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FESTIVAL INTRODUCTION SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          sanskrit="जय श्री कृष्ण"
          title="The Essence of Janmashtami"
          subtitle="A sacred occasion commemorating the appearance of the Supreme Personality, Lord Krishna, radiating boundless devotion, joy, and spiritual enlightenment across homes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1: Divine Midnight Appearance */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-peacock-900/80 border border-gold-500/40 flex items-center justify-center mb-5 text-gold-400 group-hover:scale-110 transition-transform">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-ivory-50 mb-3 group-hover:text-gold-300 transition-colors">
              The Midnight Manifestation
            </h3>
            <p className="text-sm text-ivory-200/80 leading-relaxed font-light flex-1">
              Lord Krishna descended into the mortal world on the midnight of Ashtami Tithi in the dark fortnight (Krishna Paksha) of the month of Bhadrapada, shattering darkness with radiant divine light.
            </p>
            <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center text-xs text-gold-400 font-medium">
              <span>Midnight Nishita Pooja</span>
              <span className="ml-auto">✦</span>
            </div>
          </div>

          {/* Card 2: Protector of Dharma */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col relative overflow-hidden group border-gold-500/30">
            <div className="w-12 h-12 rounded-xl bg-royal-900/80 border border-gold-500/40 flex items-center justify-center mb-5 text-gold-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-ivory-50 mb-3 group-hover:text-gold-300 transition-colors">
              Triumph of Dharma
            </h3>
            <p className="text-sm text-ivory-200/80 leading-relaxed font-light flex-1">
              Born to liberate Earth from tyranny and the cruel rule of King Kamsa, Krishna's presence serves as the timeless assurance that righteousness shall always prevail over adversity.
            </p>
            <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center text-xs text-gold-400 font-medium">
              <span>Universal Harmony & Truth</span>
              <span className="ml-auto">✦</span>
            </div>
          </div>

          {/* Card 3: Ananda & Bhakti */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-peacock-900/80 border border-gold-500/40 flex items-center justify-center mb-5 text-gold-400 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-ivory-50 mb-3 group-hover:text-gold-300 transition-colors">
              Pure Love & Celebration
            </h3>
            <p className="text-sm text-ivory-200/80 leading-relaxed font-light flex-1">
              From swaying cradle lullabies and singing sweet bhajans to sharing freshly churned butter and traditional sweets, the day bridges families together in divine happiness and selfless love.
            </p>
            <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center text-xs text-gold-400 font-medium">
              <span>Bhakti & Community Joy</span>
              <span className="ml-auto">✦</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY JANMASHTAMI IS CELEBRATED (STORY & SIGNIFICANCE) */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-peacock-950/60 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-gold-500/30 shadow-2xl relative overflow-hidden">
            
            {/* Background feather silhouette */}
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-15 pointer-events-none">
              <PeacockFeather className="w-96 h-96" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-gold-400 uppercase tracking-widest text-xs font-semibold flex items-center gap-2">
                  <Flame className="w-4 h-4 text-gold-400" />
                  Timeless Divine Purpose
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory-50 leading-tight">
                  Why We Celebrate <span className="text-gold-gradient">Janmashtami</span>
                </h2>

                <p className="text-ivory-200/85 text-sm sm:text-base leading-relaxed font-light">
                  Janmashtami is not merely an annual calendar event—it is a spiritual reawakening of the soul. In the deep midnight of Mathura's fortress prison, while heavy chains fell away and prison gates magically swung open, infant Krishna was carried across the torrential Yamuna River by his father Vasudeva to the peaceful village of Gokul.
                </p>

                <p className="text-ivory-200/85 text-sm sm:text-base leading-relaxed font-light">
                  Lord Krishna’s life is an unparalleled ocean of wisdom. He is the playful child of Yashoda, the mischievous friend of the cowherds, the protector of the innocent, the divine charioteer of Arjuna on Kurukshetra, and the embodiment of unconditional compassion.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gold-300 bg-peacock-900/50 px-4 py-2 rounded-full border border-gold-500/20">
                    <span className="text-gold-400">✦</span>
                    <span>Removal of Fear & Ego</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gold-300 bg-peacock-900/50 px-4 py-2 rounded-full border border-gold-500/20">
                    <span className="text-gold-400">✦</span>
                    <span>Awakening of Divine Devotion</span>
                  </div>
                </div>
              </div>

              {/* Visual Highlight Column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-royal-950 via-peacock-950 to-navy-950 border border-gold-500/40 text-center shadow-gold-glow">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-peacock-900 border-2 border-gold-400 flex items-center justify-center shadow-gold-glow">
                    <PeacockFeather className="w-16 h-20" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-gold-500 border border-navy-950 flex items-center justify-center text-navy-950 shadow">
                    <DiyaLamp className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="font-heading text-2xl text-gold-300 mb-2">The Eternal Promise</h4>
                <p className="text-xs text-ivory-200/75 leading-relaxed font-light italic mb-6">
                  "Whenever righteousness declines and unrighteousness prevails, I manifest Myself on Earth for the protection of the good and restoration of peace."
                </p>

                <Link
                  to="/about"
                  className="w-full py-3 px-6 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Read Complete Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* KRISHNA QUOTE SECTION (BHAGAVAD GITA) */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-royal-950/90 via-navy-900/90 to-peacock-950/90 border-2 border-gold-500/40 shadow-gold-glow backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>Bhagavad Gita • Chapter 4, Verses 7-8</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 font-serif text-lg sm:text-2xl md:text-3xl text-gold-200 leading-relaxed italic">
            <p>यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।</p>
            <p>अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥</p>
            <p className="pt-2">परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।</p>
            <p>धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥</p>
          </div>

          <DecorativeDivider className="my-6" />

          <p className="text-ivory-200/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            "Whenever there is a decline in righteousness, O Bharata, and an increase in unrighteousness, at that time I manifest Myself. For the protection of the virtuous, the destruction of the wicked, and for establishing Dharma firmly, I am born in every millennium."
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <span>— Lord Sri Krishna</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CELEBRATION PILLARS / HIGHLIGHT CARDS */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          sanskrit="उत्सव परम्परा"
          title="Celebration Highlights"
          subtitle="Experience the joy, devotion, and spirited traditions that make Janmashtami an unforgettable experience across every region."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {celebrationPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group border-gold-500/25"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-peacock-800 to-navy-950 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-peacock-300 bg-peacock-900/60 px-2.5 py-1 rounded-full border border-gold-500/20">
                      {item.time}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-ivory-50 group-hover:text-gold-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs text-gold-400">
                  <span className="font-medium">Discover Rituals</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to Gallery & Celebration */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-peacock-950 via-royal-950 to-navy-950 border border-gold-500/30 text-center flex flex-col items-center shadow-xl">
          <PeacockFeather className="w-12 h-16 mb-4" />
          <h3 className="font-heading text-2xl sm:text-3xl text-ivory-50 max-w-xl">
            Immerse Yourself in the Splendor of Krishna's Auspicious Festivities
          </h3>
          <p className="text-sm text-ivory-200/80 max-w-lg mt-2 font-light">
            Explore step-by-step traditions of Dahi Handi, Tamil Uriyadi, sacred poojas, and vibrant festive photo memories.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              to="/celebration"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
            >
              Explore Celebrations
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-3 rounded-full bg-peacock-900/60 hover:bg-peacock-800 border border-gold-500/40 text-gold-300 font-medium text-xs sm:text-sm tracking-wide transition-all"
            >
              View Photo Gallery
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
