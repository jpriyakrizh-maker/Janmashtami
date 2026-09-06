import React, { useState } from 'react';
import { Sparkles, Crown, Flame, Flower, Check, Clock } from 'lucide-react';
import { PeacockFeather, KrishnaFlute, DiyaLamp, KrishnaFootprints, DecorativeDivider, SectionHeader } from '../components/DecorativePatterns';

export default function Celebration() {
  const [activeTimelineTab, setActiveTimelineTab] = useState(0);

  const celebrationTimeline = [
    {
      phase: 'Dawn (Brahma Muhurta)',
      time: '04:30 AM - 07:00 AM',
      title: 'Purification & Sacred Preparations',
      desc: 'Homes are cleaned and purified. Front doorways and verandas are washed and adorned with intricate rice flour Kolams (Rangoli). The family observes early morning prayers.',
      activities: ['Holy bath & fresh traditional attire', 'Drawing Kolams with rice flour paste', 'Placing fresh mango leaf thoranam at doorways', 'Lighting the auspicious morning brass Diya'],
    },
    {
      phase: 'Midday to Afternoon',
      time: '11:00 AM - 04:00 PM',
      title: 'Preparing Traditional Naivedyam (Bhog)',
      desc: 'The kitchen fills with the divine aroma of traditional Janmashtami delicacies. Sacred sweets and savory snacks are lovingly prepared exclusively for Lord Krishna.',
      activities: ['Uppu Seedai & Vella Seedai', 'Crispy Kai Murukku & Thattai', 'Churning fresh white butter (Vennai)', 'Sweetened Aval (Poha with jaggery & cardamom)'],
    },
    {
      phase: 'Dusk (Sandhya)',
      time: '06:00 PM - 08:30 PM',
      title: 'Guiding Krishna’s Footsteps',
      desc: 'Using fresh rice paste and red sindoor, tiny Krishna footprints (Kannan Paadam) are carefully pressed from the main threshold all the way into the pooja sanctum, signifying the baby Lord stepping into the house.',
      activities: ['Drawing tiny baby Krishna footprints', 'Stringing fresh jasmine and tulsi garlands', 'Adorning the cradle (Jhula) for baby Krishna', 'Evening Bhajan chanting & Krishna Ashtakam'],
    },
    {
      phase: 'Midnight Janmotsav',
      time: '11:45 PM - 12:45 AM',
      title: 'Midnight Nishita Kala Mahapooja',
      desc: 'The grand pinnacle of Janmashtami! At midnight, conch shells blow, bells chime, and infant Krishna’s murti receives sacred Panchamrita Abhishekam, followed by Maha Mangala Aarti and offering of 56 delicacies (Chappan Bhog).',
      activities: ['Panchamrita Abhishekam (Milk, Curd, Ghee, Honey, Sugar)', 'Offering Tulsi leaves & butter with pure devotion', 'Rocking the decorated Jhula while singing lullabies', 'Breaking the day-long fast with blessed Prasad'],
    },
    {
      phase: 'Next Morning / Afternoon',
      time: 'Next Day Morning',
      title: 'Dahi Handi & Tamil Uriyadi Festivities',
      desc: 'The day following Janmotsav is celebrated as Nandotsav with high-octane community celebrations—youth forming high human pyramids in Maharashtra and breaking swaying pots in Tamil Nadu!',
      activities: ['Dahi Handi competitions with Govinda groups', 'Uriyadi pot-breaking games with turmeric water', 'Community feasts and sweet distribution', 'Folk dances and cultural dramas (Raas Leela)'],
    },
  ];

  const decorationIdeas = [
    {
      title: 'Peacock Feathers (Mor Pankh)',
      desc: 'Place vibrant peacock feathers behind Lord Krishna’s crown and in brass vases around the mandir for divine beauty.',
      icon: PeacockFeather,
      customSvg: true,
    },
    {
      title: 'Golden Bansuri (Flute)',
      desc: 'Adorn Krishna’s idol with a golden flute embellished with silk tassels and pearl hangings.',
      icon: KrishnaFlute,
      customSvg: true,
    },
    {
      title: 'Krishna Footprints (Kannan Paadam)',
      desc: 'Dip little palms or molds into rice flour paste to stamp adorable baby steps from your entrance into the altar.',
      icon: KrishnaFootprints,
      customSvg: true,
    },
    {
      title: 'Brass Diyas & Deepams',
      desc: 'Array traditional tiered Nilavilakku and clay lamps lit with pure ghee to illuminate the entire sanctum.',
      icon: DiyaLamp,
      customSvg: true,
    },
    {
      title: 'Fresh Flowers & Garlands',
      desc: 'String aromatic Madurai Malli (jasmine), yellow marigolds, and sacred Tulsi leaves around the cradle and doorways.',
      icon: Flower,
      customSvg: false,
    },
    {
      title: 'Sacred Kolam & Rangoli',
      desc: 'Create concentric mandala rangolis at the entrance using natural powdered colors and flower petals.',
      icon: Sparkles,
      customSvg: false,
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      
      {/* Top Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-4 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Sacred Traditions & Joyful Festivities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-ivory-50 tracking-wide">
          Janmashtami <span className="text-gold-gradient">Celebrations</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ivory-200/80 max-w-2xl mx-auto font-light leading-relaxed">
          From exuberant street sports like Dahi Handi and Tamil Uriyadi to solemn midnight home poojas and fragrant decorations, discover the heart of Janmashtami.
        </p>

        <DecorativeDivider className="my-6" />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: THE CORE CELEBRATIONS (4 DETAILED CARDS) */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. DAHI HANDI */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-gold-500/30 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-peacock-700 to-royal-950 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-gold-glow group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-peacock-900/70 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  Maharashtra Tradition
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading text-ivory-50 group-hover:text-gold-300 transition-colors mb-4">
                Dahi Handi Celebration
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed mb-4">
                Dahi Handi re-enacts infant Krishna’s playful pastime of stealing butter (Makhan Chori). In Vrindavan, village mothers hung clay pots of curd and butter high from ceilings so little Krishna could not reach them. Undeterred, Krishna and his cowherd friends formed human pyramids to climb up, break the earthen pots, and feast upon the divine treats!
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Festive Highlights:</h4>
                <ul className="text-xs sm:text-sm text-ivory-200/80 space-y-1.5 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Govinda Troupes:</strong> Enthusiastic teams form human pyramids reaching up to 7 to 9 tiers high.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>The Handi:</strong> Earthen pot filled with curd, butter, fruits, and saffron milk suspended 30-40 feet high.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Chants:</strong> The air echoes with the electrifying roar of <em>"Govinda Ala Re, Aala!"</em></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-peacock-950/60 border border-gold-500/20 text-xs text-gold-300/90 font-serif italic">
              "A triumphant testament to team unity, collective determination, and festive exhilaration."
            </div>
          </div>

          {/* 2. URIYADI */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-gold-500/30 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-peacock-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-700 to-navy-950 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-gold-glow group-hover:scale-110 transition-transform">
                  <Flame className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-royal-900/70 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  Tamil Nadu Tradition
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading text-ivory-50 group-hover:text-gold-300 transition-colors mb-4">
                Uriyadi Celebration
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed mb-4">
                In Tamil Nadu, Krishna Jayanthi is brought to life through the time-honored sport of <strong>Uriyadi</strong> (உறியடி). An earthen pot filled with fragrant turmeric water, coins, and sweets is hung from a pulley high on a decorated pole or between trees in temple courtyards.
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Festive Highlights:</h4>
                <ul className="text-xs sm:text-sm text-ivory-200/80 space-y-1.5 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Swaying Uri:</strong> The rope is pulled up and down quickly by elders to test the contestant's agility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>The Strike:</strong> Contestants run forward with long sticks to strike and break the moving pot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Turmeric Showers:</strong> Bystanders splash copious amounts of cold water and turmeric water on the participant!</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-peacock-950/60 border border-gold-500/20 text-xs text-gold-300/90 font-serif italic">
              "Filled with laughter, agility, community cheer, and sacred blessings across every Tamil village."
            </div>
          </div>

          {/* 3. KRISHNA JAYANTHI POOJA */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-gold-500/30 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-royal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-peacock-800 to-navy-900 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-gold-glow group-hover:scale-110 transition-transform">
                  <DiyaLamp className="w-8 h-8" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-peacock-900/70 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  Devotional Rituals
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading text-ivory-50 group-hover:text-gold-300 transition-colors mb-4">
                Krishna Jayanthi Pooja
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed mb-4">
                The home pooja is observed with sacred sanctity. After observing a strict fast throughout the day, the family gathers before the altar at dusk. Baby Krishna’s idol (Vigneshwara and Bala Krishna) is anointed with fragrant sandal paste, kumkum, and dressed in silk peetambaram.
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Devotional Offerings:</h4>
                <ul className="text-xs sm:text-sm text-ivory-200/80 space-y-1.5 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Fresh White Butter (Vennai):</strong> Krishna’s favorite sweet offering placed directly in his hands.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Traditional Savories:</strong> Seedai, Thattai, Kai Murukku, and Aval Payasam lovingly prepared.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">✦</span>
                    <span><strong>Jhula Seva:</strong> Rocking baby Krishna in a floral swing accompanied by heartfelt lullabies.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-peacock-950/60 border border-gold-500/20 text-xs text-gold-300/90 font-serif italic">
              "Fills the household with peace, pure divine presence, and spiritual bliss."
            </div>
          </div>

          {/* 4. FESTIVE DECORATIONS */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-gold-500/30 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-600 to-royal-950 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-gold-glow group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-peacock-900/70 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  Aesthetic Ambiance
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading text-ivory-50 group-hover:text-gold-300 transition-colors mb-4">
                Traditional Decorations
              </h2>

              <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed mb-4">
                Decorating the home for Janmashtami is an expression of deep affection, transforming the ordinary home into Gokul. Every corner resonates with festive radiance, divine fragrance, and artistic vibrancy.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <PeacockFeather className="w-6 h-8 mx-auto mb-1 -rotate-12" />
                  <span className="text-[11px] font-medium text-gold-300 block">Peacock Feathers</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <KrishnaFlute className="w-12 h-6 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-gold-300 block">Golden Flute</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <KrishnaFootprints className="w-7 h-6 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-gold-300 block">Baby Footprints</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <DiyaLamp className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-gold-300 block">Ghee Diyas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <Flower className="w-6 h-6 mx-auto mb-1 text-gold-400" />
                  <span className="text-[11px] font-medium text-gold-300 block">Jasmine & Tulsi</span>
                </div>
                <div className="p-2.5 rounded-xl bg-navy-950/70 border border-gold-500/20 text-center">
                  <Sparkles className="w-6 h-6 mx-auto mb-1 text-gold-400" />
                  <span className="text-[11px] font-medium text-gold-300 block">Kolam / Rangoli</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-peacock-950/60 border border-gold-500/20 text-xs text-gold-300/90 font-serif italic">
              "Creating an auspicious heaven of scents, lights, and sacred motifs to receive the Lord."
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: DECORATION IDEAS GRID */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          sanskrit="गृह सज्जा"
          title="Decorative Inspiration for Your Home"
          subtitle="Simple, authentic, and breathtaking traditional elements to bring the divine atmosphere of Vrindavan into your living space."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {decorationIdeas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border-gold-500/25 flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-peacock-900 to-navy-950 border border-gold-500/40 flex items-center justify-center mb-5 text-gold-400 group-hover:scale-110 transition-transform shadow">
                  {item.customSvg ? (
                    <Icon className="w-9 h-9" />
                  ) : (
                    <Icon className="w-7 h-7" />
                  )}
                </div>

                <h3 className="font-heading text-xl text-ivory-50 group-hover:text-gold-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed flex-1">
                  {item.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-gold-500/15 flex items-center text-xs text-gold-400 font-serif italic">
                  <span>Auspicious Vrindavan Element</span>
                  <span className="ml-auto">✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TIMELINE-STYLE "JANMASHTAMI CELEBRATION" */}
      {/* ========================================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeader
          sanskrit="उत्सव समयरेखा"
          title="Janmashtami Celebration Timeline"
          subtitle="A complete chronological walkthrough of the sacred festival day—from dawn preparations to midnight euphoria and the following day's games."
        />

        {/* Timeline Nav / Tabs for Mobile & Desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {celebrationTimeline.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTimelineTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTimelineTab === idx
                  ? 'bg-gold-500 text-navy-950 shadow-gold-glow font-semibold scale-105'
                  : 'bg-peacock-950/80 text-ivory-200/70 border border-gold-500/20 hover:text-gold-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{step.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Timeline Display Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gold-500/20">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-peacock-900 border border-gold-500/30 text-gold-300 font-mono text-xs mb-2">
                Phase {activeTimelineTab + 1} of {celebrationTimeline.length} • {celebrationTimeline[activeTimelineTab].time}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-ivory-50">
                {celebrationTimeline[activeTimelineTab].title}
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-gold-400">
              <DiyaLamp className="w-8 h-8" />
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            {celebrationTimeline[activeTimelineTab].desc}
          </p>

          <div className="mt-8 pt-6 border-t border-gold-500/15">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Core Sacred Observances
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {celebrationTimeline[activeTimelineTab].activities.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/70 border border-gold-500/20 text-xs sm:text-sm text-ivory-100"
                >
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next / Previous Timeline buttons */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-gold-500/15 text-xs">
            <button
              type="button"
              disabled={activeTimelineTab === 0}
              onClick={() => setActiveTimelineTab((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-lg bg-peacock-900/60 border border-gold-500/20 text-gold-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-peacock-800 transition-colors"
            >
              ‹ Previous Phase
            </button>

            <button
              type="button"
              disabled={activeTimelineTab === celebrationTimeline.length - 1}
              onClick={() => setActiveTimelineTab((prev) => Math.min(celebrationTimeline.length - 1, prev + 1))}
              className="px-4 py-2 rounded-lg bg-gold-500/20 border border-gold-500/40 text-gold-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-gold-500/30 transition-colors"
            >
              Next Phase ›
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
