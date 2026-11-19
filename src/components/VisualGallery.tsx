import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Layers, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/factoryData';

export const VisualGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Garments',
    'Knitting & Dyeing',
    'Printing & Detailing',
    'Sewing & Finishing',
    'Quality Testing',
    'Facility'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-transparent border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-heading */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-[1px] bg-[#93452E]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#93452E]">
            Editorial Archive
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
              Garment & <br />
              <span className="text-[#93452E]">Factory Gallery.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md leading-relaxed">
            An editorial glimpse into our Tiruppur operations: finished knitwear, German circular knitting, ZLD wet processing, automated printing, embroidery, sewing, and AQL 1.5 inspection.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#34251C] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Apply subtle asymmetric spans for a high-fashion look
            const isSpan = index === 0 || index === 5;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D2018] to-[#1C140F] p-6 sm:p-7 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 border border-stone-300 ${
                  isSpan ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                {/* Header: Category Pill & Zoom Icon */}
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 backdrop-blur-xs text-amber-300 border border-white/10 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                    {item.category}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption Content */}
                <div className="text-white">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Lightbox Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#93452E] bg-white/10 px-3 py-1 rounded-full font-bold">
                {GALLERY_ITEMS[activeLightboxIndex].category}
              </span>
              <span className="text-xs font-mono text-stone-400">
                {activeLightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center Content (Skeleton Preserved) */}
          <div className="max-w-2xl w-full p-8 rounded-3xl bg-gradient-to-br from-[#2D2018] to-[#1C140F] border border-stone-700 shadow-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-full font-bold inline-block mb-4">
              {GALLERY_ITEMS[activeLightboxIndex].category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {GALLERY_ITEMS[activeLightboxIndex].title}
            </h3>
            <p className="text-sm text-stone-300 mt-3 leading-relaxed">
              {GALLERY_ITEMS[activeLightboxIndex].caption}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}
    </section>
  );
};
