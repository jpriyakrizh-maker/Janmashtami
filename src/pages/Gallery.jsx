import React, { useState } from 'react';
import { Sparkles, Tag, Eye } from 'lucide-react';
import { PeacockFeather, DecorativeDivider } from '../components/DecorativePatterns';
import Lightbox from '../components/Lightbox';

const galleryImages = [
  {
    id: 1,
    title: 'Divine Balakrishna Idol',
    category: 'Krishna',
    description: 'Beautifully adorned Sri Krishna idol with peacock crown and holy tulsi garland.',
    url: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 2,
    title: 'Midnight Diya Illumination',
    category: 'Pooja',
    description: 'Traditional brass oil lamps spreading warm golden radiance throughout the sanctum.',
    url: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    title: 'Dahi Handi Govinda Pyramid',
    category: 'Dahi Handi',
    description: 'Youth forming a multi-tiered human pyramid reaching for the auspicious butter pot.',
    url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 4,
    title: 'Auspicious Flower Rangoli',
    category: 'Decorations',
    description: 'Intricate floral petal rangoli and fresh marigolds laid before the home temple.',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-video',
  },
  {
    id: 5,
    title: 'Sacred Temple Janmotsav',
    category: 'Janmashtami',
    description: 'Grand festive darshan with temple bells, continuous kirtans, and divine joy.',
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    title: 'Peacock Feather & Flute Altar',
    category: 'Decorations',
    description: 'Auspicious peacock feathers arranged behind the sacred golden bansuri.',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 7,
    title: 'Mangala Aarti & Deepam',
    category: 'Pooja',
    description: 'Offering the sacred flame to Lord Krishna during midnight Janmashtami pooja.',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-square',
  },
  {
    id: 8,
    title: 'Festive Crowd & Celebrations',
    category: 'Dahi Handi',
    description: 'Community gathering singing Govinda chants and cheering for the pot-breaking champions.',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-video',
  },
  {
    id: 9,
    title: 'Radha Krishna Divine Murti',
    category: 'Krishna',
    description: 'Serene representation of eternal divine love, flute music, and spiritual grace.',
    url: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 10,
    title: 'Vrindavan Jhula Seva',
    category: 'Janmashtami',
    description: 'The sacred swing ceremony celebrating baby Krishna with floral ropes and gentle music.',
    url: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 11,
    title: 'Fresh Marigold & Tulsi Garlands',
    category: 'Decorations',
    description: 'Vibrant yellow and orange flower malas prepared lovingly for the temple sanctum.',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-square',
  },
  {
    id: 12,
    title: 'Sacred Naivedyam Offering',
    category: 'Pooja',
    description: 'Pure homemade butter, seedai, and sweets arrayed in brass bowls for the Lord.',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=900&auto=format&fit=crop&q=80',
    aspect: 'aspect-[4/5]',
  },
];

const categories = ['All', 'Krishna', 'Janmashtami', 'Decorations', 'Dahi Handi', 'Pooja'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < filteredImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24">
      
      {/* Top Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 pb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-4 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Divine Visual Celebration</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-ivory-50 tracking-wide">
          Festive <span className="text-gold-gradient">Photo Gallery</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ivory-200/80 max-w-2xl mx-auto font-light leading-relaxed">
          Glimpses of sacred Krishna murtis, vibrant Dahi Handi competitions, traditional home decors, and solemn midnight poojas.
        </p>

        <DecorativeDivider className="my-6" />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-navy-950 font-semibold shadow-gold-glow scale-105'
                  : 'bg-peacock-950/80 hover:bg-peacock-900 text-ivory-200/80 border border-gold-500/25 hover:text-gold-300 hover:border-gold-500/50'
              }`}
            >
              <span>{cat}</span>
              {activeCategory === cat && <span className="text-xs">✦</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid (Responsive Masonry Style) */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-peacock-950 border border-gold-500/30 shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-gold-glow"
            >
              {/* Image with zoom effect on hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&auto=format&fit=crop&q=80';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[11px] font-medium tracking-wide">
                    <Tag className="w-2.5 h-2.5 text-gold-400" />
                    {item.category}
                  </span>
                </div>

                {/* Hover Eye Icon Preview */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-lg text-ivory-50 group-hover:text-gold-300 transition-colors drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-200/80 line-clamp-2 font-light mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Info */}
        <div className="mt-12 text-center text-xs text-ivory-300/60 font-light flex items-center justify-center gap-2">
          <PeacockFeather className="w-4 h-6 -rotate-12 inline-block" />
          <span>Showing {filteredImages.length} images under {activeCategory} category</span>
          <PeacockFeather className="w-4 h-6 rotate-12 inline-block" />
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={selectedImageIndex !== null}
        image={selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null}
        onClose={handleCloseLightbox}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        hasPrev={selectedImageIndex !== null && selectedImageIndex > 0}
        hasNext={selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1}
      />

    </div>
  );
}
