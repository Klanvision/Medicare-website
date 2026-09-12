export type DiagnosticCategory = 'Pathology' | 'MRI' | 'CT Scan' | 'X-Ray' | 'Ultrasound';

export interface DiagnosticTest {
  id: string;
  name: string;
  category: DiagnosticCategory;
  description: string;
  mrpPrice: number;
  discountPrice: number;
  turnaroundTime: string;
  fastingRequired: boolean;
  homeSampleAvailable: boolean;
  prerequisites: string[];
}

export interface DiagnosticPackage {
  id: string;
  packageName: string;
  description: string;
  mrpPrice: number;
  discountPrice: number;
  testCount: number;
  includedTests: string[];
  idealFor: string;
}

export const DIAGNOSTIC_TESTS_DATA: DiagnosticTest[] = [
  // 1. Pathology & Blood Tests
  {
    id: 'test-cbc',
    name: 'Complete Blood Count (CBC) with ESR',
    category: 'Pathology',
    description: 'Evaluates overall health and detects a wide range of disorders including anemia, infection, and leukemia.',
    mrpPrice: 500,
    discountPrice: 299,
    turnaroundTime: '6 Hours',
    fastingRequired: false,
    homeSampleAvailable: true,
    prerequisites: ['No special preparation required', 'Avoid strenuous exercise before test'],
  },
  {
    id: 'test-hba1c',
    name: 'HbA1c (Glycated Hemoglobin) Diabetes Panel',
    category: 'Pathology',
    description: 'Measures average blood sugar levels over the past 3 months to monitor and diagnose diabetes.',
    mrpPrice: 650,
    discountPrice: 399,
    turnaroundTime: '4 Hours',
    fastingRequired: false,
    homeSampleAvailable: true,
    prerequisites: ['Can be taken anytime during the day'],
  },
  {
    id: 'test-lipid',
    name: 'Comprehensive Lipid Profile (Cholesterol Panel)',
    category: 'Pathology',
    description: 'Measures Total Cholesterol, HDL, LDL, VLDL, and Triglycerides to evaluate cardiovascular risk.',
    mrpPrice: 900,
    discountPrice: 499,
    turnaroundTime: '8 Hours',
    fastingRequired: true,
    homeSampleAvailable: true,
    prerequisites: ['10 - 12 Hours overnight fasting mandatory', 'Water allowed'],
  },
  {
    id: 'test-thyroid',
    name: 'Thyroid Profile Total (T3, T4, TSH)',
    category: 'Pathology',
    description: 'Assesses thyroid gland function for hypothyroidism or hyperthyroidism diagnosis.',
    mrpPrice: 800,
    discountPrice: 449,
    turnaroundTime: '6 Hours',
    fastingRequired: false,
    homeSampleAvailable: true,
    prerequisites: ['Morning sample recommended before thyroid medication'],
  },

  // 2. 3T Silent MRI
  {
    id: 'mri-brain-3t',
    name: '3T Silent Brain MRI (with 3D Angiography)',
    category: 'MRI',
    description: 'High-definition 3 Tesla MRI scan providing crystal clear brain tissue imaging without loud scanner noise.',
    mrpPrice: 7500,
    discountPrice: 5499,
    turnaroundTime: '12 Hours',
    fastingRequired: false,
    homeSampleAvailable: false,
    prerequisites: ['Remove all metal items, watches, and jewelry', 'Inform technician if you have a pacemaker'],
  },
  {
    id: 'mri-spine-3t',
    name: '3T MRI Lumbar Spine & Spinal Cord',
    category: 'MRI',
    description: 'Evaluates nerve compression, herniated disc prolapse, sciatica, and spinal cord alignment.',
    mrpPrice: 6800,
    discountPrice: 4899,
    turnaroundTime: '12 Hours',
    fastingRequired: false,
    homeSampleAvailable: false,
    prerequisites: ['Wear comfortable cotton clothes without zippers or metal buttons'],
  },

  // 3. 128-Slice CT Scan
  {
    id: 'ct-cardiac-128',
    name: '128-Slice Coronary CT Angiography (Non-Invasive)',
    category: 'CT Scan',
    description: '3D non-invasive CT scan mapping coronary artery blockages and calcium scoring in under 10 seconds.',
    mrpPrice: 11000,
    discountPrice: 7999,
    turnaroundTime: '12 Hours',
    fastingRequired: true,
    homeSampleAvailable: false,
    prerequisites: ['4 Hours fasting mandatory', 'Check Serum Creatinine levels before contrast injection'],
  },
  {
    id: 'ct-chest-hrct',
    name: 'HRCT Chest (High Resolution CT Thorax)',
    category: 'CT Scan',
    description: 'Detailed lung parenchymal cross-sectional imaging for pneumonia, fibrosis, and post-COVID assessment.',
    mrpPrice: 4500,
    discountPrice: 3299,
    turnaroundTime: '6 Hours',
    fastingRequired: false,
    homeSampleAvailable: false,
    prerequisites: ['Bring prior chest X-Rays or medical reports'],
  },

  // 4. Digital X-Ray
  {
    id: 'xray-chest-pa',
    name: 'Digital Chest X-Ray (PA View)',
    category: 'X-Ray',
    description: 'Low-radiation digital chest radiograph evaluating lungs, heart shadow, and rib cage structures.',
    mrpPrice: 450,
    discountPrice: 299,
    turnaroundTime: '2 Hours',
    fastingRequired: false,
    homeSampleAvailable: false,
    prerequisites: ['Change into hospital gown', 'Remove neck chains and metallic objects'],
  },

  // 5. 4D Ultrasound & Echo
  {
    id: 'usg-abdomen-pelvis',
    name: 'Abdomen & Pelvis 4D Ultrasound (USG)',
    category: 'Ultrasound',
    description: 'High-frequency sonogram evaluating liver, gallbladder stones, kidneys, pancreas, and pelvic organs.',
    mrpPrice: 1800,
    discountPrice: 1199,
    turnaroundTime: 'Same Day',
    fastingRequired: true,
    homeSampleAvailable: false,
    prerequisites: ['Fasting for 6 hours', 'Full bladder required (Drink 1 liter water 1 hour before scan)'],
  },
  {
    id: 'usg-2d-echo',
    name: '2D Color Doppler Echocardiography',
    category: 'Ultrasound',
    description: 'Ultrasound of the heart evaluating heart muscle pumping fraction (EF), valve function, and wall motion.',
    mrpPrice: 2400,
    discountPrice: 1699,
    turnaroundTime: 'Same Day',
    fastingRequired: false,
    homeSampleAvailable: false,
    prerequisites: ['No special prep required'],
  },
];

export const DIAGNOSTIC_PACKAGES_DATA: DiagnosticPackage[] = [
  {
    id: 'pkg-master-health',
    packageName: 'Master Health Nova Full Body Checkup',
    description: 'Comprehensive 85-parameter diagnostic panel screening heart, liver, kidneys, blood sugar, thyroid, and vital vitamins.',
    mrpPrice: 4999,
    discountPrice: 1999,
    testCount: 85,
    includedTests: [
      'CBC with ESR (18 Parameters)',
      'Fasting Blood Sugar & HbA1c',
      'Lipid Profile (7 Parameters)',
      'Liver Function Test (LFT - 11 Parameters)',
      'Kidney Function Test (KFT - 9 Parameters)',
      'Thyroid Profile Total (T3, T4, TSH)',
      'Vitamin D3 & Vitamin B12 Levels',
      'Digital Chest X-Ray & ECG',
    ],
    idealFor: 'Annual health checkup for adults aged 25 - 65 years',
  },
  {
    id: 'pkg-cardiac-executive',
    packageName: 'Executive Cardiac Wellness Package',
    description: 'Advanced heart health panel designed to detect silent coronary blockages, cholesterol buildup, and arrhythmia.',
    mrpPrice: 7500,
    discountPrice: 3499,
    testCount: 42,
    includedTests: [
      '2D Color Doppler Echocardiography',
      'Computerized TMT (Treadmill Stress Test)',
      'High Sensitivity C-Reactive Protein (hs-CRP)',
      'Comprehensive Lipid Profile & Apo-B',
      'HbA1c & Fasting Blood Glucose',
      'Digital ECG & Cardiologist OPD Consultation',
    ],
    idealFor: 'Individuals with family history of heart disease, high BP, or age 35+',
  },
  {
    id: 'pkg-senior-citizen',
    packageName: 'Senior Citizen Comprehensive Health Care',
    description: 'Tailored geriatric health panel focusing on bone density, kidney filtration, joint health, and prostate/breast markers.',
    mrpPrice: 6200,
    discountPrice: 2499,
    testCount: 70,
    includedTests: [
      'Complete Pathology & Blood Count',
      'Serum Calcium & Phosphorus',
      'Uric Acid & Joint Markers',
      'PSA (Prostate Specific Antigen for Males) / Pap Smear',
      'Abdomen & Pelvis Ultrasound (USG)',
      'ECG & Senior Consultant Physician Consultation',
    ],
    idealFor: 'Senior citizens aged 55+ years',
  },
];
