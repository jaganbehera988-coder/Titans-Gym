import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, ExternalLink, PlusCircle } from 'lucide-react';
import { SAMPLE_REVIEWS, GYM_CONFIG } from '../config/gymInfo';
import { ReviewItem } from '../types';

interface ReviewHighlightsProps {
  onOpenReviewSubmission?: () => void;
}

export const ReviewHighlights: React.FC<ReviewHighlightsProps> = ({
  onOpenReviewSubmission,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? SAMPLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === SAMPLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews-section"
      className="py-16 sm:py-24 bg-[#101314] text-white relative overflow-hidden"
      aria-label="Member Reviews & Feedback"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
              Member Experiences
            </span>
            <h2
              id="reviews-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-normal leading-tight"
            >
              What Cuttack Lifters <span className="text-[#C4262E]">Say About Us</span>
            </h2>
          </div>

          {/* Google Link & Submit Button */}
          <div className="flex items-center gap-3">
            <a
              id="google-reviews-btn"
              href={GYM_CONFIG.location.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E2224] hover:bg-[#2A2F33] text-xs font-semibold uppercase tracking-wider text-white border border-[#2E3438] transition-colors"
            >
              <span>See All on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E8B84B]" />
            </a>

            {onOpenReviewSubmission && (
              <button
                id="open-review-form-btn"
                onClick={onOpenReviewSubmission}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#E8B84B] transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </button>
            )}
          </div>
        </div>

        {/* Carousel / Multi-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_REVIEWS.map((item: ReviewItem, idx) => (
            <div
              key={item.id}
              id={`review-card-${item.id}`}
              className={`bg-[#1E2224] rounded-xl p-6 border border-[#2E3438] flex flex-col justify-between transition-all duration-300 hover:border-[#C4262E]/40 ${
                idx === currentIndex ? 'ring-1 ring-[#C4262E]' : ''
              }`}
            >
              {/* NOTE: Sample review placeholder — replace with verified Google Business Profile review */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#E8B84B] fill-[#E8B84B]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-gray-300 font-sans leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2F33] flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg tracking-wide uppercase text-white font-normal">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#E8B84B] font-sans font-medium block">
                    {item.program}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#101314] flex items-center justify-center text-xs font-bold text-[#C4262E]">
                  {item.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator controls for mobile */}
        <div className="flex sm:hidden items-center justify-between mt-6 pt-4 border-t border-[#24282B]">
          <span className="text-xs text-gray-400">
            Showing verified member experiences
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevReview}
              className="p-2 bg-[#1E2224] rounded-lg text-white hover:bg-[#2A2F33]"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="p-2 bg-[#1E2224] rounded-lg text-white hover:bg-[#2A2F33]"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
