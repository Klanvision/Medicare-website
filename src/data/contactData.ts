export interface HospitalLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  emergency: string;
  email: string;
  opdHours: string;
  googleMapEmbedUrl: string;
  directionsUrl: string;
  image: string;
  isMainCampus?: boolean;
}

export interface DepartmentContact {
  id: string;
  department: string;
  headName: string;
  directPhone: string;
  extension: string;
  email: string;
  timing: string;
}

export interface SupportChannel {
  id: string;
  title: string;
  description: string;
  contactNumber: string;
  iconName: string;
  badge: string;
  actionText: string;
}

export const MAIN_CONTACT_DETAILS = {
  hospitalName: 'MEDICARE Super Specialty Hospital',
  address: 'Medicare Health City, Sector 15, Baner-Pashan Link Road, Baner, Pune, Maharashtra 411045',
  emergencyHotline: '1800-MEDICARE',
  emergencyDirectPhone: '+91 20 2765 9999',
  opdHelpline: '+91 20 2765 9000',
  appointmentPhone: '+91 20 2765 9111',
  internationalDeskPhone: '+91 20 2765 9888',
  mainEmail: 'care@medicarehospitals.in',
  internationalEmail: 'international@medicarehospitals.in',
  careersEmail: 'careers@medicarehospitals.in',
  tpaEmail: 'insurance.tpa@medicarehospitals.in',
  opdHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
  emergencyHours: '24/7 Level-1 Emergency & ICU Open Always',
};

export const HOSPITAL_LOCATIONS: HospitalLocation[] = [
  {
    id: 'loc-1',
    name: 'MEDICARE Hospital - Main Quaternary Campus',
    type: '350-Bed Super Specialty & Level-1 Trauma Hospital',
    address: 'Medicare Health City, Sector 15, Baner-Pashan Link Road, Baner, Pune 411045',
    phone: '+91 20 2765 9000',
    emergency: '1800-MEDICARE',
    email: 'baner@medicarehospitals.in',
    opdHours: 'Mon - Sat: 8:00 AM - 8:00 PM (24/7 ER)',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.795894178553!2d73.7485!3d18.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI4LjMiTiA3M8KwNDQnNTQuNiJF!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Baner+Pune',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    isMainCampus: true,
  },
  {
    id: 'loc-2',
    name: 'MEDICARE Hospital - Wakad Medical Hub',
    type: 'Outpatient & Daycare Surgical Center',
    address: 'Survey No. 45/1A, Off Mumbai-Bengaluru Highway, Wakad, Pune 411057',
    phone: '+91 20 2765 8000',
    emergency: '+91 20 2765 8999',
    email: 'wakad@medicarehospitals.in',
    opdHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261294812353!2d73.7845!3d18.5592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzMzLjEiTiA3M8KwNDcnMDQuMiJF!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Wakad+Pune',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'loc-3',
    name: 'MEDICARE Hospital - Pimpri Critical Care Center',
    type: 'Emergency & Pediatric Specialty Hospital',
    address: 'Old Mumbai-Pune Highway, Near Kharalwadi, Pimpri, Pune 411018',
    phone: '+91 20 2765 7000',
    emergency: '+91 20 2765 7999',
    email: 'pimpri@medicarehospitals.in',
    opdHours: '24 Hours Emergency & OPD (8 AM - 8 PM)',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.952194812353!2d73.8055!3d18.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ1LjEiTiA3M8KwNDgnMTkuOCJF!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Pimpri+Pune',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'loc-4',
    name: 'MEDICARE Hospital - Hadapsar Diagnostic Hub',
    type: 'Advanced Imaging & Diagnostic Center',
    address: 'Magarpatta City Road, Hadapsar, Pune 411028',
    phone: '+91 20 2765 6000',
    emergency: '+91 20 2765 6999',
    email: 'hadapsar@medicarehospitals.in',
    opdHours: 'Mon - Sun: 7:00 AM - 9:00 PM',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.552194812353!2d73.9255!3d18.5092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzMzLjEiTiA3M8KwNTUnMzEuOCJF!5e0!3m2!1sen!2sin!4v1629000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Hadapsar+Pune',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
];

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    id: 'dept-1',
    department: '24/7 Emergency & Level-1 Trauma',
    headName: 'Dr. Sameer Kulkarni (Trauma Lead)',
    directPhone: '+91 20 2765 9999',
    extension: 'Ext. 101 / 102',
    email: 'trauma.er@medicarehospitals.in',
    timing: '24/7 Always Open',
  },
  {
    id: 'dept-2',
    department: 'Cardiology & Cath Lab Desk',
    headName: 'Dr. Vikramaditya Joshi (HOD)',
    directPhone: '+91 20 2765 9120',
    extension: 'Ext. 204',
    email: 'cardiology@medicarehospitals.in',
    timing: '8:00 AM - 8:00 PM (Emergency 24/7)',
  },
  {
    id: 'dept-3',
    department: 'Oncology & Radiation Suite',
    headName: 'Dr. Radhika Sen (Director)',
    directPhone: '+91 20 2765 9130',
    extension: 'Ext. 210',
    email: 'oncology@medicarehospitals.in',
    timing: '8:30 AM - 6:30 PM',
  },
  {
    id: 'dept-4',
    department: 'Orthopedics & Mako Robotics',
    headName: 'Dr. Harshvardhan Kapoor',
    directPhone: '+91 20 2765 9140',
    extension: 'Ext. 218',
    email: 'ortho@medicarehospitals.in',
    timing: '9:00 AM - 7:00 PM',
  },
  {
    id: 'dept-5',
    department: 'Neurology & Neurosurgery',
    headName: 'Dr. Siddharth Varma',
    directPhone: '+91 20 2765 9150',
    extension: 'Ext. 225',
    email: 'neuro@medicarehospitals.in',
    timing: '9:00 AM - 6:00 PM',
  },
  {
    id: 'dept-6',
    department: 'Insurance TPA & Cashless Claims',
    headName: 'Mr. Vivek Ranade (TPA Manager)',
    directPhone: '+91 20 2765 9160',
    extension: 'Ext. 301',
    email: 'insurance.tpa@medicarehospitals.in',
    timing: '8:00 AM - 8:00 PM',
  },
  {
    id: 'dept-7',
    department: 'International Patient Services',
    headName: 'Ms. Maya Al-Sayed (Coordinator)',
    directPhone: '+91 20 2765 9888',
    extension: 'Ext. 405',
    email: 'international@medicarehospitals.in',
    timing: '24/7 Dedicated Desk',
  },
  {
    id: 'dept-8',
    department: 'Inpatient Billing & Discharge Desk',
    headName: 'Mr. Arvind Shinde',
    directPhone: '+91 20 2765 9180',
    extension: 'Ext. 108',
    email: 'billing@medicarehospitals.in',
    timing: '24/7 Operations',
  },
];

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 'sup-1',
    title: '24/7 Emergency Dispatch',
    description: 'Instant ICU ambulance allocation and critical medical helpline.',
    contactNumber: '1800-MEDICARE',
    iconName: 'ShieldAlert',
    badge: '24/7 Active',
    actionText: 'Call Emergency',
  },
  {
    id: 'sup-2',
    title: 'OPD Appointment Helpdesk',
    description: 'Book doctor appointments, reschedule visits or request home health.',
    contactNumber: '+91 20 2765 9111',
    iconName: 'Calendar',
    badge: '8 AM - 8 PM',
    actionText: 'Call Appointment Desk',
  },
  {
    id: 'sup-3',
    title: 'Cashless Insurance TPA Desk',
    description: 'Pre-authorization support for Star, HDFC ERGO, Care, Max Bupa & PSU TPAs.',
    contactNumber: '+91 20 2765 9160',
    iconName: 'FileCheck',
    badge: 'Cashless Support',
    actionText: 'Contact TPA Desk',
  },
  {
    id: 'sup-4',
    title: '24/7 WhatsApp Medical Assistance',
    description: 'Instant chat response for lab reports, doctor schedules and location maps.',
    contactNumber: '+91 20 2765 9000',
    iconName: 'MessageCircle',
    badge: 'Instant Chat',
    actionText: 'Chat on WhatsApp',
  },
];
