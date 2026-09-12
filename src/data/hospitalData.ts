export interface HospitalFacilityItem {
  title: string;
  desc: string;
  icon: string;
}

export interface HospitalBranchExt {
  id: string;
  name: string;
  type: string;
  image: string;
  gallery: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  emergency: string;
  email: string;
  overview: string;
  totalBeds: number;
  icuBeds: number;
  isEmergency24x7: boolean;
  departments: string[];
  facilities: HospitalFacilityItem[];
  treatmentsOffered: string[];
  diagnosticsOffered: string[];
  associatedDoctorIds: string[];
}

export interface HospitalFacilityItem {
  title: string;
  desc: string;
  icon: string;
}

export interface HospitalBranchExt {
  id: string;
  name: string;
  type: string;
  image: string;
  gallery: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  emergency: string;
  email: string;
  overview: string;
  totalBeds: number;
  icuBeds: number;
  isEmergency24x7: boolean;
  departments: string[];
  facilities: HospitalFacilityItem[];
  treatmentsOffered: string[];
  diagnosticsOffered: string[];
  associatedDoctorIds: string[];
}

export const HOSPITALS_EXTENDED_DATA: HospitalBranchExt[] = [
  {
    id: 'pune-main',
    name: 'MEDICARE Super Specialty Hospital',
    type: 'Main Tertiary Care Complex',
    image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
    gallery: [
      '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      '/images/hospitals/cancer-institute-hitech-city.jpg',
      '/images/hospitals/financial-district-hospital.jpg',
    ],
    address: 'Medicare Health City, Sector 15, Baner-Pashan Link Road',
    city: 'Pune',
    state: 'Maharashtra',
    zip: '411045',
    phone: '+91 (020) 2765-9000',
    emergency: '1800-MEDICARE',
    email: 'pune@medicarehospitals.in',
    overview: 'MEDICARE Super Specialty Hospital, Pune, is a 350-bed NABH & JCI accredited quaternary care hospital. Equipped with a 24/7 Level-1 Trauma ICU, Philips Azurion Cath Lab, Mako 3D Robotic Joint Surgery suite, and Varian TrueBeam Radiation Therapy.',
    totalBeds: 350,
    icuBeds: 75,
    isEmergency24x7: true,
    departments: [
      'Cardiology & Cardiac Surgery',
      'Neurology & Neurosurgery',
      'Robotic Orthopedics & Trauma',
      'Integrated Cancer Institute',
      'Gastroenterology & Hepatology',
      'Nephrology & Renal Transplant',
      'Pediatrics & Level-3 NICU',
      'Obstetrics & Gynecology',
    ],
    facilities: [
      { title: '24/7 Emergency & Trauma ICU', desc: 'Level-1 Emergency Trauma suite with dedicated cardiac and neuro resuscitation bays.', icon: 'ShieldAlert' },
      { title: '3D Robotic Operating Suite', desc: 'Mako Robotic Arm & 4K HD endoscopic towers for zero-blood loss joint & spine surgery.', icon: 'Cpu' },
      { title: 'Advanced Cath Lab & CCU', desc: 'Philips Azurion 7 Interventional Cath Lab for 24/7 emergency STEMI angioplasty.', icon: 'HeartPulse' },
      { title: '3T Silent MRI & 128-Slice CT', desc: 'High-definition non-invasive cardiac angiography and 3D neuro MRI scans.', icon: 'Activity' },
      { title: 'NABL Certified Express Pathology', desc: 'Barcoded automated lab testing with free doorstep sample pickup service.', icon: 'TestTube' },
      { title: '24/7 Express Pharmacy & Blood Bank', desc: 'Fully stocked hospital pharmacy and component blood bank isolation unit.', icon: 'Cross' },
    ],
    treatmentsOffered: [
      'Robotic Total Knee Replacement',
      'Primary Angioplasty & Stenting (PTCA)',
      'CyberKnife TrueBeam Radiotherapy',
      'Endoscopic Keyhole Spine Surgery',
      'Laparoscopic Kidney Transplant',
      'RIRS Laser Kidney Stone Removal',
    ],
    diagnosticsOffered: [
      '3 Tesla Silent MRI',
      '128-Slice Cardiac CT Angiography',
      'PET-CT Cancer Scan',
      '2D Color Doppler Echocardiography',
      'Full Body Executive Pathology',
    ],
    associatedDoctorIds: [
      'doc-anand-deshmukh',
      'doc-sunita-kulkarni',
      'doc-rajesh-verma',
      'doc-meera-joshi',
      'doc-priya-nair',
      'doc-sanjay-patil',
    ],
  },
  {
    id: 'pimpri-opd',
    name: 'MEDICARE City OPD & Diagnostic Center',
    type: 'Outpatient Specialty Clinic',
    image: '/images/hospitals/financial-district-hospital.jpg',
    gallery: [
      '/images/hospitals/financial-district-hospital.jpg',
      '/images/hospitals/medicare-hospitals-hitech-city.jpg',
    ],
    address: 'Opp. City Mall, Old Mumbai-Pune Highway, Pimpri',
    city: 'Pimpri',
    state: 'Maharashtra',
    zip: '411018',
    phone: '+91 (020) 2765-9111',
    emergency: '+91 (020) 2765-9999',
    email: 'pimpri@medicarehospitals.in',
    overview: 'MEDICARE City OPD Center in Pimpri offers convenient outpatient consultant consultations, digital X-Ray, 2D Echo, Ultrasound, day-care minor procedures, and NABL certified blood lab collection.',
    totalBeds: 50,
    icuBeds: 10,
    isEmergency24x7: false,
    departments: [
      'General Medicine & Diabetes',
      'Gastroenterology OPD',
      'Gynecology & Women Wellness',
      'Pediatrics Consultation',
      'Dermatology & Laser Clinic',
    ],
    facilities: [
      { title: 'Outpatient Multi-Specialty OPD', desc: '12 consultation suites featuring senior consultants across major departments.', icon: 'Stethoscope' },
      { title: 'Digital X-Ray & Ultrasound', desc: 'High frequency 4D Ultrasound and digital radiography.', icon: 'Activity' },
      { title: 'Day Care Minor Procedures', desc: 'Endoscopy, wound care, and minor surgical day-care unit.', icon: 'CheckCircle' },
    ],
    treatmentsOffered: [
      'Therapeutic Upper GI Endoscopy',
      'High-Risk Pregnancy OPD Consultation',
      'Laser Skin & Scar Therapy',
      'Childhood Vaccination & Asthma Care',
    ],
    diagnosticsOffered: [
      'Digital Radiography (X-Ray)',
      'Abdominal 4D Ultrasound',
      'NABL Blood & Urine Pathology',
      'Fasting & HbA1c Diabetes Panel',
    ],
    associatedDoctorIds: [
      'doc-vikram-sharma',
      'doc-kavita-rao',
      'doc-swati-pawar',
    ],
  },
];
