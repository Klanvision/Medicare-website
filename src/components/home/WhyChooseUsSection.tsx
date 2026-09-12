import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Percent, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-gold-600" />,
      title: '150+ Senior Specialists',
      desc: 'Internationally trained doctors across 50+ super-specialties leading multidisciplinary tumor & cardiac boards.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      title: 'NABH & JCI Standard Accredited',
      desc: 'Strict adherence to international hospital safety standards, zero hospital-acquired infection protocols, and 24/7 ICUs.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-navy-900" />,
      title: '99.4% Patient Satisfaction',
      desc: 'Over 100,000+ patients treated with transparent pricing, cashless insurance processing, and compassionate care.',
    },
    {
      icon: <Percent className="w-8 h-8 text-emerald-600" />,
      title: '0% Interest Healthcare EMI',
      desc: 'Easy flexible monthly EMI options for surgeries and major medical procedures with hassle-free instant approval.',
    },
  ];

  return (
    <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="primary" size="sm">Medical Leadership</Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Why Choose MEDICARE Hospitals?
        </h2>
        <p className="text-sm text-slate-600">
          Engineered for patient trust, clinical precision, transparent billing, and rapid recovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, idx) => (
          <Card key={idx} hoverEffect accentGoldTop className="p-6 space-y-4">
            <div className="p-3 bg-gray-50 rounded-2xl w-fit border border-gray-200">{p.icon}</div>
            <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
