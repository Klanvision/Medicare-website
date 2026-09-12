export type DateFilterType = 'today' | '7d' | '30d' | '90d' | 'custom';

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface KpiSummaryMetric {
  id: string;
  title: string;
  value: string;
  rawNumeric: number;
  changePercent: number;
  isPositive: boolean;
  comparisonPeriod: string;
  category: string;
}

export interface AppointmentTrendPoint {
  date: string;
  confirmed: number;
  completed: number;
  cancelled: number;
  opdVisits: number;
  videoConsults: number;
  homeHealth: number;
}

export interface DoctorPerformanceMetric {
  id: string;
  doctorName: string;
  specialty: string;
  consultations: number;
  rating: number;
  avgConsultationMins: number;
  revenueInr: number;
  completionRate: number;
}

export interface SpecialtyDemandMetric {
  specialty: string;
  bookings: number;
  percentage: number;
  growthRate: number;
  color: string;
}

export interface HospitalPerformanceMetric {
  campus: string;
  opdVolume: number;
  bedOccupancyPercent: number;
  icuOccupancyPercent: number;
  emergencyCases: number;
  revenueLakhs: number;
}

export interface DiagnosticsBookingPoint {
  date: string;
  mriScans: number;
  ctScans: number;
  ultrasound: number;
  pathology: number;
  bloodTests: number;
  totalRevenue: number;
}

export interface HealthPackageBookingMetric {
  packageName: string;
  bookings: number;
  revenue: number;
  targetAchievedPercent: number;
  couponRedemptions: number;
}

export interface PatientRegistrationPoint {
  date: string;
  newPatients: number;
  returningPatients: number;
  totalActive: number;
}

export interface PatientDemographicMetric {
  ageGroup: string;
  count: number;
  percentage: number;
}

export interface EnquiryMetricPoint {
  date: string;
  general: number;
  appointment: number;
  emergency: number;
  tpaClaims: number;
  resolvedCount: number;
  avgResolutionHours: number;
}

export interface ConversionStage {
  stage: string;
  count: number;
  dropoffRate: number;
  conversionPercent: number;
}

export interface ConversionSummary {
  aiTriageToDoctorPercent: number;
  websiteToBookingPercent: number;
  campaignToPackagePercent: number;
  funnel: ConversionStage[];
}

export interface AnalyticsDataPayload {
  kpis: KpiSummaryMetric[];
  appointmentTrends: AppointmentTrendPoint[];
  doctorPerformance: DoctorPerformanceMetric[];
  specialtyDemand: SpecialtyDemandMetric[];
  hospitalPerformance: HospitalPerformanceMetric[];
  diagnosticsBookings: DiagnosticsBookingPoint[];
  healthPackageBookings: HealthPackageBookingMetric[];
  patientRegistrations: PatientRegistrationPoint[];
  patientDemographics: PatientDemographicMetric[];
  enquiryMetrics: EnquiryMetricPoint[];
  conversionSummary: ConversionSummary;
}
