import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { CENTRES_OF_EXCELLENCE_DATA } from '@/data/homeData';

export const ExcellenceCentresSection: React.FC = () => {
  return (
    <section id="centres-of-excellence" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="gold" size="sm">Tertiary Excellence</Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          Institutes & Centres of Medical Excellence
        </h2>
        <p className="text-sm text-gray-600">
          Integrated super-specialty institutes delivering high volume successful surgeries with zero infection rates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CENTRES_OF_EXCELLENCE_DATA.map((center) => (
          <Card key={center.id} variant="navy" accentGoldTop className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <Badge variant="gold" size="sm">{center.surgeriesCompleted} Surgeries Performed</Badge>
              <h3 className="text-2xl font-bold text-white leading-snug">{center.title}</h3>
              <p className="text-xs text-gold-400 font-medium italic">{center.tagline}</p>

              <div className="space-y-2.5 pt-3 border-t border-navy-800 text-xs text-gray-300">
                {center.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-navy-800 space-y-3">
              <p className="text-xs text-gray-400 font-semibold">Clinical Director: <span className="text-white">{center.leadDoctor}</span></p>
              <a href="#appointments" className="block">
                <Button variant="gold" size="sm" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Institute & OPD
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
