import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/gymInfo';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'floor', label: 'Strength Floor' },
    { id: 'crossfit', label: 'CrossFit Turf' },
    { id: 'zumba', label: 'Zumba Studio' },
    { id: 'recovery', label: 'Steam & Recovery' },
    { id: 'equipment', label: 'Being Strong Gear' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Facility Tour
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
            Titans Gym <span className="text-[#C4262E]">Facility Gallery</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
            Take a visual walkthrough of our 2nd floor space at Naya Bazaar — featuring dedicated strength zones, CrossFit turf, Zumba studio, and recovery bath.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#101314] text-[#E8B84B] shadow-md'
                  : 'bg-white text-[#5C6366] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#C4262E] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8B84B] block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-heading text-2xl uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-16 bg-[#101314] text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-heading text-3xl sm:text-4xl uppercase">
            Like What You See? Visit Today!
          </h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Experience the equipment, space, and coaching in person with a free trial workout session.
          </p>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs sm:text-sm px-8 py-4 rounded font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Book Complimentary Trial Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-white">
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 max-w-xl">
              <h4 className="font-heading text-2xl uppercase tracking-wider text-white">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
              <span className="text-[11px] text-[#E8B84B] font-bold mt-1 inline-block uppercase tracking-widest">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
