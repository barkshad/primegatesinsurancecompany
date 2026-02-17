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
];

export const PERSONAL_SERVICES: Service[] = [
  {
    id: 'medical-family',
    title: 'Medical & Health',
    description: 'Comprehensive inpatient and outpatient covers for individuals and families (Maisha).',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1536618753232-a5d7c43339bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'life-education',
    title: 'Life & Education',
    description: 'Secure your children’s education and your family’s future with our life assurance policies.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'investments',
    title: 'Investment Plans',
    description: 'Grow your wealth with high-yield investment solutions and secure money market funds.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'motor-private',
    title: 'Motor Private',
    description: 'Comprehensive coverage for your personal vehicle against accidents, theft, and fire.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
  }
];

export const BUSINESS_SERVICES: Service[] = [
  {
    id: 'corporate-sme',
    title: 'Corporate & SME',
    description: 'Tailored insurance packages covering assets, liabilities, and business interruption.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'wiba',
    title: 'WIBA (Employee Benefits)',
    description: 'Mandatory cover protecting your employees against work-related injuries and illnesses.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'professional-indemnity',
    title: 'Professional Indemnity',
    description: 'Protect your professional practice against claims of negligence or malpractice.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'motor-commercial',
    title: 'Motor Commercial',
    description: 'Secure your fleet or commercial vehicles with coverage tailored for business use.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'claims',
    title: 'Fast Claims Advocacy',
    description: 'We fight for your fair compensation, ensuring claims are processed with speed and transparency.',
    icon: Clock
  },
  {
    id: 'regulated',
    title: 'IRA Regulated',
    description: `Fully licensed and regulated by the Insurance Regulatory Authority (Reg No: ${IRA_REG_NO}).`,
    icon: ShieldCheck
  },
  {
    id: 'support',
    title: 'We Serve You Better',
    description: 'Dedicated account managers who understand your unique needs. Service is our core promise.',
    icon: UserCheck
  }
];

export const STATS: Stat[] = [
  { label: 'Years of Experience', value: '15+', icon: Trophy },
  { label: 'Happy Clients', value: '2,500+', icon: Users },
  { label: 'Claims Settled', value: '98%', icon: ShieldCheck },
  { label: 'Partner Insurers', value: '20+', icon: Building2 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Kamau',
    role: 'SME Owner, Nairobi',
    content: 'Primegates handled my shop\'s burglary claim with such professionalism. I was paid out within 14 days. We serve you better indeed!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'David Omondi',
    role: 'Architect',
    content: 'Their education policy and investment advice for my kids is transparent. The team took time to explain every detail.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Grace Wanjiku',
    role: 'HR Manager',
    content: 'We switched our corporate medical cover to Primegates. The transition was seamless and the service has been excellent.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  { title: 'File a Claim', description: 'Start your claims process instantly.', icon: FileText, href: '#quote' },
  { title: 'Talk to an Agent', description: 'Get professional advice now.', icon: PhoneCall, href: '#quote' },
  { title: 'FAQs', description: 'Answers to common questions.', icon: HelpCircle, href: '#faq' },
];

export const FAQS: FAQItem[] = [
  { 
    question: "How long does it take to process a claim?", 
    answer: "Simple claims are often processed within 48 hours. More complex claims may take 7-14 working days depending on the insurer and documentation provided. We advocate for you to speed this up." 
  },
  { 
    question: "Are you regulated by the IRA?", 
    answer: `Yes, ${COMPANY_NAME} is fully licensed and regulated by the Insurance Regulatory Authority (IRA) in Kenya.` 
  },
  { 
    question: "Do you offer Investment services?", 
    answer: "Yes, we offer various investment plans including education policies and money market funds to help you grow your wealth securely." 
  },
  { 
    question: "What documents do I need for a car insurance quote?", 
    answer: "For a quick quote, we typically need your car's make, model, year of manufacture, and estimated value. A copy of the logbook helps for accuracy, but is not mandatory for the initial quote." 
  },
  {
    question: "Do you offer insurance for businesses?",
    answer: "Absolutely. We specialize in SME packages, WIBA, Public Liability, Corporate Medical schemes, and Fire & Burglary policies tailored for Kenyan businesses."
  }
];