export interface AdminDashboardMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
  iconName: string;
  bgGradient: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Patient' | 'Doctor' | 'Staff' | 'Admin';
  status: 'Active' | 'Inactive' | 'Suspended';
  registeredDate: string;
  lastLogin: string;
}

export interface AdminDoctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  qualification: string;
  experience: string;
  fee: number;
  status: 'Active' | 'On Leave' | 'Pending Verification';
  verified: boolean;
}

export interface AdminAppointment {
  id: string;
  bookingRef: string;
  patientName: string;
  patientPhone: string;
  doctorName: string;
  department: string;
  date: string;
  timeSlot: string;
  type: 'OPD Visit' | 'Video Consultation' | 'Home Health';
  status: 'Confirmed' | 'Completed' | 'Pending' | 'Cancelled';
  paymentStatus: 'Paid' | 'Pending' | 'Refunded';
  amount: number;
}

export interface AdminHospital {
  id: string;
  name: string;
  location: string;
  beds: number;
  icuBeds: number;
  doctorsCount: number;
  traumaLevel: string;
  status: 'Operational' | 'Maintenance';
}

export interface AdminDepartment {
  id: string;
  name: string;
  hod: string;
  phone: string;
  staffCount: number;
  activeSurgeries: number;
  status: 'Active' | 'Full Capacity';
}

export interface AdminSpecialty {
  id: string;
  name: string;
  slug: string;
  isCOE: boolean;
  doctorsCount: number;
  treatmentsCount: number;
  description?: string;
  status: 'Active' | 'Inactive';
}

export interface AdminContentItem {
  id: string;
  title: string;
  type: 'Health Library Article' | 'Banner Announcement' | 'FAQ' | 'Press Release';
  category: string;
  author: string;
  publishedDate: string;
  views: number;
  status: 'Published' | 'Draft' | 'Archived';
}

export interface AdminEnquiry {
  id: string;
  ticketId: string;
  patientName: string;
  email: string;
  phone: string;
  category: 'General' | 'Appointment' | 'Emergency' | 'Feedback' | 'TPA Claim';
  subject: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  date: string;
}

export interface AdminCampaign {
  id: string;
  name: string;
  type: 'Discount Offer' | 'Email Newsletter' | 'Health Camp Drive';
  code: string;
  targetAudience: string;
  discountValue: string;
  validUntil: string;
  claimsCount: number;
  status: 'Active' | 'Scheduled' | 'Expired';
}

export const ADMIN_DASHBOARD_CARDS: AdminDashboardMetric[] = [
  {
    id: 'm-1',
    title: 'Total Patients',
    value: '1,48,920',
    change: '+12.4%',
    isPositive: true,
    period: 'vs last month',
    iconName: 'Users',
    bgGradient: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'm-2',
    title: 'Active Doctors',
    value: '154',
    change: '+4 Doctors',
    isPositive: true,
    period: 'joined this month',
    iconName: 'UserCheck',
    bgGradient: 'from-teal-600 to-emerald-700',
  },
  {
    id: 'm-3',
    title: 'Appointments Today',
    value: '342',
    change: '289 Completed',
    isPositive: true,
    period: '53 Pending slots',
    iconName: 'Calendar',
    bgGradient: 'from-[#070e24] to-navy-900 border border-amber-500/50',
  },
  {
    id: 'm-4',
    title: 'Hospital Campuses',
    value: '4 Campuses',
    change: '350 Beds',
    isPositive: true,
    period: '94% ICU Occupancy',
    iconName: 'Building',
    bgGradient: 'from-purple-700 to-indigo-900',
  },
  {
    id: 'm-5',
    title: 'Pending Enquiries',
    value: '42 Tickets',
    change: '18 Urgent',
    isPositive: false,
    period: 'requires response',
    iconName: 'MessageSquare',
    bgGradient: 'from-amber-600 to-orange-700',
  },
  {
    id: 'm-6',
    title: 'Diagnostic Scans',
    value: '1,240 Scans',
    change: '+18.2%',
    isPositive: true,
    period: 'this month',
    iconName: 'Activity',
    bgGradient: 'from-cyan-600 to-teal-700',
  },
  {
    id: 'm-7',
    title: 'Monthly Revenue',
    value: '₹ 2.84 Cr',
    change: '+15.8%',
    isPositive: true,
    period: 'YoY Growth',
    iconName: 'CreditCard',
    bgGradient: 'from-[#060c20] to-[#0d1f47] border-2 border-amber-400',
  },
];

export const MOCK_ADMIN_USERS: AdminUser[] = [
  { id: 'usr-1', name: 'Rajesh Sharma', email: 'rajesh.s@example.com', phone: '+91 98765 43210', role: 'Patient', status: 'Active', registeredDate: '2025-01-12', lastLogin: '10 mins ago' },
  { id: 'usr-2', name: 'Dr. Vikramaditya Joshi', email: 'v.joshi@medicarehospitals.in', phone: '+91 98220 11223', role: 'Doctor', status: 'Active', registeredDate: '2022-04-10', lastLogin: '2 mins ago' },
  { id: 'usr-3', name: 'Priya Deshmukh', email: 'priya.d@example.com', phone: '+91 97654 32109', role: 'Patient', status: 'Active', registeredDate: '2025-02-01', lastLogin: '1 hour ago' },
  { id: 'usr-4', name: 'Suresh Kulkarni', email: 'suresh.k@medicarehospitals.in', phone: '+91 98900 44556', role: 'Admin', status: 'Active', registeredDate: '2021-08-15', lastLogin: 'Just now' },
  { id: 'usr-5', name: 'Sunita Rao', email: 'sunita.r@medicarehospitals.in', phone: '+91 94220 88776', role: 'Staff', status: 'Active', registeredDate: '2023-11-20', lastLogin: '3 hours ago' },
];

export const MOCK_ADMIN_DOCTORS: AdminDoctor[] = [
  { id: 'doc-1', name: 'Dr. Vikramaditya Joshi', specialty: 'Cardiology', hospital: 'Baner Main Campus', qualification: 'MD, DM (Cardiology)', experience: '28 Yrs', fee: 1200, status: 'Active', verified: true },
  { id: 'doc-2', name: 'Dr. Radhika Sen', specialty: 'Oncology', hospital: 'Baner Main Campus', qualification: 'MD, DM (Medical Oncology)', experience: '22 Yrs', fee: 1500, status: 'Active', verified: true },
  { id: 'doc-3', name: 'Dr. Harshvardhan Kapoor', specialty: 'Orthopedics', hospital: 'Wakad Hub', qualification: 'MS (Ortho), MCh', experience: '19 Yrs', fee: 1100, status: 'Active', verified: true },
  { id: 'doc-4', name: 'Dr. Ananya Deshmukh', specialty: 'Neurology', hospital: 'Pimpri Critical Care', qualification: 'MD, DM (Neurology)', experience: '24 Yrs', fee: 1300, status: 'Active', verified: true },
  { id: 'doc-5', name: 'Dr. Sameer Kulkarni', specialty: 'Emergency Medicine', hospital: 'Baner Main Campus', qualification: 'MD (Emergency Medicine)', experience: '16 Yrs', fee: 1000, status: 'Active', verified: true },
];

export const MOCK_ADMIN_APPOINTMENTS: AdminAppointment[] = [
  { id: 'apt-1', bookingRef: 'MDR-891023', patientName: 'Amit Patel', patientPhone: '+91 98765 11111', doctorName: 'Dr. Vikramaditya Joshi', department: 'Cardiology', date: '2026-08-27', timeSlot: '10:30 AM', type: 'OPD Visit', status: 'Confirmed', paymentStatus: 'Paid', amount: 1200 },
  { id: 'apt-2', bookingRef: 'MDR-891024', patientName: 'Kavita Roy', patientPhone: '+91 98765 22222', doctorName: 'Dr. Radhika Sen', department: 'Oncology', date: '2026-08-27', timeSlot: '11:15 AM', type: 'Video Consultation', status: 'Completed', paymentStatus: 'Paid', amount: 1500 },
  { id: 'apt-3', bookingRef: 'MDR-891025', patientName: 'Sanjay Verma', patientPhone: '+91 98765 33333', doctorName: 'Dr. Harshvardhan Kapoor', department: 'Orthopedics', date: '2026-08-27', timeSlot: '02:00 PM', type: 'OPD Visit', status: 'Pending', paymentStatus: 'Pending', amount: 1100 },
  { id: 'apt-4', bookingRef: 'MDR-891026', patientName: 'Meena Kulkarni', patientPhone: '+91 98765 44444', doctorName: 'Dr. Ananya Deshmukh', department: 'Neurology', date: '2026-08-28', timeSlot: '09:45 AM', type: 'Home Health', status: 'Confirmed', paymentStatus: 'Paid', amount: 1300 },
];

export const MOCK_ADMIN_HOSPITALS: AdminHospital[] = [
  { id: 'hsp-1', name: 'MEDICARE Hospital Baner', location: 'Baner, Pune', beds: 350, icuBeds: 100, doctorsCount: 95, traumaLevel: 'Level-1', status: 'Operational' },
  { id: 'hsp-2', name: 'MEDICARE Hospital Wakad', location: 'Wakad, Pune', beds: 120, icuBeds: 30, doctorsCount: 35, traumaLevel: 'Level-2', status: 'Operational' },
  { id: 'hsp-3', name: 'MEDICARE Hospital Pimpri', location: 'Pimpri, Pune', beds: 180, icuBeds: 45, doctorsCount: 42, traumaLevel: 'Level-1', status: 'Operational' },
  { id: 'hsp-4', name: 'MEDICARE Hospital Hadapsar', location: 'Hadapsar, Pune', beds: 80, icuBeds: 20, doctorsCount: 22, traumaLevel: 'Level-3', status: 'Operational' },
];

export const MOCK_ADMIN_ENQUIRIES: AdminEnquiry[] = [
  { id: 'enq-1', ticketId: 'ENQ-901', patientName: 'Rohan Mehta', email: 'rohan.m@example.com', phone: '+91 98111 22233', category: 'Emergency', subject: '24/7 Ambulance Dispatch to Hinjewadi', priority: 'High', status: 'In Progress', date: '2026-08-27 15:30' },
  { id: 'enq-2', ticketId: 'ENQ-902', patientName: 'Sunita Joshi', email: 'sunita.j@example.com', phone: '+91 98222 33344', category: 'TPA Claim', subject: 'Star Health Cashless Pre-authorization Status', priority: 'Medium', status: 'Open', date: '2026-08-27 14:15' },
  { id: 'enq-3', ticketId: 'ENQ-903', patientName: 'David Miller', email: 'david.m@example.com', phone: '+1 408 555 0199', category: 'General', subject: 'International Cardiac Surgery Package Inquiry', priority: 'High', status: 'Resolved', date: '2026-08-26 18:00' },
];

export const MOCK_ADMIN_CAMPAIGNS: AdminCampaign[] = [
  { id: 'cmp-1', name: 'Senior Citizen Cardiac Screening Package', type: 'Discount Offer', code: 'MEDICARE50', targetAudience: 'Seniors 60+', discountValue: '50% OFF', validUntil: '2026-09-30', claimsCount: 428, status: 'Active' },
  { id: 'cmp-2', name: 'Monsoon Full Body Preventive Checkup', type: 'Email Newsletter', code: 'CHECKUP2026', targetAudience: 'All Patients', discountValue: '₹ 1,500 Off', validUntil: '2026-09-15', claimsCount: 892, status: 'Active' },
  { id: 'cmp-3', name: 'Women Well-being & Mammography Camp', type: 'Health Camp Drive', code: 'WOMENCARE26', targetAudience: 'Women 30+', discountValue: '35% OFF', validUntil: '2026-10-10', claimsCount: 315, status: 'Active' },
  { id: 'cmp-4', name: 'Diabetic Eye & Renal Complication Screening Drive', type: 'Discount Offer', code: 'DIABETESFREE', targetAudience: 'Diabetic Patients', discountValue: 'Free Screening', validUntil: '2026-10-31', claimsCount: 154, status: 'Scheduled' },
  { id: 'cmp-5', name: 'Child Vaccination & Immunity Package Drive', type: 'Health Camp Drive', code: 'KIDSHEALTH', targetAudience: 'Parents with Infants', discountValue: '20% OFF', validUntil: '2026-08-15', claimsCount: 620, status: 'Expired' },
];


export const MOCK_ADMIN_DEPARTMENTS: AdminDepartment[] = [
  { id: 'dept-1', name: 'Cardiology & Cardiac Sciences', hod: 'Dr. Anand Deshmukh', phone: '+91 20 2765 9001', staffCount: 42, activeSurgeries: 6, status: 'Active' },
  { id: 'dept-2', name: 'Oncology & Cancer Care', hod: 'Dr. Radhika Sen', phone: '+91 20 2765 9002', staffCount: 38, activeSurgeries: 4, status: 'Active' },
  { id: 'dept-3', name: 'Orthopedics & Joint Replacement', hod: 'Dr. Harshvardhan Kapoor', phone: '+91 20 2765 9003', staffCount: 30, activeSurgeries: 3, status: 'Active' },
  { id: 'dept-4', name: 'Neurology & Neurosurgery', hod: 'Dr. Ananya Deshmukh', phone: '+91 20 2765 9004', staffCount: 28, activeSurgeries: 2, status: 'Active' },
  { id: 'dept-5', name: 'Emergency & Trauma Care', hod: 'Dr. Sameer Kulkarni', phone: '+91 20 2765 9005', staffCount: 50, activeSurgeries: 8, status: 'Full Capacity' },
];

export const MOCK_ADMIN_SPECIALTIES: AdminSpecialty[] = [
  { id: 'spec-1', name: 'Cardiology & Cardiac Sciences', slug: 'cardiology', isCOE: true, doctorsCount: 18, treatmentsCount: 14, description: 'Interventional cardiac care, angioplasty, TAVI & heart failure management.', status: 'Active' },
  { id: 'spec-2', name: 'Neurology & Neurosurgery', slug: 'neurology', isCOE: true, doctorsCount: 14, treatmentsCount: 12, description: '24/7 acute stroke response, brain tumor microsurgery & spinal reconstruction.', status: 'Active' },
  { id: 'spec-3', name: 'Orthopaedics & Joint Replacement', slug: 'orthopaedics', isCOE: true, doctorsCount: 16, treatmentsCount: 15, description: 'Mako 3D Robotic Knee & Hip Replacement, Arthroscopy & Trauma Care.', status: 'Active' },
  { id: 'spec-4', name: 'Oncology (Cancer Care)', slug: 'oncology', isCOE: true, doctorsCount: 15, treatmentsCount: 18, description: 'Comprehensive Medical, Surgical & Radiation Cancer Care.', status: 'Active' },
  { id: 'spec-5', name: 'Gastroenterology & Hepatology', slug: 'gastroenterology', isCOE: true, doctorsCount: 10, treatmentsCount: 9, description: 'Digestive care, ERCP, liver cirrhosis & advanced GI endoscopy.', status: 'Active' },
  { id: 'spec-6', name: 'Pulmonology & Chest Medicine', slug: 'pulmonology', isCOE: false, doctorsCount: 8, treatmentsCount: 7, description: 'Asthma, COPD, sleep apnea & bronchoscopy care.', status: 'Active' },
  { id: 'spec-7', name: 'Nephrology & Renal Care', slug: 'nephrology', isCOE: false, doctorsCount: 9, treatmentsCount: 6, description: 'Kidney failure, high-efficiency hemodialysis & kidney transplant.', status: 'Active' },
  { id: 'spec-8', name: 'Urology & Kidney Stones', slug: 'urology', isCOE: false, doctorsCount: 7, treatmentsCount: 8, description: 'RIRS Laser Stone Surgery, HoLEP Prostate Laser & Laparoscopic Urology.', status: 'Active' },
  { id: 'spec-9', name: 'Dermatology & Skin Care', slug: 'dermatology', isCOE: false, doctorsCount: 6, treatmentsCount: 5, description: 'Clinical dermatology, acne laser treatment, eczema & skin surgeries.', status: 'Active' },
  { id: 'spec-10', name: 'ENT (Ear, Nose & Throat)', slug: 'ent', isCOE: false, doctorsCount: 8, treatmentsCount: 6, description: 'FESS sinus surgery, micro-ear hearing repair & snoring therapy.', status: 'Active' },
  { id: 'spec-11', name: 'Ophthalmology & Eye Care', slug: 'ophthalmology', isCOE: false, doctorsCount: 9, treatmentsCount: 7, description: 'Phaco cataract surgery, LASIK vision correction & glaucoma care.', status: 'Active' },
  { id: 'spec-12', name: 'Gynaecology & Obstetrics', slug: 'gynaecology', isCOE: true, doctorsCount: 12, treatmentsCount: 10, description: 'High-risk pregnancy care, painless childbirth & laparoscopic gynae surgery.', status: 'Active' },
  { id: 'spec-13', name: 'Paediatrics & Neonatology', slug: 'paediatrics', isCOE: true, doctorsCount: 11, treatmentsCount: 9, description: 'Level-3 NICU care, child growth monitoring & pediatric vaccinations.', status: 'Active' },
  { id: 'spec-14', name: 'General Medicine & Diabetology', slug: 'general-medicine', isCOE: false, doctorsCount: 10, treatmentsCount: 8, description: 'Internal medicine, diabetes management, hypertension & preventive health.', status: 'Active' },
];

export const MOCK_ADMIN_CONTENT: AdminContentItem[] = [
  { id: 'cnt-1', title: 'Understanding Modern Mako 3D Robotic Knee Replacement Surgery', type: 'Health Library Article', category: 'Orthopedics', author: 'Dr. Rajesh Verma', publishedDate: '2026-08-18', views: 4820, status: 'Published' },
  { id: 'cnt-2', title: '5 Warning Signs of Silent Heart Blockage You Should Never Ignore', type: 'Health Library Article', category: 'Cardiology', author: 'Dr. Vikramaditya Joshi', publishedDate: '2026-08-15', views: 8140, status: 'Published' },
  { id: 'cnt-3', title: '24/7 Level-1 Emergency Trauma & Stroke Center Operational Announcement', type: 'Banner Announcement', category: 'Emergency Care', author: 'Editorial Team', publishedDate: '2026-08-20', views: 1950, status: 'Published' },
  { id: 'cnt-4', title: 'Painless Delivery & High-Risk Obstetrics Care FAQ Guide', type: 'FAQ', category: 'Gynaecology', author: 'Dr. Radhika Sen', publishedDate: '2026-08-10', views: 3200, status: 'Published' },
  { id: 'cnt-5', title: 'MEDICARE Launches Advanced AI-Powered Cardiac Diagnostic Lab', type: 'Press Release', category: 'Press Release', author: 'PR Communications', publishedDate: '2026-08-25', views: 5600, status: 'Published' },
  { id: 'cnt-6', title: 'Comprehensive Guide to Managing Type-2 Diabetes in Monsoon Season', type: 'Health Library Article', category: 'Diabetology', author: 'Dr. Anand Deshmukh', publishedDate: '2026-08-28', views: 1120, status: 'Draft' },
];




