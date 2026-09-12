export interface UploadedFileMeta {
  id: string;
  name: string;
  sizeMb: number;
  type: string;
  uploadTimestamp: string;
}

export interface SecondOpinionRequest {
  id: string;
  trackingId: string;
  patientName: string;
  phone: string;
  email: string;
  specialty: string;
  primaryDiagnosis: string;
  uploadedFiles: UploadedFileMeta[];
  status: 'Submitted' | 'Under Review' | 'Opinion Ready' | 'Consultation Scheduled';
  submittedDate: string;
  assignedDoctor?: {
    name: string;
    title: string;
    specialty: string;
    photo: string;
  };
  opinionSummary?: string;
  recommendedTreatment?: string;
  videoSlot?: string;
}

export const MOCK_SECOND_OPINIONS_DATA: SecondOpinionRequest[] = [
  {
    id: 'so-1',
    trackingId: 'SO-2026-8891',
    patientName: 'Rahul Sharma',
    phone: '+91 98230 41190',
    email: 'rahul.sharma@example.com',
    specialty: 'Orthopedics & Joint Surgery',
    primaryDiagnosis: 'Recommended Bilateral Knee Replacement',
    uploadedFiles: [
      { id: 'f-1', name: 'Knee_MRI_3D_Scan.dcm', sizeMb: 8.4, type: 'DICOM', uploadTimestamp: 'Aug 24, 2026' },
      { id: 'f-2', name: 'Orthopedic_Discharge_Summary.pdf', sizeMb: 1.8, type: 'PDF', uploadTimestamp: 'Aug 24, 2026' },
    ],
    status: 'Opinion Ready',
    submittedDate: 'Aug 24, 2026',
    assignedDoctor: {
      name: 'Dr. Rajesh Verma',
      title: 'Head of Robotic Joint Surgery',
      specialty: 'Orthopedics',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    },
    opinionSummary: 'Based on 3D MRI alignment analysis, total joint replacement is unnecessary. Partial Mako robotic resurfacing with cartilage therapy is recommended, preserving 70% of natural bone.',
    recommendedTreatment: 'Single-compartment Mako Robotic Partial Knee Resurfacing + 10-day outpatient physio.',
    videoSlot: 'Aug 28, 2026 at 11:30 AM',
  },
  {
    id: 'so-2',
    trackingId: 'SO-2026-7412',
    patientName: 'Priya Mehta',
    phone: '+91 98110 23411',
    email: 'priya.m@example.com',
    specialty: 'Cardiology & Heart Care',
    primaryDiagnosis: 'Triple Vessel Coronary Artery Blockage',
    uploadedFiles: [
      { id: 'f-3', name: 'Coronary_CT_Angiogram.pdf', sizeMb: 5.2, type: 'PDF', uploadTimestamp: 'Aug 25, 2026' },
    ],
    status: 'Under Review',
    submittedDate: 'Aug 25, 2026',
    assignedDoctor: {
      name: 'Dr. Ananya Deshmukh',
      title: 'Senior Interventional Cardiologist',
      specialty: 'Cardiology',
      photo: 'https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80',
    },
  },
];
