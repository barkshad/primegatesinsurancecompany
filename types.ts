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
  icon: string; // Changed from LucideIcon to string for serialization
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // Changed from LucideIcon to string
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
  icon: string; // Changed from LucideIcon to string
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
  icon: string; // Changed from LucideIcon to string
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
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
  quickLinks: QuickLink[];
  faqs: FAQItem[];
}
