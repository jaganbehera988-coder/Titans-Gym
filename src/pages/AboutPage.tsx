import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Dumbbell, Sparkles, Droplets, Users, Award, MapPin } from 'lucide-react';
import { GYM_CONFIG, TRAINERS_LIST } from '../config/gymInfo';

interface AboutPageProps {
  onOpenBooking: () => void;
  onExplorePrograms: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBooking,
  onExplorePrograms,
}) => {
  return (
    <div id="about-page" className="bg-[#F7F5F2] min-h-screen text-[#161A1B] pt-6 pb-20">
      {/* Subpage Header Banner */}
      <section className="bg-[#101314] text-white py-16 sm:py-20 border-b border-[#262B2E] mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8B84B] block mb-2 font-sans">
            Our Origin & Philosophy
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white font-normal leading-tight max-w-4xl">
            About <span className="text-[#C4262E]">Titans Gym Cuttack</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mt-4 leading-relaxed">
            Founded to provide Naya Bazaar with a serious, clean, and motivating strength and conditioning space backed by Being Strong equipment and floor coaching.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4262E] block">
              The Gym Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#101314]">
              Building a Culture of <span className="text-[#C4262E]">Consistent Discipline</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5C6366] leading-relaxed">
              Titans Gym opened its doors at Sri Sri Mandap Building at Gandhi Chhak with a clear mission: to bring an industrial-grade, modern fitness facility to Cuttack that bridges the gap between high-end commercial fitness and authentic iron gym culture.
            </p>
            <p className="text-sm sm:text-base text-[#5C6366] leading-relaxed">
              Rather than cramming countless duplicate machines into a dark room, we carefully laid out an expansive weight floor, a dedicated shock-absorbent functional turf for CrossFit conditioning, an isolated acoustic Zumba and Yoga studio, and post-session recovery amenities like steam therapy and chilled hydro-baths.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs sm:text-sm px-6 py-3.5 rounded font-bold"
              >
                Experience It in Person
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="Titans Gym Cuttack facility view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Titans Gym */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200/80 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4262E] block mb-1">
              What Defines Us
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl uppercase text-[#101314]">
              Our Four Operational Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#F7F5F2] border border-gray-200">
              <Dumbbell className="w-8 h-8 text-[#C4262E] mb-3" />
              <h4 className="font-heading text-xl uppercase text-[#101314] mb-1">
                Being Strong Gear
              </h4>
              <p className="text-xs text-[#5C6366] leading-relaxed">
                Biomechanical lever geometry engineered for optimal muscle isolation and joint comfort.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F5F2] border border-gray-200">
              <Sparkles className="w-8 h-8 text-[#E8B84B] mb-3" />
              <h4 className="font-heading text-xl uppercase text-[#101314] mb-1">
                Daily Sanitization
              </h4>
              <p className="text-xs text-[#5C6366] leading-relaxed">
                Routine floor wiping, ventilated fresh airflow, and sparkling clean changing areas.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F5F2] border border-gray-200">
              <Users className="w-8 h-8 text-[#C4262E] mb-3" />
              <h4 className="font-heading text-xl uppercase text-[#101314] mb-1">
                Attentive Floor Coaches
              </h4>
              <p className="text-xs text-[#5C6366] leading-relaxed">
                Coaches actively spotting lifts, monitoring form, and offering constructive guidance daily.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F7F5F2] border border-gray-200">
              <Droplets className="w-8 h-8 text-[#E8B84B] mb-3" />
              <h4 className="font-heading text-xl uppercase text-[#101314] mb-1">
                Recovery Facilities
              </h4>
              <p className="text-xs text-[#5C6366] leading-relaxed">
                Soothing steam room and cold hydro-bath to flush metabolic waste and speed muscle recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Coaches & Training Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8B84B] block mb-1">
              Guiding Your Progress
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl uppercase text-[#101314]">
              Meet Our Coaching Team
            </h3>
            <p className="text-sm text-[#5C6366] mt-2">
              Experienced, approachable trainers dedicated to helping you lift safely and progress steadily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS_LIST.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md flex flex-col justify-between"
              >
                <div className="aspect-[4/3] bg-gray-900 overflow-hidden">
                  <img
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#C4262E] uppercase tracking-wider block mb-1">
                    {trainer.role}
                  </span>
                  <h4 className="font-heading text-2xl uppercase text-[#101314] mb-1">
                    {trainer.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#E8B84B] mb-3">
                    {trainer.specialization} • {trainer.experience}
                  </p>
                  <p className="text-xs text-[#5C6366] leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#101314] text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-heading text-3xl sm:text-4xl uppercase">
            Ready to Experience Titans Gym Firsthand?
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Book a complimentary trial pass and see the space, try the equipment, and meet the coaches with zero obligation.
          </p>
          <button
            onClick={onOpenBooking}
            className="btn-primary text-xs sm:text-sm px-8 py-4 rounded font-bold uppercase tracking-wider"
          >
            Claim Your Free Session Now
          </button>
        </div>
      </div>
    </div>
  );
};
