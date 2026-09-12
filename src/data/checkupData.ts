export type CheckupCategory =
  | 'Full Body'
  | "Men's"
  | "Women's"
  | 'Senior Citizen'
  | 'Child'
  | 'Preventive'
  | 'Lifestyle'
  | 'Corporate';

export interface CheckupPackage {
  id: string;
  name: string;
  category: CheckupCategory;
  description: string;
  mrpPrice: number;
  discountPrice: number;
  testCount: number;
  includedTests: string[];
  preparation: string;
  homeCollection: boolean;
  turnaroundTime: string;
  recommendedFor: string;
}

export const CHECKUP_PACKAGES_DATA: CheckupPackage[] = [
  // 1. Full Body
  {
    id: 'pkg-fullbody-master',
    name: 'Master Health Nova Full Body Checkup',
    category: 'Full Body',
    description: 'Comprehensive 85-parameter full body diagnostic evaluation screening heart, liver, kidney, thyroid, blood sugar, and vital vitamins.',
    mrpPrice: 4999,
    discountPrice: 1999,
    testCount: 85,
    includedTests: [
      'Complete Blood Count (CBC with ESR - 18 Tests)',
      'Fasting Blood Sugar & HbA1c (Glycated Hemoglobin)',
      'Comprehensive Lipid Profile (Total, HDL, LDL, VLDL, Triglycerides)',
      'Liver Function Test (LFT - Bilirubin, SGOT, SGPT, Alkaline Phosphatase)',
      'Kidney Function Test (KFT - Serum Creatinine, Blood Urea, Uric Acid)',
      'Thyroid Profile Total (T3, T4, TSH)',
      'Vitamin D3 & Vitamin B12 Levels',
      'Urine Routine & Microscopic Examination',
      'Digital Chest X-Ray & 12-Lead ECG',
    ],
    preparation: '10 - 12 Hours overnight fasting required. Plain water permitted.',
    homeCollection: true,
    turnaroundTime: '12 Hours',
    recommendedFor: 'Adults aged 18 - 65 for annual health status baseline.',
  },

  // 2. Men's
  {
    id: 'pkg-mens-executive',
    name: "Men's Executive Wellness & Prostate Check",
    category: "Men's",
    description: 'Tailored health panel assessing male cardiovascular risk, prostate health (PSA), testosterone levels, and liver/kidney vitality.',
    mrpPrice: 5800,
    discountPrice: 2499,
    testCount: 65,
    includedTests: [
      'PSA (Prostate Specific Antigen) Total',
      'Total Serum Testosterone',
      'Lipid Profile & hs-CRP Cardiac Marker',
      'HbA1c & Fasting Glucose',
      'Liver & Kidney Function Panels',
      'Serum Electrolytes & Uric Acid',
      'ECG & Senior Physician OPD Consultation',
    ],
    preparation: '10 Hours fasting required. Avoid heavy exercise 24 hours prior.',
    homeCollection: true,
    turnaroundTime: '12 Hours',
    recommendedFor: 'Men aged 30+ for cardiovascular and prostate health monitoring.',
  },

  // 3. Women's
  {
    id: 'pkg-womens-wellness',
    name: "Women's Wellness & Hormonal Balance Check",
    category: "Women's",
    description: 'Specialized health screening evaluating thyroid, iron deficiency anemia, bone calcium, PCOS hormonal markers, and Pap smear.',
    mrpPrice: 5900,
    discountPrice: 2499,
    testCount: 68,
    includedTests: [
      'Thyroid Profile Total (T3, T4, TSH)',
      'Serum Iron, Ferritin & Total Iron Binding (TIBC)',
      'Vitamin D3 & Calcium Panel',
      'FSH, LH & Prolactin Hormone Screening',
      'Complete Hemogram & Blood Sugar',
      'Abdomen & Pelvis 4D Ultrasound (USG)',
      'Pap Smear Screening & Gynaecologist Consultation',
    ],
    preparation: '8 Hours fasting required. USG requires a full bladder.',
    homeCollection: true,
    turnaroundTime: '24 Hours',
    recommendedFor: 'Women of all age groups for hormonal and gynecological wellness.',
  },

  // 4. Senior Citizen
  {
    id: 'pkg-senior-geriatric',
    name: 'Senior Citizen Active Geriatric Care',
    category: 'Senior Citizen',
    description: 'Geriatric health panel designed for seniors focusing on bone density, joint inflammation, kidney filtration rate, and cardiac strain.',
    mrpPrice: 6500,
    discountPrice: 2799,
    testCount: 75,
    includedTests: [
      'Complete Pathology & Blood Count',
      'Serum Uric Acid & RA Factor Joint Marker',
      'Estimated GFR & Serum Creatinine (Kidney)',
      'Serum Calcium, Phosphorus & Vitamin D3',
      'HbA1c & Lipid Profile',
      '2D Echo / Treadmill Stress Test (TMT)',
      'Abdomen Ultrasound & Physician OPD Review',
    ],
    preparation: '10 Hours overnight fasting required.',
    homeCollection: true,
    turnaroundTime: '24 Hours',
    recommendedFor: 'Senior citizens aged 55+ for comprehensive geriatric monitoring.',
  },

  // 5. Child
  {
    id: 'pkg-child-growth',
    name: 'Child Growth, Immunity & Anemia Profile',
    category: 'Child',
    description: 'Pediatric screening evaluating growth milestones, blood hemoglobin, immunity vitamins, calcium, and stool/urine parasites.',
    mrpPrice: 3200,
    discountPrice: 1499,
    testCount: 40,
    includedTests: [
      'Pediatric Complete Blood Count (CBC)',
      'Serum Calcium & Vitamin D3',
      'Serum Ferritin (Iron Deficiency)',
      'Blood Grouping & Rh Typing',
      'Urine & Stool Routine Microscopic Examination',
      'Pediatrician OPD Growth Assessment',
    ],
    preparation: 'No fasting required. Ensure child is well hydrated.',
    homeCollection: true,
    turnaroundTime: '6 Hours',
    recommendedFor: 'Children aged 2 - 16 years for growth and nutritional evaluation.',
  },

  // 6. Preventive
  {
    id: 'pkg-preventive-cardiac',
    name: 'Essential Preventive Cardiac & Diabetes Check',
    category: 'Preventive',
    description: 'Targeted early-detection package screening silent heart blockages, arterial inflammation, and pre-diabetes.',
    mrpPrice: 4200,
    discountPrice: 1799,
    testCount: 45,
    includedTests: [
      'hs-CRP (High Sensitivity C-Reactive Protein)',
      'HbA1c & Fasting / Post-Prandial Glucose',
      'Advanced Lipid Profile (Total, HDL, LDL, Triglycerides)',
      'ECG 12-Lead Tracing',
      'Serum Creatinine & Electrolytes',
    ],
    preparation: '10 Hours overnight fasting required.',
    homeCollection: true,
    turnaroundTime: '8 Hours',
    recommendedFor: 'Individuals with sedentary lifestyle or family diabetes/heart history.',
  },

  // 7. Lifestyle
  {
    id: 'pkg-lifestyle-metabolic',
    name: 'Lifestyle, Stress & Metabolic Checkup',
    category: 'Lifestyle',
    description: 'Screens metabolic syndrome, fatty liver, cortisol stress markers, thyroid, and urban lifestyle vitamin deficiencies.',
    mrpPrice: 4800,
    discountPrice: 1999,
    testCount: 55,
    includedTests: [
      'Liver Function Test (SGOT/SGPT/Bilirubin)',
      'Serum Fasting Insulin & HOMA-IR Index',
      'Vitamin D3 & Vitamin B12',
      'Thyroid Profile & Cortisol Level',
      'Uric Acid & Lipid Panel',
    ],
    preparation: '10 - 12 Hours fasting required.',
    homeCollection: true,
    turnaroundTime: '12 Hours',
    recommendedFor: 'IT professionals, corporate executives, and shift workers.',
  },

  // 8. Corporate
  {
    id: 'pkg-corporate-annual',
    name: 'Corporate Annual & Pre-Employment Health Check',
    category: 'Corporate',
    description: 'Standard occupational health screening compliance package for employees, including audiometry, eye test, X-Ray, and blood panel.',
    mrpPrice: 2800,
    discountPrice: 1199,
    testCount: 35,
    includedTests: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar & Lipid Profile',
      'Digital Chest X-Ray',
      'ECG 12-Lead',
      'Visual Acuity & Color Blindness Test',
      'Physical Fitness Certificate by Medical Officer',
    ],
    preparation: '8 Hours fasting required for blood test.',
    homeCollection: false,
    turnaroundTime: 'Same Day',
    recommendedFor: 'Corporate employees, pre-employment joining medicals, and factory staff.',
  },
];
