export interface HomeServiceItem {
  id: string;
  title: string;
  category: 'Nursing' | 'Physiotherapy' | 'Doctor Visit' | 'Elderly Care' | 'Sample Collection' | 'Medicine Delivery' | 'Medical Equipment';
  iconName: string;
  image: string;
  description: string;
  process: string[];
  eligibility: string;
  duration: string;
  startingPrice: number;
  priceUnit: string;
}

export const HOME_SERVICES_DATA: HomeServiceItem[] = [
  {
    id: 'hs-nursing',
    title: '24/7 Home Nursing & ICU Care',
    category: 'Nursing',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    description: 'Certified GNM/B.Sc ICU-trained nurses for round-the-clock patient care, IV infusion, catheterization, tracheostomy, and bedridden wound dressing.',
    process: [
      'Doctor prescription verification & clinical nursing assessment',
      'Assignment of certified ICU nurse matched to patient needs',
      'Daily vital signs tracking & medication administration',
      'Weekly doctor review & digital nursing charts logging',
    ],
    eligibility: 'Post-operative recovery, bedridden ICU step-down patients, tracheostomy/Ryle tube care.',
    duration: '12 Hours Shift or 24 Hours Live-In',
    startingPrice: 1200,
    priceUnit: 'per 12-Hour Shift',
  },
  {
    id: 'hs-physiotherapy',
    title: 'Doorstep Physiotherapy & Rehabilitation',
    category: 'Physiotherapy',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    description: 'Expert orthopedic and neurological physiotherapists delivering stroke paralysis rehab, knee/hip joint replacement recovery, and back pain therapy at home.',
    process: [
      'In-home musculoskeletal & mobility evaluation',
      'Custom exercise & electrotherapy plan creation',
      'Daily 45-minute guided exercise sessions',
      'Progress milestone reporting to consulting surgeon',
    ],
    eligibility: 'Post knee/hip replacement, stroke paralysis, severe back/neck pain, elderly balance training.',
    duration: '45 - 60 Minutes per Session',
    startingPrice: 700,
    priceUnit: 'per Session',
  },
  {
    id: 'hs-doctor-visit',
    title: 'Senior Physician Doctor Home Visit',
    category: 'Doctor Visit',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive house calls by experienced internal medicine consultants for physical exam, emergency illness check, and prescription adjustments.',
    process: [
      'Telephonic triage & slot booking',
      'Physician house visit with medical bag & ECG kit',
      'On-site physical examination & vital check',
      'Immediate digital prescription & lab order issuance',
    ],
    eligibility: 'Elderly patients unable to travel to hospital, chronic fever, acute flare-ups, mobility restrictions.',
    duration: '30 - 45 Minutes Visit',
    startingPrice: 1500,
    priceUnit: 'per Visit',
  },
  {
    id: 'hs-elderly-care',
    title: 'Geriatric Attendant & Elderly Care',
    category: 'Elderly Care',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    description: 'Compassionate trained caregivers assisting senior citizens with daily hygiene, bathing, feeding, mobility assistance, medication reminders, and companionship.',
    process: [
      'Family consultation & caregiver matching',
      'Daily routine management & assistance',
      'Safe transfer & mobility support',
      'Regular updates to family members',
    ],
    eligibility: 'Senior citizens living alone, dementia/Alzheimer patients, frail elderly needing daily support.',
    duration: '8 Hours / 12 Hours / 24 Hours',
    startingPrice: 800,
    priceUnit: 'per 12-Hour Shift',
  },
  {
    id: 'hs-sample-collection',
    title: 'Free Doorstep Lab Sample Collection',
    category: 'Sample Collection',
    iconName: 'TestTube',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    description: 'NABL certified phlebotomists visit your home in temperature-controlled vacutainer kits for blood, urine, and pathology sample collection.',
    process: [
      'Select required lab test or health package',
      'Phlebotomist home arrival in preferred morning slot',
      'Hygienic single-use needle blood draw',
      'Digital report delivery via SMS/Email in 6-12 hours',
    ],
    eligibility: 'All individuals, seniors, pregnant women, and busy professionals.',
    duration: '15 Minutes Collection Slot',
    startingPrice: 0,
    priceUnit: 'FREE Home Pickup',
  },
  {
    id: 'hs-medicine-delivery',
    title: 'Same-Day Prescription Medicine Delivery',
    category: 'Medicine Delivery',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    description: 'Upload your doctor prescription online for 100% genuine hospital pharmacy medicine delivery to your home with up to 15% discount.',
    process: [
      'Upload prescription photo or PDF',
      'Pharmacist verification & order confirmation',
      'Temperature-controlled eco-packaging',
      'Doorstep delivery within 3 hours in Pune/Pimpri',
    ],
    eligibility: 'Patients needing ongoing chronic medications or acute prescriptions.',
    duration: 'Within 3 Hours Delivery',
    startingPrice: 0,
    priceUnit: 'Free Delivery above ₹500',
  },
  {
    id: 'hs-equipment-rental',
    title: 'Medical Equipment Rental & Sale',
    category: 'Medical Equipment',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    description: 'Rent or buy hospital-grade Medical ICU Beds, Oxygen Concentrators (5L/10L), CPAP/BiPAP Machines, Suction Units, and Wheelchairs.',
    process: [
      'Select required equipment & rental duration',
      'Same-day doorstep delivery & biomedical engineer setup',
      'Demonstration to family members & emergency backup replacement',
      'Hassle-free pickup upon recovery',
    ],
    eligibility: 'ICU step-down patients, respiratory therapy needs, post-surgery mobility support.',
    duration: 'Weekly / Monthly Rental Plans',
    startingPrice: 2500,
    priceUnit: 'per Month (Oxygen Concentrator)',
  },
];
