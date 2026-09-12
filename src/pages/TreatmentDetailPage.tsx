import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Sparkles,
  Stethoscope,
  Activity,
} from 'lucide-react';
import { specialtyService } from '@/services/specialtyService';
import { TreatmentDetail, Specialty } from '@/data/specialtyData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';

export const TreatmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<{ treatment: TreatmentDetail; specialty: Specialty } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTreatment = async () => {
      setIsLoading(true);
      if (slug) {
        const found = await specialtyService.getTreatmentBySlug(slug);
        setData(found);
      }
      setIsLoading(false);
    };
    loadTreatment();
  }, [slug]);

  if (isLoading) {
    return <PageLoader message="Loading Treatment Procedure Details..." />;
  }

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState
          title="Treatment Procedure Not Found"
          message="The surgical procedure you requested could not be located."
          onRetry={() => navigate('/treatments')}
        />
      </div>
    );
  }

  const { treatment, specialty } = data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Link */}
      <Link
        to="/treatments"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-navy-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Treatments Directory
      </Link>

      {/* Hero Header Card */}
      <Card variant="navy" accentGoldTop className="p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="gold" size="sm">Procedure Overview</Badge>
              <Link to={`/specialities/${specialty.slug}`}>
                <Badge variant="teal" size="sm">Department of {specialty.name}</Badge>
              </Link>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              {treatment.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link to="/appointments">
              <Button variant="gold" size="lg" fullWidth leftIcon={<Calendar className="w-5 h-5" />}>
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Procedure Specs & Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Procedure Steps, Clinical Benefits) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Key Procedure Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-5 flex items-center gap-4 bg-teal-50/60 border-teal-100">
              <div className="p-3 bg-teal-600 text-white rounded-2xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Procedure Duration</p>
                <p className="text-lg font-extrabold text-navy-900">{treatment.duration}</p>
              </div>
            </Card>

            <Card className="p-5 flex items-center gap-4 bg-gold-50/60 border-gold-100">
              <div className="p-3 bg-gold-600 text-navy-950 rounded-2xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Recovery Timeline</p>
                <p className="text-lg font-extrabold text-navy-900">{treatment.recoveryTime}</p>
              </div>
            </Card>
          </div>

          {/* Step-by-Step Procedure Breakdown */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              Step-by-Step Procedure Process
            </h3>
            <div className="space-y-3">
              {treatment.procedureSteps.map((step, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-navy-900 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Clinical Benefits */}
          <Card className="p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-navy-900 border-b pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-600" />
              Key Clinical Advantages & Benefits
            </h3>
            <div className="space-y-2.5">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: CTA & Department Info */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <Card accentGoldTop className="p-6 space-y-6 shadow-xl bg-white">
            <div className="space-y-1">
              <Badge variant="teal" size="sm">{specialty.name}</Badge>
              <h3 className="text-lg font-bold text-navy-900">Book Procedure OPD</h3>
              <p className="text-xs text-gray-500">
                Consult with our senior {specialty.name} surgeons for {treatment.name}.
              </p>
            </div>

            <Link to="/appointments" className="block">
              <Button variant="gold" size="lg" fullWidth leftIcon={<Calendar className="w-5 h-5" />}>
                Book OPD Appointment
              </Button>
            </Link>

            <div className="p-4 bg-teal-50 rounded-xl space-y-2 border border-teal-100 text-xs text-teal-900">
              <p className="font-bold flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-teal-600" /> 24/7 Surgical Helpline
              </p>
              <p className="text-gray-600">Call our hospital coordinator for pre-procedure guidelines.</p>
              <p className="font-bold text-navy-900">+91 (020) 2765-9000</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
