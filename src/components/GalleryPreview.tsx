import React, { useState } from 'react';
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/gymInfo';
import { GalleryItem } from '../types';

interface GalleryPreviewProps {
  onViewFullGallery: () => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onViewFullGallery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'floor', label: 'Strength Floor' },
    { id: 'crossfit', label: 'CrossFit Turf' },
    { id: 'zumba', label: 'Zumba Studio' },
    { id: 'recovery', label: 'Steam & Recovery' },
    { id: 'equipment', label: 'Being Strong Gear' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS.slice(0, 6)
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
    <section
      id="gallery-preview-section"
      className="py-16 sm:py-24 bg-[#F7F5F2] text-[#161A1B]"
      aria-label="Titans Gym Facility Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2">
              Inside Look
            </span>
            <h2
              id="gallery-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#101314] font-normal leading-tight"
            >
              The Titans <span className="text-[#C4262E]">Facility</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#101314] text-white shadow-sm'
                    : 'bg-white text-[#5C6366] hover:bg-gray-100 hover:text-[#101314] border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover overlay caption */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#C4262E] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            id="view-full-gallery-btn"
            onClick={onViewFullGallery}
            className="btn-primary text-xs sm:text-sm px-8 py-3.5 rounded shadow-lg font-bold inline-flex items-center gap-2"
          >
            <span>View Full Facility Gallery ({GALLERY_ITEMS.length} Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            id="close-lightbox-btn"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrows */}
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

          {/* Main Image Container */}
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
    </section>
  );
};
