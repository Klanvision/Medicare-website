import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ShieldAlert, ArrowRight } from 'lucide-react';
import { HeroSectionMedicover } from '@/components/home/HeroSectionMedicover';
import { CenterOfExcellenceMedicover } from '@/components/home/CenterOfExcellenceMedicover';
import { WomenChildFertilityShowcase } from '@/components/home/WomenChildFertilityShowcase';
import { EuropeanStandardsOverview } from '@/components/home/EuropeanStandardsOverview';
import { StatsCounterMedicover } from '@/components/home/StatsCounterMedicover';
import { HospitalsNearYouMedicover } from '@/components/home/HospitalsNearYouMedicover';
import { FeatureTripleShowcaseGrid } from '@/components/home/FeatureTripleShowcaseGrid';
import { PatientStoriesSection } from '@/components/home/PatientStoriesSection';
import { CareCategoriesCarousel } from '@/components/home/CareCategoriesCarousel';
import { HealthLibrarySection } from '@/components/home/HealthLibrarySection';
import { HealthJourneyCategoriesGrid } from '@/components/home/HealthJourneyCategoriesGrid';
import { FindDoctorSection } from '@/components/home/FindDoctorSection';
import { TreatmentsSection } from '@/components/home/TreatmentsSection';
import { HealthCheckupsSection } from '@/components/home/HealthCheckupsSection';
import { DiagnosticsSection } from '@/components/home/DiagnosticsSection';
import { HomeHealthcareSection } from '@/components/home/HomeHealthcareSection';
import { EmergencyCareSection } from '@/components/home/EmergencyCareSection';
import { WhyChooseUsBannerNew } from '@/components/home/WhyChooseUsBannerNew';
import { MedicoverFAQSection } from '@/components/home/MedicoverFAQSection';
import { MedicoverFooterHighlights } from '@/components/home/MedicoverFooterHighlights';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full space-y-0 pb-16 overflow-x-hidden bg-slate-50 font-sans">
      {/* 1. Medicover Royal Blue Main Hero Section */}
      <HeroSectionMedicover />

      {/* 2. Center of Excellence Section */}
      <CenterOfExcellenceMedicover />

      {/* 3. Women & Child + Fertility Side-by-Side Showcase */}
      <WomenChildFertilityShowcase />

      {/* 4. Top-Rated Hospital with Advanced European Healthcare Standards Overview */}
      <EuropeanStandardsOverview />

      {/* 5. Not sure where to start? Pan-India Statistics & Counter Banner */}
      <StatsCounterMedicover />

      {/* 6. Find a MEDICARE Hospital Near You (Telangana, AP, MH, KA, Clinics) */}
      <HospitalsNearYouMedicover />

      {/* 7. Triple Feature Showcase Grid (Robotic Surgery, Cashless Facilities, Home Care) */}
      <FeatureTripleShowcaseGrid />

      {/* 8. Here's what our happy patients say (Testimonials) */}
      <PatientStoriesSection />

      {/* 9. Interactive Reads (Web Stories) & Health Tools (Calculators) */}
      <CareCategoriesCarousel />

      {/* 10. Latest Blogs / Medical Articles */}
      <HealthLibrarySection />

      {/* Super Admin Quick Access Command Center Banner */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-sky-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-[#38BDF8] text-xs font-bold border border-sky-400/40">
              <ShieldAlert className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>SUPER ADMIN COMMAND CENTER</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              MEDICARE <span className="text-[#38BDF8]">Admin Dashboard</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Access real-time patient metrics, 150+ doctor management, OPD bookings, 4 hospital campuses, revenue analytics & system settings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full md:w-auto">
            <Link
              to="/admin"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <LayoutDashboard className="w-5 h-5 text-white" />
              <span>Launch Admin Portal (/admin)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 11. Stage of Health Journey (8-Card Quick Access Strip) */}
      <HealthJourneyCategoriesGrid />

      {/* 12. Consult Top Specialist Doctors & Book OPD */}
      <FindDoctorSection />

      {/* 13. Advanced Treatments & Minimally Invasive Surgeries */}
      <TreatmentsSection />

      {/* 14. Master Preventive Health Checkup Packages */}
      <HealthCheckupsSection />

      {/* 15. NABL Diagnostics, Imaging & 3T MRI */}
      <DiagnosticsSection />

      {/* 16. 24/7 Home Healthcare & ICU Care at Home */}
      <HomeHealthcareSection />

      {/* 17. 24/7 Level-1 Emergency & Ambulance Hotline Banner */}
      <EmergencyCareSection />

      {/* 18. Why Choose MEDICARE Hospitals Banner */}
      <WhyChooseUsBannerNew />

      {/* 19. Frequently Asked Questions (Medicover 10 FAQs) */}
      <MedicoverFAQSection />

      {/* 20. Advanced Multispecialty Highlights & City Doctors Directory */}
      <MedicoverFooterHighlights />
    </div>
  );
};
