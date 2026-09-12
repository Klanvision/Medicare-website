export interface AuditLogItem {
  id: string;
  logId: string;
  timestamp: string;
  actorName: string;
  actorRole: 'Consultant Doctor' | 'Hospital Admin' | 'System Automated' | 'Receptionist' | 'Billing Specialist';
  actionCategory: 'OPD Consultation' | 'Prescription Edit' | 'Billing & Invoice' | 'System Access' | 'Patient Record Update' | 'TPA Approval';
  description: string;
  ipAddress: string;
  campus: string;
  severity: 'Info' | 'Warning' | 'Security' | 'Critical';
}

export interface HospitalReportItem {
  id: string;
  reportId: string;
  title: string;
  category: 'Financial & Revenue' | 'Clinical Operations' | 'Bed & ICU Occupancy' | 'Diagnostics & Scans' | 'Pharmacy & Inventory' | 'Compliance & Quality';
  period: string;
  fileFormat: 'PDF' | 'Excel' | 'CSV';
  fileSize: string;
  generatedDate: string;
  downloadCount: number;
  description: string;
}

export const MOCK_REPORTS_LIST: HospitalReportItem[] = [
  {
    id: 'rep-1',
    reportId: 'REP-2026-081',
    title: 'Daily OPD & Clinical Consultation Revenue Reconciliation',
    category: 'Financial & Revenue',
    period: 'Aug 2026 (Daily)',
    fileFormat: 'Excel',
    fileSize: '4.2 MB',
    generatedDate: '2026-08-28 18:30',
    downloadCount: 142,
    description: 'Itemized revenue split by department, doctor fee collections, digital payment modes and TPA insurance claim settlements.',
  },
  {
    id: 'rep-2',
    reportId: 'REP-2026-082',
    title: 'Doctor OPD Attendance, Slot Availability & Patient Audit Log',
    category: 'Clinical Operations',
    period: 'Aug 2026 (Monthly)',
    fileFormat: 'PDF',
    fileSize: '2.8 MB',
    generatedDate: '2026-08-27 12:15',
    downloadCount: 98,
    description: 'Comprehensive audit log of doctor consultation hours, patient wait times, no-shows and slot utilization metrics.',
  },
  {
    id: 'rep-3',
    reportId: 'REP-2026-083',
    title: 'Quaternary Bed Capacity & Emergency ICU Occupancy Audit',
    category: 'Bed & ICU Occupancy',
    period: 'Real-time (30 Days)',
    fileFormat: 'Excel',
    fileSize: '3.1 MB',
    generatedDate: '2026-08-28 09:00',
    downloadCount: 76,
    description: 'Campus-wide inpatient admissions, discharge turnarounds, ventilator utilization, and emergency triage turnover ratios.',
  },
  {
    id: 'rep-4',
    reportId: 'REP-2026-084',
    title: 'Radiology, MRI Scans & Laboratory Diagnostic Throughput',
    category: 'Diagnostics & Scans',
    period: 'Aug 2026',
    fileFormat: 'PDF',
    fileSize: '5.6 MB',
    generatedDate: '2026-08-26 16:45',
    downloadCount: 112,
    description: 'Diagnostic lab booking volume, critical alert turnaround time (TAT), pathologist validation logs and equipment uptime.',
  },
  {
    id: 'rep-5',
    reportId: 'REP-2026-085',
    title: 'Hospital Pharmacy Dispensing & High-Value Drug Inventory Audit',
    category: 'Pharmacy & Inventory',
    period: 'Q2 FY2026',
    fileFormat: 'Excel',
    fileSize: '6.4 MB',
    generatedDate: '2026-08-25 11:20',
    downloadCount: 64,
    description: 'Narcotics & critical medication tracking, stock expiration schedules, vendor procurement audit and batch trace registers.',
  },
  {
    id: 'rep-6',
    reportId: 'REP-2026-086',
    title: 'NABH & HIPAA Data Governance Compliance Incident Audit',
    category: 'Compliance & Quality',
    period: 'Year-To-Date (2026)',
    fileFormat: 'PDF',
    fileSize: '1.9 MB',
    generatedDate: '2026-08-24 14:10',
    downloadCount: 185,
    description: 'Full security audit trail of patient health record (EHR) access logs, permission escalations and data encryption checks.',
  },
];

export const MOCK_AUDIT_LOGS: AuditLogItem[] = [
  {
    id: 'log-101',
    logId: 'AUD-2026-9041',
    timestamp: '2026-09-04 14:12:05',
    actorName: 'Dr. Vikramaditya Joshi',
    actorRole: 'Consultant Doctor',
    actionCategory: 'OPD Consultation',
    description: 'Completed OPD Consultation & prescribed Cardiac Echo for Patient #VHN-8821',
    ipAddress: '192.168.1.104',
    campus: 'Wakad Main Campus',
    severity: 'Info',
  },
  {
    id: 'log-102',
    logId: 'AUD-2026-9040',
    timestamp: '2026-09-04 13:55:18',
    actorName: 'Rajesh Kumar (Chief Registrar)',
    actorRole: 'Hospital Admin',
    actionCategory: 'System Access',
    description: 'Updated OPD Slot Schedule for Cardiology Department & updated fee structure',
    ipAddress: '192.168.1.10',
    campus: 'Wakad Main Campus',
    severity: 'Warning',
  },
  {
    id: 'log-103',
    logId: 'AUD-2026-9039',
    timestamp: '2026-09-04 13:42:30',
    actorName: 'System Automated Scheduler',
    actorRole: 'System Automated',
    actionCategory: 'TPA Approval',
    description: 'Auto-verified Cashless Insurance Pre-authorization for Claim #CL-98124 (Star Health)',
    ipAddress: '10.0.0.1',
    campus: 'Baner Specialty Hub',
    severity: 'Info',
  },
  {
    id: 'log-104',
    logId: 'AUD-2026-9038',
    timestamp: '2026-09-04 13:10:45',
    actorName: 'Nurse Sunita Deshmukh',
    actorRole: 'Receptionist',
    actionCategory: 'Patient Record Update',
    description: 'Admitted emergency trauma patient #VHN-9902 to ICU Bed #12 (Emergency Bay)',
    ipAddress: '192.168.2.45',
    campus: 'Pimpri Care Center',
    severity: 'Info',
  },
  {
    id: 'log-105',
    logId: 'AUD-2026-9037',
    timestamp: '2026-09-04 12:48:12',
    actorName: 'Dr. Radhika Sen',
    actorRole: 'Consultant Doctor',
    actionCategory: 'Prescription Edit',
    description: 'Modified Chemotherapy protocol dosage for Oncology Patient #VHN-7712',
    ipAddress: '192.168.1.112',
    campus: 'Wakad Main Campus',
    severity: 'Warning',
  },
  {
    id: 'log-106',
    logId: 'AUD-2026-9036',
    timestamp: '2026-09-04 11:30:00',
    actorName: 'Amit Shah (Accounts lead)',
    actorRole: 'Billing Specialist',
    actionCategory: 'Billing & Invoice',
    description: 'Generated & finalized OPD Billing Invoice #INV-2026-4410 (₹ 18,500)',
    ipAddress: '192.168.1.88',
    campus: 'Wakad Main Campus',
    severity: 'Info',
  },
  {
    id: 'log-107',
    logId: 'AUD-2026-9035',
    timestamp: '2026-09-04 10:15:22',
    actorName: 'Security Firewall Guard',
    actorRole: 'System Automated',
    actionCategory: 'System Access',
    description: 'Blocked unauthorized IP login attempt (185.220.101.4) on Doctor Portal endpoint',
    ipAddress: '185.220.101.4',
    campus: 'Hadapsar Facility',
    severity: 'Security',
  },
  {
    id: 'log-108',
    logId: 'AUD-2026-9034',
    timestamp: '2026-09-04 09:05:14',
    actorName: 'Dr. Sameer Kulkarni',
    actorRole: 'Consultant Doctor',
    actionCategory: 'OPD Consultation',
    description: 'Signed digital discharge summary for Emergency Patient #VHN-6632',
    ipAddress: '192.168.4.12',
    campus: 'Hadapsar Facility',
    severity: 'Info',
  },
];
