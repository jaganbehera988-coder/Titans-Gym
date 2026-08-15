import React, { useState } from 'react';
import { Star, ExternalLink, PlusCircle, CheckCircle, X, ThumbsUp } from 'lucide-react';
import { SAMPLE_REVIEWS, GYM_CONFIG } from '../config/gymInfo';
import { ReviewItem } from '../types';

export const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(SAMPLE_REVIEWS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    program: 'Strength & Bodybuilding',
    review: '',
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.review.trim()) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      date: 'Just now',
      program: newReview.program,
      review: newReview.review,
      verified: true,
    };

    setReviewsList([item, ...reviewsList]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setNewReview({
        name: '',
        rating: 5,
        program: 'Strength & Bodybuilding',
        review: '',
      });
    }, 1500);
  };

  return (
    <div id="reviews-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
              Verified Feedback
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
              Member Reviews & <span className="text-[#C4262E]">Experiences</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
              Read what lifters, Zumba members, and athletes in Cuttack have to say about our Being Strong equipment, trainer attentiveness, and hygiene.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="btn-primary text-xs sm:text-sm px-5 py-3 rounded font-bold inline-flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Share Your Review</span>
            </button>

            <a
              href={GYM_CONFIG.location.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-[#1E2224] hover:bg-[#2A2F33] text-white text-xs font-bold uppercase rounded border border-gray-700 inline-flex items-center gap-2"
            >
              <span>View Google Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E8B84B]" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#E8B84B] fill-[#E8B84B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#5C6366] font-medium">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-[#161A1B] leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg tracking-wide uppercase text-[#101314]">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#C4262E] font-semibold block">
                    {item.program}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-[#101314]">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-[#5C6366]">
                  Your review helps fellow fitness enthusiasts in Cuttack discover Titans Gym.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <h3 className="font-heading text-2xl uppercase tracking-wide text-[#101314]">
                  Write a Member Review
                </h3>
                <p className="text-xs text-[#5C6366]">
                  Share your experience with our trainers, Being Strong equipment, and hygiene.
                </p>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Subham P."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#C4262E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                      Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Great</option>
                      <option value={3}>3 Stars - Average</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                      Program
                    </label>
                    <select
                      value={newReview.program}
                      onChange={(e) => setNewReview({ ...newReview, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm"
                    >
                      <option value="Strength & Bodybuilding">Strength Floor</option>
                      <option value="CrossFit & Functional">CrossFit Zone</option>
                      <option value="Zumba Studio">Zumba Class</option>
                      <option value="1-on-1 Personal Training">Personal Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    placeholder="Tell us about the trainers, equipment, sanitization, and atmosphere..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#C4262E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
