export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
  logo: string; 
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  icon: string;
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
  icon: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteSection {
  title: string;
  description: string;
  benefits: string[]; // List of checkmark items
}

export interface FooterSection {
  aboutText: string;
  copyrightText: string;
}

// Global Content State Interface
export interface WebsiteContent {
  general: {
    companyName: string;
    iraRegNo: string;
    phoneNumber: string;
    whatsappNumber: string;
    email: string;
    location: string;
    tagline: string;
  };
  navigation: NavItem[];
  hero: {
    headline: string;
    subHeadline: string;
    description: string;
    backgroundImage: string;
  };
  partners: Partner[];
  personalServices: Service[];
  businessServices: Service[];
  features: Feature[];
  stats: Stat[];
  testimonials: Testimonial[];
  quoteSection: QuoteSection;
  quickLinks: QuickLink[];
  faqs: FAQItem[];
  footer: FooterSection;
}