import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Car, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

export const LocationPage: React.FC = () => {
  return (
    <div id="location-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Find Titans Gym
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
            Location, Directions & <span className="text-[#C4262E]">Operating Hours</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
            Conveniently situated on the 2nd Floor of Sri Sri Mandap Building at Gandhi Chhak, Naya Bazaar, Cuttack. Easy parking and central connectivity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Detailed NAP Info, Landmarks, Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
              <h2 className="font-heading text-2xl uppercase tracking-wide text-[#101314] border-b border-gray-100 pb-3">
                Titans Gym Cuttack Address
              </h2>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C4262E] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#101314]">Full Postal Address</h3>
                  <p className="text-sm text-[#5C6366] mt-0.5 leading-snug">
                    {GYM_CONFIG.location.fullAddress}
                  </p>
                  <p className="text-xs font-semibold text-[#E8B84B] mt-1">
                    Landmark: Near HDFC Bank, Gandhi Chhak, Naya Bazaar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E8B84B] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#101314]">Direct Contact</h3>
                  <a
                    href={GYM_CONFIG.contact.phoneTelLink}
                    className="text-base font-bold text-[#C4262E] hover:underline block"
                  >
                    {GYM_CONFIG.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#5C6366]">
                    Front desk assistance during open hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#101314]">WhatsApp Enquiries</h3>
                  <a
                    href={GYM_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#25D366] hover:underline block"
                  >
                    Send message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    GYM_CONFIG.location.fullAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-5 py-3 rounded font-bold inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-[#101314] text-white rounded-2xl p-6 sm:p-8 border border-[#2E3438] shadow-md space-y-4">
              <div className="flex items-center gap-2 border-b border-[#2A2F33] pb-3">
                <Clock className="w-5 h-5 text-[#E8B84B]" />
                <h3 className="font-heading text-xl uppercase tracking-wide">
                  Gym Working Schedule
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400 font-medium">Monday to Saturday</span>
                  <span className="font-bold text-[#E8B84B]">{GYM_CONFIG.hours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-gray-400 font-medium">Sunday Open Recovery</span>
                  <span className="font-bold text-[#E8B84B]">{GYM_CONFIG.hours.sunday}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-400 font-medium">Peak Morning Batches</span>
                  <span className="text-white">6:00 AM – 9:30 AM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-400 font-medium">Peak Evening Batches</span>
                  <span className="text-white">5:30 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Parking & Proximity Box */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#101314] font-bold text-xs uppercase tracking-wider">
                <Car className="w-4 h-4 text-[#C4262E]" />
                <span>On-Site Parking Available</span>
              </div>
              <p className="text-xs text-[#5C6366] leading-relaxed">
                Dedicated parking space right at Sri Sri Mandap Building for bikes, scooters, and cars.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed and Visual Landmark Guide */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-200">
              <iframe
                title="Titans Gym Location on Map"
                src={GYM_CONFIG.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Landmark Directions Breakdown */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
              <h3 className="font-heading text-2xl uppercase tracking-wide text-[#101314] mb-4">
                How to Reach Titans Gym
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F7F5F2] border border-gray-200">
                  <h4 className="font-bold text-[#C4262E] uppercase mb-1">From Gandhi Chhak</h4>
                  <p className="text-[#5C6366]">
                    Directly at the Gandhi Chhak square. Look for Sri Sri Mandap Building above HDFC Bank on 2nd Floor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F2] border border-gray-200">
                  <h4 className="font-bold text-[#C4262E] uppercase mb-1">From OMP Square</h4>
                  <p className="text-[#5C6366]">
                    Take the direct Naya Bazaar connecting road (approx 5-7 minutes drive).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F2] border border-gray-200">
                  <h4 className="font-bold text-[#C4262E] uppercase mb-1">From CDA & Badambadi</h4>
                  <p className="text-[#5C6366]">
                    Easily accessible via Link Road / Ranihat connecting straight to Naya Bazaar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F2] border border-gray-200">
                  <h4 className="font-bold text-[#C4262E] uppercase mb-1">Entry & Elevators</h4>
                  <p className="text-[#5C6366]">
                    Main staircase and wide entry with clear Titans Gym signage leading to 2nd Floor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
