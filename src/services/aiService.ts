import { apiClient } from './apiClient';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';
import { HOSPITALS_EXTENDED_DATA, HospitalBranchExt } from '@/data/hospitalData';
import { SPECIALTIES_DATA, Specialty } from '@/data/specialtyData';
import { aiAnalyticsService } from './aiAnalyticsService';

export type AiIntentType =
  | 'EMERGENCY_TRIAGE'
  | 'SYMPTOM_ANALYSIS'
  | 'SPECIALIST_RECOMMENDATION'
  | 'DOCTOR_LOOKUP'
  | 'HOSPITAL_LOOKUP'
  | 'APPOINTMENT_ASSISTANCE'
  | 'HEALTH_EDUCATION'
  | 'FOLLOW_UP_SUPPORT'
  | 'GENERAL_GREETING';

export interface AiChatMessage {
  id: string;
  eventId?: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  intentRecognized?: AiIntentType;
  isEmergency?: boolean;
  careCategory?: string;
  recommendedSpecialty?: string;
  specialtySlug?: string;
  recommendedDoctor?: Doctor | null;
  recommendedHospital?: HospitalBranchExt | null;
  availableSlots?: string[];
  healthEducationTip?: string;
  followUpAdvice?: string;
  disclaimer?: string;
  userFeedback?: 'helpful' | 'unhelpful';
}

export interface AiRiskScoreResult {
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical ER';
  score: number;
  recommendation: string;
  suggestedAction: string;
  emergencyTriggered: boolean;
}

// Generate persistent session ID for anonymized analytics
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'sess-default';
  let sid = sessionStorage.getItem('vhn_ai_session_id');
  if (!sid) {
    sid = `sess-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    sessionStorage.setItem('vhn_ai_session_id', sid);
  }
  return sid;
};

const STANDARD_SAFETY_DISCLAIMER =
  'AI Safety Notice: HealthNova AI Assistant is designed solely for preliminary health navigation, specialty routing, and appointment scheduling. It does NOT provide medical diagnoses, prescribe medications, or substitute professional evaluation by licensed doctors.';

export const aiService = {
  /**
   * Process Patient Query with Intent Recognition, Care Recommendation & Safety Guardrails
   */
  async processSymptomQuery(userText: string): Promise<AiChatMessage> {
    const startTime = Date.now();
    const sessionId = getSessionId();

    const res = await apiClient.post<AiChatMessage>('/ai/triage', { query: userText }, {
      mockFallback: async () => {
        const textLower = userText.toLowerCase().trim();
        const id = `msg-${Date.now()}`;
        const eventId = `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // 1. EMERGENCY ESCALATION GUARDRAIL
        if (
          textLower.includes('chest pain') ||
          textLower.includes('heart attack') ||
          textLower.includes('stroke') ||
          textLower.includes('paralysis') ||
          textLower.includes('can not breathe') ||
          textLower.includes("can't breathe") ||
          textLower.includes('breathless') ||
          textLower.includes('severe bleeding') ||
          textLower.includes('unconscious') ||
          textLower.includes('poison') ||
          textLower.includes('suicide') ||
          textLower.includes('severe head injury')
        ) {
          const doc = DOCTORS_DATA.find((d) => d.specialty === 'Cardiology') || DOCTORS_DATA[0];
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'EMERGENCY_TRIAGE',
            isEmergency: true,
            text: 'CRITICAL EMERGENCY ALERT DETECTED: Your symptoms (chest pain, acute breathlessness, or neurological distress) indicate a potential medical emergency. Immediate clinical evaluation is required. Do not delay.',
            timestamp,
            careCategory: '24/7 Critical Emergency Care',
            recommendedSpecialty: 'Emergency Medicine / Cardiology',
            specialtySlug: 'cardiology',
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: ['Immediate 24x7 ER Triage'],
            healthEducationTip: 'Sit upright, maintain steady breathing, avoid physical exertion, and keep doors unlocked for paramedics.',
            followUpAdvice: 'If symptoms persist or deteriorate, proceed immediately to the nearest Emergency Department.',
            disclaimer: 'EMERGENCY SAFETY DIRECTIVE: AI cannot provide emergency medical intervention. Call 1800-VIGHNA or visit the ER immediately.',
          };
        }

        // 2. ORTHOPEDICS & JOINT CARE
        if (
          textLower.includes('knee') ||
          textLower.includes('joint') ||
          textLower.includes('back pain') ||
          textLower.includes('spine') ||
          textLower.includes('bone') ||
          textLower.includes('fracture') ||
          textLower.includes('arthritis') ||
          textLower.includes('stiffness') ||
          textLower.includes('shoulder')
        ) {
          const doc = DOCTORS_DATA.find((d) => d.specialty === 'Orthopedics') || DOCTORS_DATA[2];
          const spec = SPECIALTIES_DATA.find((s) => s.slug === 'orthopedics');
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'SYMPTOM_ANALYSIS',
            text: `Based on your query regarding joint discomfort, back stiffness, or musculoskeletal pain, we recommend consulting our ${spec?.name || 'Orthopedics & Joint Replacement'} department. Early diagnostic evaluation prevents cartilage degradation and long-term immobility.`,
            timestamp,
            careCategory: 'Orthopedics & Joint Sciences',
            recommendedSpecialty: 'Orthopedics',
            specialtySlug: 'orthopedics',
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: doc.availableSlots[0]?.slots || ['Today at 04:00 PM', 'Tomorrow at 10:30 AM'],
            healthEducationTip: 'Apply cold compress for acute joint swelling (15 mins on/off), maintain gentle range-of-motion stretching, and avoid squatting or sitting cross-legged.',
            followUpAdvice: 'If joint swelling is accompanied by fever or severe inability to bear weight, seek urgent orthopedic assessment.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 3. CARDIOLOGY / HEART CARE
        if (
          textLower.includes('heart') ||
          textLower.includes('palpitations') ||
          textLower.includes('high blood pressure') ||
          textLower.includes('hypertension') ||
          textLower.includes('pulse') ||
          textLower.includes('bp') ||
          textLower.includes('cholesterol')
        ) {
          const doc = DOCTORS_DATA.find((d) => d.specialty === 'Cardiology') || DOCTORS_DATA[0];
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'SPECIALIST_RECOMMENDATION',
            text: 'Your query relates to cardiovascular wellness, blood pressure, or cardiac symptoms. We recommend a consultation with an Interventional Cardiologist for an ECG, Echocardiogram, and comprehensive lipid profiling.',
            timestamp,
            careCategory: 'Cardiac Sciences & Vascular Care',
            recommendedSpecialty: 'Cardiology',
            specialtySlug: 'cardiology',
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: doc.availableSlots[0]?.slots || ['Today at 02:00 PM', 'Tomorrow at 11:00 AM'],
            healthEducationTip: 'Maintain sodium intake below 2,000 mg/day, practice 30 minutes of brisk walking daily, and monitor resting blood pressure routinely.',
            followUpAdvice: 'Schedule a follow-up ECG if you experience intermittent lightheadedness or exertion fatigue.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 4. NEUROLOGY / HEADACHE
        if (
          textLower.includes('headache') ||
          textLower.includes('migraine') ||
          textLower.includes('dizziness') ||
          textLower.includes('vertigo') ||
          textLower.includes('numbness') ||
          textLower.includes('brain') ||
          textLower.includes('memory')
        ) {
          const doc = DOCTORS_DATA.find((d) => d.specialty === 'Neurology') || DOCTORS_DATA[3];
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'SYMPTOM_ANALYSIS',
            text: 'Headaches, chronic migraines, or vertigo are best evaluated by a Specialist Neurologist to rule out secondary causes and design personalized neuro-rehabilitation or prophylactic regimens.',
            timestamp,
            careCategory: 'Neurology & Brain Care',
            recommendedSpecialty: 'Neurology',
            specialtySlug: 'neurology',
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: doc.availableSlots[0]?.slots || ['Today at 05:00 PM', 'Tomorrow at 09:30 AM'],
            healthEducationTip: 'Maintain regular sleep-wake cycles, log headache frequency and dietary triggers in a symptom diary, and stay well hydrated.',
            followUpAdvice: 'Seek immediate medical attention if headache onset is sudden and thunderclap, or accompanied by visual blurring.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 5. DERMATOLOGY & SKIN
        if (
          textLower.includes('skin') ||
          textLower.includes('rash') ||
          textLower.includes('itching') ||
          textLower.includes('acne') ||
          textLower.includes('allergy') ||
          textLower.includes('eczema') ||
          textLower.includes('dermatology')
        ) {
          const doc = DOCTORS_DATA.find((d) => d.specialty === 'Dermatology') || DOCTORS_DATA[4] || DOCTORS_DATA[1];
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'SPECIALIST_RECOMMENDATION',
            text: 'Dermatological symptoms such as persistent skin rashes, allergies, or inflammatory lesions require evaluation by a Dermatologist for precise patch testing and topical treatment.',
            timestamp,
            careCategory: 'Dermatology & Skin Care',
            recommendedSpecialty: 'Dermatology',
            specialtySlug: 'dermatology',
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: ['Today at 03:30 PM', 'Tomorrow at 11:00 AM'],
            healthEducationTip: 'Avoid harsh chemical soaps, apply fragrance-free hypoallergenic moisturizers on damp skin, and use SPF 30+ sunscreen daily.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 6. APPOINTMENT ASSISTANCE INTENT
        if (
          textLower.includes('book') ||
          textLower.includes('appointment') ||
          textLower.includes('schedule') ||
          textLower.includes('opd') ||
          textLower.includes('slot') ||
          textLower.includes('consult')
        ) {
          const doc = DOCTORS_DATA[0];
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'APPOINTMENT_ASSISTANCE',
            text: 'I can assist you in booking an OPD consultation with our specialist doctors across MEDICARE hospital branches. Select your preferred doctor and slot below.',
            timestamp,
            careCategory: 'OPD Appointment Navigation',
            recommendedSpecialty: doc.specialty,
            recommendedDoctor: doc,
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: doc.availableSlots[0]?.slots || ['Today at 02:30 PM', 'Tomorrow at 10:00 AM'],
            healthEducationTip: 'Please bring prior medical records, blood reports, and current medication lists to your OPD consultation.',
            followUpAdvice: 'Instant digital confirmation and SMS booking details will be dispatched immediately upon slot confirmation.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 7. HOSPITAL BRANCH LOOKUP INTENT
        if (
          textLower.includes('hospital') ||
          textLower.includes('branch') ||
          textLower.includes('location') ||
          textLower.includes('pune') ||
          textLower.includes('mumbai') ||
          textLower.includes('nagpur') ||
          textLower.includes('bed') ||
          textLower.includes('icu')
        ) {
          let matchedHosp = HOSPITALS_EXTENDED_DATA[0];
          if (textLower.includes('mumbai')) {
            matchedHosp = HOSPITALS_EXTENDED_DATA.find((h) => h.city.toLowerCase().includes('mumbai')) || matchedHosp;
          } else if (textLower.includes('nagpur')) {
            matchedHosp = HOSPITALS_EXTENDED_DATA.find((h) => h.city.toLowerCase().includes('nagpur')) || matchedHosp;
          }

          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'HOSPITAL_LOOKUP',
            text: `MEDICARE operates multi-specialty tertiary hospital campuses equipped with 24/7 ICUs, Advanced Cath Labs, and Robotic Operation Theatres. Here is details for our recommended branch: ${matchedHosp.name}.`,
            timestamp,
            careCategory: 'Hospital Network Locator',
            recommendedHospital: matchedHosp,
            healthEducationTip: 'Our emergency trauma desk operates 24/7 with zero admission delay for critical cardiac & stroke admissions.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 8. HEALTH EDUCATION & WELLNESS INTENT
        if (
          textLower.includes('diet') ||
          textLower.includes('wellness') ||
          textLower.includes('exercise') ||
          textLower.includes('prevention') ||
          textLower.includes('checkup') ||
          textLower.includes('lifestyle') ||
          textLower.includes('nutrition')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'HEALTH_EDUCATION',
            text: 'Preventive health education is key to longevity. MEDICARE offers structured Master Health Packages including comprehensive cardiac, diabetic, and organ function screenings.',
            timestamp,
            careCategory: 'Preventive Health & Education',
            healthEducationTip: 'Undergoing annual blood chemistry screenings (HbA1c, Lipid Profile, Kidney Function, Thyroid) helps detect asymptomatic metabolic conditions early.',
            followUpAdvice: 'Explore our Preventive Health Packages for full-body screening with complimentary doctor consultations.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 9. DIAGNOSTICS & LAB TESTS INTENT
        if (
          textLower.includes('test') ||
          textLower.includes('lab') ||
          textLower.includes('blood') ||
          textLower.includes('pathology') ||
          textLower.includes('mri') ||
          textLower.includes('ct scan') ||
          textLower.includes('x-ray') ||
          textLower.includes('ultrasound') ||
          textLower.includes('full body')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'HEALTH_EDUCATION',
            text: '🔬 *MEDICARE NABL Pathology & Radiology Diagnostics*\nOur 24/7 NABL-accredited diagnostic labs offer 85+ blood parameter testing, 3T Silent MRI, 128-slice CT Scans, and Digital X-Ray. We also provide *Home Sample Collection* across Pune with PDF report delivery within 6 hours.',
            timestamp,
            careCategory: 'NABL Pathology & Imaging Diagnostics',
            healthEducationTip: 'Fasting for 10-12 hours is recommended for Fasting Blood Sugar and Lipid Profile tests. Water intake is allowed.',
            followUpAdvice: 'Reports are downloadable directly via Patient Portal or delivered via WhatsApp PDF.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 9. INSURANCE & CASHLESS TPA INTENT
        if (
          textLower.includes('insurance') ||
          textLower.includes('cashless') ||
          textLower.includes('tpa') ||
          textLower.includes('claim') ||
          textLower.includes('star health') ||
          textLower.includes('hdfc') ||
          textLower.includes('max bupa') ||
          textLower.includes('care insurance')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'GENERAL_GREETING',
            text: '💳 *Insurance & Cashless TPA Authorization Desk*\nMEDICARE is empaneled with 9+ major health insurance providers (Star Health, HDFC ERGO, Care, Max Bupa, ICICI Lombard) and 5 major TPAs. Our 24/7 Insurance Desk processes pre-authorization approvals within 2 hours of admission.',
            timestamp,
            careCategory: 'Insurance TPA Pre-Authorization',
            healthEducationTip: 'Please carry your active Health Insurance Card, Government Photo ID (Aadhaar/PAN), and prior consultation notes for fast-track cashless processing.',
            followUpAdvice: 'Direct TPA Desk Helpline: 1800-MEDICARE (Ext. 301).',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 10. SECOND OPINION INTENT
        if (
          textLower.includes('second opinion') ||
          textLower.includes('report review') ||
          textLower.includes('biopsy') ||
          textLower.includes('mri report') ||
          textLower.includes('cancer opinion')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'SPECIALIST_RECOMMENDATION',
            text: '💬 *Expert Medical Second Opinion Desk*\nUnsure about a surgical recommendation or complex diagnosis? Upload your MRI, CT scans (DICOM), pathology reports, or discharge summary. Our Senior Medical Board provides a comprehensive independent evaluation within 24 hours.',
            timestamp,
            careCategory: 'Independent Medical Second Opinion',
            healthEducationTip: 'A second opinion confirms diagnostic accuracy and evaluates minimally invasive treatment alternatives.',
            followUpAdvice: 'Upload reports to our 256-bit Encrypted Vault for confidential review.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 11. INTERNATIONAL PATIENTS INTENT
        if (
          textLower.includes('international') ||
          textLower.includes('visa') ||
          textLower.includes('m-visa') ||
          textLower.includes('abroad') ||
          textLower.includes('country') ||
          textLower.includes('passport')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'GENERAL_GREETING',
            text: '✈️ *International Patient Concierge Desk*\nWe welcome international patients across 30+ countries. Our concierge team provides official Medical Visa (M-Visa) invitation letters within 12 hours, complimentary airport transfers, multi-lingual translators, and private luxury inpatient suites.',
            timestamp,
            careCategory: 'International Patient Care Desk',
            healthEducationTip: 'Send digital medical records beforehand to receive a preliminary treatment plan and cost estimation prior to travel.',
            followUpAdvice: 'Dedicated International Desk: international@medicarehospitals.in',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 12. HOME HEALTHCARE & ICU INTENT
        if (
          textLower.includes('home care') ||
          textLower.includes('home healthcare') ||
          textLower.includes('nurse') ||
          textLower.includes('icu at home') ||
          textLower.includes('physio')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'GENERAL_GREETING',
            text: '🏡 *24/7 Home Healthcare & ICU Nursing*\nReceive hospital-grade medical care in the comfort of home. Services include 24/7 ICU trained nursing, post-operative wound care, home physiotherapy, elderly care, and home doctor visits.',
            timestamp,
            careCategory: 'Home Healthcare Services',
            healthEducationTip: 'Continuous home monitoring by certified nurses speeds up post-surgical recovery while minimizing hospital readmission risks.',
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 13. GREETINGS & GENERAL HELPDESK
        if (
          textLower.includes('hi') ||
          textLower.includes('hello') ||
          textLower.includes('namaste') ||
          textLower.includes('contact') ||
          textLower.includes('timing') ||
          textLower.includes('number') ||
          textLower.includes('phone')
        ) {
          return {
            id,
            eventId,
            sender: 'ai',
            intentRecognized: 'GENERAL_GREETING',
            text: '👋 *Namaste! Welcome to MEDICARE Desk*\nI am your 24/7 Clinical AI Assistant. How can I help you today?\n\n• *OPD Helpline*: 1800-MEDICARE\n• *WhatsApp Desk*: +91 98230 41190\n• *24/7 Emergency*: 1800-MEDICARE\n• *OPD Timings*: Mon - Sat (8:00 AM - 8:00 PM)\n\nAsk me any symptom query or select an option below!',
            timestamp,
            careCategory: 'General Helpdesk & Contact Navigation',
            recommendedSpecialty: 'General Medicine',
            recommendedDoctor: DOCTORS_DATA[0],
            recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
            availableSlots: ['Today at 02:30 PM', 'Tomorrow at 10:00 AM'],
            disclaimer: STANDARD_SAFETY_DISCLAIMER,
          };
        }

        // 14. DEFAULT FALLBACK
        return {
          id,
          eventId,
          sender: 'ai',
          intentRecognized: 'GENERAL_GREETING',
          text: `Thank you for your message regarding "${userText}". I am MEDICARE AI Assistant. I can assist you with doctor booking, 85+ specialties, NABL lab tests, cashless insurance TPA, and 24/7 emergency dispatch.\n\nOur direct WhatsApp hotline is *+91 98230 41190*. Please feel free to ask any medical query or click an option below!`,
          timestamp,
          careCategory: 'General Health Navigation',
          recommendedSpecialty: 'General Medicine',
          recommendedDoctor: DOCTORS_DATA[0],
          recommendedHospital: HOSPITALS_EXTENDED_DATA[0],
          availableSlots: ['Today at 02:30 PM', 'Tomorrow at 10:00 AM'],
          healthEducationTip: 'Ensure adequate daily hydration (2.5L-3L of water) and maintain a consistent sleep schedule to support immune health.',
          disclaimer: STANDARD_SAFETY_DISCLAIMER,
        };
      },
    });

    const responseMsg: AiChatMessage = res.data || {
      id: `msg-${Date.now()}`,
      sender: 'ai',
      text: 'Hello, I am your MEDICARE AI Assistant. How can I assist with your health navigation today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Log Anonymized Analytics Event (Zero PII)
    const latencyMs = Date.now() - startTime;
    aiAnalyticsService.logEvent({
      sessionId,
      intentRecognized: responseMsg.intentRecognized || 'GENERAL_GREETING',
      specialtyRecommended: responseMsg.recommendedSpecialty,
      doctorRecommendedId: responseMsg.recommendedDoctor?.id,
      hospitalRecommendedId: responseMsg.recommendedHospital?.id,
      isEmergency: !!responseMsg.isEmergency,
      responseLatencyMs: latencyMs,
    });

    return responseMsg;
  },

  /**
   * Evaluate AI Triage Patient Risk Score
   */
  async evaluateRiskScore(symptoms: string[]): Promise<AiRiskScoreResult> {
    const res = await apiClient.post<AiRiskScoreResult>('/ai/risk-score', { symptoms }, {
      mockFallback: async () => {
        const symptomsJoined = symptoms.join(' ').toLowerCase();
        const hasEmergency =
          symptomsJoined.includes('chest pain') ||
          symptomsJoined.includes('stroke') ||
          symptomsJoined.includes('breathless') ||
          symptomsJoined.includes('bleeding');

        if (hasEmergency) {
          return {
            riskLevel: 'Critical ER',
            score: 95,
            recommendation: 'Immediate ER Triage Required',
            suggestedAction: 'Proceed to Emergency Room immediately or call 1800-VIGHNA.',
            emergencyTriggered: true,
          };
        }

        return {
          riskLevel: 'Low',
          score: 18,
          recommendation: 'Routine Outpatient Care Recommended',
          suggestedAction: 'Schedule an OPD appointment with General Medicine or Specialty Doctor within 3 days.',
          emergencyTriggered: false,
        };
      },
    });

    return (
      res.data || {
        riskLevel: 'Low',
        score: 15,
        recommendation: 'Routine OPD Consultation',
        suggestedAction: 'Schedule appointment within 3 days',
        emergencyTriggered: false,
      }
    );
  },
};
