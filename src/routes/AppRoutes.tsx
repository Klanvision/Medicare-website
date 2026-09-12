import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProtectedRoute } from '@/components/patient/ProtectedRoute';
import { AdminRouteGuard } from '@/components/admin/AdminRouteGuard';
import { PageLoader } from '@/components/common/Loading';

// Lazy-loaded pages for Route-level Code Splitting
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const DoctorsPage = lazy(() => import('@/pages/DoctorsPage').then((m) => ({ default: m.DoctorsPage })));
const DoctorDetailPage = lazy(() => import('@/pages/DoctorDetailPage').then((m) => ({ default: m.DoctorDetailPage })));
const HospitalsPage = lazy(() => import('@/pages/HospitalsPage').then((m) => ({ default: m.HospitalsPage })));
const HospitalDetailPage = lazy(() => import('@/pages/HospitalDetailPage').then((m) => ({ default: m.HospitalDetailPage })));
const SpecialtiesPage = lazy(() => import('@/pages/SpecialtiesPage').then((m) => ({ default: m.SpecialtiesPage })));
const SpecialtyDetailPage = lazy(() => import('@/pages/SpecialtyDetailPage').then((m) => ({ default: m.SpecialtyDetailPage })));
const TreatmentsPage = lazy(() => import('@/pages/TreatmentsPage').then((m) => ({ default: m.TreatmentsPage })));
const TreatmentDetailPage = lazy(() => import('@/pages/TreatmentDetailPage').then((m) => ({ default: m.TreatmentDetailPage })));
const CentresOfExcellencePage = lazy(() => import('@/pages/CentresOfExcellencePage').then((m) => ({ default: m.CentresOfExcellencePage })));
const COEDetailPage = lazy(() => import('@/pages/COEDetailPage').then((m) => ({ default: m.COEDetailPage })));
const DiagnosticsPage = lazy(() => import('@/pages/DiagnosticsPage').then((m) => ({ default: m.DiagnosticsPage })));
const HealthCheckupsPage = lazy(() => import('@/pages/HealthCheckupsPage').then((m) => ({ default: m.HealthCheckupsPage })));
const HomeHealthcarePage = lazy(() => import('@/pages/HomeHealthcarePage').then((m) => ({ default: m.HomeHealthcarePage })));
const AIAssistantPage = lazy(() => import('@/pages/AIAssistantPage').then((m) => ({ default: m.AIAssistantPage })));
const InsurancePage = lazy(() => import('@/pages/InsurancePage').then((m) => ({ default: m.InsurancePage })));
const InternationalPatientsPage = lazy(() => import('@/pages/InternationalPatientsPage').then((m) => ({ default: m.InternationalPatientsPage })));
const SecondOpinionPage = lazy(() => import('@/pages/SecondOpinionPage').then((m) => ({ default: m.SecondOpinionPage })));
const HealthLibraryPage = lazy(() => import('@/pages/HealthLibraryPage').then((m) => ({ default: m.HealthLibraryPage })));
const ArticleDetailPage = lazy(() => import('@/pages/ArticleDetailPage').then((m) => ({ default: m.ArticleDetailPage })));
const LoginPage = lazy(() => import('@/pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const PatientLoginPage = lazy(() => import('@/pages/patient/PatientLoginPage').then((m) => ({ default: m.PatientLoginPage })));
const PatientDashboardPage = lazy(() => import('@/pages/patient/PatientDashboardPage').then((m) => ({ default: m.PatientDashboardPage })));
const EmergencyPage = lazy(() => import('@/pages/EmergencyPage').then((m) => ({ default: m.EmergencyPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const LegalPage = lazy(() => import('@/pages/LegalPage').then((m) => ({ default: m.LegalPage })));
const ComponentShowcasePage = lazy(() => import('@/pages/ComponentShowcasePage').then((m) => ({ default: m.ComponentShowcasePage })));
const ServicesPagePlaceholder = lazy(() => import('@/pages/ServicesPagePlaceholder').then((m) => ({ default: m.ServicesPagePlaceholder })));
const AppointmentPagePlaceholder = lazy(() => import('@/pages/AppointmentPagePlaceholder').then((m) => ({ default: m.AppointmentPagePlaceholder })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const AdminDashboardPage = lazy(() => import('@/pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));
const AdminLoginPage = lazy(() => import('@/pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout').then((m) => ({ default: m.AdminLayout })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader message="Loading MEDICARE Page..." />}>
      <Routes>
        {/* Unprotected Main Layout Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="doctors/:doctorId" element={<DoctorDetailPage />} />
          <Route path="hospitals" element={<HospitalsPage />} />
          <Route path="hospitals/:hospitalId" element={<HospitalDetailPage />} />
          <Route path="specialities" element={<SpecialtiesPage />} />
          <Route path="specialities/:slug" element={<SpecialtyDetailPage />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="centres-of-excellence" element={<CentresOfExcellencePage />} />
          <Route path="centres-of-excellence/:slug" element={<COEDetailPage />} />
          <Route path="diagnostics" element={<DiagnosticsPage />} />
          <Route path="health-checkups" element={<HealthCheckupsPage />} />
          <Route path="home-healthcare" element={<HomeHealthcarePage />} />
          <Route path="ai-health-assistant" element={<AIAssistantPage />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="international-patients" element={<InternationalPatientsPage />} />
          <Route path="second-opinion" element={<SecondOpinionPage />} />
          <Route path="health-library" element={<HealthLibraryPage />} />
          <Route path="health-articles" element={<HealthLibraryPage />} />
          <Route path="health-articles/:slug" element={<ArticleDetailPage />} />
          <Route path="emergency" element={<EmergencyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy" element={<LegalPage />} />
          <Route path="terms" element={<LegalPage />} />
          <Route path="cancellation-policy" element={<LegalPage />} />
          <Route path="refund-policy" element={<LegalPage />} />
          <Route path="services" element={<ServicesPagePlaceholder />} />
          <Route path="appointments" element={<AppointmentPagePlaceholder />} />
          <Route path="showcase" element={<ComponentShowcasePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Unified Portal Login & Patient Login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient/login" element={<PatientLoginPage />} />

        {/* Protected Patient Portal Routes */}
        <Route path="/patient" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<PatientDashboardPage />} />
        </Route>

        {/* Staff Admin Login */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Protected Admin Dashboard Routes */}
        <Route
          path="/admin"
          element={
            <AdminRouteGuard>
              <AdminLayout />
            </AdminRouteGuard>
          }
        >
          <Route index element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminDashboardPage />} />
          <Route path="doctors" element={<AdminDashboardPage />} />
          <Route path="appointments" element={<AdminDashboardPage />} />
          <Route path="hospitals" element={<AdminDashboardPage />} />
          <Route path="departments" element={<AdminDashboardPage />} />
          <Route path="specialties" element={<AdminDashboardPage />} />
          <Route path="content" element={<AdminDashboardPage />} />
          <Route path="enquiries" element={<AdminDashboardPage />} />
          <Route path="marketing" element={<AdminDashboardPage />} />
          <Route path="analytics" element={<AdminDashboardPage />} />
          <Route path="reports" element={<AdminDashboardPage />} />
          <Route path="settings" element={<AdminDashboardPage />} />
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
