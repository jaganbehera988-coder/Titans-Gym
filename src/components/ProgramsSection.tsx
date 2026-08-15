import React, { useState } from 'react';
import { ArrowRight, Check, X, Dumbbell, Clock, Users, Calendar } from 'lucide-react';
import { GYM_PROGRAMS } from '../config/gymInfo';
import { ProgramItem } from '../types';

interface ProgramsSectionProps {
  onSelectProgramForTrial: (programTitle: string) => void;
  onViewAllPrograms?: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramForTrial,
  onViewAllPrograms,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section
      id="programs-section"
      className="py-16 sm:py-24 bg-[#F7F5F2] text-[#161A1B] scroll-mt-20"
      aria-label="Training Programs at Titans Gym"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2 font-sans">
              Disciplines & Coaching
            </span>
            <h2
              id="programs-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#101314] font-normal leading-none"
            >
              Tailored Programs for <span className="text-[#C4262E]">Every Level</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#5C6366] font-sans leading-relaxed">
            From heavy-compound strength training to dynamic CrossFit circuits, rhythm-packed Zumba, and restorative Yoga — find your rhythm.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GYM_PROGRAMS.map((program) => (
            <article
              key={program.id}
              id={`program-card-${program.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Image with Tag & Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <img
                  src={program.imageUrl}
                  alt={`Titans Gym Cuttack ${program.title} training area`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-[#101314]/90 text-[#E8B84B] backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {program.tag}
                </span>

                {/* Badge if available */}
                {program.badge && (
                  <span className="absolute top-3 right-3 bg-[#C4262E] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {program.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-heading text-2xl sm:text-3xl tracking-wide uppercase font-normal leading-tight">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#C4262E] font-semibold mb-2">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-[#5C6366] leading-relaxed line-clamp-3 mb-4">
                    {program.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-6 text-xs text-[#161A1B] font-medium">
                    {program.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C4262E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    id={`learn-more-${program.id}`}
                    onClick={() => setSelectedProgram(program)}
                    className="text-xs font-bold uppercase tracking-wider text-[#101314] hover:text-[#C4262E] inline-flex items-center gap-1 transition-colors py-1"
                    aria-label={`Learn more about ${program.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id={`trial-btn-${program.id}`}
                    onClick={() => onSelectProgramForTrial(program.title)}
                    className="btn-primary text-xs px-3.5 py-2 rounded"
                  >
                    Try Free Session
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View full training catalog footer prompt */}
        {onViewAllPrograms && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllPrograms}
              className="btn-secondary text-xs sm:text-sm px-6 py-3 rounded"
            >
              Explore Full Program Schedules & Details
            </button>
          </div>
        )}
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            id="program-details-modal"
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative"
          >
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gray-900">
              <img
                src={selectedProgram.imageUrl}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button
                id="close-program-modal"
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8B84B]">
                  {selectedProgram.tag}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-wide">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C4262E] mb-1">
                  Program Overview
                </h4>
                <p className="text-[#161A1B] text-sm sm:text-base leading-relaxed">
                  {selectedProgram.fullDetails}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101314] mb-3">
                  Key Features & Equipment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#F7F5F2] p-3 rounded-lg text-xs text-[#161A1B]">
                      <Check className="w-4 h-4 text-[#C4262E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for & schedule */}
              <div className="bg-[#101314] text-white p-4 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#E8B84B] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Schedule: {selectedProgram.scheduleSnippet || 'Open gym hours'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-[#C4262E]" />
                  <span>Ideal for: {selectedProgram.idealFor}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="modal-book-program-trial"
                  onClick={() => {
                    const title = selectedProgram.title;
                    setSelectedProgram(null);
                    onSelectProgramForTrial(title);
                  }}
                  className="flex-1 btn-primary py-3 rounded-lg text-sm font-bold shadow-lg"
                >
                  Book Free Trial in {selectedProgram.title}
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="btn-secondary py-3 px-6 rounded-lg text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
