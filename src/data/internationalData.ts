export interface WhyIndiaAdvantage {
  id: string;
  title: string;
  stat: string;
  description: string;
  iconName: string;
}

export interface CareCoordinator {
  id: string;
  name: string;
  role: string;
  photo: string;
  languages: string[];
  contactEmail: string;
  whatsappPhone: string;
  regionFocus: string;
}

export interface InternationalTreatmentStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface AccommodationPartner {
  id: string;
  name: string;
  type: string;
  distance: string;
  amenities: string[];
  image: string;
}

export const WHY_INDIA_ADVANTAGES: WhyIndiaAdvantage[] = [
  {
    id: 'adv-cost',
    title: 'Significant Cost Savings',
    stat: 'Up to 70% Less',
    description: 'World-class medical surgeries at 60-70% lower cost compared to US, UK, and European hospitals without compromising clinical quality.',
    iconName: 'DollarSign',
  },
  {
    id: 'adv-wait',
    title: 'Zero Waiting Period',
    stat: 'Immediate Care',
    description: 'Instant admission and priority surgical scheduling for critical procedures like organ transplants, bypass surgery, and joint replacement.',
    iconName: 'Clock',
  },
  {
    id: 'adv-accreditation',
    title: 'JCI & NABH Accreditation',
    stat: 'Gold Standard',
    description: 'Joint Commission International (JCI) standards ensuring rigorous infection control, safety protocols, and ultra-clean room ICUs.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'adv-surgeons',
    title: 'Western-Trained Surgeons',
    stat: '25+ Yrs Exp',
    description: 'Renowned clinical specialists trained at top US/UK institutes with experience of over 10,000 successful surgeries.',
    iconName: 'UserCheck',
  },
];

export const CARE_COORDINATORS_DATA: CareCoordinator[] = [
  {
    id: 'coord-1',
    name: 'Tariq Al-Mansoor',
    role: 'Senior International Patient Director (Middle East & GCC)',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    languages: ['Arabic', 'English', 'Hindi'],
    contactEmail: 'tariq.mansoor@medicarehospitals.in',
    whatsappPhone: '+91 98230 99001',
    regionFocus: 'UAE, Saudi Arabia, Oman, Kuwait, Qatar, Bahrain',
  },
  {
    id: 'coord-2',
    name: 'Dr. Elena Rostov',
    role: 'International Patient Manager (CIS & Eastern Europe)',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    languages: ['Russian', 'English'],
    contactEmail: 'elena.rostov@medicarehospitals.in',
    whatsappPhone: '+91 98230 99002',
    regionFocus: 'Uzbekistan, Kazakhstan, Tajikistan, Russia',
  },
  {
    id: 'coord-3',
    name: 'Kofi Mensah',
    role: 'International Relations Officer (African Continent)',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    languages: ['French', 'Swahili', 'English'],
    contactEmail: 'kofi.mensah@medicarehospitals.in',
    whatsappPhone: '+91 98230 99003',
    regionFocus: 'Kenya, Nigeria, Ethiopia, Tanzania, Ghana',
  },
];

export const INTERNATIONAL_STEPS_DATA: InternationalTreatmentStep[] = [
  {
    stepNumber: 1,
    title: 'Free Online Medical Opinion',
    subtitle: 'Upload Reports',
    description: 'Send medical reports & scans to receive a free, comprehensive treatment plan and cost estimate within 24 hours from senior consultants.',
    iconName: 'FileText',
  },
  {
    stepNumber: 2,
    title: 'Medical Visa (M-Visa) Support',
    subtitle: 'Visa Invitation Letter',
    description: 'We issue an official Medical Visa Invitation Letter to the Indian Embassy in your home country within 12 hours for fast-track M-Visa stamping.',
    iconName: 'Passport',
  },
  {
    stepNumber: 3,
    title: 'Airport Welcome & Pickup',
    subtitle: 'Private AC Transfer',
    description: 'Our international airport desk team greets you at Mumbai or Pune Airport with a dedicated driver, private vehicle, and interpreter.',
    iconName: 'Car',
  },
  {
    stepNumber: 4,
    title: 'Hospitalization & Surgery',
    subtitle: 'Priority Care',
    description: 'Direct admission to private luxury international suites with 24/7 dedicated nursing, personal chef for preferred cuisine, and surgery.',
    iconName: 'Stethoscope',
  },
  {
    stepNumber: 5,
    title: 'Post-Op Recovery & Concierge',
    subtitle: 'Healing Environment',
    description: 'Relax in partner 5-star serviced apartments near the hospital with regular doctor visits, physiotherapy, and city sightseeing assistance.',
    iconName: 'Home',
  },
  {
    stepNumber: 6,
    title: 'Fly Home & Tele-Follow-up',
    subtitle: 'Continued Care',
    description: 'Receive complete medical discharge summaries and enjoy complimentary lifelong virtual tele-consultations with your operating surgeon.',
    iconName: 'PlaneTakeoff',
  },
];

export const ACCOMMODATION_PARTNERS_DATA: AccommodationPartner[] = [
  {
    id: 'acc-1',
    name: 'The Orchid Grand Medical Suites',
    type: '5-Star Serviced Executive Apartments',
    distance: '0.5 km from Hospital (2 Mins Drive)',
    amenities: ['Kitchenette', 'Halal / Custom Food', 'Wheelchair Ramp', '24/7 Nurse Call'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'acc-2',
    name: 'Novotel Healthcare Residency',
    type: '4-Star Luxury Partner Hotel',
    distance: '1.2 km from Hospital (5 Mins Drive)',
    amenities: ['Complimentary Hospital Shuttle', 'Multilingual Staff', 'High-Speed Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
  },
];

export interface GlobalAssistanceProvider {
  id: string;
  name: string;
  badge: string;
  matter: string;
  features: string[];
  coverage: string;
}

export const GLOBAL_ASSISTANCE_PROVIDERS: GlobalAssistanceProvider[] = [
  {
    id: 'prov-1',
    name: 'Cigna Global Health',
    badge: 'Direct Cashless Settlement',
    matter: 'Comprehensive 100% cashless pre-authorisation for inpatient hospitalizations, complex surgeries, organ transplants, and post-op rehabilitation with zero out-of-pocket stress.',
    features: [
      'Fast 2-Hour Pre-Auth Guarantee',
      '100% Inpatient Surgery Cover',
      'Dedicated Cigna Case Officer'
    ],
    coverage: 'Global Expat & Traveler Health Shield',
  },
  {
    id: 'prov-2',
    name: 'Bupa International',
    badge: 'Direct GOP Billing',
    matter: 'Seamless Guarantee of Payment (GOP) processing covering international surgeries, ICU admissions, chemotherapy, and advanced 3D robotic procedures.',
    features: [
      'Instant GOP Issuance',
      'Full ICU & Room Rent Coverage',
      'Post-Discharge Medication Cover'
    ],
    coverage: 'Worldwide Elite Healthcare Plan',
  },
  {
    id: 'prov-3',
    name: 'Allianz Care Global',
    badge: 'Direct Settlement Desk',
    matter: 'Direct billing desk for Allianz Care policyholders across Europe, Middle East, and Asia with 24/7 claim settlement support and emergency evacuation clearance.',
    features: [
      'Zero Out-of-Pocket Admission',
      'Emergency Air Ambulance Support',
      'Multilingual Claim Concierge'
    ],
    coverage: 'International Executive Protection',
  },
  {
    id: 'prov-4',
    name: 'Aetna International',
    badge: 'Preferred Provider Network',
    matter: 'Tier-1 network partnership supporting direct pre-approval for complex cardiac procedures, joint replacements, oncology, and neurosurgery.',
    features: [
      'Tier-1 Network Discounts',
      'Direct Billing to Aetna US/Global',
      'Dedicated Patient Liaison'
    ],
    coverage: 'Global Comprehensive Medical Plan',
  },
  {
    id: 'prov-5',
    name: 'MetLife Worldwide',
    badge: '24/7 Cashless Approval',
    matter: 'Instant cashless approval and direct settlement for international corporate employees, diplomats, and expatriates seeking super-specialty treatment.',
    features: [
      'Rapid Cashless Pre-Approval',
      'Comprehensive Surgical Cover',
      'Family Stay & Transport Support'
    ],
    coverage: 'Worldwide Corporate & Expat Care',
  },
  {
    id: 'prov-6',
    name: 'AXA Global Healthcare',
    badge: 'Direct Billing Network',
    matter: 'End-to-end cashless hospitalization, diagnostic imaging (3T MRI, 128-Slice CT), and specialized rehabilitation coverage backed by AXA Global Assistance.',
    features: [
      'Instant Digital GOP Approval',
      'Complete Diagnostic & OPD Cover',
      'Specialist Consultation Billing'
    ],
    coverage: 'AXA International Health Shield',
  },
  {
    id: 'prov-7',
    name: 'GMC Services International',
    badge: 'Diplomatic & Expat Desk',
    matter: 'Dedicated medical concierge for embassy personnel, UN delegates, and international organization members with full cashless treatment authorization.',
    features: [
      'Diplomatic Corps Priority OPD',
      'Full Medical Visa Settlement',
      'Executive Private Suite Cover'
    ],
    coverage: 'International Diplomatic & Expat Network',
  },
  {
    id: 'prov-8',
    name: 'International SOS',
    badge: 'Global Evacuation & Assistance',
    matter: '24/7 medical evacuation, critical trauma response, emergency flight clearance, and continuous bedside medical monitoring for international patients.',
    features: [
      '24/7 Medical Evacuation Desk',
      'Emergency ICU Bed Allocation',
      'Flight Doctor & Escort Clearance'
    ],
    coverage: 'Worldwide Emergency Medical Assistance',
  },
];

export const GLOBAL_INSURERS_LIST = GLOBAL_ASSISTANCE_PROVIDERS.map((p) => p.name);
