import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Dumbbell, Sparkles, MapPin, Award } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreGallery }) => {
  const [scrollY, setScrollY] = useState(0);

  // Subtle parallax effect on hero background (respecting performance & reduced motion)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] md:min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#101314] overflow-hidden text-white pt-12 pb-20 sm:py-24"
      aria-label="Welcome to Titans Gym Cuttack"
    >
      {/* Red Industrial Accent Left Edge Line */}
      <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-[#C4262E] z-20 pointer-events-none" aria-hidden="true" />

      {/* Background Image with Dark Industrial Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 will-change-transform opacity-40 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.25}px) scale(1.05)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Dark Vignette & Industrial Grain Overlay */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#101314] via-[#101314]/90 to-[#101314]/65 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-t from-[#101314] via-transparent to-black/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-[#E8B84B] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C4262E] animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-[#E8B84B]" />
            <span className="font-semibold tracking-wide">NAYA BAZAAR, CUTTACK — FREE TRIAL PASS</span>
          </div>

          {/* Main H1 Hero Heading in Bebas Neue */}
          <h1
            id="hero-main-title"
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight uppercase text-white font-normal mb-6"
          >
            Train Like A <br />
            <span className="text-[#E8B84B]">Titan</span>, Right Here <br />
            In <span className="text-[#C4262E]">Cuttack</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8 font-normal">
            A fully-equipped strength and CrossFit gym in Naya Bazaar — spacious training floor, dedicated trainers, Being Strong equipment, and a clean, motivating space to build real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              id="hero-book-trial-cta"
              onClick={onOpenBooking}
              className="btn-primary text-sm sm:text-base px-8 py-4 rounded-md shadow-2xl font-bold flex items-center justify-center gap-2 group"
            >
              <span>Book Your Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-explore-gallery-link"
              onClick={onExploreGallery}
              className="btn-secondary-light text-sm sm:text-base px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 text-white hover:text-[#101314] transition-all"
            >
              <span>See the Gym Floor</span>
              <span className="text-[#E8B84B] font-bold">→</span>
            </button>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 text-white max-w-xl">
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-normal text-[#E8B84B] tracking-wide mb-0.5">
                5000+
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Square Feet
              </div>
            </div>

            <div>
              <div className="font-heading text-2xl sm:text-3xl font-normal text-[#E8B84B] tracking-wide mb-0.5 whitespace-nowrap">
                Being Strong
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Bio-Mechanic Gear
              </div>
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl font-normal text-[#E8B84B] tracking-wide mb-0.5">
                Pro
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Floor Coaching
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
