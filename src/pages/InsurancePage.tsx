import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Building,
  Clock,
  Phone,
  FileCheck,
  CheckCircle2,
  HelpCircle,
  Download,
  Search,
  X,
} from 'lucide-react';
import { insuranceService } from '@/services/insuranceService';
import {
  InsuranceCompany,
  TPAService,
  INSURANCE_FAQS_DATA,
} from '@/data/insuranceData';
import { InsurancePartnerCard } from '@/components/insurance/InsurancePartnerCard';
import { PreAuthStepper } from '@/components/insurance/PreAuthStepper';
import { InsuranceEnquiryForm } from '@/components/insurance/InsuranceEnquiryForm';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Card } from '@/components/common/Card';
import { FAQAccordion } from '@/components/specialties/FAQAccordion';
import { Skeleton } from '@/components/common/Loading';
import { useToast } from '@/hooks/useToast';

export const InsurancePage: React.FC = () => {
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [partners, setPartners] = useState<InsuranceCompany[]>([]);
  const [tpaList, setTpaList] = useState<TPAService[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const insRes = await insuranceService.getInsurancePartners(searchTerm);
        const tpaRes = await insuranceService.getTPAServices();
        setPartners(insRes);
        setTpaList(tpaRes);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleDownloadReimbursementKit = () => {
    toast.success('Reimbursement Claims Document Checklist (PDF) downloaded!', 'Kit Downloaded');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-sky-300/40 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            24/7 TPA Desk
          </span>
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-black uppercase tracking-wider border border-white/30 backdrop-blur-sm">
            100% Cashless
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          MEDICARE <span className="text-sky-200 font-black">Insurance & Cashless TPA Desk</span>
        </h1>
        <p className="text-xs sm:text-sm text-sky-50 font-medium max-w-3xl leading-relaxed">
          Zero-hassle cashless hospitalization with 9+ empaneled insurance providers, dedicated TPA desks, and instant pre-authorisation approvals in under 30 minutes.
        </p>
      </div>

      {/* 1. 4-Step Pre-Authorisation Workflow */}
      <div className="space-y-6">
        <div className="space-y-1">
          <Badge variant="teal" size="sm">Quick Approval</Badge>
          <h2 className="text-2xl font-extrabold text-navy-900">4-Step Cashless Pre-Authorisation Process</h2>
          <p className="text-xs text-gray-500">Fast-track approval guarantee for planned and emergency admissions.</p>
        </div>
        <PreAuthStepper />
      </div>

      {/* 2. Empaneled Insurance Partners */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900">Empaneled Insurance Partners</h2>
            <p className="text-xs text-gray-500">Direct cashless settlement with leading health insurance companies.</p>
          </div>

          <div className="w-full sm:w-72">
            <Input
              placeholder="Search insurance provider..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              startIcon={<Search className="w-4 h-4 text-teal-600" />}
              endIcon={
                searchTerm ? (
                  <button onClick={() => setSearchTerm('')} className="text-gray-400 p-1">
                    <X className="w-4 h-4" />
                  </button>
                ) : undefined
              }
            />
          </div>
        </div>

        {/* Insurers Grid */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                <Skeleton className="h-6 w-1/3 rounded-lg" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <InsurancePartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        )}
      </div>

      {/* 3. TPA Third Party Administrators Desk */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-navy-900">Third Party Administrators (TPA) Desk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tpaList.map((tpa) => (
            <Card key={tpa.id} className="p-5 bg-white space-y-3 border border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-navy-900">{tpa.name}</h4>
                <Badge variant="teal" size="sm">{tpa.tpaCode}</Badge>
              </div>
              <p className="text-xs text-gray-500">Insurers: {tpa.supportedInsurers.join(', ')}</p>
              <div className="pt-2 border-t text-xs text-gray-600 space-y-1">
                <p>Helpline: <strong className="text-navy-900">{tpa.contactNumber}</strong></p>
                <p>Email: <span className="text-teal-700 font-medium">{tpa.email}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 4. Coverage Scope & Reimbursement Claims Assistance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coverage Scope */}
        <Card accentGoldTop className="p-6 bg-white space-y-4 border border-gray-200">
          <h3 className="text-xl font-extrabold text-navy-900">What is Covered Under Cashless?</h3>
          <div className="space-y-2 text-xs text-navy-900">
            <div className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Pre & Post Hospitalization:</strong> Medical expenses 60 days prior & 90 days after discharge.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Day Care Surgeries:</strong> Over 540+ day care procedures (Cataract, Dialysis, Chemotherapy).</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>ICU & Room Rent:</strong> HEPA-filtered cleanroom ICUs & deluxe private room options.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 bg-gray-50 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Organ Donor & Ambulance:</strong> Medical expenses for donor surgery & emergency cardiac ambulance.</span>
            </div>
          </div>
        </Card>

        {/* Reimbursement Claims Assistance */}
        <Card accentGoldTop className="p-6 bg-white space-y-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-navy-900">Reimbursement Claims Help Desk</h3>
            <Badge variant="gold" size="sm">Non-Cashless Insurers</Badge>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            If your insurance company is non-empaneled, our Reimbursement Desk compiles a complete audit-ready claim file for 100% successful claim settlement.
          </p>
          <Button
            variant="gold"
            size="sm"
            onClick={handleDownloadReimbursementKit}
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download Reimbursement Document Checklist (PDF)
          </Button>
        </Card>
      </div>

      {/* 5. TPA Desk Enquiry Form */}
      <InsuranceEnquiryForm />

      {/* 6. Insurance FAQs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold text-navy-900">Insurance & Cashless FAQs</h2>
        <FAQAccordion faqs={INSURANCE_FAQS_DATA} />
      </div>
    </div>
  );
};
