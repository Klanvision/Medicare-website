export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  image: string;
  bio: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  category: string;
}

export interface AchievementItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  iconName: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceRequired: string;
  description: string;
}

export interface CSRInitiative {
  id: string;
  title: string;
  impact: string;
  description: string;
  category: string;
  imageUrl: string;
}

export const ABOUT_OVERVIEW = {
  title: 'MEDICARE Hospitals',
  tagline: 'Trusted Healthcare. Advanced Care.',
  establishedYear: '2012',
  bedsCount: '350+',
  doctorsCount: '150+',
  surgeriesCount: '25,000+',
  patientsServed: '1.5 Lakh+',
  description:
    'MEDICARE Super Specialty Hospital is Pune and Western India’s premier quaternary care hospital network. Engineered with world-class medical science, 3D Robotic surgical suites, 24/7 Level-1 Trauma ICUs, and 150+ internationally renowned specialists, we deliver compassionate, evidence-based care to patients across India and over 45 countries globally.',
};

export const VISION_MISSION_VALUES = {
  vision: {
    title: 'Our Vision',
    statement:
      'To set global benchmarks in clinical outcomes, robotic surgical precision, and patient-centric healthcare innovation, making world-class quaternary medical care accessible to all.',
  },
  mission: {
    title: 'Our Mission',
    statement:
      'Delivering transparent, evidence-based healthcare driven by cutting-edge medical technology, 24/7 critical emergency response, and compassionate clinical care with digital health transparency.',
  },
  values: [
    {
      title: 'Compassionate Care',
      desc: 'Putting human empathy and patient comfort at the core of every diagnosis and treatment plan.',
      icon: 'Heart',
    },
    {
      title: 'Clinical Excellence',
      desc: 'Enforcing strict JCI & NABH quality protocols with zero-compromise infection control.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Robotic & Tech Innovation',
      desc: 'Pioneering 3D Holographic care, Mako joint robotics, and AI-driven diagnostic accuracy.',
      icon: 'Cpu',
    },
    {
      title: 'Integrity & Transparency',
      desc: 'Clear upfront pricing, honest medical counsel, and ethical clinical decision-making.',
      icon: 'FileCheck',
    },
    {
      title: 'Inclusive Healthcare',
      desc: 'Extending quality medical access across socio-economic sections via CSR and community care.',
      icon: 'Users',
    },
  ],
};

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Dr. Rajeshwardas Patil',
    role: 'Founder & Executive Chairman',
    qualifications: 'MBBS, MS (Surg), FRCS (Glasgow)',
    experience: '32+ Years Experience',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneer in minimally invasive gastrointestinal and laparoscopic surgery in Western India. Instrumental in bringing JCI accreditation standards to tertiary healthcare in Maharashtra.',
  },
  {
    id: 'lead-2',
    name: 'Dr. Ananya Deshmukh',
    role: 'Chief Executive Officer (CEO)',
    qualifications: 'MBBS, MHA (TISS), Harvard Healthcare Fellow',
    experience: '24+ Years Leadership',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Renowned hospital administrator with global expertise in digital health transformation, clinical governance, and expanding quaternary healthcare infrastructure.',
  },
  {
    id: 'lead-3',
    name: 'Dr. Vikramaditya Joshi',
    role: 'Chief Medical Officer (CMO)',
    qualifications: 'MD, DM (Cardiology), FACC (USA)',
    experience: '28+ Years Experience',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Leading Interventional Cardiologist having performed over 12,000 complex coronary angioplasties and transcatheter aortic valve replacements (TAVR).',
  },
  {
    id: 'lead-4',
    name: 'Mrs. Sunita Rao',
    role: 'Chief Nursing Officer (CNO)',
    qualifications: 'M.Sc Nursing, Critical Care Specialist',
    experience: '20+ Years Experience',
    image: 'https://images.unsplash.com/photo-1594824813566-88855ce78946?auto=format&fit=crop&w=600&q=80',
    bio: 'Drives nursing excellence, patient safety protocols, and continuous clinical training across all 100+ ICU beds at MEDICARE.',
  },
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Super Specialty Hospital - Western India',
    year: '2025',
    organization: 'Times Healthcare Excellence Awards',
    description: 'Recognized for highest clinical success rates in robotic surgery and cardiac critical care.',
    category: 'Institutional Excellence',
  },
  {
    id: 'award-2',
    title: 'JCI Gold Seal of Approval®',
    year: '2024',
    organization: 'Joint Commission International, USA',
    description: 'Re-accredited with 99.8% compliance score for international healthcare quality & patient safety.',
    category: 'Global Accreditation',
  },
  {
    id: 'award-3',
    title: 'Robotic Surgical Excellence Award',
    year: '2024',
    organization: 'Global Health Surgical Tech Summit',
    description: 'Honored for completing 1,000+ Mako 3D Robotic Joint replacements with zero infection rate.',
    category: 'Surgical Innovation',
  },
  {
    id: 'award-4',
    title: 'Green Hospital & Energy Leadership Award',
    year: '2023',
    organization: 'Indian Green Building Council (IGBC)',
    description: 'Awarded Gold Rating for solar-powered healthcare facilities and eco-friendly medical waste handling.',
    category: 'Sustainability',
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'ach-1',
    metric: '25,000+',
    label: 'Robotic & Laparoscopic Surgeries',
    description: 'Highest volume of precision robotic joint and oncological surgeries performed in Pune.',
    iconName: 'Zap',
  },
  {
    id: 'ach-2',
    metric: '1,500+',
    label: 'Successful Organ Transplants',
    description: 'Including Living-Donor Kidney, Liver, and Bone Marrow transplant procedures.',
    iconName: 'Heart',
  },
  {
    id: 'ach-3',
    metric: '< 10 Mins',
    label: 'Trauma ICU Turnaround',
    description: '24/7 Level-1 Trauma team response time from casualty arrival to critical care intervention.',
    iconName: 'Clock',
  },
  {
    id: 'ach-4',
    metric: '99.4%',
    label: 'Patient Satisfaction Score',
    description: 'Independently audited patient feedback across inpatient, outpatient, and emergency services.',
    iconName: 'Star',
  },
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: 'job-1',
    title: 'Senior Consultant - Interventional Cardiology',
    department: 'Cardiology',
    location: 'Pune Main Campus',
    type: 'Full-Time',
    experienceRequired: '10+ Years Post-DM',
    description: 'Seeking an experienced Interventional Cardiologist to lead Cath Lab interventions and TAVR procedures.',
  },
  {
    id: 'job-2',
    title: 'Specialist ICU Staff Nurse',
    department: 'Critical Care / ICU',
    location: 'Pune Main Campus',
    type: 'Full-Time (Rotational)',
    experienceRequired: '3-6 Years ICU Exp',
    description: 'Responsible for 1:1 patient care in 24/7 Level-1 Trauma and Cardiac Surgical ICUs.',
  },
  {
    id: 'job-3',
    title: 'AI & Digital Health Lead Engineer',
    department: 'Healthcare IT & AI',
    location: 'Corporate HQ',
    type: 'Full-Time',
    experienceRequired: '5+ Years Tech Exp',
    description: 'Develop next-generation AI triage algorithms, patient portal integrations, and 3D imaging tools.',
  },
  {
    id: 'job-4',
    title: 'Clinical Pharmacist',
    department: 'Hospital Pharmacy',
    location: 'Pune Main Campus',
    type: 'Full-Time',
    experienceRequired: '2-4 Years Hospital Pharmacy',
    description: 'Managing medication safety, clinical dosage verification, and inpatient pharmacy operations.',
  },
];

export const CSR_INITIATIVES: CSRInitiative[] = [
  {
    id: 'csr-1',
    title: 'MEDICARE Aarogya Seva Camps',
    impact: '75,000+ Free Screenings',
    description: 'Mobile healthcare vans conducting free cardiac, diabetes, and eye screenings across rural Maharashtra.',
    category: 'Community Health',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'csr-2',
    title: 'Little Hearts Foundation',
    impact: '450+ Free Pediatric Surgeries',
    description: 'Providing 100% sponsored congenital heart flaw surgeries for underprivileged children.',
    category: 'Child Cardiac Care',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'csr-3',
    title: 'Women’s Health & Cervical Screening Drive',
    impact: '30,000+ Women Educated',
    description: 'Free Pap smears, mammography camps, and health literacy sessions for women in peri-urban areas.',
    category: 'Women Wellness',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
];

export const WHY_CHOOSE_US_FACTS = [
  {
    title: 'JCI & NABH Accredited Standards',
    desc: 'Strict infection control protocols matching international hospital benchmarks.',
    icon: 'ShieldCheck',
  },
  {
    title: '150+ Globally Trained Specialists',
    desc: 'Doctors trained at top medical institutions in the USA, UK, Europe, and Asia.',
    icon: 'UserCheck',
  },
  {
    title: '3D Holographic & Robotic Suites',
    desc: 'Mako robotic joint replacements and Philips Azurion Cath Lab technology.',
    icon: 'Cpu',
  },
  {
    title: '24/7 Level-1 Trauma Response',
    desc: 'Dedicated emergency resuscitation bays and instant cardiac cath lab standby.',
    icon: 'Clock',
  },
  {
    title: 'Transparent Pricing & Digital Portal',
    desc: 'Instant online appointments, AI triage, and real-time medical report access.',
    icon: 'FileText',
  },
];

export const QUALITY_ACCREDITATIONS_DATA = [
  {
    id: 'qual-1',
    title: 'JCI Gold Seal of Approval® (USA)',
    subtitle: 'Joint Commission International Accreditation',
    score: '99.8% Compliance',
    description: 'Gold standard international accreditation verifying world-class patient safety, surgical protocols, and clinical care quality.',
    badge: 'Global Standard',
  },
  {
    id: 'qual-2',
    title: 'NABH Quaternary Care Accreditation',
    subtitle: 'National Accreditation Board for Hospitals',
    score: '100% Certified',
    description: 'Full accreditation for inpatient safety, nursing care excellence, emergency triage response, and operational standards.',
    badge: 'National Quality',
  },
  {
    id: 'qual-3',
    title: 'NABL Certified Pathology & Diagnostic Labs',
    subtitle: 'National Accreditation Board for Testing & Calibration',
    score: 'Zero Error Protocol',
    description: 'Automated barcoded specimen processing, barcoded blood banking, and sub-millimeter 3T MRI & 128-slice CT accuracy.',
    badge: 'Lab Excellence',
  },
  {
    id: 'qual-4',
    title: 'ISO 9001:2015 Quality Management System',
    subtitle: 'International Organization for Standardization',
    score: 'Audited & Certified',
    description: 'Standardized administrative workflows, patient feedback loops, and transparent digital medical record governance.',
    badge: 'ISO Standard',
  },
  {
    id: 'qual-5',
    title: 'Zero Infection HEPA Laminar Flow OTs',
    subtitle: 'Surgical Operating Theater Environment',
    score: '99.99% Air Purity',
    description: 'Ultra-clean positive pressure air filtration suites eliminating surgical site infections across 15,000+ complex surgeries.',
    badge: 'Infection Control',
  },
];

export const PATIENT_RECOVERY_STORIES_DATA = [
  {
    id: 'story-1',
    patientName: 'Mr. Ramesh Kulkarni',
    age: 58,
    location: 'Pune, Maharashtra',
    condition: 'Acute STEMI Heart Attack',
    treatmentReceived: '24/7 Door-to-Balloon Primary Angioplasty with DES Stent',
    doctorName: 'Dr. Anand Deshmukh (DM Cardiology)',
    quote: 'When I collapsed with crushing chest pain at 2 AM, MEDICARE Cardiac Ambulance arrived within 12 minutes. Dr. Anand performed emergency angioplasty within 35 minutes of arrival. They saved my life!',
    rating: 5,
    recoveryDays: 'Discharged in 3 Days',
    badge: 'Cardiac Emergency',
    patientPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'story-2',
    patientName: 'Mrs. Anjali Shinde',
    age: 64,
    location: 'Pimpri-Chinchwad',
    condition: 'Severe Both-Knee Osteoarthritis',
    treatmentReceived: 'Mako 3D Robotic Both-Knee Replacement',
    doctorName: 'Dr. Rajesh Verma (MS Orthopedics)',
    quote: 'I was bedridden for 2 years with crippling knee pain. Thanks to Dr. Rajesh Verma and Mako 3D robotic arm precision, I stood up and walked painlessly on the very next day after surgery!',
    rating: 5,
    recoveryDays: 'Walked on Day 1',
    badge: 'Robotic Orthopedics',
    patientPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'story-3',
    patientName: 'Mr. Vikram Patil',
    age: 44,
    location: 'Satara, Maharashtra',
    condition: 'Complex Skull-Base Brain Tumor',
    treatmentReceived: '3D Neuro-Navigation Microsurgical Resection',
    doctorName: 'Dr. Sunita Kulkarni (MCh Neurosurgery)',
    quote: 'Dr. Sunita Kulkarni and her neurosurgery team excised my brain tumor with extreme precision using 3D GPS navigation. My speech, eyesight, and motor functions were completely preserved.',
    rating: 5,
    recoveryDays: 'Discharged in 5 Days',
    badge: 'Neuro Sciences',
    patientPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'story-4',
    patientName: 'Mrs. Meenakshi Sundaram',
    age: 52,
    location: 'Hyderabad, Telangana',
    condition: 'End-Stage Renal Disease (ESRD)',
    treatmentReceived: 'Living Donor Laparoscopic Kidney Transplant',
    doctorName: 'Dr. S. K. Deshpande (MCh Urology & Transplant)',
    quote: 'After 3 years on painful hemodialysis, MEDICARE Transplant Team successfully performed living donor kidney transplantation. I feel energetic and completely healthy again!',
    rating: 5,
    recoveryDays: 'Full Graft Survival',
    badge: 'Organ Transplant',
    patientPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
];
