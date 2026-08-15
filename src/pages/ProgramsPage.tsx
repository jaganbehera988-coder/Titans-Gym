import React, { useState } from 'react';
import { Check, Clock, Users, Dumbbell, ArrowRight, ShieldCheck } from 'lucide-react';
import { GYM_PROGRAMS } from '../config/gymInfo';
import { ProgramItem } from '../types';

interface ProgramsPageProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onSelectProgramForTrial }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength-bodybuilding', label: 'Strength & Bodybuilding' },
    { id: 'crossfit-functional', label: 'CrossFit & Functional' },
    { id: 'zumba-dance', label: 'Zumba Studio' },
    { id: 'yoga-coaching', label: 'Yoga & Flexibility' },
    { id: 'personal-training', label: '1-on-1 PT' },
  ];

  const displayedPrograms =
    activeFilter === 'all'
      ? GYM_PROGRAMS
      : GYM_PROGRAMS.filter((p) => p.id === activeFilter);

  return (
    <div id="programs-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Training Catalog
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
            Our Training <span className="text-[#C4262E]">Disciplines & Programs</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
            Engineered workouts designed for real strength, endurance, mobility, and community. Every discipline includes on-floor coach guidance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Discipline Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === opt.id
                  ? 'bg-[#101314] text-[#E8B84B] shadow-md'
                  : 'bg-white text-[#5C6366] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Detailed Program Cards */}
        <div className="space-y-10">
          {displayedPrograms.map((program: ProgramItem, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={program.id}
                id={`program-detail-${program.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
              >
                {/* Image (6 cols) */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden shadow-inner ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#101314]/90 text-[#E8B84B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                    {program.tag}
                  </span>
                  {program.badge && (
                    <span className="absolute top-4 right-4 bg-[#C4262E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                      {program.badge}
                    </span>
                  )}
                </div>

                {/* Info (6 cols) */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <h3 className="font-heading text-3xl sm:text-4xl uppercase tracking-wide text-[#101314]">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#C4262E]">
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#5C6366] leading-relaxed">
                    {program.fullDetails}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    {program.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-[#161A1B]">
                        <Check className="w-4 h-4 text-[#C4262E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule & Ideal For box */}
                  <div className="bg-[#F7F5F2] p-4 rounded-xl space-y-1 text-xs">
                    <div className="flex items-center gap-2 text-[#101314] font-semibold">
                      <Clock className="w-4 h-4 text-[#C4262E]" />
                      <span>Timing: {program.scheduleSnippet || 'Open daily during gym hours'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#5C6366]">
                      <Users className="w-4 h-4 text-[#E8B84B]" />
                      <span>Best for: {program.idealFor}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProgramForTrial(program.title)}
                      className="btn-primary text-xs sm:text-sm px-6 py-3.5 rounded font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow"
                    >
                      <span>Book Free Trial in {program.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
