import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

interface AnnouncementBarProps {
  onOpenBooking?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="announcement-bar"
      className="bg-[#101314] text-[#E8B84B] border-b border-[#2A2E30] text-xs sm:text-sm py-2 px-3 sm:px-6 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Location & Notification Text */}
        <div className="flex items-center justify-center sm:justify-start gap-1.5 font-medium tracking-wide">
          <MapPin className="w-4 h-4 text-[#C4262E] shrink-0 inline-block animate-pulse" />
          <span className="text-white/90">
            <strong className="text-[#E8B84B] font-semibold">Naya Bazaar, Cuttack</strong> — Free trial session available for new members.
          </span>
        </div>

        {/* Quick Click-to-Action Links */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            id="announcement-call-link"
            href={GYM_CONFIG.contact.phoneTelLink}
            className="inline-flex items-center gap-1 text-white hover:text-[#E8B84B] transition-colors py-0.5 px-1.5 rounded focus:outline-none focus:ring-1 focus:ring-[#E8B84B]"
            aria-label="Call Titans Gym Cuttack"
          >
            <Phone className="w-3.5 h-3.5 text-[#E8B84B]" />
            <span>Call: {GYM_CONFIG.contact.phoneDisplay}</span>
          </a>

          <span className="text-white/20 hidden md:inline">|</span>

          <a
            id="announcement-wa-link"
            href={GYM_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#45ef88] transition-colors py-0.5 px-1.5 rounded focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            aria-label="Chat with Titans Gym on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-[#25D366] text-[#101314]" />
            <span className="font-bold">WhatsApp Us</span>
          </a>

          {onOpenBooking && (
            <button
              id="announcement-trial-btn"
              onClick={onOpenBooking}
              className="hidden lg:inline-flex items-center justify-center bg-[#C4262E] hover:bg-[#A81F26] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-colors"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
