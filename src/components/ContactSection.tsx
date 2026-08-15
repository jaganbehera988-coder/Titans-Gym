import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GYM_CONFIG, GYM_PROGRAMS } from '../config/gymInfo';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  initialProgram?: string;
  onSuccessSubmit?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProgram = '',
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    preferredProgram: initialProgram || GYM_PROGRAMS[0].title,
    preferredTime: 'Morning (6:00 AM – 9:00 AM)',
    preferredDate: '',
    goals: 'General Fitness & Strength',
    experienceLevel: 'Beginner / First time in gym',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    // Phone validation for Indian mobile numbers (10 digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API lead dispatch with local confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }
    }, 800);
  };

  const generateWhatsAppDirectLink = () => {
    const msg = `Hi Titans Gym Cuttack! My name is ${formData.name}. I would like to confirm my free trial session for ${formData.preferredProgram} (${formData.preferredTime}). My phone number is ${formData.phone}.`;
    return `https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section
      id="contact-section"
      className="py-16 sm:py-24 bg-[#F7F5F2] text-[#161A1B] scroll-mt-16"
      aria-label="Contact and Free Trial Booking"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2 font-sans">
            Get in Touch
          </span>
          <h2
            id="contact-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#101314] font-normal leading-tight mb-4"
          >
            Claim Your <span className="text-[#C4262E]">Trial</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C6366] font-sans leading-relaxed">
            Leave your details and our team will call you back to schedule your first session at our Gandhi Chhak facility.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Short Lead Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/90 shadow-xl">
            {isSubmitted ? (
              <div
                id="lead-success-message"
                className="text-center py-8 px-4 space-y-4 animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-3xl uppercase tracking-wide text-[#101314]">
                  Free Trial Request Received!
                </h3>
                <p className="text-sm sm:text-base text-[#5C6366] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our team will call or WhatsApp you shortly at <strong>{formData.phone}</strong> to confirm your slot for <strong>{formData.preferredProgram}</strong>.
                </p>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    id="success-whatsapp-fast-track"
                    href={generateWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20b858] text-[#101314] text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#101314]" />
                    <span>Fast-Track on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        preferredProgram: GYM_PROGRAMS[0].title,
                        preferredTime: 'Morning (6:00 AM – 9:00 AM)',
                        preferredDate: '',
                        goals: 'General Fitness & Strength',
                        experienceLevel: 'Beginner / First time in gym',
                      });
                    }}
                    className="btn-secondary text-xs px-5 py-3 rounded-lg font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="free-trial-lead-form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                <div className="border-b border-gray-100 pb-3 mb-2">
                  <h3 className="font-heading text-3xl uppercase tracking-wide text-[#101314]">
                    Claim Your Trial
                  </h3>
                  <p className="text-xs text-[#5C6366]">
                    Leave your details and our team will call you back to schedule your first session at our Gandhi Chhak facility.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#101314] mb-1"
                  >
                    Full Name <span className="text-[#C4262E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Das"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#101314] mb-1"
                  >
                    Phone Number <span className="text-[#C4262E]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="input-field"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Primary Goal / Program Selection */}
                <div>
                  <label
                    htmlFor="lead-program"
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#101314] mb-1"
                  >
                    Primary Goal
                  </label>
                  <select
                    id="lead-program"
                    value={formData.preferredProgram}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredProgram: e.target.value })
                    }
                    className="input-field cursor-pointer"
                  >
                    {GYM_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Slot */}
                <div>
                  <label
                    htmlFor="lead-time"
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#101314] mb-1"
                  >
                    Preferred Slot
                  </label>
                  <select
                    id="lead-time"
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="input-field cursor-pointer"
                  >
                    <option value="Early Morning (5:30 AM – 7:30 AM)">Early Morning (5:30 AM – 7:30 AM)</option>
                    <option value="Morning (7:30 AM – 10:30 AM)">Morning (7:30 AM – 10:30 AM)</option>
                    <option value="Afternoon (11:00 AM – 3:30 PM)">Afternoon (11:00 AM – 3:30 PM)</option>
                    <option value="Evening (4:30 PM – 7:30 PM)">Evening (4:30 PM – 7:30 PM)</option>
                    <option value="Night (7:30 PM – 10:00 PM)">Night (7:30 PM – 10:00 PM)</option>
                  </select>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-free-trial-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 text-white bebas text-xl tracking-wider transition-all rounded-md shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 bg-[#C4262E] hover:bg-[#A81F26]"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Session...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Schedule Session Now</span>
                      </>
                    )}
                  </button>
                  
                  {/* Status Indicator & Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-medium text-emerald-600 uppercase tracking-widest">
                        Trainers available now
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      NO PRESSURE, JUST RESULTS
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Address, Phone, WhatsApp, Hours, Embed Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Address Card */}
            <div className="bg-[#101314] text-white rounded-2xl p-6 sm:p-8 border border-[#2E3438] shadow-xl space-y-6">
              <h3 className="font-heading text-2xl uppercase tracking-wide text-white border-b border-[#2A2F33] pb-3">
                Titans Gym Contact Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1E2224] border border-[#2E3438] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C4262E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Gym Location
                  </h4>
                  <p className="text-sm text-white font-medium mt-0.5 leading-snug">
                    {GYM_CONFIG.location.fullAddress}
                  </p>
                  <span className="text-[11px] text-[#E8B84B] font-sans mt-0.5 inline-block">
                    Landmark: Gandhi Chhak, Beside HDFC Bank
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1E2224] border border-[#2E3438] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E8B84B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Direct Phone Line
                  </h4>
                  <a
                    id="contact-tel-link"
                    href={GYM_CONFIG.contact.phoneTelLink}
                    className="text-base text-white font-bold hover:text-[#E8B84B] transition-colors mt-0.5 block"
                  >
                    {GYM_CONFIG.contact.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-gray-400">
                    Available during all gym operating hours
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1E2224] border border-[#2E3438] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    WhatsApp Enquiry Desk
                  </h4>
                  <a
                    id="contact-whatsapp-link"
                    href={GYM_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#25D366] font-bold hover:underline mt-0.5 block"
                  >
                    Chat on WhatsApp (+91 63722 56060)
                  </a>
                </div>
              </div>

              {/* Opening Hours Box */}
              <div className="pt-4 border-t border-[#2A2F33]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#E8B84B]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8B84B]">
                    Gym Operating Timings
                  </h4>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>Monday – Saturday:</span>
                    <span className="font-semibold text-white">{GYM_CONFIG.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Sunday Recovery:</span>
                    <span className="font-semibold text-white">{GYM_CONFIG.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
