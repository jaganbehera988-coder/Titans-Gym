import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

interface AboutPreviewProps {
  onReadStory: () => void;
  onOpenBooking: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({
  onReadStory,
  onOpenBooking,
}) => {
  return (
    <section
      id="about-preview-section"
      className="py-16 sm:py-24 bg-[#F7F5F2] text-[#161A1B] overflow-hidden"
      aria-label="About Titans Gym Cuttack"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Content (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2">
                Our Story & Philosophy
              </span>
              <h2
                id="about-preview-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#101314] font-normal leading-tight"
              >
                A Gym Built for Cuttack, <span className="text-[#C4262E]">By People Who Train Here</span>
              </h2>
            </div>

            <p className="text-base text-[#5C6366] leading-relaxed font-sans">
              Located on the 2nd floor of Sri Sri Mandap Building at Gandhi Chhak, Titans Gym was created to solve a simple problem: too many local gyms were overcrowded, under-maintained, and lacking floor coaching.
            </p>

            <p className="text-base text-[#5C6366] leading-relaxed font-sans">
              We brought in commercial <strong>Being Strong</strong> biomechanical equipment, set aside dedicated turf for real functional training, and built a culture where beginners receive the exact same respect and guidance as seasoned powerlifters.
            </p>

            {/* Quick bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4262E] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#161A1B]">
                  <strong>Zero intimidation policy</strong>: Welcoming environment for fitness beginners, women, and athletes alike.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4262E] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#161A1B]">
                  <strong>Full recovery suite</strong>: Steam room and chilled hydro-bath so you recover as hard as you train.
                </span>
              </div>
            </div>

            {/* Links & CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="about-read-story-btn"
                onClick={onReadStory}
                className="btn-primary text-xs sm:text-sm px-6 py-3.5 rounded shadow flex items-center gap-2 group font-bold"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="about-free-trial-btn"
                onClick={onOpenBooking}
                className="btn-secondary text-xs sm:text-sm px-6 py-3.5 rounded font-bold"
              >
                Book Free Trial Session
              </button>
            </div>
          </div>

          {/* Image & Badges (Right) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
                alt="Titans Gym Cuttack Head Trainer guiding member"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 bg-[#101314]/95 text-white p-4 rounded-xl backdrop-blur-md border border-[#2E3438] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C4262E] flex items-center justify-center font-heading text-xl text-white">
                    BS
                  </div>
                  <div>
                    <h4 className="font-heading text-lg tracking-wide uppercase text-white font-normal leading-none">
                      Being Strong Equipment
                    </h4>
                    <p className="text-[11px] text-[#E8B84B] font-sans mt-0.5">
                      Engineered for Joint-Safe Hypertrophy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#E8B84B]/20 rounded-2xl -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
