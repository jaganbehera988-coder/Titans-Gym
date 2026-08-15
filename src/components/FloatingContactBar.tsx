import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-floating-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#101314]/95 backdrop-blur-md border-t border-[#24282B] p-2.5 sm:hidden shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Button (min 44px touch target) */}
        <a
          id="floating-call-btn"
          href={GYM_CONFIG.contact.phoneTelLink}
          className="flex items-center justify-center gap-1.5 h-11 bg-[#1E2224] active:bg-[#2A2F33] text-white text-xs font-semibold rounded-lg border border-gray-700/60 shadow-sm"
          aria-label="Call Titans Gym Cuttack directly"
        >
          <Phone className="w-4 h-4 text-[#E8B84B]" />
          <span>Call</span>
        </a>

        {/* Pre-filled WhatsApp Button */}
        <a
          id="floating-wa-btn"
          href={GYM_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-11 bg-[#25D366] active:bg-[#1eb956] text-[#101314] text-xs font-bold rounded-lg shadow-sm"
          aria-label="Message Titans Gym Cuttack on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-[#101314]" />
          <span>WhatsApp</span>
        </a>

        {/* Free Trial Booking Button */}
        <button
          id="floating-trial-btn"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 h-11 bg-[#C4262E] active:bg-[#A81F26] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md"
          aria-label="Open Free Trial Booking Form"
        >
          <CalendarCheck className="w-4 h-4 text-white" />
          <span>Free Trial</span>
        </button>
      </div>
    </div>
  );
};
