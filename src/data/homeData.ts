export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  doctorCount: number;
  treatmentCount: number;
  badge?: string;
}

export interface Treatment {
  id: string;
  title: string;
  category: string;
  description: string;
  recoveryTime: string;
  techUsed: string;
  isPopular?: boolean;
}

export interface CentreOfExcellence {
  id: string;
  title: string;
  tagline: string;
  highlights: string[];
  surgeriesCompleted: string;
  leadDoctor: string;
  imageAlt: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  degree: string;
  department: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  opdDays: string;
  nextAvailableSlot: string;
  avatarUrl: string;
  languages: string[];
  isFeatured?: boolean;
}

export interface DiagnosticService {
  id: string;
  title: string;
  subtitle: string;
  reportTime: string;
  price: string;
  discountedPrice: string;
  isHomeSampleAvailable: boolean;
  features: string[];
}

export interface HealthCheckupPackage {
  id: string;
  title: string;
  category: string;
  testsCount: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  recommendedFor: string;
  includedTests: string[];
  badge?: string;
}

export interface HomeCareService {
  id: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  location: string;
  condition: string;
  treatmentReceived: string;
  doctorName: string;
  quote: string;
  rating: number;
  recoveryDays: number;
}

export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  readTimeMinutes: number;
  authorDoctor: string;
  publishDate: string;
  summary: string;
  tags: string[];
}

export interface HospitalBranch {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  helpline: string;
  emergencyNumber: string;
  bedsCount: number;
  icuBedsCount: number;
  opdHours: string;
  is24x7Emergency: boolean;
}

// ----------------------------------------------------
// REALISTIC MOCK DATA
// ----------------------------------------------------

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    shortDesc: 'Comprehensive internal medicine, infectious disease, chronic fever, & metabolic wellness care.',
    fullDesc: 'Expert physicians providing round-the-clock OPD/IPD care for fever, diabetes, hypertension, and multi-system illness.',
    iconName: 'Stethoscope',
    doctorCount: 20,
    treatmentCount: 45,
    badge: 'SEASONAL',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    shortDesc: '24/7 STEMI Cath Lab, Radial Angioplasty, TAVI & Coronary Stenting.',
    fullDesc: 'Comprehensive cardiovascular care with door-to-balloon STEMI emergency response and cardiac care ICU.',
    iconName: 'HeartPulse',
    doctorCount: 18,
    treatmentCount: 42,
  },
  {
    id: 'cardiothoracic',
    name: 'Cardiothoracic',
    shortDesc: 'Beating Heart CABG, Aortic Aneurysm Repair & Minimally Invasive Valve Surgeries.',
    fullDesc: 'Advanced heart and thoracic surgical center performing complex bypasses, valve repairs, and lung resections.',
    iconName: 'Heart',
    doctorCount: 12,
    treatmentCount: 30,
  },
  {
    id: 'neuro-sciences',
    name: 'Neuro Sciences',
    shortDesc: 'Acute Stroke Thrombolysis, 3D GPS Brain Tumor Surgery & Spine Discectomy.',
    fullDesc: 'Comprehensive neurological institute with intraoperative navigation and dedicated 20-bed Neuro ICU.',
    iconName: 'Brain',
    doctorCount: 16,
    treatmentCount: 38,
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    shortDesc: 'Therapeutic ERCP, Endoscopic Ultrasound (EUS), FibroScan & GI Endoscopy.',
    fullDesc: 'Advanced digestive, liver, and biliary disease center with 24/7 acute GI hemorrhage control unit.',
    iconName: 'Activity',
    doctorCount: 14,
    treatmentCount: 32,
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    shortDesc: 'Online HDF Dialysis, ABO Incompatible Kidney Transplant & Glomerular Care.',
    fullDesc: 'State-of-the-art renal dialysis center, CRRT for ICU patients, and living donor kidney transplantation.',
    iconName: 'Droplet',
    doctorCount: 10,
    treatmentCount: 26,
  },
  {
    id: 'oncology',
    name: 'Oncology',
    shortDesc: 'Varian TrueBeam Radiotherapy, Immunotherapy, Chemotherapy & Tumor Board.',
    fullDesc: 'Integrated cancer center with multidisciplinary tumor board reviews and bone marrow transplant unit.',
    iconName: 'Ribbon',
    doctorCount: 22,
    treatmentCount: 50,
  },
  {
    id: 'emergency-care',
    name: 'Emergency & Critical Care',
    shortDesc: '24/7 Level-1 Trauma Resuscitation, Cardiac STEMI & Stroke Golden Hour Care.',
    fullDesc: 'Round-the-clock emergency medical specialists, triage bay, advanced life support ambulances, and ICU bedside care.',
    iconName: 'BellAlert',
    doctorCount: 25,
    treatmentCount: 60,
    badge: '24/7',
  },
  {
    id: 'urology',
    name: 'Urology',
    shortDesc: '100W Holmium Laser RIRS Stone Dusting, HoLEP Prostate & Kidney Care.',
    fullDesc: 'Incisionless laser kidney stone fragmentation, keyhole prostate surgery, and reconstructive urology.',
    iconName: 'Stethoscope',
    doctorCount: 11,
    treatmentCount: 28,
  },
  {
    id: 'organ-transplantation',
    name: 'Organ Transplantation',
    shortDesc: 'Kidney, Liver & Heart Transplant Institutes with HEPA Isolation ICUs.',
    fullDesc: 'Multi-organ transplant program delivering world-class graft survival with dedicated transplant ICU care.',
    iconName: 'Lungs',
    doctorCount: 15,
    treatmentCount: 20,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    shortDesc: 'Mako 3D Robotic Knee & Hip Replacement, ACL Arthroscopy & Trauma Care.',
    fullDesc: 'Robotic precision joint replacement enabling painless walking on Day 1 and keyhole sports injury repair.',
    iconName: 'Bone',
    doctorCount: 18,
    treatmentCount: 40,
  },
  {
    id: 'robotic-surgery',
    name: 'Robotic Surgery',
    shortDesc: 'Da Vinci & Mako Robotic Precision for Gynae, Urology, Gastro & Joint Surgery.',
    fullDesc: 'Sub-millimeter 3D robotic arm surgical suite providing minimal blood loss and rapid 48-hour recovery.',
    iconName: 'Bot',
    doctorCount: 14,
    treatmentCount: 35,
  },
  {
    id: 'gynecology',
    name: 'Obstetric & Gynecology',
    shortDesc: 'Painless Entonox Delivery, High-Risk Pregnancy & Laparoscopic Gynae Surgery.',
    fullDesc: 'Holistic women’s health center with fetal medicine unit, 24/7 labor suites, and minimally invasive gynae care.',
    iconName: 'Baby',
    doctorCount: 16,
    treatmentCount: 34,
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    shortDesc: 'Reconstructive Microsurgery, Burn Care, Cosmetic Procedures & Scar Revision.',
    fullDesc: 'Advanced plastic and aesthetic surgical facility offering body contouring, facial reconstruction, and laser aesthetics.',
    iconName: 'Sparkles',
    doctorCount: 8,
    treatmentCount: 25,
  },
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    shortDesc: 'Autoimmune Arthritis, Lupus (SLE), Fibromyalgia & Biologic Infusion Therapy.',
    fullDesc: 'Specialized clinic for rheumatoid arthritis, joint inflammation, osteoporosis, and systemic autoimmune diseases.',
    iconName: 'Activity',
    doctorCount: 7,
    treatmentCount: 22,
  },
  {
    id: 'neurology',
    name: 'Neurology',
    shortDesc: 'Epilepsy Video EEG, Parkinson DBS, Migraine Clinic & Neuropathy Care.',
    fullDesc: 'Advanced clinical neurology center diagnosing and treating brain, nerve, and neuromuscular disorders.',
    iconName: 'Brain',
    doctorCount: 14,
    treatmentCount: 32,
  },
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'robotic-knee',
    title: 'Robotic Total Knee Replacement',
    category: 'Orthopedics',
    description: 'Precision robotic-arm guided implant alignment resulting in natural joint movement and 48-hour discharge.',
    recoveryTime: '7 - 10 Days',
    techUsed: 'Mako Robotic Arm System',
    isPopular: true,
  },
  {
    id: 'angioplasty',
    title: 'Primary Angioplasty & Stenting (PTCA)',
    category: 'Cardiology',
    description: 'Emergency 24/7 door-to-balloon emergency arterial blockage clearing with bio-resorbable stents.',
    recoveryTime: '2 - 3 Days',
    techUsed: 'Philips Azurion 7 Cath Lab',
    isPopular: true,
  },
  {
    id: 'cyberknife-radiotherapy',
    title: 'Precision TrueBeam Radiotherapy',
    category: 'Oncology',
    description: 'Sub-millimeter targeted radiation destroying cancer tumors while protecting healthy surrounding tissue.',
    recoveryTime: 'Same Day OPD',
    techUsed: 'Varian TrueBeam STx',
    isPopular: true,
  },
  {
    id: 'minimally-invasive-spine',
    title: 'Endoscopic Spine Surgery (MISS)',
    category: 'Neurology',
    description: 'Keyhole spinal disc surgery under local anesthesia for slipped disc, sciatica, and spinal stenosis.',
    recoveryTime: '3 - 5 Days',
    techUsed: 'High-Def 4K Endoscopic Tower',
    isPopular: true,
  },
  {
    id: 'kidney-transplant',
    title: 'Laparoscopic Kidney Transplant',
    category: 'Nephrology',
    description: 'Minimally invasive donor nephrectomy and advanced immunosuppression protocols for long-term graft survival.',
    recoveryTime: '12 - 14 Days',
    techUsed: 'Laparoscopic 3D HD Suite',
  },
  {
    id: 'laser-urology',
    title: 'RIRS Laser Kidney Stone Removal',
    category: 'Urology',
    description: 'No incision flexible ureteroscopy delivering Holmium laser energy directly to crush kidney stones.',
    recoveryTime: '24 Hours',
    techUsed: '100W Holmium Laser',
  },
];

export const CENTRES_OF_EXCELLENCE_DATA: CentreOfExcellence[] = [
  {
    id: 'cardiac-institute',
    title: 'MEDICARE Heart & Vascular Institute',
    tagline: 'Western Maharashtra’s Premier Cardiac Emergency & Valve Center',
    highlights: [
      '24/7 Emergency STEMI Interventional Cath Lab',
      'Over 12,000+ Successful Coronary Angioplasties',
      'Pediatric Heart Surgery & TAVI Heart Valve Program',
      'Dedicated 30-Bed Cardiac Care Unit (CCU)',
    ],
    surgeriesCompleted: '15,000+',
    leadDoctor: 'Dr. Anand Deshmukh (DM Cardiology)',
    imageAlt: 'Advanced Cath Lab',
  },
  {
    id: 'neuro-institute',
    title: 'Institute of Neurosciences & Spine',
    tagline: 'Rapid Stroke Thrombolysis & Robotic Brain Surgery Suite',
    highlights: [
      'Door-to-CT Stroke Response in under 15 Minutes',
      'Intraoperative MRI & Brain Suite Navigation',
      'Comprehensive Epilepsy & Parkinson’s Deep Brain Stimulation',
      'Endoscopic Keyhole Spine Surgery Unit',
    ],
    surgeriesCompleted: '9,500+',
    leadDoctor: 'Dr. Sunita Kulkarni (MCh Neurosurgery)',
    imageAlt: 'Neuro Interventional Suite',
  },
  {
    id: 'cancer-institute',
    title: 'Comprehensive Cancer Care Center',
    tagline: 'Organ-Specific Precision Oncology Board & Bone Marrow Transplant',
    highlights: [
      'Varian TrueBeam STx Image-Guided Radiotherapy',
      'Day Care Chemotherapy Unit with HEPA Filter Isolation',
      'Robotic Cancer Surgery & Hyperthermic Intraperitoneal Chemotherapy (HIPEC)',
      'Nuclear Medicine PET-CT & SPECT Scanner',
    ],
    surgeriesCompleted: '8,200+',
    leadDoctor: 'Dr. Meera Joshi (MD Oncology)',
    imageAlt: 'Linear Accelerator Radiotherapy',
  },
];

export const FEATURED_DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-anand-deshmukh',
    name: 'Dr. Anand Deshmukh',
    title: 'Chief Interventional Cardiologist & Director',
    degree: 'MBBS, MD (Medicine), DM (Cardiology), FACC',
    department: 'Cardiology',
    experienceYears: 22,
    rating: 4.9,
    reviewCount: 480,
    opdDays: 'Mon - Sat (10:00 AM - 04:00 PM)',
    nextAvailableSlot: 'Today at 02:30 PM',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    languages: ['English', 'Hindi', 'Marathi'],
    isFeatured: true,
  },
  {
    id: 'doc-sunita-kulkarni',
    name: 'Dr. Sunita Kulkarni',
    title: 'Head of Neurosciences & Chief Neurosurgeon',
    degree: 'MBBS, MS (Surgery), MCh (Neurosurgery)',
    department: 'Neurology',
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 395,
    opdDays: 'Mon, Wed, Fri (11:00 AM - 05:00 PM)',
    nextAvailableSlot: 'Tomorrow at 11:00 AM',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=400&q=80',
    languages: ['English', 'Hindi', 'Marathi'],
    isFeatured: true,
  },
  {
    id: 'doc-rajesh-verma',
    name: 'Dr. Rajesh Verma',
    title: 'Director of Robotic Joint Replacement & Orthopedics',
    degree: 'MBBS, MS (Ortho), Fellowship Robotic Surgery (UK)',
    department: 'Orthopedics',
    experienceYears: 20,
    rating: 5.0,
    reviewCount: 512,
    opdDays: 'Tue, Thu, Sat (09:00 AM - 03:00 PM)',
    nextAvailableSlot: 'Today at 04:00 PM',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    languages: ['English', 'Hindi'],
    isFeatured: true,
  },
  {
    id: 'doc-meera-joshi',
    name: 'Dr. Meera Joshi',
    title: 'Senior Consultant Medical Oncologist',
    degree: 'MBBS, MD (General Medicine), DNB (Medical Oncology)',
    department: 'Oncology',
    experienceYears: 16,
    rating: 4.8,
    reviewCount: 310,
    opdDays: 'Mon - Fri (10:00 AM - 02:00 PM)',
    nextAvailableSlot: 'Tomorrow at 10:30 AM',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    languages: ['English', 'Hindi', 'Marathi'],
    isFeatured: true,
  },
];

export const DIAGNOSTICS_DATA: DiagnosticService[] = [
  {
    id: 'mri-3t',
    title: '3 Tesla Silent MRI Imaging',
    subtitle: 'Ultra high-definition neuro, joint, and cardiac MRI scan with 70% noise reduction.',
    reportTime: 'Within 6 Hours',
    price: '₹7,500',
    discountedPrice: '₹5,999',
    isHomeSampleAvailable: false,
    features: ['3D Soft Tissue Resolution', 'Non-invasive Vascular Angio', 'Spacious Wide-Bore Tube'],
  },
  {
    id: 'ct-128-slice',
    title: '128-Slice Cardiac CT Angiography',
    subtitle: 'Rapid 5-second non-invasive coronary artery blockage scan with ultra-low radiation dosage.',
    reportTime: 'Within 4 Hours',
    price: '₹9,000',
    discountedPrice: '₹6,499',
    isHomeSampleAvailable: false,
    features: ['Sub-second Heart Scan', 'Painless Angiography', 'Radiologist Consultation Included'],
  },
  {
    id: 'express-lab-home',
    title: 'Full Pathology & Blood Lab',
    subtitle: 'Certified NABL laboratory diagnostics with free home blood sample collection.',
    reportTime: 'Same Day Digital PDF',
    price: '₹1,500',
    discountedPrice: '₹799',
    isHomeSampleAvailable: true,
    features: ['Barcoded Sample Tubes', 'Painless Phlebotomist Visit', 'Online Portal Report Download'],
  },
];

export const HEALTH_CHECKUPS_DATA: HealthCheckupPackage[] = [
  {
    id: 'master-wellness-male',
    title: 'MEDICARE Master Full Body Executive Checkup',
    category: 'General Wellness',
    testsCount: 84,
    originalPrice: 8500,
    discountedPrice: 2999,
    discountPercent: 65,
    recommendedFor: 'Men & Women Age 30+',
    badge: 'Best Seller',
    includedTests: [
      'Complete Hemogram (CBC - 24 parameters)',
      'Comprehensive Lipid Profile (Cholesterol)',
      'Liver Function Test (LFT - 12 parameters)',
      'Kidney Function Test (KFT & Creatinine)',
      'HbA1c & Fasting Blood Sugar',
      'Thyroid Profile (T3, T4, TSH)',
      'Chest X-Ray & ECG Test',
      'Doctor OPD Consultation Included',
    ],
  },
  {
    id: 'cardiac-wellness-package',
    title: 'Advanced Healthy Heart Preventive Care',
    category: 'Cardiology Special',
    testsCount: 42,
    originalPrice: 7200,
    discountedPrice: 3499,
    discountPercent: 51,
    recommendedFor: 'Individuals with BP / Heart Risk',
    badge: 'Cardio Special',
    includedTests: [
      '2D Echocardiogram with Doppler',
      'Treadmill Stress Test (TMT / Stress ECG)',
      'High-Sensitivity C-Reactive Protein (hs-CRP)',
      'Serum Electrolytes & Lipid Risk Panel',
      'Cardiologist One-on-One OPD Consultation',
    ],
  },
  {
    id: 'senior-citizen-care',
    title: 'Senior Citizen Complete Preventive Care',
    category: 'Geriatric Care',
    testsCount: 76,
    originalPrice: 9900,
    discountedPrice: 3999,
    discountPercent: 60,
    recommendedFor: 'Seniors Age 60+',
    badge: 'Senior Special',
    includedTests: [
      'Vitamin D3 & B12 Quantitative Profile',
      'DEXA Bone Mineral Density Scan',
      'Prostate Specific Antigen (PSA - Males) / Pap Smear (Females)',
      'Complete Kidney & Renal Clearance Test',
      'Ophthalmology & Hearing Screening',
    ],
  },
];

export const HOME_HEALTHCARE_SERVICES: HomeCareService[] = [
  {
    id: 'home-doctor-visit',
    title: 'Doctor Visit at Home',
    description: 'Qualified MBBS / MD physician house call for elderly, bedridden, or post-surgery patients.',
    features: ['Physical Health Assessment', 'Prescription Renewal', 'Vital Signs Monitoring'],
    badge: 'Within 2 Hours',
  },
  {
    id: 'icu-at-home',
    title: 'ICU Setup & Nursing at Home',
    description: 'Complete critical care ventilator, multipara monitor setup with 24/7 dedicated ICU nurse.',
    features: ['Ventilator & Oxygen Care', '24/7 Critical Care Nurse', 'Bi-Daily Intensivist Tele-visit'],
    badge: 'Hospital-Grade ICU',
  },
  {
    id: 'physio-at-home',
    title: 'Home Physiotherapy & Rehab',
    description: 'Certified neuro & ortho physiotherapists visiting your doorstep for post-fracture or stroke recovery.',
    features: ['Post-Knee Surgery Rehab', 'Stroke Motor Recovery', 'Pain Management Therapy'],
  },
];

export const PATIENT_STORIES_DATA: PatientStory[] = [
  {
    id: 'story-1',
    patientName: 'Mr. Ramesh Kulkarni',
    age: 58,
    location: 'Pune',
    condition: 'Acute Heart Attack (STEMI)',
    treatmentReceived: 'Emergency Angioplasty with Stenting',
    doctorName: 'Dr. Anand Deshmukh',
    quote: 'When I collapsed with severe chest pain, MEDICARE ambulance reached my house in 12 minutes. Dr. Anand performed angioplasty within 40 minutes of arrival. They saved my life!',
    rating: 5,
    recoveryDays: 3,
  },
  {
    id: 'story-2',
    patientName: 'Mrs. Anjali Shinde',
    age: 64,
    location: 'Pimpri-Chinchwad',
    condition: 'Severe Both Knee Osteoarthritis',
    treatmentReceived: 'Robotic Both Knee Replacement',
    doctorName: 'Dr. Rajesh Verma',
    quote: 'I was bedridden for 2 years due to extreme knee joint pain. Thanks to Dr. Rajesh Verma’s robotic surgery, I walked painless on the second day after surgery!',
    rating: 5,
    recoveryDays: 7,
  },
  {
    id: 'story-3',
    patientName: 'Mr. Vikram Patil',
    age: 44,
    location: 'Satara',
    condition: 'Complex Brain Tumor',
    treatmentReceived: 'Microsurgical Brain Tumor Resection',
    doctorName: 'Dr. Sunita Kulkarni',
    quote: 'Dr. Sunita Kulkarni and her neuro team treated me with extreme care. The hospital rooms, nurses, and post-surgery care exceeded all our expectations.',
    rating: 5,
    recoveryDays: 10,
  },
];

export const HEALTH_ARTICLES_DATA: HealthArticle[] = [
  {
    id: 'art-1',
    title: 'Recognizing Early Warning Signs of a Silent Heart Attack',
    category: 'Cardiology',
    readTimeMinutes: 4,
    authorDoctor: 'Dr. Anand Deshmukh',
    publishDate: 'Aug 20, 2026',
    summary: 'Learn how subtle symptoms like jaw pain, unexplained fatigue, and shortness of breath could signal a silent cardiac event.',
    tags: ['Heart Health', 'Emergency', 'Cardiology'],
  },
  {
    id: 'art-2',
    title: 'Why Robotic Knee Replacement Ensures 3x Faster Recovery',
    category: 'Orthopedics',
    readTimeMinutes: 5,
    authorDoctor: 'Dr. Rajesh Verma',
    publishDate: 'Aug 15, 2026',
    summary: 'Discover how robotic-arm 3D CT mapping minimizes tissue trauma and preserves natural bone ligaments for pain-free mobility.',
    tags: ['Robotic Surgery', 'Joint Pain', 'Orthopedics'],
  },
  {
    id: 'art-3',
    title: 'Understanding Stroke: The Golden 4.5 Hour Window',
    category: 'Neurology',
    readTimeMinutes: 6,
    authorDoctor: 'Dr. Sunita Kulkarni',
    publishDate: 'Aug 10, 2026',
    summary: 'Remember the FAST acronym (Face, Arm, Speech, Time) to save brain cells during an acute ischemic stroke emergency.',
    tags: ['Stroke Care', 'Brain Health', 'Neurology'],
  },
];

export const HOSPITAL_BRANCHES_DATA: HospitalBranch[] = [
  {
    id: 'pune-main',
    name: 'MEDICARE Quaternary Super Specialty Hospital',
    type: 'Main Tertiary Care Facility',
    address: 'MEDICARE Healthcare Complex, Sector 15, Sector Road, Pune - 411019',
    city: 'Pune',
    helpline: '1800-MEDICARE',
    emergencyNumber: '1800-MEDICARE',
    bedsCount: 350,
    icuBedsCount: 75,
    opdHours: '08:00 AM - 08:00 PM (Emergency 24/7)',
    is24x7Emergency: true,
  },
  {
    id: 'pimpri-opd',
    name: 'MEDICARE City OPD & Diagnostic Center',
    type: 'Outpatient Specialty Clinic',
    address: 'Opp. City Mall, Old Mumbai-Pune Highway, Pimpri - 411018',
    city: 'Pimpri',
    helpline: '1800-MEDICARE',
    emergencyNumber: '1800-MEDICARE',
    bedsCount: 50,
    icuBedsCount: 10,
    opdHours: '09:00 AM - 07:00 PM',
    is24x7Emergency: false,
  },
];

export const AI_TRIAGE_SYMPTOMS = [
  { id: 'chest-pain', label: 'Chest Pain or Discomfort', urgency: 'EMERGENCY', dept: 'Cardiology' },
  { id: 'headache-dizziness', label: 'Sudden Severe Headache / Dizziness', urgency: 'URGENT', dept: 'Neurology' },
  { id: 'joint-stiffness', label: 'Knee / Joint Pain & Stiffness', urgency: 'ROUTINE', dept: 'Orthopedics' },
  { id: 'fever-cough', label: 'High Fever, Cough & Cold', urgency: 'ROUTINE', dept: 'General Medicine' },
  { id: 'stomach-acidity', label: 'Severe Abdominal Pain / Acidity', urgency: 'URGENT', dept: 'Gastroenterology' },
];
