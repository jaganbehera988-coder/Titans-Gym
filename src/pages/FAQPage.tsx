import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare, Phone } from 'lucide-react';
import { FAQ_ITEMS, GYM_CONFIG } from '../config/gymInfo';

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({
    'faq-1': true,
    'faq-2': true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'trial', label: 'Free Trial' },
    { id: 'timings', label: 'Gym Timings' },
    { id: 'facilities', label: 'Equipment & Recovery' },
    { id: 'trainers', label: 'Coaching & PT' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="faq-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Help Center & Answers
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
            Frequently Asked <span className="text-[#C4262E]">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
            Find quick answers regarding our free trial sessions, Being Strong equipment, personal coaching, timings, and on-site parking at Gandhi Chhak, Naya Bazaar.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Category Bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g., parking, trial, Being Strong, timings)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#C4262E] focus:outline-none shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#101314] text-[#E8B84B]'
                    : 'bg-white text-[#5C6366] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white p-8 rounded-xl text-center text-[#5C6366] text-sm">
              No matching questions found. Reach out to us directly on WhatsApp or Call for quick help!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200/90 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-[#101314] font-normal">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#C4262E] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#5C6366] leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Direct Help Callout */}
        <div className="p-8 rounded-2xl bg-[#101314] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
              Still Have Questions?
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Our front desk at Naya Bazaar is open Mon–Sat 5:30 AM to 10:00 PM.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GYM_CONFIG.contact.phoneTelLink}
              className="btn-secondary-light text-xs px-4 py-3 rounded font-bold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8B84B]" />
              <span>Call Desk</span>
            </a>

            <a
              href={GYM_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-3 rounded font-bold inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
