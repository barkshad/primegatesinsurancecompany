import { WebsiteContent } from './types';

export const INITIAL_CONTENT: WebsiteContent = {
  general: {
    companyName: "Primegates Insurance Agency",
    iraRegNo: "11000506",
    phoneNumber: "0715 030 805 / 0103 848 478",
    whatsappNumber: "254715030805",
    email: "primegatesinsurance@gmail.com",
    location: "Nairobi, Kenya",
    tagline: "We Serve You Better"
  },
  navigation: [
    { label: 'Home', href: '/#hero' },
    { label: 'Our Solutions', href: '/#solutions' },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'FAQs', href: '/#faq' },
  ],
  hero: {
    headline: "Live Free. We've Got You Covered.",
    subHeadline: "IRA Regulated • Reg No: 11000506",
    description: "Experience peace of mind with Primegates. We simplify insurance for Medical, Life, Corporate, and Investments so you can focus on what matters most.",
    backgroundImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
  },
  partners: [
    { name: 'Jubilee Insurance', logo: 'Jubilee' },
    { name: 'Britam', logo: 'Britam' },
    { name: 'Old Mutual', logo: 'Old Mutual' },
    { name: 'CIC Group', logo: 'CIC' },
    { name: 'APA Insurance', logo: 'APA' },
    { name: 'UAP Old Mutual', logo: 'UAP' },
    { name: 'Directline', logo: 'Directline' },
    { name: 'GA Insurance', logo: 'GA' },
  ],
  personalServices: [
    {
      id: 'motor-private',
      title: 'Motor Private',
      description: 'Comprehensive, Third Party Fire & Theft, and TPO covers for your personal car.',
      longDescription: 'Our Motor Private insurance provides complete protection for your personal vehicle. Whether you are looking for basic Third Party Only (TPO) coverage to meet legal requirements, or fully Comprehensive cover that protects against accidents, theft, fire, and malicious damage, we have the right policy for you. We ensure fast valuations and instant digital certificates.',
      benefits: [
        'Free Valuation for Comprehensive Covers',
        'Instant Digital Insurance Certificates',
        'Protection against Theft & Fire',
        'Passenger Liability Coverage',
        'Windscreen and Radio Cassette coverage'
      ],
      icon: 'Car',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'medical-family',
      title: 'Medical & Health (Maisha)',
      description: 'Access the best hospitals in Kenya (Aga Khan, Nairobi Hospital, etc.) with our inpatient and outpatient covers.',
      longDescription: 'Your health is your wealth. Our Medical & Health insurance packages (Maisha Cover) grant you access to a wide network of premium hospitals across Kenya. We offer flexible plans covering Inpatient (hospitalization) and Outpatient services, ensuring you and your family receive the best care without financial strain.',
      benefits: [
        'Access to major hospitals (Aga Khan, Nairobi Hospital, Mater)',
        'Comprehensive Inpatient & Outpatient cover',
        'Maternity cover included',
        'Dental & Optical benefits',
        'Annual health checkups'
      ],
      icon: 'Heart',
      image: 'https://images.unsplash.com/photo-1536618753232-a5d7c43339bf?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'life-education',
      title: 'Life & Education',
      description: 'Secure your children’s education (High School & University) and your family’s future.',
      longDescription: 'Planning for the future starts today. Our Life and Education policies are designed to secure your family\'s financial stability and guarantee your children\'s education, regardless of life\'s uncertainties. From endowment policies to pure term life assurance, we help you build a safety net.',
      benefits: [
        'Guaranteed Education payouts',
        'Tax relief benefits on premiums',
        'Life cover with critical illness riders',
        'Flexible maturity periods (5-20 years)',
        'Bonuses declared annually'
      ],
      icon: 'GraduationCap',
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'investments',
      title: 'Investment Plans',
      description: 'Grow your wealth with high-yield Money Market Funds (MMF) and fixed income solutions.',
      longDescription: 'Make your money work for you. We partner with top-tier fund managers to offer high-yield Money Market Funds (MMF) and fixed-income investment solutions. Whether you are saving for a project, emergency fund, or wealth accumulation, our investment options offer competitive interest rates superior to standard bank deposits.',
      benefits: [
        'High annual yield rates (13-16%)',
        'Capital preservation guarantee',
        'Easy liquidity (withdraw anytime)',
        'Low management fees',
        'Compound interest growth'
      ],
      icon: 'TrendingUp',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop'
    }
  ],
  businessServices: [
    {
      id: 'motor-commercial',
      title: 'Motor Commercial & PSV',
      description: 'Specialized coverage for Matatus, Ubers, Boda Bodas, and corporate fleets.',
      longDescription: 'Keep your business moving with our Motor Commercial and PSV insurance. We understand the unique risks of the transport sector, offering specialized covers for PSV Matatus, Uber/Bolt taxi fleets, Boda Bodas, and heavy commercial trucks. We help you stay compliant with NTSA regulations while protecting your assets.',
      benefits: [
        'PSV Matatu & Taxi specific covers',
        'Fleet management discounts',
        'Passenger Legal Liability (PLL)',
        'Fast claims processing for business continuity',
        'Flexible premium payment plans'
      ],
      icon: 'Car',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'corporate-sme',
      title: 'Corporate & SME',
      description: 'Tailored insurance packages covering Fire, Burglary, All Risks, and Business Interruption.',
      longDescription: 'Protect your business from the unexpected. Our Corporate and SME packages provide a holistic safety net against risks like Fire, Burglary, Theft, and Political Violence. We also offer Business Interruption covers to ensure your revenue stream is protected during recovery periods.',
      benefits: [
        'Fire & Perils coverage',
        'Burglary & Theft protection',
        'Business Interruption compensation',
        'Goods in Transit (GIT) cover',
        'Electronic Equipment protection'
      ],
      icon: 'Building2',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'wiba',
      title: 'WIBA (Employee Benefits)',
      description: 'Mandatory WIBA Plus covers protecting your employees against work-related injuries.',
      longDescription: 'Compliance meets care. The Work Injury Benefits Act (WIBA) requires employers to insure employees against work-related injuries and diseases. Our WIBA Plus policies go a step further, offering 24-hour coverage even outside the workplace, ensuring your team feels valued and protected.',
      benefits: [
        'Coverage for accidental death & disability',
        'Medical expenses reimbursement',
        'Funeral expense coverage',
        'Occupational illness coverage',
        '24-hour WIBA Plus options available'
      ],
      icon: 'Users',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'professional-indemnity',
      title: 'Professional Indemnity',
      description: 'Protect your professional practice (Doctors, Lawyers, Engineers) against negligence claims.',
      longDescription: 'In professional practice, your reputation is everything. Our Professional Indemnity cover protects Doctors, Lawyers, Accountants, and Engineers against claims of negligence, errors, or omissions arising from their professional duties. We cover legal defense costs and compensation claims.',
      benefits: [
        'Legal defense costs coverage',
        'Protection against negligence claims',
        'Coverage for defamation/libel',
        'Loss of documents coverage',
        'Tailored limits of liability'
      ],
      icon: 'Briefcase',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
    }
  ],
  features: [
    {
      id: 'claims',
      title: 'Fast Claims Advocacy',
      description: 'We fight for your fair compensation. 98% of our documented claims are settled promptly.',
      icon: 'Clock'
    },
    {
      id: 'regulated',
      title: 'IRA Regulated',
      description: 'Fully licensed by the Insurance Regulatory Authority. Your policy is safe.',
      icon: 'ShieldCheck'
    },
    {
      id: 'support',
      title: 'We Serve You Better',
      description: 'Personalized service is our hallmark. We offer door-to-door policy delivery within Nairobi.',
      icon: 'UserCheck'
    }
  ],
  stats: [
    { label: 'Years of Service', value: '15+', icon: 'Trophy' },
    { label: 'Happy Clients', value: '2,500+', icon: 'Users' },
    { label: 'Claims Paid', value: '98%', icon: 'ShieldCheck' },
    { label: 'Insurers', value: '25+', icon: 'Building2' },
  ],
  testimonials: [
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
  ],
  quoteSection: {
    title: "Get Your Free Quote Today",
    description: "Fill out the form and our Nairobi-based team will contact you within 15 minutes with a personalized plan.",
    benefits: [
      "Instant Digital Certificates",
      "Flexible Payment Plans (IPF)",
      "IRA Regulated Trust"
    ]
  },
  quickLinks: [
    { title: 'File a Claim', description: 'Start your claims process instantly.', icon: 'FileText', href: '#quote' },
    { title: 'Talk to an Agent', description: 'Get professional advice now.', icon: 'PhoneCall', href: '#quote' },
    { title: 'Digital Sticker', description: 'Get your insurance certificate.', icon: 'HelpCircle', href: '#quote' },
  ],
  faqs: [
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
      answer: "Yes, Primegates Insurance Agency is a fully licensed insurance intermediary regulated by the IRA."
    }
  ],
  footer: {
    aboutText: "Your trusted partner for Medical, Life, Corporate, and Investment insurance solutions in Kenya. We are dedicated to providing peace of mind through reliable coverage.",
    copyrightText: "All rights reserved."
  }
};