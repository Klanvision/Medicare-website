import React, { useState, useEffect } from 'react';
import {
  Globe,
  Plane,
  ShieldCheck,
  Award,
  DollarSign,
  Clock,
  UserCheck,
  FileCheck,
  Building,
  Heart,
  Stethoscope,
  CheckCircle2,
} from 'lucide-react';
import { internationalService } from '@/services/internationalService';
import {
  WhyIndiaAdvantage,
  CareCoordinator,
  AccommodationPartner,
  GLOBAL_INSURERS_LIST,
  GLOBAL_ASSISTANCE_PROVIDERS,
} from '@/data/internationalData';
import { InternationalJourneyStepper } from '@/components/international/InternationalJourneyStepper';
import { CoordinatorCard } from '@/components/international/CoordinatorCard';
import { InternationalEnquiryForm } from '@/components/international/InternationalEnquiryForm';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Skeleton } from '@/components/common/Loading';

export const InternationalPatientsPage: React.FC = () => {
  const [advantages, setAdvantages] = useState<WhyIndiaAdvantage[]>([]);
  const [coordinators, setCoordinators] = useState<CareCoordinator[]>([]);
  const [accommodations, setAccommodations] = useState<AccommodationPartner[]>([]);
  const [globalInsurers, setGlobalInsurers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const advRes = await internationalService.getWhyIndiaAdvantages();
        const coordRes = await internationalService.getCareCoordinators();
        const accRes = await internationalService.getAccommodationPartners();
        const insRes = await internationalService.getGlobalInsurers();

        setAdvantages(advRes);
        setCoordinators(coordRes);
        setAccommodations(accRes);
        setGlobalInsurers(insRes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-12 rounded-3xl shadow-xl border border-sky-300/40 space-y-6">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
              JCI & NABH Accredited
            </span>
            <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#00529B] text-xs font-black uppercase tracking-wider">
              Global Medical Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            World-Class Care for <span className="text-sky-200 font-black">International Patients</span>
          </h1>
          <p className="text-xs sm:text-sm text-sky-50 font-medium leading-relaxed">
            Ranked among India's premier international healthcare destinations. Offering end-to-end medical visa assistance, airport transfers, luxury suites, and 70% cost savings.
          </p>
        </div>
      </div>

      {/* 1. Why India Advantage Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="teal" size="sm">Global Excellence</Badge>
          <h2 className="text-3xl font-extrabold text-navy-900">Why Choose MEDICARE Hospitals India?</h2>
          <p className="text-xs text-gray-500">Uncompromising surgical outcome standards at a fraction of global costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => (
            <Card key={item.id} hoverEffect accentGoldTop className="p-6 bg-white space-y-3 border border-gray-200">
              <span className="text-2xl font-black text-gold-600 block">{item.stat}</span>
              <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. 6-Step International Treatment Journey Stepper */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-navy-900">Your Seamless International Treatment Journey</h2>
          <p className="text-xs text-gray-500">From your first online inquiry to post-discharge recovery back home.</p>
        </div>
        <InternationalJourneyStepper />
      </div>

      {/* 3. Dedicated International Patient Coordinators */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-navy-900">Dedicated Regional Care Coordinators</h2>
          <p className="text-xs text-gray-500">Personalized multilingual care managers assigned to your family 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coordinators.map((coordinator) => (
            <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
          ))}
        </div>
      </div>

      {/* 4. M-Visa, Airport Transfer & Accommodation Partners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visa & Airport Assistance */}
        <Card accentGoldTop className="p-6 sm:p-8 bg-white space-y-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-900">M-Visa & Airport Concierge</h3>
              <p className="text-xs text-gray-500">Hassle-free entry & ground transportation</p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-navy-900">
            <div className="p-3 bg-gray-50 rounded-xl space-y-1">
              <strong className="text-teal-700 block font-bold">24-Hour Medical Visa Invitation (M-Visa):</strong>
              <p className="text-gray-600">Official hospital invitation letter dispatched to the Indian Embassy in your country.</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl space-y-1">
              <strong className="text-teal-700 block font-bold">Complimentary Airport Reception:</strong>
              <p className="text-gray-600">Greeting team at Pune or Mumbai International Airport with private AC vehicle transfer.</p>
            </div>
          </div>
        </Card>

        {/* Accommodation Partners */}
        <Card accentGoldTop className="p-6 sm:p-8 bg-white space-y-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gold-50 rounded-2xl text-gold-600">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-900">Luxury Medical Suites & Stays</h3>
              <p className="text-xs text-gray-500">Partner 5-star executive apartments near hospital</p>
            </div>
          </div>

          <div className="space-y-3">
            {accommodations.map((acc) => (
              <div key={acc.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <img src={acc.image} alt={acc.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-navy-900">{acc.name}</h4>
                  <p className="text-[11px] text-teal-700 font-semibold">{acc.type}</p>
                  <p className="text-[10px] text-gray-500">{acc.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* 5. International Insurance Cashless Desk */}
      <div className="p-6 sm:p-10 bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white rounded-3xl space-y-6 border border-sky-300/40 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-5">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">International Insurance & Assistance Desk</h3>
            <p className="text-xs sm:text-sm text-sky-100 font-medium">Empaneled with premier global insurance providers offering direct cashless settlement, pre-authorization, & concierge medical assistance.</p>
          </div>
          <span className="px-4 py-2 bg-white text-[#00529B] text-xs font-black uppercase tracking-wider rounded-full shadow-md shrink-0 self-start sm:self-center">
            DIRECT GLOBAL SETTLEMENT
          </span>
        </div>

        {/* Grid of Assistance Provider Blocks with Detailed Matter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {GLOBAL_ASSISTANCE_PROVIDERS.map((provider) => (
            <div
              key={provider.id}
              className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-md"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-wider border border-white/30">
                    {provider.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-sky-200 shrink-0" />
                </div>

                <h4 className="text-base font-extrabold text-white group-hover:text-sky-200 transition-colors">
                  {provider.name}
                </h4>

                <p className="text-xs text-sky-100 font-normal leading-relaxed">
                  {provider.matter}
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-2">
                <ul className="space-y-1">
                  {provider.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[11px] text-white font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-sky-900/40 text-sky-200 text-[10px] font-bold">
                  {provider.coverage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Fast-Track Medical Opinion Enquiry Form */}
      <InternationalEnquiryForm />
    </div>
  );
};
