import React from 'react';
import { Maximize2, Flame, Sparkles, Star } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      id: 'trust-floor',
      icon: Maximize2,
      title: 'Spacious Training Floor',
      subtitle: 'Expansive weight arena & functional turf',
    },
    {
      id: 'trust-crossfit',
      icon: Flame,
      title: 'Dedicated CrossFit Zone',
      subtitle: 'Battle ropes, rigs & high-intensity turf',
    },
    {
      id: 'trust-sanitization',
      icon: Sparkles,
      title: 'Daily Sanitization',
      subtitle: 'Cleaned, ventilated & hygienic space',
    },
    {
      id: 'trust-rating',
      icon: Star,
      title: 'Loved by Cuttack Lifters',
      subtitle: 'Verified local member reviews on Google',
      isStar: true,
    },
  ];

  return (
    <section
      id="trust-indicators-strip"
      className="bg-[#171A1C] border-y border-[#262B2E] py-6 sm:py-8 text-white relative z-20"
      aria-label="Gym Trust Indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#262B2E]/60">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`flex items-center gap-4 ${index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#101314] border border-[#2E3438] flex items-center justify-center shrink-0 shadow-inner group">
                  <Icon
                    className={`w-6 h-6 ${
                      item.isStar ? 'text-[#E8B84B] fill-[#E8B84B]' : 'text-[#C4262E]'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wide uppercase text-white font-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
