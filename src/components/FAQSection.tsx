import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, GYM_CONFIG } from '../config/gymInfo';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="faq-section"
      className="py-16 sm:py-24 bg-[#101314] text-white border-y border-[#262B2E]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Got Questions?
          </span>
          <h2
            id="faq-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-normal leading-tight mb-4"
          >
            Frequently Asked <span className="text-[#C4262E]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-xl mx-auto leading-relaxed">
            Everything you need to know about starting your free trial, class timings, parking, and memberships at Titans Gym Cuttack.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-[#1E2224] rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#C4262E] shadow-lg' : 'border-[#2E3438] hover:border-gray-600'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#E8B84B]"
                >
                  <span className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-white font-normal leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#C4262E] text-white rotate-180'
                        : 'bg-[#101314] text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-gray-300 font-sans leading-relaxed border-t border-[#2A2F33] pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171A1C] border border-[#2E3438] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-heading text-xl uppercase tracking-wide text-white">
              Have a specific question not covered here?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5">
              Call us or chat directly with our team on WhatsApp for instant assistance.
            </p>
          </div>

          <a
            id="faq-whatsapp-cta"
            href={GYM_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-5 py-3 rounded font-bold inline-flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
