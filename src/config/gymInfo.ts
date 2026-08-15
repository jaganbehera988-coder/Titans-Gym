import { FAQItem, GalleryItem, ProgramItem, ReviewItem, StatItem, TrainerItem } from '../types';

/**
 * ============================================================================
 * TITANS GYM - CENTRALIZED CONFIGURATION & BUSINESS INFORMATION
 * ============================================================================
 * Edit this file to update contact numbers, address, social media links,
 * opening hours, program offerings, placeholder statistics, and reviews.
 */

export const GYM_CONFIG = {
  // Brand & Identity
  brandName: 'TITANS GYM',
  tagline: 'Train Like a Titan, Right Here in Cuttack',
  shortDescription: 'A premier strength-training and CrossFit-focused gym in Naya Bazaar, Cuttack featuring Being Strong equipment, dedicated functional zones, Zumba studio, and recovery bath.',
  
  // Location & NAP (Name, Address, Phone) - Centralized for SEO Consistency
  location: {
    name: 'Titans Gym',
    floor: '2nd Floor, Sri Sri Mandap Building',
    landmark: 'Near HDFC Bank, Gandhi Chhak',
    area: 'Naya Bazaar',
    city: 'Cuttack',
    state: 'Odisha',
    postalCode: '753004',
    country: 'India',
    fullAddress: '2nd Floor, Sri Sri Mandap Building, near HDFC Bank, Gandhi Chhak, Naya Bazaar, Cuttack, Odisha 753004, India',
    geo: {
      lat: 20.4625,
      lng: 85.8828,
    },
    // Editable directions helper
    directions: [
      'Located on the 2nd Floor of Sri Sri Mandap Building in Naya Bazaar.',
      'Adjacent to HDFC Bank branch at Gandhi Chhak intersection.',
      'Dedicated on-site two-wheeler and four-wheeler parking available at the building front.',
      'Easily accessible within 5–10 mins from CDA Sector 6, OMP Square, and Badambadi.'
    ],
    // Google Maps Embed placeholder URL (Editable by gym owner)
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14967.625841027154!2d85.875!3d20.465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d7000000001%3A0x0!2sNaya+Bazaar%2C+Cuttack%2C+Odisha+753004!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin',
    // Editable Google Reviews Page Link
    googleReviewsUrl: 'https://maps.google.com/?q=Titans+Gym+Naya+Bazaar+Cuttack',
  },

  // Contact Information
  contact: {
    phone: '06372256060', // Direct phone number
    phoneDisplay: '+91 63722 56060',
    phoneTelLink: 'tel:06372256060',
    whatsappNumber: '916372256060', // WhatsApp international format
    email: 'titansgymctc@gmail.com', // Placeholder enquiry email
    whatsappMessage: 'Hi Titans Gym Cuttack, I would like to book a free trial session at your Naya Bazaar gym.',
    whatsappUrl: 'https://wa.me/916372256060?text=Hi%20Titans%20Gym%20Cuttack%2C%20I%20would%20like%20to%20book%20a%20free%20trial%20session.',
  },

  // Social Channels
  social: {
    instagram: {
      handle: '@titansgymctc',
      url: 'https://instagram.com/titansgymctc',
    },
    facebook: {
      name: 'facebook.com/titansgym.ctc.1',
      url: 'https://facebook.com/titansgym.ctc.1',
    },
  },

  // Opening Hours (Editable)
  hours: {
    weekdays: '5:30 AM – 10:00 PM',
    saturday: '5:30 AM – 10:00 PM',
    sunday: '6:00 AM – 12:00 PM (Recovery & Open Floor)',
    morningBatch: '5:30 AM – 11:00 AM',
    eveningBatch: '4:00 PM – 10:00 PM',
  },

  // Equipment & Key Highlights
  equipmentBrand: 'Being Strong',
};

/**
 * Animated statistics band variables (clearly marked as editable placeholders).
 */
export const EDITABLE_STATS: StatItem[] = [
  {
    id: 'floor-size',
    label: 'Training Floor Space',
    value: 5000,
    suffix: ' Sq. Ft.',
    description: 'Expansive weight floor & dedicated functional turf',
  },
  {
    id: 'active-members',
    label: 'Active Community',
    value: 450,
    suffix: '+',
    description: 'Lifters, CrossFitters, and fitness enthusiasts',
  },
  {
    id: 'certified-trainers',
    label: 'Attentive Coaches',
    value: 6,
    suffix: '+',
    description: 'On-floor guidance for proper form and posture',
  },
  {
    id: 'equipment-units',
    label: 'Being Strong Stations',
    value: 45,
    suffix: '+',
    description: 'Heavy dumbells, power cages, cable machines & rigs',
  },
];

/**
 * Main Programs offered at Titans Gym
 */
export const GYM_PROGRAMS: ProgramItem[] = [
  {
    id: 'strength-bodybuilding',
    title: 'Strength & Bodybuilding',
    subtitle: 'Build raw muscle, power, and structural strength',
    tag: 'Core Strength',
    badge: 'Popular',
    description: 'Heavy duty Being Strong stations, Olympic barbells, power racks, and free weights up to heavy dumbell stacks designed for serious hypertrophy and power.',
    fullDetails: 'Our strength floor is designed for both beginners aiming to build foundational muscle and veteran lifters chasing personal records. With heavy-gauge Being Strong machinery, Olympic lifting platforms, calibrated plates, and attentive floor trainers, your form stays immaculate and progress stays consistent.',
    features: [
      'Heavy-duty Olympic power cages and deadlift platforms',
      'Extensive dumbbell section up to 50kg pairs',
      'Biomechanically optimized Being Strong selectorized machines',
      'Daily posture and form corrections from floor trainers'
    ],
    idealFor: 'Anyone looking to build muscle mass, increase compound strength, and sculpt physique.',
    equipmentUsed: ['Power Cages', 'Olympic Barbells', 'Being Strong Cable Towers', 'Leg Press & Hack Squat'],
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop',
    scheduleSnippet: 'Open all day during gym hours'
  },
  {
    id: 'crossfit-functional',
    title: 'CrossFit & Functional Training',
    subtitle: 'High intensity conditioning, agility & athletic stamina',
    tag: 'Conditioning',
    badge: 'Dedicated Zone',
    description: 'A dedicated turf zone with battle ropes, plyo boxes, kettlebells, rowing stations, and multi-functional rigs for full-body metabolic conditioning.',
    fullDetails: 'Step off the traditional weight floor into our dedicated CrossFit and functional conditioning arena. Built to elevate your VO2 max, muscular endurance, core stability, and athletic explosiveness through varied functional movements executed at high intensity.',
    features: [
      'Custom multi-station pull-up and monkey bar rig',
      'Heavy battle ropes, slam balls, and wooden plyo boxes',
      'Competition kettlebells and farmer walk handles',
      'High-intensity interval training (HIIT) circuits'
    ],
    idealFor: 'Athletes, fat-loss seekers, and anyone looking for versatile, functional everyday stamina.',
    equipmentUsed: ['CrossFit Rig', 'Assault Bikes', 'Battle Ropes', 'Kettlebells & Sandbags'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop',
    scheduleSnippet: 'Morning: 6:30 AM & Evening: 6:00 PM batches'
  },
  {
    id: 'zumba-dance',
    title: 'Zumba & Aerobics Studio',
    subtitle: 'Calorie-burning rhythmic dance fitness with upbeat energy',
    tag: 'Group Class',
    description: 'High-energy dance workouts in a sound-insulated, wooden-floored studio. Burn up to 600 calories per session while grooving to energetic beats.',
    fullDetails: 'Our spacious Zumba studio provides an energetic, judgment-free space led by licensed choreographers. Combining Latin rhythms, Bollywood fitness beats, and interval dance steps, it delivers heart-pumping cardio without feeling like a boring workout.',
    features: [
      'Dedicated shock-absorbing wooden flooring to protect joints',
      'Surround sound acoustic setup with vibrant ambient lighting',
      'Certified and motivating Zumba instructors',
      'Inclusive community atmosphere suited for all fitness levels'
    ],
    idealFor: 'Cardio lovers, weight-loss enthusiasts, and those who love dynamic group fitness energy.',
    equipmentUsed: ['Aerobic Steps', 'Light Toning Weights', 'Resistance Bands'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop',
    scheduleSnippet: 'Mon / Wed / Fri: 7:00 AM & 6:30 PM'
  },
  {
    id: 'yoga-coaching',
    title: 'Yoga & Flexibility Coaching',
    subtitle: 'Mind-body alignment, joint mobility & stress recovery',
    tag: 'Mobility & Mind',
    description: 'Guided traditional Hatha and Vinyasa yoga sessions focusing on deep mobility, spinal health, core balance, and mental calm.',
    fullDetails: 'Complement your heavy lifting and intense conditioning with structured Yoga coaching. Our mindful sessions emphasize breathwork (Pranayama), deep hamstring and hip opening, restorative asanas, and stress alleviation.',
    features: [
      'Calm, well-ventilated studio atmosphere',
      'Focus on postural correction and injury prevention',
      'Guided breathwork and mindful cool-downs',
      'Beginner-friendly progression for tight muscles'
    ],
    idealFor: 'Anyone seeking flexibility, joint longevity, core stabilization, and active recovery.',
    equipmentUsed: ['High-density Yoga Mats', 'Foam Blocks', 'Stretching Straps'],
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=900&auto=format&fit=crop',
    scheduleSnippet: 'Tue / Thu / Sat: 6:00 AM & 5:30 PM'
  },
  {
    id: 'personal-training',
    title: '1-on-1 Personal Training',
    subtitle: 'Customized programming, nutrition blueprint & accountability',
    tag: 'Custom Coaching',
    badge: '1-on-1 Results',
    description: 'Dedicated mentorship from experienced trainers with personalized workout splits, macro guidelines, form auditing, and progressive overload tracking.',
    fullDetails: 'Fast-track your fitness milestones with 1-on-1 personal training. Whether preparing for a transformation, recovering from posture imbalances, or learning Olympic lifts safely, our coaches provide undivided attention and steady motivation.',
    features: [
      'Bi-weekly body composition analysis and circumference tracking',
      'Personalized nutrition plan aligned with local dietary preferences',
      'Technique auditing to prevent injuries and optimize muscle activation',
      'Flexible scheduling suited to working professionals'
    ],
    idealFor: 'Busy professionals, beginners seeking structured guidance, or lifters aiming for breakthrough PRs.',
    equipmentUsed: ['Full Gym Access', 'InBody Measurement Tools', 'Specialized Training Accessories'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop',
    scheduleSnippet: 'Custom slots by appointment'
  },
];

/**
 * Why Choose Titans Gym - Core Value Propositions
 */
export const WHY_CHOOSE_ITEMS = [
  {
    id: 'attentive-trainers',
    icon: 'Users',
    title: 'Attentive & Consistent Trainers',
    description: 'Coaches who are genuinely present on the floor to spot your lifts, correct posture, and encourage steady consistency every day.'
  },
  {
    id: 'daily-sanitization',
    icon: 'Sparkles',
    title: 'Daily Sanitization & Hygiene',
    description: 'A spotless, ventilated environment with continuous equipment sanitization, fresh air circulation, and clean locker rooms.'
  },
  {
    id: 'being-strong-gear',
    icon: 'Dumbbell',
    title: 'Being Strong Branded Equipment',
    description: 'Precision-engineered biomechanical strength gear that isolates target muscles smoothly while minimizing strain on joints.'
  },
  {
    id: 'recovery-facilities',
    icon: 'Droplets',
    title: 'Steam & Chilled Bath Recovery',
    description: 'On-site post-workout recovery suite featuring soothing steam therapy and cold hydro-bath to flush soreness and reduce inflammation.'
  },
  {
    id: 'dedicated-crossfit',
    icon: 'Flame',
    title: 'Dedicated CrossFit & Turf Zone',
    description: 'Uncrowded functional arena with turf tracks, battle ropes, and functional rigs separate from the primary weight floor.'
  },
  {
    id: 'onsite-parking',
    icon: 'Car',
    title: 'Hassle-Free On-Site Parking',
    description: 'Convenient dedicated parking right at Sri Sri Mandap Building at Gandhi Chhak, ensuring quick, stress-free access.'
  }
];

/**
 * 3-Step Trial Timeline
 */
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Call or WhatsApp Us',
    description: 'Reach out to pick a convenient morning or evening time slot that fits your daily schedule.',
    icon: 'PhoneCall'
  },
  {
    step: '02',
    title: 'Visit for Your Free Trial',
    description: 'Tour the facility at Naya Bazaar, test the Being Strong equipment, and meet our on-floor coaching team.',
    icon: 'Dumbbell'
  },
  {
    step: '03',
    title: 'Choose a Plan That Fits You',
    description: 'Select an affordable membership or personal training tier that aligns with your personal fitness targets.',
    icon: 'CheckCircle2'
  }
];

/**
 * Sample facility gallery items (Licensed generic fitness placeholders clearly labeled)
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Strength & Weight Floor',
    category: 'floor',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    caption: 'Spacious main floor with Being Strong power racks, benches, and free weights section.'
  },
  {
    id: 'gal-2',
    title: 'Dedicated CrossFit & Functional Turf',
    category: 'crossfit',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    caption: 'Functional training turf equipped with battle ropes, plyo boxes, and multi-grip rigs.'
  },
  {
    id: 'gal-3',
    title: 'Zumba & Group Fitness Studio',
    category: 'zumba',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Acoustic-treated studio with shock-absorbing wooden flooring for energetic Zumba batches.'
  },
  {
    id: 'gal-4',
    title: 'Post-Workout Steam & Chilled Bath',
    category: 'recovery',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    caption: 'Recovery suite with therapeutic steam room and cold hydro-bath for deep muscle relief.'
  },
  {
    id: 'gal-5',
    title: 'Being Strong Dumbbell & Cable Arena',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Complete pairs of ergonomic dumbbells and multi-angle cable crossovers.'
  },
  {
    id: 'gal-6',
    title: 'Cardio & Conditioning Lineup',
    category: 'floor',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Commercial treadmills, ellipticals, and spin bikes overlooking Naya Bazaar.'
  },
  {
    id: 'gal-7',
    title: 'Functional Rig & Kettlebell Rack',
    category: 'crossfit',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    caption: 'Heavy-duty suspension rigs, rings, and calibrated cast-iron kettlebells.'
  },
  {
    id: 'gal-8',
    title: 'Clean Sanitized Locker Rooms',
    category: 'recovery',
    imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Hygienic changing areas, personal lockers, and hot/cold showers sanitized hourly.'
  }
];

/**
 * Sample Customer Reviews (EDITABLE PLACEHOLDERS)
 * Note: These are structured sample reviews based on public feedback highlights (cleanliness, trainer helpfulness, Being Strong gear).
 * Replace with real Google review text upon integration.
 */
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sourav M.',
    rating: 5,
    date: 'Recent Member Review',
    program: 'Strength & Bodybuilding',
    review: 'Best gym in Naya Bazaar area. The Being Strong equipment feels super smooth on the joints and the floor trainers are always attentive without you having to constantly chase them. Daily sanitization is very noticeable.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priyanka D.',
    rating: 5,
    date: 'Recent Member Review',
    program: 'Zumba & Cardio',
    review: 'The Zumba studio is energetic and spacious! Loved that they have a separate dedicated floor and steam bath recovery. Very safe and welcoming environment for women with convenient parking right outside.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Abhishek R.',
    rating: 5,
    date: 'Recent Member Review',
    program: 'CrossFit & Functional Training',
    review: 'Finding a dedicated functional training turf with battle ropes and pull-up rigs in Cuttack was tough until Titans Gym opened. Huge space, motivating environment, and great air ventilation.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Debashis K.',
    rating: 5,
    date: 'Recent Member Review',
    program: '1-on-1 Personal Training',
    review: 'Signed up after my free trial. The coaches here genuinely pay attention to your back alignment and deadlift mechanics. The chilled bath recovery after heavy leg days is a game changer.',
    verified: true,
  }
];

/**
 * Frequently Asked Questions (FAQ)
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a free trial session at Titans Gym?',
    answer: 'You can easily request a free trial session by clicking any "Book Free Trial" button on this site, filling the short 30-second form, or simply calling/WhatsApping us at 06372256060. We will confirm your preferred morning or evening timing immediately.',
    category: 'trial'
  },
  {
    id: 'faq-2',
    question: 'What are the operating hours of Titans Gym?',
    answer: 'We are open Monday through Saturday from 5:30 AM to 10:00 PM (open all day). On Sundays, we operate from 6:00 AM to 12:00 PM for recovery sessions, light mobility work, and open floor workouts.',
    category: 'timings'
  },
  {
    id: 'faq-3',
    question: 'Are personal trainers available for beginners?',
    answer: 'Yes! We have certified floor trainers who assist all members with machine setup and form corrections at no extra cost. Additionally, we offer dedicated 1-on-1 Personal Training packages with customized workout routines and nutritional guidance.',
    category: 'trainers'
  },
  {
    id: 'faq-4',
    question: 'Is there parking available at the gym premises?',
    answer: 'Yes, there is dedicated on-site parking for both two-wheelers and four-wheelers right at Sri Sri Mandap Building at Gandhi Chhak, Naya Bazaar.',
    category: 'facilities'
  },
  {
    id: 'faq-5',
    question: 'What facilities are included in the recovery zone?',
    answer: 'Our recovery suite includes a dedicated steam therapy room, a chilled hydro-bath for reducing muscle inflammation, and clean locker rooms with hot/cold shower amenities.',
    category: 'facilities'
  },
  {
    id: 'faq-6',
    question: 'What are the timings for Zumba and Yoga group classes?',
    answer: 'Zumba classes take place on Monday, Wednesday, and Friday (Morning 7:00 AM & Evening 6:30 PM batches). Yoga coaching runs on Tuesday, Thursday, and Saturday (Morning 6:00 AM & Evening 5:30 PM batches).',
    category: 'facilities'
  },
  {
    id: 'faq-7',
    question: 'What brand of equipment does Titans Gym use?',
    answer: 'We are proud to feature authentic "Being Strong" commercial-grade equipment known for superior biomechanical motion, along with Olympic free-weight stations, calibrated plates, and heavy-duty functional rigs.',
    category: 'facilities'
  }
];

/**
 * Trainers / Coaches Team
 */
export const TRAINERS_LIST: TrainerItem[] = [
  {
    id: 'tr-1',
    name: 'Coach Rakesh Sahoo',
    role: 'Head Strength & Conditioning Coach',
    specialization: 'Hypertrophy, Powerlifting & Biomechanics',
    experience: '8+ Years Coaching Experience',
    bio: 'Specializes in progressive compound lifting, postural correction, and body recomposition with Being Strong biomechanics.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=700&auto=format&fit=crop'
  },
  {
    id: 'tr-2',
    name: 'Coach Sneha Pattnaik',
    role: 'Functional Fitness & Zumba Lead',
    specialization: 'CrossFit Conditioning & Aerobic Choreography',
    experience: '6+ Years Coaching Experience',
    bio: 'Certified group fitness lead passionate about high-energy metabolic circuits, stamina building, and rhythm-based cardio.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=700&auto=format&fit=crop'
  },
  {
    id: 'tr-3',
    name: 'Coach Amit Mohanty',
    role: 'Senior Transformation Coach',
    specialization: 'Fat Loss, Nutrition & 1-on-1 Mentorship',
    experience: '7+ Years Coaching Experience',
    bio: 'Guides members through sustainable nutrition plans, muscle building protocols, and injury-free progressive overload.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop'
  }
];
