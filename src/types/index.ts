export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  fullDetails: string;
  features: string[];
  idealFor: string;
  equipmentUsed: string[];
  imageUrl: string;
  badge?: string;
  scheduleSnippet?: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  program: string;
  review: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'floor' | 'crossfit' | 'zumba' | 'recovery' | 'equipment';
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'trial' | 'membership' | 'facilities' | 'trainers' | 'timings';
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  preferredProgram: string;
  preferredTime: string;
  preferredDate: string;
  goals: string;
  experienceLevel: string;
}
