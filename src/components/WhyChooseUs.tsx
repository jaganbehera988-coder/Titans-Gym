import React from 'react';
import { Users, Sparkles, Dumbbell, Droplets, Flame, Car } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../config/gymInfo';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#C4262E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#E8B84B]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#C4262E]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#E8B84B]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#C4262E]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#E8B84B]" />;
      default:
        return <Dumbbell className="w-6 h-6 text-[#C4262E]" />;
    }
  };

  return (
    <section
      id="why-choose-us-section"
      className="py-16 sm:py-24 bg-[#101314] text-white relative overflow-hidden"
      aria-label="Why Choose Titans Gym Cuttack"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4262E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E8B84B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2">
            The Titans Advantage
          </span>
          <h2
            id="why-choose-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-normal leading-tight mb-4"
          >
            A Premium Facility Built for <span className="text-[#C4262E]">Real Consistency</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            No crowds fighting over solitary benches. No indifferent trainers. We built Titans Gym around what lifters in Cuttack actually need.
          </p>
        </div>

        {/* 2-3 Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-[#1E2224] rounded-xl p-6 sm:p-7 border border-[#2E3438] hover:border-[#C4262E]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#101314] border border-[#2A2F33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-white mb-2 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2A2F33] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#E8B84B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]" />
                <span>Verified Facility Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
