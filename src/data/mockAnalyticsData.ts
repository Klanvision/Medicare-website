import { DateFilterType, AnalyticsDataPayload } from '@/types/analytics';

export const COLORS = {
  teal: '#0d9488',
  tealDark: '#0f766e',
  amber: '#f59e0b',
  amberDark: '#d97706',
  navy: '#060c20',
  navyLight: '#1e293b',
  emerald: '#10b981',
  indigo: '#6366f1',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  rose: '#f43f5e',
  cyan: '#06b6d4',
  slate: '#64748b'
};

// Colors for doughnut / pie chart breakdown
export const SPECIALTY_COLORS = [
  '#0d9488', // Cardiology
  '#3b82f6', // Oncology
  '#8b5cf6', // Orthopedics
  '#f59e0b', // Neurology
  '#10b981', // Pediatrics
  '#ec4899', // Gynecology & Obstetrics
  '#06b6d4', // Gastroenterology
  '#f43f5e', // Nephrology
];

export const getMockAnalyticsData = (
  filter: DateFilterType,
  campusFilter: string = 'All Campuses',
  simulateEmpty: boolean = false
): AnalyticsDataPayload => {
  if (simulateEmpty) {
    return {
      kpis: [],
      appointmentTrends: [],
      doctorPerformance: [],
      specialtyDemand: [],
      hospitalPerformance: [],
      diagnosticsBookings: [],
      healthPackageBookings: [],
      patientRegistrations: [],
      patientDemographics: [],
      enquiryMetrics: [],
      conversionSummary: {
        aiTriageToDoctorPercent: 0,
        websiteToBookingPercent: 0,
        campaignToPackagePercent: 0,
        funnel: [],
      },
    };
  }

  // Multiplier based on campus capacity
  let campusMultiplier = 1.0;
  if (campusFilter.includes('Wakad')) campusMultiplier = 0.55;
  else if (campusFilter.includes('Baner')) campusMultiplier = 0.22;
  else if (campusFilter.includes('Pimpri')) campusMultiplier = 0.28;
  else if (campusFilter.includes('Hadapsar')) campusMultiplier = 0.15;

  // 1. KPI Summaries per filter & campus
  const scaleNumeric = (val: number) => Math.round(val * campusMultiplier);
  const formatNum = (val: number) => scaleNumeric(val).toLocaleString();

  const kpis = [
    {
      id: 'kpi-1',
      title: 'Total Appointments',
      value: formatNum(filter === 'today' ? 342 : filter === '7d' ? 2410 : filter === '30d' ? 10850 : 34200),
      rawNumeric: scaleNumeric(filter === 'today' ? 342 : filter === '7d' ? 2410 : filter === '30d' ? 10850 : 34200),
      changePercent: 14.2,
      isPositive: true,
      comparisonPeriod: filter === 'today' ? 'vs yesterday' : 'vs previous period',
      category: 'Clinical Throughput',
    },
    {
      id: 'kpi-2',
      title: 'OPD & Consult Revenue',
      value: `₹ ${( (filter === 'today' ? 4.15 : filter === '7d' ? 31.8 : filter === '30d' ? 142 : 488) * campusMultiplier ).toFixed(1)} L`,
      rawNumeric: scaleNumeric(14200000),
      changePercent: 18.6,
      isPositive: true,
      comparisonPeriod: 'vs target',
      category: 'Financial Performance',
    },
    {
      id: 'kpi-3',
      title: 'Doctor Utilization Rate',
      value: `${(91.8 * (0.95 + campusMultiplier * 0.05)).toFixed(1)}%`,
      rawNumeric: 91.8,
      changePercent: 5.4,
      isPositive: true,
      comparisonPeriod: 'average slot occupancy',
      category: 'Staff Operations',
    },
    {
      id: 'kpi-4',
      title: 'Diagnostics Scans',
      value: formatNum(filter === 'today' ? 148 : filter === '7d' ? 980 : filter === '30d' ? 4210 : 12940),
      rawNumeric: scaleNumeric(4210),
      changePercent: 11.5,
      isPositive: true,
      comparisonPeriod: 'completed lab & radiologies',
      category: 'Diagnostic Hub',
    },
    {
      id: 'kpi-5',
      title: 'AI Triage Conversion Rate',
      value: '84.6%',
      rawNumeric: 84.6,
      changePercent: 7.9,
      isPositive: true,
      comparisonPeriod: 'queries converted to bookings',
      category: 'Conversion Analytics',
    },
    {
      id: 'kpi-6',
      title: 'Average Enquiry SLA',
      value: '14.2 Mins',
      rawNumeric: 14.2,
      changePercent: -22.4, // Faster is better
      isPositive: true,
      comparisonPeriod: 'response speed improvement',
      category: 'Patient Experience',
    },
  ];

  // 2. Appointment Trends points
  let rawAppointmentTrends = [];
  if (filter === 'today') {
    rawAppointmentTrends = [
      { date: '08:00 AM', confirmed: 12, completed: 8, cancelled: 1, opdVisits: 9, videoConsults: 2, homeHealth: 0 },
      { date: '10:00 AM', confirmed: 45, completed: 42, cancelled: 2, opdVisits: 35, videoConsults: 7, homeHealth: 2 },
      { date: '12:00 PM', confirmed: 68, completed: 64, cancelled: 3, opdVisits: 52, videoConsults: 10, homeHealth: 2 },
      { date: '02:00 PM', confirmed: 52, completed: 48, cancelled: 1, opdVisits: 40, videoConsults: 6, homeHealth: 2 },
      { date: '04:00 PM', confirmed: 60, completed: 55, cancelled: 4, opdVisits: 44, videoConsults: 9, homeHealth: 2 },
      { date: '06:00 PM', confirmed: 48, completed: 44, cancelled: 2, opdVisits: 36, videoConsults: 6, homeHealth: 2 },
      { date: '08:00 PM', confirmed: 22, completed: 20, cancelled: 1, opdVisits: 16, videoConsults: 3, homeHealth: 1 },
    ];
  } else if (filter === '7d') {
    rawAppointmentTrends = [
      { date: 'Mon', confirmed: 320, completed: 295, cancelled: 15, opdVisits: 240, videoConsults: 55, homeHealth: 15 },
      { date: 'Tue', confirmed: 360, completed: 335, cancelled: 12, opdVisits: 270, videoConsults: 53, homeHealth: 12 },
      { date: 'Wed', confirmed: 380, completed: 350, cancelled: 18, opdVisits: 285, videoConsults: 50, homeHealth: 15 },
      { date: 'Thu', confirmed: 340, completed: 318, cancelled: 10, opdVisits: 250, videoConsults: 58, homeHealth: 10 },
      { date: 'Fri', confirmed: 410, completed: 385, cancelled: 14, opdVisits: 310, videoConsults: 60, homeHealth: 15 },
      { date: 'Sat', confirmed: 350, completed: 320, cancelled: 20, opdVisits: 260, videoConsults: 45, homeHealth: 15 },
      { date: 'Sun', confirmed: 250, completed: 230, cancelled: 11, opdVisits: 190, videoConsults: 32, homeHealth: 8 },
    ];
  } else {
    rawAppointmentTrends = [
      { date: 'Week 1', confirmed: 2450, completed: 2280, cancelled: 110, opdVisits: 1800, videoConsults: 480, homeHealth: 100 },
      { date: 'Week 2', confirmed: 2680, completed: 2510, cancelled: 95, opdVisits: 1980, videoConsults: 430, homeHealth: 100 },
      { date: 'Week 3', confirmed: 2820, completed: 2640, cancelled: 120, opdVisits: 2080, videoConsults: 440, homeHealth: 120 },
      { date: 'Week 4', confirmed: 2900, completed: 2750, cancelled: 85, opdVisits: 2150, videoConsults: 490, homeHealth: 110 },
    ];
  }

  const appointmentTrends = rawAppointmentTrends.map(item => ({
    ...item,
    confirmed: Math.round(item.confirmed * campusMultiplier),
    completed: Math.round(item.completed * campusMultiplier),
    cancelled: Math.round(item.cancelled * campusMultiplier),
    opdVisits: Math.round(item.opdVisits * campusMultiplier),
    videoConsults: Math.round(item.videoConsults * campusMultiplier),
    homeHealth: Math.round(item.homeHealth * campusMultiplier),
  }));

  // 3. Doctor Performance
  const doctorPerformance = [
    { id: 'doc-1', doctorName: 'Dr. Vikramaditya Joshi', specialty: 'Cardiology', consultations: scaleNumeric(420), rating: 4.9, avgConsultationMins: 18, revenueInr: scaleNumeric(504000), completionRate: 98.2 },
    { id: 'doc-2', doctorName: 'Dr. Radhika Sen', specialty: 'Oncology', consultations: scaleNumeric(380), rating: 4.95, avgConsultationMins: 22, revenueInr: scaleNumeric(570000), completionRate: 99.1 },
    { id: 'doc-3', doctorName: 'Dr. Harshvardhan Kapoor', specialty: 'Orthopedics', consultations: scaleNumeric(340), rating: 4.85, avgConsultationMins: 16, revenueInr: scaleNumeric(374000), completionRate: 96.5 },
    { id: 'doc-4', doctorName: 'Dr. Ananya Deshmukh', specialty: 'Neurology', consultations: scaleNumeric(310), rating: 4.88, avgConsultationMins: 20, revenueInr: scaleNumeric(403000), completionRate: 97.4 },
    { id: 'doc-5', doctorName: 'Dr. Sameer Kulkarni', specialty: 'Emergency Care', consultations: scaleNumeric(490), rating: 4.8, avgConsultationMins: 12, revenueInr: scaleNumeric(490000), completionRate: 95.8 },
    { id: 'doc-6', doctorName: 'Dr. Meera Nambiar', specialty: 'Pediatrics', consultations: scaleNumeric(290), rating: 4.92, avgConsultationMins: 15, revenueInr: scaleNumeric(290000), completionRate: 98.8 },
  ];

  // 4. Specialty Demand
  const specialtyDemand = [
    { specialty: 'Cardiology', bookings: scaleNumeric(3420), percentage: 28, growthRate: 14.5, color: SPECIALTY_COLORS[0] },
    { specialty: 'Oncology', bookings: scaleNumeric(2450), percentage: 20, growthRate: 18.2, color: SPECIALTY_COLORS[1] },
    { specialty: 'Orthopedics', bookings: scaleNumeric(1960), percentage: 16, growthRate: 9.8, color: SPECIALTY_COLORS[2] },
    { specialty: 'Neurology', bookings: scaleNumeric(1470), percentage: 12, growthRate: 12.1, color: SPECIALTY_COLORS[3] },
    { specialty: 'Pediatrics', bookings: scaleNumeric(1225), percentage: 10, growthRate: 8.4, color: SPECIALTY_COLORS[4] },
    { specialty: 'Gynecology', bookings: scaleNumeric(980), percentage: 8, growthRate: 11.0, color: SPECIALTY_COLORS[5] },
    { specialty: 'Others', bookings: scaleNumeric(735), percentage: 6, growthRate: 5.2, color: SPECIALTY_COLORS[6] },
  ];

  // 5. Hospital Campus Performance
  const hospitalPerformance = [
    { campus: 'Wakad Main Campus', opdVolume: 5800, bedOccupancyPercent: 92, icuOccupancyPercent: 96, emergencyCases: 420, revenueLakhs: 84.5 },
    { campus: 'Baner Specialty Hub', opdVolume: 2400, bedOccupancyPercent: 84, icuOccupancyPercent: 88, emergencyCases: 180, revenueLakhs: 36.2 },
    { campus: 'Pimpri Care Center', opdVolume: 2900, bedOccupancyPercent: 89, icuOccupancyPercent: 91, emergencyCases: 290, revenueLakhs: 41.8 },
    { campus: 'Hadapsar Facility', opdVolume: 1250, bedOccupancyPercent: 78, icuOccupancyPercent: 80, emergencyCases: 95, revenueLakhs: 18.4 },
  ];

  // Filter hospital performance if a specific campus is selected
  const filteredHospitalPerformance = campusFilter === 'All Campuses'
    ? hospitalPerformance
    : hospitalPerformance.filter(h => h.campus.toLowerCase().includes(campusFilter.toLowerCase().replace(' campus', '').replace(' specialty hub', '').replace(' care center', '').replace(' facility', '')));

  // 6. Diagnostics Bookings
  const diagnosticsBookings = [
    { date: 'Mon', mriScans: scaleNumeric(42), ctScans: scaleNumeric(35), ultrasound: scaleNumeric(65), pathology: scaleNumeric(180), bloodTests: scaleNumeric(240), totalRevenue: scaleNumeric(345000) },
    { date: 'Tue', mriScans: scaleNumeric(48), ctScans: scaleNumeric(38), ultrasound: scaleNumeric(72), pathology: scaleNumeric(195), bloodTests: scaleNumeric(260), totalRevenue: scaleNumeric(382000) },
    { date: 'Wed', mriScans: scaleNumeric(55), ctScans: scaleNumeric(42), ultrasound: scaleNumeric(80), pathology: scaleNumeric(210), bloodTests: scaleNumeric(280), totalRevenue: scaleNumeric(420000) },
    { date: 'Thu', mriScans: scaleNumeric(50), ctScans: scaleNumeric(40), ultrasound: scaleNumeric(68), pathology: scaleNumeric(190), bloodTests: scaleNumeric(250), totalRevenue: scaleNumeric(390000) },
    { date: 'Fri', mriScans: scaleNumeric(62), ctScans: scaleNumeric(48), ultrasound: scaleNumeric(85), pathology: scaleNumeric(230), bloodTests: scaleNumeric(310), totalRevenue: scaleNumeric(475000) },
    { date: 'Sat', mriScans: scaleNumeric(45), ctScans: scaleNumeric(36), ultrasound: scaleNumeric(60), pathology: scaleNumeric(160), bloodTests: scaleNumeric(220), totalRevenue: scaleNumeric(330000) },
    { date: 'Sun', mriScans: scaleNumeric(28), ctScans: scaleNumeric(22), ultrasound: scaleNumeric(40), pathology: scaleNumeric(110), bloodTests: scaleNumeric(150), totalRevenue: scaleNumeric(210000) },
  ];

  // 7. Health Package Bookings
  const healthPackageBookings = [
    { packageName: 'Senior Citizen Cardiac Package', bookings: scaleNumeric(428), revenue: scaleNumeric(1284000), targetAchievedPercent: 114, couponRedemptions: scaleNumeric(312) },
    { packageName: 'Comprehensive Executive Checkup', bookings: scaleNumeric(365), revenue: scaleNumeric(1825000), targetAchievedPercent: 102, couponRedemptions: scaleNumeric(145) },
    { packageName: 'Master Women Health Checkup', bookings: scaleNumeric(290), revenue: scaleNumeric(1160000), targetAchievedPercent: 96, couponRedemptions: scaleNumeric(198) },
    { packageName: 'Monsoon Preventive Package', bookings: scaleNumeric(892), revenue: scaleNumeric(1784000), targetAchievedPercent: 148, couponRedemptions: scaleNumeric(740) },
    { packageName: 'Diabetic Care & Kidney Health', bookings: scaleNumeric(210), revenue: scaleNumeric(735000), targetAchievedPercent: 88, couponRedemptions: scaleNumeric(92) },
  ];

  // 8. Patient Registrations & Demographics
  const patientRegistrations = [
    { date: 'Jan', newPatients: scaleNumeric(1420), returningPatients: scaleNumeric(3850), totalActive: scaleNumeric(5270) },
    { date: 'Feb', newPatients: scaleNumeric(1580), returningPatients: scaleNumeric(4120), totalActive: scaleNumeric(5700) },
    { date: 'Mar', newPatients: scaleNumeric(1650), returningPatients: scaleNumeric(4300), totalActive: scaleNumeric(5950) },
    { date: 'Apr', newPatients: scaleNumeric(1720), returningPatients: scaleNumeric(4510), totalActive: scaleNumeric(6230) },
    { date: 'May', newPatients: scaleNumeric(1890), returningPatients: scaleNumeric(4890), totalActive: scaleNumeric(6780) },
    { date: 'Jun', newPatients: scaleNumeric(2100), returningPatients: scaleNumeric(5200), totalActive: scaleNumeric(7300) },
    { date: 'Jul', newPatients: scaleNumeric(2350), returningPatients: scaleNumeric(5640), totalActive: scaleNumeric(7990) },
    { date: 'Aug', newPatients: scaleNumeric(2540), returningPatients: scaleNumeric(6100), totalActive: scaleNumeric(8640) },
  ];

  const patientDemographics = [
    { ageGroup: '0-18 Yrs', count: scaleNumeric(1820), percentage: 12 },
    { ageGroup: '19-35 Yrs', count: scaleNumeric(4250), percentage: 28 },
    { ageGroup: '36-55 Yrs', count: scaleNumeric(5460), percentage: 36 },
    { ageGroup: '56+ Yrs', count: scaleNumeric(3640), percentage: 24 },
  ];

  // 9. Enquiries Analytics
  const enquiryMetrics = [
    { date: 'Mon', general: scaleNumeric(45), appointment: scaleNumeric(92), emergency: scaleNumeric(18), tpaClaims: scaleNumeric(32), resolvedCount: scaleNumeric(168), avgResolutionHours: 1.4 },
    { date: 'Tue', general: scaleNumeric(52), appointment: scaleNumeric(104), emergency: scaleNumeric(15), tpaClaims: scaleNumeric(38), resolvedCount: scaleNumeric(195), avgResolutionHours: 1.2 },
    { date: 'Wed', general: scaleNumeric(48), appointment: scaleNumeric(110), emergency: scaleNumeric(22), tpaClaims: scaleNumeric(41), resolvedCount: scaleNumeric(205), avgResolutionHours: 1.1 },
    { date: 'Thu', general: scaleNumeric(40), appointment: scaleNumeric(98), emergency: scaleNumeric(14), tpaClaims: scaleNumeric(35), resolvedCount: scaleNumeric(175), avgResolutionHours: 1.3 },
    { date: 'Fri', general: scaleNumeric(60), appointment: scaleNumeric(125), emergency: scaleNumeric(25), tpaClaims: scaleNumeric(48), resolvedCount: scaleNumeric(240), avgResolutionHours: 0.9 },
    { date: 'Sat', general: scaleNumeric(35), appointment: scaleNumeric(75), emergency: scaleNumeric(19), tpaClaims: scaleNumeric(22), resolvedCount: scaleNumeric(140), avgResolutionHours: 1.5 },
    { date: 'Sun', general: scaleNumeric(22), appointment: scaleNumeric(45), emergency: scaleNumeric(16), tpaClaims: scaleNumeric(12), resolvedCount: scaleNumeric(88), avgResolutionHours: 1.8 },
  ];

  // 10. Conversion Metrics & Funnel
  const conversionSummary = {
    aiTriageToDoctorPercent: 84.6,
    websiteToBookingPercent: 32.4,
    campaignToPackagePercent: 68.2,
    funnel: [
      { stage: '1. Portal Visits', count: scaleNumeric(48500), dropoffRate: 0, conversionPercent: 100 },
      { stage: '2. Search Doctor / Specialty', count: scaleNumeric(32400), dropoffRate: 33.2, conversionPercent: 66.8 },
      { stage: '3. Selected Time Slot', count: scaleNumeric(21800), dropoffRate: 32.7, conversionPercent: 44.9 },
      { stage: '4. Initiated Booking', count: scaleNumeric(15700), dropoffRate: 28.0, conversionPercent: 32.4 },
      { stage: '5. Confirmed & Paid', count: scaleNumeric(14200), dropoffRate: 9.5, conversionPercent: 29.3 },
    ],
  };

  return {
    kpis,
    appointmentTrends,
    doctorPerformance,
    specialtyDemand,
    hospitalPerformance: filteredHospitalPerformance,
    diagnosticsBookings,
    healthPackageBookings,
    patientRegistrations,
    patientDemographics,
    enquiryMetrics,
    conversionSummary,
  };
};
