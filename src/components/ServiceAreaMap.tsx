import React from 'react';
import { MapPin, Navigation, Car, Clock, Phone, MessageSquare } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymInfo';

export const ServiceAreaMap: React.FC = () => {
  return (
    <section
      id="location-service-area-section"
      className="py-16 sm:py-24 bg-[#F7F5F2] text-[#161A1B]"
      aria-label="Location and Service Area"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text & Directions (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C4262E] block mb-2 font-sans">
                Centrally Located in Cuttack
              </span>
              <h2
                id="service-area-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#101314] font-normal leading-tight"
              >
                Prime Spot at <span className="text-[#C4262E]">Naya Bazaar</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C6366] font-sans leading-relaxed">
              Located on the 2nd Floor of Sri Sri Mandap Building right beside HDFC Bank at the vibrant Gandhi Chhak intersection. Conveniently connected for daily commuters across Cuttack.
            </p>

            {/* Landmarks & Accessibility Box */}
            <div className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-sm space-y-3">
              <h3 className="font-heading text-lg uppercase tracking-wide text-[#101314] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#C4262E]" />
                <span>Landmarks & Directions</span>
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-[#161A1B]">
                {GYM_CONFIG.location.directions.map((direction, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4262E] mt-2 shrink-0" />
                    <span>{direction}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact & Hours */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-[#101314] text-white p-3.5 rounded-lg">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Weekdays & Sat</span>
                <span className="text-[#E8B84B] font-semibold">{GYM_CONFIG.hours.weekdays}</span>
              </div>
              <div className="bg-[#101314] text-white p-3.5 rounded-lg">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Sunday Recovery</span>
                <span className="text-[#E8B84B] font-semibold">{GYM_CONFIG.hours.sunday}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                id="get-directions-btn"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  GYM_CONFIG.location.fullAddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-5 py-3 rounded font-bold inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                id="call-gym-btn"
                href={GYM_CONFIG.contact.phoneTelLink}
                className="btn-secondary text-xs px-4 py-3 rounded font-bold inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C4262E]" />
                <span>{GYM_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Placeholder (Right) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-200">
              {/* NOTE: Centralized editable Google Maps Embed iframe */}
              <iframe
                id="google-maps-embed-iframe"
                title="Titans Gym Naya Bazaar Cuttack Location Map"
                src={GYM_CONFIG.location.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#101314]/95 text-white p-3 sm:p-4 rounded-xl backdrop-blur-md border border-[#2E3438] shadow-2xl max-w-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C4262E] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base tracking-wide uppercase text-white leading-none">
                      Titans Gym Cuttack
                    </h4>
                    <p className="text-[11px] text-gray-300 font-sans mt-1 leading-snug">
                      2nd Floor, Sri Sri Mandap Bldg, Gandhi Chhak
                    </p>
                    <span className="inline-block text-[10px] text-[#25D366] font-bold mt-1 uppercase">
                      ● Open Now (5:30 AM – 10:00 PM)
                    </span>
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
