import React from 'react';
import { PhoneCall, Dumbbell, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../config/gymInfo';

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#E8B84B]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#C4262E]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#25D366]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#E8B84B]" />;
    }
  };

  return (
    <section
      id="process-timeline-section"
      className="py-16 sm:py-24 bg-[#171A1C] text-white border-y border-[#262B2E]"
      aria-label="How to get started at Titans Gym"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2">
            Simple 3-Step Start
          </span>
          <h2
            id="timeline-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-normal leading-tight mb-4"
          >
            How to Begin Your <span className="text-[#E8B84B]">Free Trial</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            No high-pressure sales pitches. Come in, experience the vibe, test the machines, and make an informed decision for your health.
          </p>
        </div>

        {/* Process Cards Grid with Connecting Arrows on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              id={`step-card-${step.step}`}
              className="bg-[#1E2224] rounded-xl p-8 border border-[#2E3438] relative flex flex-col justify-between group hover:border-[#E8B84B]/40 transition-all shadow-lg"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#101314] border border-[#2A2F33] flex items-center justify-center shadow-inner">
                    {getIcon(step.icon)}
                  </div>
                  <span className="font-heading text-4xl text-gray-600 group-hover:text-[#E8B84B] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading text-2xl uppercase tracking-wide text-white mb-3 font-normal">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2A2F33] text-xs font-semibold text-[#E8B84B] flex items-center gap-1">
                <span>Step {index + 1} of 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            id="timeline-book-cta"
            onClick={onOpenBooking}
            className="btn-primary text-xs sm:text-sm px-8 py-4 rounded-lg shadow-xl font-bold inline-flex items-center gap-2"
          >
            <span>Start Step 1: Claim Your Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
