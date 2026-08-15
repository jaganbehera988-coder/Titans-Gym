import React, { useEffect, useState, useRef } from 'react';
import { EDITABLE_STATS } from '../config/gymInfo';

export const AnimatedStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animate counter values when in view
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      // easeOutQuad curve
      const easeProgress = 1 - (1 - progress) * (1 - progress);

      const nextCounts: { [key: string]: number } = {};
      EDITABLE_STATS.forEach((stat) => {
        nextCounts[stat.id] = Math.floor(stat.value * easeProgress);
      });

      setCounts(nextCounts);

      if (stepCount >= steps) {
        clearInterval(timer);
        const finalCounts: { [key: string]: number } = {};
        EDITABLE_STATS.forEach((stat) => {
          finalCounts[stat.id] = stat.value;
        });
        setCounts(finalCounts);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="animated-statistics-band"
      className="py-14 sm:py-20 bg-[#171A1C] text-white border-y border-[#262B2E] relative z-10"
      aria-label="Titans Gym Key Numbers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
          {EDITABLE_STATS.map((stat) => {
            const currentVal = counts[stat.id] !== undefined ? counts[stat.id] : 0;
            return (
              <div
                key={stat.id}
                id={`stat-counter-${stat.id}`}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#101314]/60 border border-[#2A2F33]"
              >
                {/* Number in Bebas Neue / High Contrast Amber */}
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#E8B84B] font-normal leading-none mb-2">
                  {stat.prefix || ''}
                  {currentVal.toLocaleString()}
                  <span className="text-[#C4262E]">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-white font-normal leading-tight">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 font-sans mt-1 max-w-[200px] leading-snug">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
