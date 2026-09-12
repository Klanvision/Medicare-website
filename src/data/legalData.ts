export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  bulletPoints?: string[];
}

export interface LegalPolicy {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  lastUpdated: string;
  effectiveDate: string;
  overview: string;
  disclaimer?: string;
  sections: LegalSection[];
}

export const LEGAL_POLICIES: Record<string, LegalPolicy> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy & Data Security',
    subtitle: 'Comprehensive guidelines on patient electronic health records (EHR), confidentiality & data vaults.',
    badge: 'HIPAA & Digital Data Protection',
    lastUpdated: 'August 27, 2026',
    effectiveDate: 'January 01, 2025',
    overview:
      'MEDICARE is committed to safeguarding patient medical privacy. This document outlines our data collection, storage, encryption, and patient confidentiality protocols across all physical hospitals and digital portals.',
    disclaimer:
      'Notice: All patient health information (PHI) is processed strictly in accordance with the Digital Personal Data Protection (DPDP) Act and international HIPAA standards.',
    sections: [
      {
        id: 'collection',
        title: '1. Information We Collect',
        content: [
          'We collect essential personal and medical information necessary for delivering accurate clinical diagnosis, patient registration, treatment planning, and hospital billing.',
          'Information collected includes full name, contact phone, email, residential address, emergency contact, past medical history, lab diagnostic results, prescription records, and insurance TPA policy details.',
        ],
        bulletPoints: [
          'Digital Registration: Patient Portal logins, appointment bookings, and online feedback.',
          'Clinical Care Records: Physician consultation notes, radiology scans, and pathology reports.',
          'Payment & Billing Data: Encrypted credit/debit card transactions and UPI gateway references.',
        ],
      },
      {
        id: 'encryption',
        title: '2. Data Security & Storage Architecture',
        content: [
          'All electronic health records (EHR) and diagnostic images are stored in ISO 27001 certified, encrypted cloud data vaults with 256-Bit SSL/TLS transport layer security.',
          'Access to patient health records is strictly role-restricted to authorized treating physicians, nurses, and administrative staff involved in patient care.',
        ],
      },
      {
        id: 'third-party',
        title: '3. Data Sharing & Third-Party Disclosure',
        content: [
          'MEDICARE does NOT sell, rent, or trade patient health data or contact information to third-party marketing companies.',
          'Data sharing occurs strictly for clinical coordination, insurance claim settlement (with TPA authorization), or mandatory statutory reporting required by public health authorities.',
        ],
      },
      {
        id: 'rights',
        title: '4. Patient Rights & Data Access',
        content: [
          'Patients reserve full rights to inspect, request copies of, or update their clinical records via the Patient Portal or Inpatient Medical Records Department (MRD).',
          'For data deletion or confidentiality inquiries, contact our Data Protection Officer at privacy@medicarehospitals.in.',
        ],
      },
    ],
  },

  terms: {
    slug: 'terms',
    title: 'Terms of Service & Patient Charter',
    subtitle: 'Rules, patient rights, and responsibilities governing hospital visits and digital portal services.',
    badge: 'Hospital Guidelines & Charter',
    lastUpdated: 'August 27, 2026',
    effectiveDate: 'January 01, 2025',
    overview:
      'By accessing MEDICARE digital services, booking OPD appointments, or utilizing our 3D AI Health Assistant, you agree to comply with the terms set forth in this agreement.',
    disclaimer:
      'Medical Disclaimer: The digital portal and AI Health Assistant provide general health information and triage guidance. They do NOT replace direct physical medical examination in acute emergencies.',
    sections: [
      {
        id: 'opd-terms',
        title: '1. OPD Appointments & Consultation Validity',
        content: [
          'OPD consultation bookings are valid for the specific date and time slot selected during registration.',
          'Initial consultation fees cover 1 primary doctor visit and 1 complimentary follow-up review within 7 calendar days from the initial consultation.',
        ],
      },
      {
        id: 'ai-disclaimer',
        title: '2. AI Assistant & Digital Health Tools',
        content: [
          'Our AI Health Assistant ("Ask MEDICARE AI") provides automated symptom assessment based on clinical algorithms. It does not constitute a binding medical diagnosis.',
          'For chest pain, severe breathlessness, stroke symptoms, or acute trauma, immediately call 1800-MEDICARE or visit the nearest Emergency Department.',
        ],
      },
      {
        id: 'patient-charter',
        title: '3. Patient Rights & Hospital Code of Conduct',
        content: [
          'Patients have the right to receive respectful care, transparent cost estimates prior to admission, and informed consent for surgical procedures.',
          'Patients and visitors are expected to maintain courteous conduct towards hospital staff and adhere to infection control guidelines.',
        ],
      },
      {
        id: 'intellectual-property',
        title: '4. Intellectual Property & Portal Access',
        content: [
          'All trademarks, logos, clinical content, 3D visualizations, and portal software remain the exclusive property of MEDICARE Super Specialty Hospital.',
        ],
      },
    ],
  },

  'cancellation-policy': {
    slug: 'cancellation-policy',
    title: 'OPD & Procedure Cancellation Policy',
    subtitle: 'Standard rules for canceling, rescheduling, or adjusting hospital appointments.',
    badge: 'Appointment Rules',
    lastUpdated: 'August 27, 2026',
    effectiveDate: 'January 01, 2025',
    overview:
      'We understand that medical plans may change. MEDICARE maintains a flexible, patient-friendly cancellation and rescheduling policy for outpatient and diagnostic services.',
    sections: [
      {
        id: 'opd-cancellation',
        title: '1. Outpatient (OPD) Consultation Cancellation',
        content: [
          'OPD appointments can be canceled or rescheduled up to 2 hours prior to the scheduled slot time with zero cancellation fee.',
          'Cancellations initiated via the Patient Portal or OPD Helpline (+91 20 2765-9111) within the permitted timeframe qualify for 100% full refund.',
        ],
        bulletPoints: [
          'More than 2 hours before slot: 100% Full Refund or free slot reschedule.',
          'Less than 2 hours before slot: 50% retention charge; remaining 50% credited as hospital wallet balance.',
          'No-Show without notice: Non-refundable.',
        ],
      },
      {
        id: 'diagnostic-cancellation',
        title: '2. Diagnostic Scans & Home Sample Collection',
        content: [
          'MRI, CT scan, and health package bookings can be canceled up to 4 hours prior to appointment time.',
          'Home sample lab collections canceled before phlebotomist dispatch qualify for immediate full refund.',
        ],
      },
      {
        id: 'hospital-initiated',
        title: '3. Hospital-Initiated Rescheduling',
        content: [
          'In the rare event of doctor emergency duty or emergency surgical call-out, patients will be notified via SMS/WhatsApp and offered an immediate priority alternative slot or 100% full refund.',
        ],
      },
    ],
  },

  'refund-policy': {
    slug: 'refund-policy',
    title: 'Diagnostic Test & OPD Refund Policy',
    subtitle: 'Transparent refund timelines, credit processing, and payment source routing.',
    badge: 'Financial Transparency',
    lastUpdated: 'August 27, 2026',
    effectiveDate: 'January 01, 2025',
    overview:
      'All eligible refunds for online appointment fees, diagnostic packages, or advance hospital deposits are processed transparently with automatic SMS/email tracking.',
    sections: [
      {
        id: 'refund-timelines',
        title: '1. Refund Processing Timelines',
        content: [
          'Approved refunds are initiated immediately by our finance desk and credited back to the original payment method (Credit Card, Debit Card, Net Banking, or UPI).',
        ],
        bulletPoints: [
          'UPI / Debit Card Payments: 24 - 48 business hours.',
          'Credit Card / Net Banking: 3 - 5 working days (subject to bank clearance).',
          'Hospital Cash Advance: Cash refund at Inpatient Billing Desk upon original receipt presentation.',
        ],
      },
      {
        id: 'tpa-claims',
        title: '2. Insurance TPA & Cashless Deposits',
        content: [
          'Advance cash deposits paid during emergency admission qualify for full refund upon receipt of formal insurance TPA approval letter.',
          'Discharge desk processes balance deposit refunds within 24 hours of TPA final bill clearance.',
        ],
      },
      {
        id: 'refund-support',
        title: '3. Refund Helpdesk & Disputes',
        content: [
          'If your refund is delayed beyond 5 business days, please email billing@medicarehospitals.in with your transaction reference number and booking ID.',
        ],
      },
    ],
  },
};
