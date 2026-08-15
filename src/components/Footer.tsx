import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { GYM_CONFIG, GYM_PROGRAMS } from '../config/gymInfo';

interface FooterProps {
  onNavigate: (viewId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#101314] text-white border-t border-[#24282B] pt-16 pb-24 sm:pb-12 text-sm"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#24282B]">
          {/* Column 1: Logo & Brand Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none focus:ring-2 focus:ring-[#E8B84B] rounded"
            >
              <Logo variant="white" size="md" />
            </button>

            <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              Cuttack's premier strength training and CrossFit gym. Featuring authentic Being Strong equipment, dedicated functional conditioning turf, Zumba studio, and post-workout recovery bath.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-instagram-link"
                href={GYM_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E2224] hover:bg-[#C4262E] flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-[#2E3438]"
                aria-label="Follow Titans Gym Cuttack on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                id="footer-facebook-link"
                href={GYM_CONFIG.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E2224] hover:bg-[#1877F2] flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-[#2E3438]"
                aria-label="Follow Titans Gym Cuttack on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                id="footer-whatsapp-link"
                href={GYM_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E2224] hover:bg-[#25D366] flex items-center justify-center text-gray-300 hover:text-[#101314] transition-colors border border-[#2E3438]"
                aria-label="Chat with Titans Gym Cuttack on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Sitemap Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg uppercase tracking-wider text-[#E8B84B]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-medium text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Gym & Coaches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors"
                >
                  Training Disciplines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Facility Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Member Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-white transition-colors"
                >
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg uppercase tracking-wider text-[#E8B84B]">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {GYM_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <button
                    onClick={() => onNavigate('programs')}
                    className="hover:text-[#C4262E] transition-colors text-left"
                  >
                    {prog.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-[#C4262E] hover:underline uppercase tracking-wider"
                >
                  + Book Free Trial Pass →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location NAP (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg uppercase tracking-wider text-[#E8B84B]">
              Titans Gym Location
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C4262E] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8B84B] shrink-0" />
                <a
                  href={GYM_CONFIG.contact.phoneTelLink}
                  className="text-white hover:text-[#E8B84B] font-bold"
                >
                  {GYM_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8B84B] shrink-0" />
                <span>Mon–Sat: {GYM_CONFIG.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#25D366]">
                <span>Sun: {GYM_CONFIG.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div>
            © {new Date().getFullYear()} Titans Gym Cuttack. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak, Naya Bazaar, Cuttack 753004
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
