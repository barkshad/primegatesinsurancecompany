import { Car, Heart, GraduationCap, Building2, ShieldCheck, Clock, UserCheck, Users, Trophy, Activity, Briefcase, FileText, PhoneCall, HelpCircle } from 'lucide-react';
import { NavItem, Partner, Service, Feature, Stat, Testimonial, QuickLink } from './types';

export const COMPANY_NAME = "Primegates Consultants Insurance Agency";
export const IRA_REG_NO = "11000506";
export const PHONE_NUMBER = "+254 700 123 456";
export const WHATSAPP_NUMBER = "254700123456";
export const EMAIL_ADDRESS = "info@primegates.co.ke";
export const LOCATION = "Nairobi, Kenya";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
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
    id: 'motor-private',
    title: 'Motor Private',
    description: 'Comprehensive coverage for your personal vehicle against accidents, theft, and fire.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'medical-family',
    title: 'Family Health (Maisha)',
    description: 'Access the best hospitals in Kenya with our comprehensive inpatient and outpatient covers.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1536618753232-a5d7c43339bf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'education',
    title: 'Education Policy',
    description: 'Guarantee your child’s quality education regardless of what the future holds.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'personal-accident',
    title: 'Personal Accident',
    description: 'Financial protection for you and your loved ones in case of accidental injury or disability.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=800&auto=format&fit=crop'
  }
];

export const BUSINESS_SERVICES: Service[] = [
  {
    id: 'sme-comprehensive',
    title: 'SME Comprehensive',
    description: 'An all-in-one package covering Fire, Burglary, and Business Interruption for small businesses.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'wiba',
    title: 'WIBA & Employers Liability',
    description: 'Mandatory cover protecting your employees against work-related injuries and illnesses.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'motor-commercial',
    title: 'Motor Commercial',
    description: 'Secure your fleet or commercial vehicles with coverage tailored for business use.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'professional-indemnity',
    title: 'Professional Indemnity',
    description: 'Protect your professional practice against claims of negligence or malpractice.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
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
    title: 'Personalized Support',
    description: 'Dedicated account managers who understand the unique needs of Kenyan families and businesses.',
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
    content: 'Primegates handled my shop\'s burglary claim with such professionalism. I was paid out within 14 days. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'David Omondi',
    role: 'Architect',
    content: 'Their education policy for my kids is transparent and affordable. The team took time to explain every detail.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Grace Wanjiku',
    role: 'HR Manager',
    content: 'We switched our company medical cover to Primegates. The transition was seamless and the service has been excellent.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  { title: 'File a Claim', description: 'Start your claims process instantly.', icon: FileText, href: '#quote' },
  { title: 'Talk to an Agent', description: 'Get professional advice now.', icon: PhoneCall, href: '#quote' },
  { title: 'FAQs', description: 'Answers to common questions.', icon: HelpCircle, href: '#why-us' },
];
