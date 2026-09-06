import React from "react";
import { Sparkles, Heart, Sun, Shield, Scroll, CheckCircle2 } from "lucide-react";
import { PeacockFeather, DecorativeDivider, SectionHeader } from "../components/DecorativePatterns";
import Carousel from "../components/Carousel";

export default function About() {
  const traditionalPractices = [
    {
      id: 'fasting',
      title: 'Nirjala / Phalahar Upavasa',
      desc: 'Devotees observe a sacred day-long fast until midnight, focusing minds on divine reflection and prayer.',
    },
    {
      id: 'footprints',
      title: 'Rice Flour Footprints (Kannan Paadam)',
      desc: 'Drawing tiny Krishna footprints from the main doorway into the pooja room, symbolically guiding the Lord into the home.',
    },
    {
      id: 'abhishekam',
      title: 'Midnight Panchamrit Snan',
      desc: 'Bathing the infant Krishna murti with milk, curd, honey, ghee, and holy waters at the auspicious midnight hour.',
    },
    {
      id: 'bhog',
      title: 'Makhan & Chappan Bhog Offering',
      desc: 'Offering freshly churned white butter, sweetened poha (aval), seedai, murukku, fruits, and fragrant tulsi leaves.',
    },
    {
      id: 'jhula',
      title: 'Jhula Seva (Cradle Ceremony)',
      desc: 'Gently rocking baby Krishna in a decorated cradle garlanded with fragrant jasmine and marigold flowers.',
    },
    {
      id: 'kirtan',
      title: 'Akhanda Kirtan & Geeta Recitation',
      desc: 'Singing melodious bhajans, chanting the Maha Mantra, and reciting sacred verses from Srimad Bhagavatam and Bhagavad Gita.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      
      {/* Top Banner Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-4 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Divine Avatara & Timeless Wisdom</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-ivory-50 tracking-wide">
          About <span className="text-gold-gradient">Janmashtami</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ivory-200/80 max-w-2xl mx-auto font-light leading-relaxed">
          Discover the profound spiritual history, miraculous birth, and age-old traditions commemorating the advent of Lord Sri Krishna.
        </p>

        <DecorativeDivider className="my-6" />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: ABOUT JANMASHTAMI & COSMIC PURPOSE */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-5">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-gold-400" />
              The Eightfold Avatar
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading text-ivory-50 leading-snug">
              An Eternal Descent of <span className="text-gold-gradient">Supreme Divinity</span>
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-light">
              Janmashtami, also celebrated as Gokulashtami, Krishna Jayanthi, or Yadukula Janmotsav, is celebrated on the eighth day (Ashtami) of the dark fortnight (Krishna Paksha) in the Hindu month of Shravana or Bhadrapada.
            </p>

            <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-light">
              Unlike ordinary incarnations, Krishna is revered in Vedic philosophy as <em>Svayam Bhagavan</em>—the complete and transcendental embodiment of all divine virtues: supreme knowledge, immense strength, boundless wealth, captivating beauty, and absolute detachment.
            </p>

            <div className="p-4 rounded-xl bg-peacock-900/40 border border-gold-500/20 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-gold-300 font-serif italic">
                "His flute calls every wandering soul back to eternal devotion, reminding us that bliss resides within unconditional surrender to the divine."
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 border-gold-500/30 shadow-gold-glow flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <PeacockFeather className="w-64 h-64" />
            </div>

            <div className="w-20 h-20 rounded-full bg-peacock-900 border-2 border-gold-400 flex items-center justify-center mb-6 shadow-gold-glow">
              <PeacockFeather className="w-14 h-16" />
            </div>

            <h3 className="text-2xl font-heading text-gold-300 mb-2">The Name "Krishna"</h3>
            <p className="text-xs text-peacock-300 font-serif italic mb-4">
              "Karshati iti Krishnah"
            </p>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed mb-6">
              The root word <em>Krish</em> means supreme attraction, and <em>na</em> signifies eternal spiritual bliss. Thus, "Krishna" signifies the all-attractive supreme Lord who draws the hearts of all beings toward divine love.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full text-left text-xs">
              <div className="p-3 rounded-lg bg-navy-950/70 border border-gold-500/20">
                <span className="text-gold-400 font-medium block">Tithi</span>
                <span className="text-ivory-200">Ashtami (8th Day)</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-950/70 border border-gold-500/20">
                <span className="text-gold-400 font-medium block">Nakshatra</span>
                <span className="text-ivory-200">Rohini Star</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-950/70 border border-gold-500/20">
                <span className="text-gold-400 font-medium block">Birthplace</span>
                <span className="text-ivory-200">Mathura, Uttar Pradesh</span>
              </div>
              <div className="p-3 rounded-lg bg-navy-950/70 border border-gold-500/20">
                <span className="text-gold-400 font-medium block">Foster Village</span>
                <span className="text-ivory-200">Gokul, Vrindavan</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE BIRTH OF LORD KRISHNA */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-gold-500/35 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            
            <div className="lg:w-1/2 space-y-4">
              <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-gold-400" />
                The Miraculous Night
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading text-ivory-50">
                The Birth in <span className="text-gold-gradient">Mathura's Prison</span>
              </h2>

              <p className="text-sm text-ivory-200/85 leading-relaxed font-light">
                King Kamsa of Mathura was informed by a celestial voice that the eighth child born to his sister Devaki and brother-in-law Vasudeva would bring an end to his reign of terror. In fear and rage, Kamsa imprisoned them both and mercilessly ended the lives of their first six infants.
              </p>

              <p className="text-sm text-ivory-200/85 leading-relaxed font-light">
                When the eighth child was born on a thunderous midnight, darkness was vanquished. Miraculously, heavy iron shackles unlocked, prison guards slipped into deep slumber, and massive gates swung open of their own accord.
              </p>

              <p className="text-sm text-ivory-200/85 leading-relaxed font-light">
                Vasudeva placed infant Krishna into a wicker basket upon his head and ventured into the turbulent waters of the Yamuna River. Seeing the divine child, the five-headed serpent Adishesha spread his hood like an umbrella against torrential rain, while Yamuna parted her currents to grant safe passage to Gokul.
              </p>
            </div>

            <div className="lg:w-1/2 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-royal-950 to-peacock-950 border border-gold-500/30">
                <h4 className="font-heading text-xl text-gold-300 mb-2 flex items-center gap-2">
                  <span className="text-gold-500">✦</span>
                  The Exchange at Gokul
                </h4>
                <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
                  In Gokul, Vasudeva quietly placed Krishna beside Yashoda, who had just given birth to Yogamaya, and carried the girl back to Mathura. When Kamsa attempted to harm the child, Yogamaya transformed into Goddess Durga, proclaiming that his slayer was already safe and growing up in Vrindavan!
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-peacock-950 to-navy-950 border border-gold-500/30">
                <h4 className="font-heading text-xl text-gold-300 mb-2 flex items-center gap-2">
                  <span className="text-gold-500">✦</span>
                  Gokul's Celebrations
                </h4>
                <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
                  Nanda Maharaja and Yashoda celebrated the birth of their beloved blue-complexioned son with immense delight, showering gifts upon cowherds and filling the alleys with song and churned butter.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeader
          sanskrit="आध्यात्मिक महत्त्व"
          title="Spiritual Significance"
          subtitle="Beyond the festive rituals lies a timeless philosophy that inspires life, balance, and devotion."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card glass-card-hover rounded-2xl p-6 border-gold-500/25 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-peacock-900 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl text-ivory-50 mb-2">Internal Liberation</h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed flex-1">
              Mathura’s dark prison symbolizes the bondages of ego, lust, and greed. The birth of Krishna within represents the advent of pure consciousness, dissolving all material shackles effortlessly.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 border-gold-500/25 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-royal-900 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl text-ivory-50 mb-2">Selfless Devotion (Bhakti)</h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed flex-1">
              Krishna's leelas highlight that the supreme Lord is won not through austere pride, but through sincere warmth, childlike love, and the tender offering of simple butter and tulsi.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-6 border-gold-500/25 flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-peacock-900 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl text-ivory-50 mb-2">Karma Yoga in Action</h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed flex-1">
              As the teacher of the Gita, Krishna demonstrated how to live engaged in the world, perform duty with excellence, yet remain anchored in equanimity and spiritual surrender.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: TRADITIONAL PRACTICES */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeader
          sanskrit="पूजा विधान"
          title="Sacred Traditional Practices"
          subtitle="Time-honored customs handed down through generations to celebrate Krishna Jayanthi with holiness."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {traditionalPractices.map((practice) => (
            <div
              key={practice.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-navy-900/90 to-peacock-950/90 border border-gold-500/25 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-lg text-ivory-50 group-hover:text-gold-300 transition-colors">
                  {practice.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
                {practice.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* IMPORTANT SECTION: OUR LITTLE KRISHNA PHOTO CAROUSEL */}
      {/* ========================================================================= */}
      <Carousel />

    </div>
  );
}
