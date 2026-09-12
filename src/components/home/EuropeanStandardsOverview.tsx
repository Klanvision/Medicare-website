import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Globe, Award, ArrowRight } from 'lucide-react';

export const EuropeanStandardsOverview: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Title */}
        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-extrabold uppercase tracking-wider">
            Clinical Governance & Quality
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Top-Rated Hospital with Advanced European Healthcare Standards
          </h2>
        </div>

        {/* Content & Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Paragraph Text Column */}
          <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              <strong className="text-slate-900 font-bold">MEDICARE Hospitals</strong> is one of the leading hospital chains in India, delivering advanced healthcare aligned with international and European standards. Renowned for clinical excellence, cutting-edge technology, and a patient-centric approach, the group offers a comprehensive range of healthcare services. Its extensive network includes clinics, hospitals, specialty care centers, fertility units, and diagnostic laboratories. MEDICARE Hospitals has established a strong and trusted presence across multiple states, ensuring accessible and high-quality care for diverse patient needs.
            </p>
            <p>
              <strong className="text-slate-900 font-bold">In Telangana:</strong> It stands among the best hospitals in Hyderabad, with flagship facilities in <span className="text-sky-700 font-semibold">Financial District</span> (India’s tallest 24-floor quaternary hospital) and <span className="text-sky-700 font-semibold">Hitech City</span> (Main OPD, Cancer Institute, Robotic Surgery Center, Fertility Block, Emergency Unit), Secunderabad, Chandanagar, Women and Child Hitex Charminar, Nizamabad, Warangal, and Karimnagar.
            </p>
            <p>
              <strong className="text-slate-900 font-bold">In Andhra Pradesh:</strong> Key quaternary locations include Visakhapatnam MVP (50+ specialties), MEDICARE Cancer Institute (Arilova), Women & Child Hospital (Jagadamba), Vizianagaram, Srikakulam, Nellore & Nellore Cancer Institute, Kakinada, and Kurnool.
            </p>
            <p>
              <strong className="text-slate-900 font-bold">In Maharashtra & Karnataka:</strong> MEDICARE operates advanced tertiary centers in Navi Mumbai, Nashik, Chhatrapati Sambhajinagar, Pune, Sangamner, and Whitefield Bengaluru (351 ITPL Main Road, Whitefield Road, Hoodi Village, Bengaluru).
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#00529B] hover:text-[#00407A] underline transition-colors"
              >
                <span>Learn more about MEDICARE European Healthcare Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Highlights Card Column */}
          <div className="lg:col-span-4 bg-gradient-to-br from-sky-50 to-slate-50 p-6 rounded-3xl border border-sky-100 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-sky-200/60">
              <div className="p-2.5 rounded-2xl bg-[#00529B] text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">European Accreditation</h4>
                <p className="text-[11px] text-slate-500 font-medium">Standardized clinical protocols</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Operating across 18 countries worldwide</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Da Vinci Xi Robotic Surgery & 3T Silent MRI</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Level-1 24/7 Emergency & Trauma ICUs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Cashless approval with 9+ health insurers & TPAs</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
