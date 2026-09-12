export interface PatientProfile {
  uhid: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  heightCm: number;
  weightKg: number;
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  address: string;
}

export interface PatientAppointment {
  id: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorPhoto: string;
  hospitalBranch: string;
  date: string;
  timeSlot: string;
  consultationType: 'In-person' | 'Video' | 'Home Visit';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  tokenNo: string;
}

export interface PatientLabReport {
  id: string;
  testName: string;
  category: string;
  date: string;
  prescribedBy: string;
  status: 'Ready' | 'Processing';
  fileSize: string;
}

export interface PatientPrescription {
  id: string;
  doctorName: string;
  date: string;
  diagnosis: string;
  medicines: { name: string; dosage: string; frequency: string; duration: string }[];
}

export interface PatientBill {
  id: string;
  invoiceNo: string;
  date: string;
  serviceDescription: string;
  amount: number;
  paymentMethod: string;
  status: 'Paid' | 'Pending';
}

export interface HealthTimelineEvent {
  id: string;
  date: string;
  title: string;
  type: 'Consultation' | 'Lab Test' | 'Procedure' | 'Checkup';
  doctorOrLab: string;
  notes: string;
}

export interface PatientNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'appointment' | 'report' | 'billing' | 'general';
}

export const MOCK_PATIENT_PROFILE: PatientProfile = {
  uhid: 'VNH-PT-88492',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98230 41190',
  dob: '1988-05-14',
  gender: 'Male',
  bloodGroup: 'O+',
  heightCm: 175,
  weightKg: 74,
  emergencyContact: {
    name: 'Priya Sharma',
    relation: 'Wife',
    phone: '+91 98230 41192',
  },
  address: 'Flat 402, Green Acres Society, Baner Road, Pune - 411045',
};

export const MOCK_PATIENT_APPOINTMENTS: PatientAppointment[] = [
  {
    id: 'apt-101',
    doctorName: 'Dr. Rajesh Verma',
    doctorSpecialty: 'Orthopedics & Joint Surgery',
    doctorPhoto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    hospitalBranch: 'Pune Main Hospital, Sector 15',
    date: '2026-08-28',
    timeSlot: '10:30 AM',
    consultationType: 'In-person',
    status: 'Upcoming',
    tokenNo: 'TK-14',
  },
  {
    id: 'apt-102',
    doctorName: 'Dr. Ananya Deshmukh',
    doctorSpecialty: 'Cardiology & Heart Care',
    doctorPhoto: 'https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80',
    hospitalBranch: 'Pimpri OPD Clinic Branch',
    date: '2026-09-02',
    timeSlot: '04:00 PM',
    consultationType: 'Video',
    status: 'Upcoming',
    tokenNo: 'TK-08',
  },
  {
    id: 'apt-099',
    doctorName: 'Dr. Suresh Kulkarni',
    doctorSpecialty: 'Neurology & Brain Sciences',
    doctorPhoto: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    hospitalBranch: 'Pune Main Hospital, Sector 15',
    date: '2026-08-10',
    timeSlot: '11:00 AM',
    consultationType: 'In-person',
    status: 'Completed',
    tokenNo: 'TK-22',
  },
];

export const MOCK_PATIENT_REPORTS: PatientLabReport[] = [
  {
    id: 'rep-301',
    testName: 'Master Health Full Body Panel (85 Parameters)',
    category: 'Pathology',
    date: '2026-08-20',
    prescribedBy: 'Dr. Ananya Deshmukh',
    status: 'Ready',
    fileSize: '2.4 MB',
  },
  {
    id: 'rep-302',
    testName: '3T Silent Brain MRI (with 3D Angiography)',
    category: 'MRI',
    date: '2026-08-11',
    prescribedBy: 'Dr. Suresh Kulkarni',
    status: 'Ready',
    fileSize: '8.1 MB',
  },
  {
    id: 'rep-303',
    testName: 'HbA1c & Fasting Lipid Profile',
    category: 'Pathology',
    date: '2026-08-01',
    prescribedBy: 'Dr. Rajesh Verma',
    status: 'Ready',
    fileSize: '1.2 MB',
  },
];

export const MOCK_PATIENT_PRESCRIPTIONS: PatientPrescription[] = [
  {
    id: 'rx-201',
    doctorName: 'Dr. Rajesh Verma (Orthopedics)',
    date: '2026-08-10',
    diagnosis: 'Knee Joint Stiffness & Mild Osteoarthritis',
    medicines: [
      { name: 'Tab Glucosamine Sulfate 750mg', dosage: '1 Tab', frequency: 'Once daily after breakfast', duration: '30 Days' },
      { name: 'Tab Calcium Carbonate + Vitamin D3', dosage: '1 Tab', frequency: 'Once daily after dinner', duration: '30 Days' },
    ],
  },
  {
    id: 'rx-202',
    doctorName: 'Dr. Ananya Deshmukh (Cardiology)',
    date: '2026-07-15',
    diagnosis: 'Mild Hypertension Management',
    medicines: [
      { name: 'Tab Telmisartan 40mg', dosage: '1 Tab', frequency: 'Once daily morning', duration: '60 Days' },
    ],
  },
];

export const MOCK_PATIENT_BILLS: PatientBill[] = [
  {
    id: 'bill-501',
    invoiceNo: 'INV-2026-8891',
    date: '2026-08-20',
    serviceDescription: 'Master Health Nova Full Body Package & ECG',
    amount: 1999,
    paymentMethod: 'UPI / Online Payment',
    status: 'Paid',
  },
  {
    id: 'bill-502',
    invoiceNo: 'INV-2026-7412',
    date: '2026-08-10',
    serviceDescription: 'OPD Consultation Fee — Dr. Rajesh Verma',
    amount: 800,
    paymentMethod: 'Credit Card',
    status: 'Paid',
  },
];

export const MOCK_HEALTH_TIMELINE: HealthTimelineEvent[] = [
  {
    id: 'tl-1',
    date: '2026-08-20',
    title: 'Master Health Checkup Completed',
    type: 'Checkup',
    doctorOrLab: 'MEDICARE NABL Pathology Lab',
    notes: 'All 85 parameters within normal range. Vitamin D3 levels slightly sub-optimal.',
  },
  {
    id: 'tl-2',
    date: '2026-08-11',
    title: '3T Silent Brain MRI Scan',
    type: 'Procedure',
    doctorOrLab: 'MEDICARE Radiology Institute',
    notes: 'Normal brain tissue morphology with clear cerebrovascular flow.',
  },
  {
    id: 'tl-3',
    date: '2026-08-10',
    title: 'Orthopedic OPD Consultation',
    type: 'Consultation',
    doctorOrLab: 'Dr. Rajesh Verma',
    notes: 'Prescribed joint supplements and 10 days home physiotherapy.',
  },
];

export const MOCK_PATIENT_NOTIFICATIONS: PatientNotification[] = [
  {
    id: 'notif-1',
    title: 'Upcoming Appointment Reminder',
    message: 'Your appointment with Dr. Rajesh Verma is scheduled for Aug 28 at 10:30 AM.',
    timestamp: '2 hours ago',
    read: false,
    type: 'appointment',
  },
  {
    id: 'notif-2',
    title: 'Lab Report Ready for Download',
    message: 'Your Master Health Checkup PDF report is ready to view & download.',
    timestamp: '1 day ago',
    read: false,
    type: 'report',
  },
];
