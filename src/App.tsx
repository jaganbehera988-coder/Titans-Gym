import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutPreview } from './components/AboutPreview';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GalleryPreview } from './components/GalleryPreview';
import { ReviewHighlights } from './components/ReviewHighlights';
import { AnimatedStats } from './components/AnimatedStats';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { FreeTrialModal } from './components/FreeTrialModal';

import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { LocationPage } from './pages/LocationPage';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [selectedProgramForTrial, setSelectedProgramForTrial] = useState<string>('');

  // Handle browser back/forward or hash change if used
  const handleNavigate = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithProgram = (programTitle: string) => {
    setSelectedProgramForTrial(programTitle);
    setIsTrialModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedProgramForTrial('');
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F2] text-[#161A1B] font-sans antialiased selection:bg-[#C4262E] selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenBooking={handleOpenGeneralBooking} />

      {/* 2. Sticky Navigation Bar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenTrialModal={handleOpenGeneralBooking}
      />

      {/* Main View Router */}
      <main className="flex-1" role="main">
        {activeView === 'home' && (
          <>
            {/* 3. Hero Section */}
            <Hero
              onOpenBooking={handleOpenGeneralBooking}
              onExploreGallery={() => handleNavigate('gallery')}
            />

            {/* 4. Trust Indicator Strip */}
            <TrustStrip />

            {/* 5. Main Programs Grid */}
            <ProgramsSection
              onSelectProgramForTrial={handleOpenBookingWithProgram}
              onViewAllPrograms={() => handleNavigate('programs')}
            />

            {/* 6. Why Choose Us Grid */}
            <WhyChooseUs />

            {/* 7. About Preview Split Section */}
            <AboutPreview
              onReadStory={() => handleNavigate('about')}
              onOpenBooking={handleOpenGeneralBooking}
            />

            {/* 8. 3-Step Process Timeline */}
            <ProcessTimeline onOpenBooking={handleOpenGeneralBooking} />

            {/* 9. Gallery Preview */}
            <GalleryPreview onViewFullGallery={() => handleNavigate('gallery')} />

            {/* 10. Review Highlights Carousel */}
            <ReviewHighlights onOpenReviewSubmission={() => handleNavigate('reviews')} />

            {/* 11. Animated Statistics Band */}
            <AnimatedStats />

            {/* 12. Service Area & Map Section */}
            <ServiceAreaMap />

            {/* 13. FAQ Accordion */}
            <FAQSection />

            {/* 14. Final CTA Band */}
            <FinalCTA onOpenBooking={handleOpenGeneralBooking} />

            {/* 15. Contact & Free Trial Booking Lead Section */}
            <ContactSection
              initialProgram={selectedProgramForTrial}
              onSuccessSubmit={() => {}}
            />
          </>
        )}

        {activeView === 'about' && (
          <AboutPage
            onOpenBooking={handleOpenGeneralBooking}
            onExplorePrograms={() => handleNavigate('programs')}
          />
        )}

        {activeView === 'programs' && (
          <ProgramsPage onSelectProgramForTrial={handleOpenBookingWithProgram} />
        )}

        {activeView === 'gallery' && (
          <GalleryPage onOpenBooking={handleOpenGeneralBooking} />
        )}

        {activeView === 'reviews' && <ReviewsPage />}

        {activeView === 'faq' && <FAQPage />}

        {activeView === 'location' && <LocationPage />}
      </main>

      {/* 16. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Mobile Persistent Floating Call & WhatsApp Bar */}
      <FloatingContactBar onOpenBooking={handleOpenGeneralBooking} />

      {/* Dedicated Free Trial Modal Dialog */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        defaultProgram={selectedProgramForTrial}
      />
    </div>
  );
}
