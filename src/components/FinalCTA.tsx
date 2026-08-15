import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Flame } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="final-cta-band"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#171A1C] to-[#101314] text-white border-t border-[#262B2E] text-center relative overflow-hidden"
      aria-label="Book Free Trial at Titans Gym"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#C4262E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4262E]/20 text-[#E8B84B] border border-[#C4262E]/30 text-xs font-bold uppercase tracking-wider mb-4">
          <Flame className="w-3.5 h-3.5 text-[#C4262E]" />
          <span>No Obligation • 100% Free Trial</span>
        </span>

        <h2
          id="final-cta-heading"
          className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight mb-4"
        >
          Ready to Start <span className="text-[#C4262E]">Training?</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free trial session and see the gym for yourself — no pressure, just real coaching, clean Being Strong equipment, and results.
        </p>

        {/* Buttons side by side */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <button
            id="final-book-trial-cta"
            onClick={onOpenBooking}
            className="w-full sm:w-auto btn-primary text-sm sm:text-base px-8 py-4 rounded shadow-2xl font-bold inline-flex items-center justify-center gap-2 group"
          >
            <span>Book Free Trial</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            id="final-whatsapp-cta"
            href={GYM_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded bg-[#25D366] hover:bg-[#20b858] text-[#101314] text-sm font-bold uppercase tracking-wider transition-all shadow-xl"
          >
            <MessageSquare className="w-4 h-4 fill-[#101314]" />
            <span>Message Us on WhatsApp</span>
          </a>
        </div>

        {/* Security / Quality guarantee note */}
        <div className="inline-flex items-center gap-2 text-xs text-gray-400 font-sans">
          <ShieldCheck className="w-4 h-4 text-[#E8B84B]" />
          <span>Walk-in friendly • 2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak, Cuttack</span>
        </div>
      </div>
    </section>
  );
};
