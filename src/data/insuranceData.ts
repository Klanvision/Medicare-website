export interface InsuranceCompany {
  id: string;
  name: string;
  logo: string;
  category: 'Private Health' | 'Public PSU' | 'Standalone Insurer';
  claimApprovalTime: string;
  cashlessCoverage: string;
  helpline: string;
}

export interface TPAService {
  id: string;
  name: string;
  tpaCode: string;
  contactNumber: string;
  email: string;
  supportedInsurers: string[];
}

export interface PreAuthStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface InsuranceFAQ {
  question: string;
  answer: string;
}

export const INSURANCE_PARTNERS_DATA: InsuranceCompany[] = [
  {
    id: 'ins-star-health',
    name: 'Star Health & Allied Insurance',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
    category: 'Standalone Insurer',
    claimApprovalTime: '< 20 Minutes',
    cashlessCoverage: '100% Cashless at All MEDICARE Units',
    helpline: '1800-425-2255',
  },
  {
    id: 'ins-hdfc-ergo',
    name: 'HDFC ERGO General Insurance',
    logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
    category: 'Private Health',
    claimApprovalTime: '< 30 Minutes',
    cashlessCoverage: 'Instant Pre-Authorisation Desk',
    helpline: '1800-266-6444',
  },
  {
    id: 'ins-icici-lombard',
    name: 'ICICI Lombard General Insurance',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80',
    category: 'Private Health',
    claimApprovalTime: '< 25 Minutes',
    cashlessCoverage: '100% Cashless & Day Care Cover',
    helpline: '1800-266-6',
  },
  {
    id: 'ins-niva-bupa',
    name: 'Niva Bupa Health Insurance (Max Bupa)',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
    category: 'Standalone Insurer',
    claimApprovalTime: '< 30 Minutes',
    cashlessCoverage: 'Direct TPA Desk Authorization',
    helpline: '1800-3010-3333',
  },
  {
    id: 'ins-care-health',
    name: 'Care Health Insurance (Religare)',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    category: 'Standalone Insurer',
    claimApprovalTime: '< 30 Minutes',
    cashlessCoverage: 'Auto-Sanction Cashless Facility',
    helpline: '1800-102-4488',
  },
  {
    id: 'ins-bajaj-allianz',
    name: 'Bajaj Allianz General Insurance',
    logo: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80',
    category: 'Private Health',
    claimApprovalTime: '< 25 Minutes',
    cashlessCoverage: 'Express Cashless Pre-Auth',
    helpline: '1800-209-5858',
  },
  {
    id: 'ins-new-india',
    name: 'New India Assurance Co. Ltd.',
    logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
    category: 'Public PSU',
    claimApprovalTime: '< 45 Minutes',
    cashlessCoverage: 'PSU GIPSA Preferred Provider Network (PPN)',
    helpline: '1800-209-1415',
  },
  {
    id: 'ins-sbi-general',
    name: 'SBI General Insurance',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80',
    category: 'Public PSU',
    claimApprovalTime: '< 30 Minutes',
    cashlessCoverage: '100% Cashless Hospitalization',
    helpline: '1800-102-1111',
  },
  {
    id: 'ins-united-india',
    name: 'United India Insurance Company',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
    category: 'Public PSU',
    claimApprovalTime: '< 45 Minutes',
    cashlessCoverage: 'GIPSA Cashless Desk Facility',
    helpline: '1800-425-33333',
  },
];

export const TPA_SERVICES_DATA: TPAService[] = [
  {
    id: 'tpa-medi-assist',
    name: 'Medi Assist Insurance TPA Pvt. Ltd.',
    tpaCode: 'TPA-001-MEDI',
    contactNumber: '+91 (020) 4123-8000',
    email: 'tpa.desk@medicarehospitals.in',
    supportedInsurers: ['Star Health', 'HDFC ERGO', 'ICICI Lombard', 'New India Assurance'],
  },
  {
    id: 'tpa-mdindia',
    name: 'MDIndia Healthcare Assessment TPA',
    tpaCode: 'TPA-002-MDIN',
    contactNumber: '+91 (020) 4123-8001',
    email: 'mdindia@medicarehospitals.in',
    supportedInsurers: ['United India', 'National Insurance', 'Oriental Insurance'],
  },
  {
    id: 'tpa-paramount',
    name: 'Paramount Health Services & TPA',
    tpaCode: 'TPA-003-PARA',
    contactNumber: '+91 (020) 4123-8002',
    email: 'paramount@medicarehospitals.in',
    supportedInsurers: ['Bajaj Allianz', 'Care Health', 'SBI General'],
  },
  {
    id: 'tpa-heritage',
    name: 'Heritage Health Insurance TPA',
    tpaCode: 'TPA-004-HERI',
    contactNumber: '+91 (020) 4123-8003',
    email: 'heritage@medicarehospitals.in',
    supportedInsurers: ['Niva Bupa', 'Future Generali', 'Reliance General'],
  },
  {
    id: 'tpa-fhpl',
    name: 'Family Health Plan Insurance TPA (FHPL)',
    tpaCode: 'TPA-005-FHPL',
    contactNumber: '+91 (020) 4123-8004',
    email: 'fhpl@medicarehospitals.in',
    supportedInsurers: ['Apollo Munich', 'Universal Sompo', 'Chola MS'],
  },
];

export const PRE_AUTH_STEPS_DATA: PreAuthStep[] = [
  {
    stepNumber: 1,
    title: 'Visit TPA Help Desk',
    description: 'Present your Health Insurance Card, Aadhaar Card, and Doctor Admission Advice Letter at our 24/7 TPA Desk.',
    iconName: 'CreditCard',
  },
  {
    stepNumber: 2,
    title: 'Pre-Auth Request Submission',
    description: 'Our dedicated TPA coordinator fills out the Pre-Authorization Request Form (Form A & B) and submits it digitally to your insurer.',
    iconName: 'FileCheck',
  },
  {
    stepNumber: 3,
    title: 'TPA Approval (< 30 Mins)',
    description: 'The insurance TPA reviews clinical notes and issues an initial Cashless Authorization Sanction Letter.',
    iconName: 'ShieldCheck',
  },
  {
    stepNumber: 4,
    title: 'Cashless Admission & Discharge',
    description: 'Undergo treatment hassle-free. Upon discharge, hospital bills are settled directly between MEDICARE and your insurer.',
    iconName: 'CheckCircle2',
  },
];

export const INSURANCE_FAQS_DATA: InsuranceFAQ[] = [
  {
    question: 'What documents are required for Cashless Admission at MEDICARE?',
    answer: 'You will need: 1) Health Insurance TPA ID Card / Policy Copy, 2) Patient Government ID (Aadhaar / PAN Card), 3) Doctor Admission Advice Letter, and 4) Past consultation records & diagnostic reports related to the illness.',
  },
  {
    question: 'How long does Cashless Pre-Authorisation approval take?',
    answer: 'For planned admissions, pre-authorization requests submitted 48 hours prior are approved in advance. For emergency admissions, initial approval is processed within 20 to 30 minutes by our dedicated 24/7 TPA Desk.',
  },
  {
    question: 'What is covered under Cashless Hospitalization?',
    answer: 'Cashless covers room rent, ICU charges, nursing fees, doctor/surgeon fees, operation theater expenses, diagnostic scans, medicines, and pre/post-hospitalization medical expenses as per your policy terms.',
  },
  {
    question: 'How do I claim Reimbursement if my insurance is non-empaneled?',
    answer: 'If your insurer is non-cashless, our Claims Desk provides a complete Reimbursement Kit containing itemized original bills, discharge summary, diagnostic reports, and payment receipts for seamless claim filing.',
  },
];
