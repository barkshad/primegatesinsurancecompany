import { Car, Heart, GraduationCap, Building2, ShieldCheck, Clock, UserCheck, Users, Trophy, TrendingUp, Briefcase, FileText, PhoneCall, HelpCircle } from 'lucide-react';
import { NavItem, Partner, Service, Feature, Stat, Testimonial, QuickLink, FAQItem } from './types';

export const COMPANY_NAME = "Primegates Insurance Agency";
export const IRA_REG_NO = "11000506";
export const PHONE_NUMBER = "0715 030 805 / 0103 848 478";
export const WHATSAPP_NUMBER = "254715030805";
export const EMAIL_ADDRESS = "primegatesinsurance@gmail.com";
export const LOCATION = "Nairobi, Kenya";
export const TAGLINE = "We Serve You Better";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
];

export const PARTNERS: Partner[] = [
  { name: 'Jubilee Insurance', logo: 'Jubilee' },
  { name: 'Britam', logo: 'Britam' },
  { name: 'Old Mutual', logo: 'Old Mutual' },
  { name: 'CIC Group', logo: 'CIC' },
  { name: 'APA Insurance', logo: 'APA' },
  { name: 'UAP Old Mutual', logo: 'UAP' },
  { name: 'Directline', logo: 'Directline' },
  { name: 'GA Insurance', logo: 'GA' },
];

export const PERSONAL_SERVICES: Service[] = [
  {
    id: 'motor-private',
    title: 'Motor Private',
    description: 'Comprehensive, Third Party Fire & Theft, and TPO covers for your personal car.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'medical-family',
    title: 'Medical & Health (Maisha)',
    description: 'Access the best hospitals in Kenya (Aga Khan, Nairobi Hospital, etc.) with our inpatient and outpatient covers.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1536618753232-a5d7c43339bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'life-education',
    title: 'Life & Education',
    description: 'Secure your children’s education (High School & University) and your family’s future.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'investments',
    title: 'Investment Plans',
    description: 'Grow your wealth with high-yield Money Market Funds (MMF) and fixed income solutions.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop'
  }
];

export const BUSINESS_SERVICES: Service[] = [
  {
    id: 'motor-commercial',
    title: 'Motor Commercial & PSV',
    description: 'Specialized coverage for Matatus, Ubers, Boda Bodas, and corporate fleets.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'corporate-sme',
    title: 'Corporate & SME',
    description: 'Tailored insurance packages covering Fire, Burglary, All Risks, and Business Interruption.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'wiba',
    title: 'WIBA (Employee Benefits)',
    description: 'Mandatory WIBA Plus covers protecting your employees against work-related injuries.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'professional-indemnity',
    title: 'Professional Indemnity',
    description: 'Protect your professional practice (Doctors, Lawyers, Engineers) against negligence claims.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'claims',
    title: 'Fast Claims Advocacy',
    description: 'We fight for your fair compensation. 98% of our documented claims are settled promptly.',
    icon: Clock
  },
  {
    id: 'regulated',
    title: 'IRA Regulated',
    description: `Fully licensed by the Insurance Regulatory Authority (Reg No: ${IRA_REG_NO}). Your policy is safe.`,
    icon: ShieldCheck
  },
  {
    id: 'support',
    title: 'We Serve You Better',
    description: 'Personalized service is our hallmark. We offer door-to-door policy delivery within Nairobi.',
    icon: UserCheck
  }
];

export const STATS: Stat[] = [
  { label: 'Years of Service', value: '15+', icon: Trophy },
  { label: 'Happy Clients', value: '2,500+', icon: Users },
  { label: 'Claims Paid', value: '98%', icon: ShieldCheck },
  { label: 'Insurers', value: '25+', icon: Building2 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Kamau',
    role: 'SME Owner, Nairobi CBD',
    content: 'Primegates sorted my shop\'s burglary claim very fast. I was paid out within 14 days. Truly "We Serve You Better"!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'David Omondi',
    role: 'Uber Fleet Owner',
    content: 'I insure all my cars with them. The PSV rates are competitive and getting the digital stickers is instant.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Grace Wanjiku',
    role: 'HR Manager, Mombasa',
    content: 'We switched our staff medical cover to Primegates. The transition was seamless and they gave us a great presentation.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  { title: 'File a Claim', description: 'Start your claims process instantly.', icon: FileText, href: '#quote' },
  { title: 'Talk to an Agent', description: 'Get professional advice now.', icon: PhoneCall, href: '#quote' },
  { title: 'Digital Sticker', description: 'Get your insurance certificate.', icon: HelpCircle, href: '#quote' },
];

export const FAQS: FAQItem[] = [
  { 
    question: "How long does it take to get my insurance sticker?", 
    answer: "For Motor Private and Commercial, we issue Digital Insurance Certificates immediately after payment. You can print it or save it on your phone." 
  },
  { 
    question: "Do you insure Matatus and Boda Bodas?", 
    answer: "Yes, we specialize in Motor Commercial/PSV covers for Matatus and Boda Bodas, ensuring you are compliant with NTSA regulations." 
  },
  { 
    question: "Can I pay for my insurance in installments?", 
    answer: "Yes, we facilitate Insurance Premium Financing (IPF) which allows you to pay your comprehensive insurance premiums in up to 10 monthly installments." 
  },
  { 
    question: "What documents do I need for a quote?", 
    answer: "For a quick quote, just share your Car Make, Model, Year, and Value. For medical, we need the ages of family members." 
  },
  {
    question: "Are you regulated?",
    answer: `Yes, ${COMPANY_NAME} is a fully licensed insurance intermediary regulated by the IRA (License No: ${IRA_REG_NO}).`
  }
];
