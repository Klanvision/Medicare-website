import React, { useState, useMemo } from 'react';
import { DateFilterType, DateRange } from '@/types/analytics';
import { getMockAnalyticsData } from '@/data/mockAnalyticsData';
import { DateFilterSelector } from '@/components/admin/analytics/DateFilterSelector';
import { AnalyticsKpiCards } from '@/components/admin/analytics/AnalyticsKpiCards';
import { AppointmentTrendsChart } from '@/components/admin/analytics/charts/AppointmentTrendsChart';
import { DoctorPerformanceChart } from '@/components/admin/analytics/charts/DoctorPerformanceChart';
import { SpecialtyDemandChart } from '@/components/admin/analytics/charts/SpecialtyDemandChart';
import { HospitalPerformanceChart } from '@/components/admin/analytics/charts/HospitalPerformanceChart';
import { DiagnosticsBookingsChart } from '@/components/admin/analytics/charts/DiagnosticsBookingsChart';
import { HealthPackageBookingsChart } from '@/components/admin/analytics/charts/HealthPackageBookingsChart';
import { PatientRegistrationsChart } from '@/components/admin/analytics/charts/PatientRegistrationsChart';
import { EnquiriesAnalyticsChart } from '@/components/admin/analytics/charts/EnquiriesAnalyticsChart';
import { ConversionMetricsChart } from '@/components/admin/analytics/charts/ConversionMetricsChart';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { BarChart3, Download, Sparkles, Activity, ShieldCheck, TrendingUp, Layers } from 'lucide-react';

export const AdminAnalyticsPage: React.FC = () => {
  const { success, info } = useToast();

  // State Management
  const [activeDateFilter, setActiveDateFilter] = useState<DateFilterType>('30d');
  const [customRange, setCustomRange] = useState<DateRange>({
    startDate: '2026-08-01',
    endDate: '2026-08-28',
  });
  const [campusFilter, setCampusFilter] = useState<string>('All Campuses');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [simulateLoading, setSimulateLoading] = useState<boolean>(false);
  const [simulateEmpty, setSimulateEmpty] = useState<boolean>(false);
  const [activeAnalyticsSubTab, setActiveAnalyticsSubTab] = useState<'all' | 'clinical' | 'hospital' | 'conversion'>('all');

  // Compute analytics dataset dynamically based on filter state
  const analyticsData = useMemo(() => {
    return getMockAnalyticsData(activeDateFilter, campusFilter, simulateEmpty);
  }, [activeDateFilter, campusFilter, simulateEmpty]);

  // Handle Manual Refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      success('Analytics dashboard data updated live.');
    }, 800);
  };

  // Reset Filters action
  const handleResetFilters = () => {
    setActiveDateFilter('30d');
    setCampusFilter('All Campuses');
    setSimulateEmpty(false);
    setSimulateLoading(false);
    info('Analytics filters reset to default 30 Days & All Campuses.');
  };

  // Export Summary Report action
  const handleExportAnalyticsReport = () => {
    success(`Analytics summary report for [${activeDateFilter.toUpperCase()}] generated & downloaded.`);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. TOP HERO BANNER */}
      <div className="bg-[#060c20] text-white p-6 sm:p-8 rounded-3xl border border-amber-500/40 shadow-xl space-y-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="gold" size="sm">Admin Analytics Architecture</Badge>
            <span className="text-xs font-mono text-teal-400 font-bold">Phase 24 — Active</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <span>Executive Command Analytics</span>
            <BarChart3 className="w-8 h-8 text-amber-400 hidden sm:inline-block" />
          </h1>
          <p className="text-xs text-gray-300 font-medium leading-relaxed">
            Real-time operations intelligence covering appointment throughput, senior doctor productivity, specialty market share, hospital campus performance, lab scans, patient acquisition & conversion funnels.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="gold"
            size="md"
            leftIcon={<Download className="w-4 h-4" />}
            onClick={handleExportAnalyticsReport}
          >
            Export Executive Report
          </Button>
        </div>
      </div>

      {/* 2. DATE FILTER & CAMPUS CONTROLS */}
      <DateFilterSelector
        activeFilter={activeDateFilter}
        onFilterChange={(f) => {
          setActiveDateFilter(f);
          if (simulateEmpty) setSimulateEmpty(false);
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 300);
          info(`Analytics range set to ${f === 'today' ? 'Today' : f === '7d' ? '7 Days' : f === '30d' ? '30 Days' : f === '90d' ? '90 Days' : 'Custom Range'}.`);
        }}
        customRange={customRange}
        onCustomRangeChange={setCustomRange}
        campusFilter={campusFilter}
        onCampusChange={(campus) => {
          setCampusFilter(campus);
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 300);
          info(`Filtered executive analytics for: ${campus}`);
        }}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
        simulateLoading={simulateLoading}
        onToggleLoading={() => {
          const next = !simulateLoading;
          setSimulateLoading(next);
          info(next ? 'Simulated loading skeleton active across all charts.' : 'Loading skeleton disabled.');
        }}
        simulateEmpty={simulateEmpty}
        onToggleEmpty={() => {
          const next = !simulateEmpty;
          setSimulateEmpty(next);
          info(next ? 'Simulated empty dataset active across all charts.' : 'Live analytics data restored.');
        }}
      />

      {/* 3. KEY METRIC SUMMARY CARDS */}
      <AnalyticsKpiCards
        metrics={analyticsData.kpis}
        isLoading={simulateLoading || isRefreshing}
      />

      {/* 4. SUB-CATEGORY NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-3 overflow-x-auto custom-scrollbar">
        {[
          { id: 'all', label: 'All Dashboard Analytics (9 Metrics)', icon: Layers },
          { id: 'clinical', label: 'Clinical & Doctor Performance', icon: Activity },
          { id: 'hospital', label: 'Hospital Campuses & Diagnostics', icon: ShieldCheck },
          { id: 'conversion', label: 'Patient Funnel & Conversions', icon: TrendingUp },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeAnalyticsSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveAnalyticsSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-extrabold transition-all shrink-0 ${
                isActive
                  ? 'bg-navy-950 text-amber-400 shadow-md font-black'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-teal-600'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 5. CHARTS GRID (Renders all 9 analytics domains as requested) */}

      {/* SECTION A: CLINICAL & APPOINTMENTS (Charts 1, 2, 3) */}
      {(activeAnalyticsSubTab === 'all' || activeAnalyticsSubTab === 'clinical') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-navy-950 flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              <span>1. Clinical Throughput & Doctor Performance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 1: Appointment Trends */}
            <AppointmentTrendsChart
              data={analyticsData.appointmentTrends}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />

            {/* Chart 2: Doctor Performance */}
            <DoctorPerformanceChart
              data={analyticsData.doctorPerformance}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Chart 3: Specialty Demand (Full Width or 2-col) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SpecialtyDemandChart
                data={analyticsData.specialtyDemand}
                isLoading={simulateLoading || isRefreshing}
                isEmpty={simulateEmpty}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Specialty Demand Highlights Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <Badge variant="teal" size="sm">Specialty Insights</Badge>
                <h3 className="text-lg font-black text-navy-950">Top Demanded Specialties</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Cardiology and Oncology account for over <strong className="text-navy-950">48% of total OPD consultations</strong>.
                </p>
              </div>

              <div className="space-y-3">
                {analyticsData.specialtyDemand.slice(0, 4).map((s) => (
                  <div key={s.specialty} className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-navy-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      {s.specialty}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-700">{s.bookings} Bookings</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                        +{s.growthRate}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION B: HOSPITAL CAMPUSES & DIAGNOSTICS (Charts 4, 5, 6) */}
      {(activeAnalyticsSubTab === 'all' || activeAnalyticsSubTab === 'hospital') && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-navy-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span>2. Hospital Campuses & Diagnostic Bookings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 4: Hospital Campus Performance */}
            <HospitalPerformanceChart
              data={analyticsData.hospitalPerformance}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />

            {/* Chart 5: Diagnostics Scans */}
            <DiagnosticsBookingsChart
              data={analyticsData.diagnosticsBookings}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Chart 6: Health Package Bookings */}
          <HealthPackageBookingsChart
            data={analyticsData.healthPackageBookings}
            isLoading={simulateLoading || isRefreshing}
            isEmpty={simulateEmpty}
            onResetFilters={handleResetFilters}
          />
        </div>
      )}

      {/* SECTION C: PATIENT REGISTRATIONS, ENQUIRIES & CONVERSION (Charts 7, 8, 9) */}
      {(activeAnalyticsSubTab === 'all' || activeAnalyticsSubTab === 'conversion') && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-navy-950 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              <span>3. Patient Growth, Enquiries & Conversion Funnel</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 7: Patient Registrations */}
            <PatientRegistrationsChart
              registrationData={analyticsData.patientRegistrations}
              demographicData={analyticsData.patientDemographics}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />

            {/* Chart 8: Enquiries Analytics & SLA */}
            <EnquiriesAnalyticsChart
              data={analyticsData.enquiryMetrics}
              isLoading={simulateLoading || isRefreshing}
              isEmpty={simulateEmpty}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Chart 9: Conversion Metrics & Funnel */}
          <ConversionMetricsChart
            summary={analyticsData.conversionSummary}
            isLoading={simulateLoading || isRefreshing}
            isEmpty={simulateEmpty}
            onResetFilters={handleResetFilters}
          />
        </div>
      )}
    </div>
  );
};
