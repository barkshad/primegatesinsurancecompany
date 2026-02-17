import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
  logo: string; // Placeholder text or URL
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FormData {
  name: string;
  phone: string;
  insuranceType: string;
  message: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface QuickLink {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
