export interface EmergencyContactItem {
  id: string;
  department: string;
  phone: string;
  description: string;
  availableHours: string;
  is24x7: boolean;
  iconName: string;
}

export interface EmergencyCentreItem {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  emergencyLine: string;
  traumaLevel: string;
  icuBedsAvailable: number;
  ambulanceDispatchTime: string;
  googleMapsUrl: string;
  facilities: string[];
}

export interface EmergencyCareTypeItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyServices: string[];
  responseTime: string;
}

export const EMERGENCY_CARE_TYPES: EmergencyCareTypeItem[] = [
  {
    id: 'trauma-care',
    title: 'Polytrauma & Level-1 Trauma Care',
    shortDesc: 'Immediate resuscitation, emergency orthopedic surgery & neuro-trauma stabilization.',
    fullDesc: 'Our Level-1 Trauma Center is equipped with dedicated shock resuscitation bays, 24/7 operating suites, portable CT/ultrasound, and on-call trauma surgeons.',
    iconName: 'ShieldAlert',
    keyServices: ['Shock Resuscitation Bays', 'Emergency Craniotomy', 'Pelvic & Femur Stabilization', 'Blood Bank 24/7'],
    responseTime: '< 5 Minutes',
  },
  {
    id: 'stemi-cardiac',
    title: '24/7 STEMI Cardiac Emergency',
    shortDesc: 'Primary angioplasty within 60 minutes door-to-balloon time for acute heart attacks.',
    fullDesc: 'Equipped with Philips Azurion 7 Cath Lab on constant standby. Dedicated interventional cardiology team ready for immediate coronary stenting.',
    iconName: 'HeartPulse',
    keyServices: ['Primary Angioplasty (PCI)', '12-Lead Telemetry ECG', 'Intra-Aortic Balloon Pump (IABP)', 'Thrombolysis Unit'],
    responseTime: '< 10 Minutes',
  },
  {
    id: 'stroke-unit',
    title: 'Acute Stroke & Brain Rescue',
    shortDesc: 'Golden-hour thrombolysis and mechanical thrombectomy for ischemic stroke.',
    fullDesc: 'Rapid 128-slice CT angiography protocols with neurological assessment within 15 minutes of hospital arrival.',
    iconName: 'Activity',
    keyServices: ['tPA Thrombolysis', 'Mechanical Thrombectomy', 'Neuro-ICU Monitoring', 'Continuous EEG'],
    responseTime: '< 15 Minutes',
  },
  {
    id: 'critical-icu',
    title: 'Critical Care & Intensive ICU',
    shortDesc: 'Level-3 Medical, Surgical & Neuro ICUs staffed with certified intensivists.',
    fullDesc: '75 high-dependency ICU beds featuring Hamilton ventilators, continuous hemodialysis (CRRT), and ECMO support for acute respiratory failure.',
    iconName: 'Stethoscope',
    keyServices: ['ECMO Support', 'CRRT Dialysis', 'Advanced Mechanical Ventilation', 'Invasive Hemodynamic Monitoring'],
    responseTime: 'Immediate',
  },
  {
    id: 'pediatric-emergency',
    title: 'Pediatric & Neonatal Emergency (NICU)',
    shortDesc: 'Dedicated pediatric emergency bays and Level-3 NICU transport incubators.',
    fullDesc: 'Specialized emergency care for pediatric trauma, febrile seizures, severe croup, and neonatal respiratory distress syndrome.',
    iconName: 'Baby',
    keyServices: ['Level-3 NICU Incubators', 'Pediatric Intubation', 'Seizure Protocol', 'Pediatric Intensivists'],
    responseTime: '< 5 Minutes',
  },
  {
    id: 'ambulance-fleet',
    title: 'Advanced ICU Ambulance Dispatch',
    shortDesc: 'GPS-tracked mobile ICUs equipped with ventilators, ECG telemetry & paramedics.',
    fullDesc: 'Fleet of 12 advanced life-support (ALS) ambulances capable of pre-hospital cardiac monitoring and real-time telemetry transfer to hospital ICU.',
    iconName: 'Ambulance',
    keyServices: ['In-transit ECG Telemetry', 'ALS Ventilator & Oxygen', 'Defibrillator & Infusion Pumps', 'Trained Paramedic Onboard'],
    responseTime: '< 12 Minutes Avg',
  },
];

export const EMERGENCY_CONTACTS: EmergencyContactItem[] = [
  {
    id: 'c1',
    department: '24/7 Emergency Dispatch Helpline',
    phone: '1800-MEDICARE',
    description: 'Central emergency helpline for immediate ambulance dispatch & trauma admission.',
    availableHours: '24 Hours / 7 Days',
    is24x7: true,
    iconName: 'PhoneCall',
  },
  {
    id: 'c2',
    department: 'STEMI Cardiac Emergency Line',
    phone: '+91 (020) 2765-9111',
    description: 'Direct hotline to Cath Lab emergency team for heart attack admissions.',
    availableHours: '24 Hours / 7 Days',
    is24x7: true,
    iconName: 'HeartPulse',
  },
  {
    id: 'c3',
    department: 'Stroke & Neuro Emergency Line',
    phone: '+91 (020) 2765-9222',
    description: 'Direct hotline for acute ischemic stroke and head injury trauma.',
    availableHours: '24 Hours / 7 Days',
    is24x7: true,
    iconName: 'Activity',
  },
  {
    id: 'c4',
    department: 'Pediatric ICU Emergency Desk',
    phone: '+91 (020) 2765-9333',
    description: 'Immediate admission hotline for pediatric and neonatal emergencies.',
    availableHours: '24 Hours / 7 Days',
    is24x7: true,
    iconName: 'Baby',
  },
];

export const EMERGENCY_CENTRES: EmergencyCentreItem[] = [
  {
    id: 'pune-trauma-center',
    name: 'MEDICARE Level-1 Trauma Center',
    address: 'Medicare Health City, Sector 15, Baner-Pashan Link Road',
    city: 'Pune',
    phone: '+91 (020) 2765-9000',
    emergencyLine: '1800-MEDICARE',
    traumaLevel: 'Level-1 Tertiary Trauma Center',
    icuBedsAvailable: 18,
    ambulanceDispatchTime: '8-12 Minutes',
    googleMapsUrl: 'https://maps.google.com/?q=Medicare+Hospital+Pune',
    facilities: ['24/7 Cath Lab', '24/7 Blood Bank', '128 CT Angiography', 'Shock Resuscitation Bays'],
  },
  {
    id: 'mumbai-trauma-center',
    name: 'MEDICARE Cardiac & Emergency Institute',
    address: 'Plot 42, Central Healthcare Boulevard, Bandra East',
    city: 'Mumbai',
    phone: '+91 (022) 6890-4000',
    emergencyLine: '+91 (022) 6890-4999',
    traumaLevel: 'Level-1 Cardiac & Neuro Center',
    icuBedsAvailable: 14,
    ambulanceDispatchTime: '10-15 Minutes',
    googleMapsUrl: 'https://maps.google.com/?q=Medicare+Hospital+Mumbai',
    facilities: ['Philips Azurion Cath Lab', '3T MRI', 'Hybrid OR Suite', 'ECMO Unit'],
  },
];
