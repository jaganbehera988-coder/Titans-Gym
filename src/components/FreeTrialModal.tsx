import React, { useState } from 'react';
import { X, CheckCircle, Send, MessageSquare, AlertCircle, Calendar, Clock, User, Phone } from 'lucide-react';
import { GYM_CONFIG, GYM_PROGRAMS } from '../config/gymInfo';
import { LeadFormData } from '../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = '',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    preferredProgram: defaultProgram || GYM_PROGRAMS[0].title,
    preferredTime: 'Morning (6:30 AM – 9:00 AM)',
    preferredDate: new Date().toISOString().split('T')[0],
    goals: 'Muscle Building & Strength',
    experienceLevel: 'Beginner',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const generateWhatsAppLink = () => {
    const msg = `Hi Titans Gym Cuttack, I booked a free trial pass for ${formData.preferredProgram} on ${formData.preferredDate} (${formData.preferredTime}). My name is ${formData.name}, Phone: ${formData.phone}.`;
    return `https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div
      id="free-trial-modal-container"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
    >
      {/* Click outside backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="free-trial-dialog"
        className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-trial-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close trial booking form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 id="trial-modal-title" className="font-heading text-3xl uppercase tracking-wide text-[#101314]">
              Free Trial Pass Confirmed!
            </h3>

            <p className="text-sm text-[#5C6366] max-w-md mx-auto leading-relaxed">
              We look forward to welcoming you, <strong>{formData.name}</strong>! Your complimentary session for <strong>{formData.preferredProgram}</strong> has been logged.
            </p>

            <div className="p-4 bg-[#F7F5F2] rounded-xl text-xs text-[#161A1B] text-left space-y-1">
              <div>📍 <strong>Location:</strong> 2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak, Naya Bazaar, Cuttack</div>
              <div>🕒 <strong>Slot:</strong> {formData.preferredDate} • {formData.preferredTime}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                id="modal-fast-whatsapp-btn"
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-6 py-3.5 rounded-lg font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Notify On WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="btn-secondary text-xs px-6 py-3.5 rounded-lg font-bold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4262E] block mb-1">
                Complimentary Workout Pass
              </span>
              <h3 id="trial-modal-title" className="font-heading text-3xl uppercase tracking-wide text-[#101314]">
                Book Your Free Trial Session
              </h3>
              <p className="text-xs text-[#5C6366] mt-1">
                Zero fees, no credit card required. Test our Being Strong equipment & meet our trainers.
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                Full Name <span className="text-[#C4262E]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Mohapatra"
                  className={`input-field pl-10 ${
                    errors.name ? 'border-red-500 bg-red-50/30' : ''
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                Mobile / WhatsApp Number <span className="text-[#C4262E]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className={`input-field pl-10 ${
                    errors.phone ? 'border-red-500 bg-red-50/30' : ''
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Discipline & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                  Discipline of Interest
                </label>
                <select
                  value={formData.preferredProgram}
                  onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                  className="input-field text-xs cursor-pointer"
                >
                  {GYM_PROGRAMS.map((prog) => (
                    <option key={prog.id} value={prog.title}>
                      {prog.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="input-field text-xs cursor-pointer"
                >
                  <option value="Early Morning (5:30 AM – 7:30 AM)">5:30 AM – 7:30 AM</option>
                  <option value="Morning (7:30 AM – 10:30 AM)">7:30 AM – 10:30 AM</option>
                  <option value="Afternoon (11:00 AM – 3:30 PM)">11:00 AM – 3:30 PM</option>
                  <option value="Evening (4:30 PM – 7:30 PM)">4:30 PM – 7:30 PM</option>
                  <option value="Night (7:30 PM – 10:00 PM)">7:30 PM – 10:00 PM</option>
                </select>
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#101314] mb-1">
                Your Fitness Background
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="input-field text-xs cursor-pointer"
              >
                <option value="Beginner">Beginner (Need coach guidance)</option>
                <option value="Intermediate">Intermediate (Trained for 6+ months)</option>
                <option value="Advanced">Advanced (Powerlifter / Athlete)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Reserving Pass...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Free Workout Pass</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-[#5C6366] text-center mt-2">
                Titans Gym • 2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak, Naya Bazaar, Cuttack
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
