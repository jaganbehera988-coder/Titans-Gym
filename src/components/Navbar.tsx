import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { GYM_CONFIG } from '../config/gymInfo';

interface NavbarProps {
  activeView: string;
  onNavigate: (viewId: string) => void;
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenTrialModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'location', label: 'Location' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101314]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#24282B]'
          : 'bg-[#101314] py-4 border-b border-[#1F2325]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-brand-logo"
          onClick={() => handleLinkClick('home')}
          className="focus:outline-none focus:ring-2 focus:ring-[#E8B84B] rounded p-1 transition-transform"
          aria-label="Titans Gym Home"
        >
          <Logo variant="white" size={isScrolled ? 'sm' : 'md'} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider relative rounded ${
                  isActive
                    ? 'text-[#E8B84B] font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C4262E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Buttons & Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-quick-call"
            href={GYM_CONFIG.contact.phoneTelLink}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#E8B84B] transition-colors py-2 px-3 rounded border border-gray-700/60 hover:border-[#E8B84B]/40"
            title="Call Titans Gym"
          >
            <Phone className="w-3.5 h-3.5 text-[#E8B84B]" />
            <span className="font-medium">{GYM_CONFIG.contact.phoneDisplay}</span>
          </a>

          <button
            id="nav-book-trial-btn"
            onClick={onOpenTrialModal}
            className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded shadow-lg"
          >
            Book Free Trial
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="nav-mobile-trial-quick"
            onClick={onOpenTrialModal}
            className="bg-[#C4262E] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded"
          >
            Free Trial
          </button>
          
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-[#E8B84B]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            id="mobile-nav-drawer"
            className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#101314] text-white h-full shadow-2xl flex flex-col border-l border-[#24282B] z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#24282B] flex items-center justify-between">
              <Logo variant="white" size="sm" />
              <button
                id="close-mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8B84B]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links list */}
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeView === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#C4262E] text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <div className="p-4 border-t border-[#24282B] space-y-3">
              <button
                id="drawer-book-trial-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full btn-primary py-3 rounded-lg text-sm font-bold shadow-lg"
              >
                Book Your Free Trial
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  id="drawer-call-btn"
                  href={GYM_CONFIG.contact.phoneTelLink}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#1E2224] hover:bg-[#2A2F33] text-white text-xs font-semibold rounded-lg border border-gray-700/50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8B84B]" />
                  <span>Call Now</span>
                </a>
                <a
                  id="drawer-wa-btn"
                  href={GYM_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366] hover:bg-[#20b858] text-[#101314] text-xs font-bold rounded-lg"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#101314]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Gym Info Card in Drawer */}
            <div className="mt-auto p-4 bg-[#171A1C] text-xs text-gray-400 space-y-2 border-t border-[#24282B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C4262E] shrink-0 mt-0.5" />
                <span>2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak, Naya Bazaar, Cuttack</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8B84B] shrink-0" />
                <span>Mon–Sat: 5:30 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
