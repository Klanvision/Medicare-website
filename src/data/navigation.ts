export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  type?: 'link' | 'services-mega' | 'patient-care-mega';
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Doctors', href: '/doctors', type: 'link' },
  { label: 'Hospitals', href: '/hospitals', type: 'link' },
  { label: 'Specialties', href: '/specialities', type: 'link' },
  { label: 'Treatments', href: '/treatments', type: 'link' },
  { label: 'Services', href: '/services', type: 'services-mega' },
  { label: 'Health Packages', href: '/health-checkups', type: 'link' },
  { label: 'For Patients', href: '/patient/login', type: 'patient-care-mega' },
  { label: 'About Us', href: '/about', type: 'link' },
];

export const HOSPITAL_CONTACT_INFO = {
  emergencyNumber: '1800-MEDICARE',
  opdHelpline: '+91-20-2765-9000',
  whatsappNumber: '+91-98765-43210',
  email: 'care@medicarehospitals.in',
  address: 'Medicare Health City, Sector 15, Baner-Pashan Link Road, Pune - 411045, Maharashtra',
  opdHours: 'Mon - Sat: 8:00 AM - 8:00 PM (Emergency 24/7)',
};
