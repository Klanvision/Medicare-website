import React from 'react';
import { ShieldCheck, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { InsuranceCompany } from '@/data/insuranceData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';

interface InsurancePartnerCardProps {
  partner: InsuranceCompany;
}

export const InsurancePartnerCard: React.FC<InsurancePartnerCardProps> = ({ partner }) => {
  return (
    <Card
      hoverEffect
      accentGoldTop
      className="p-5 bg-white flex flex-col justify-between space-y-4 shadow-sm"
    >
      <div className="space-y-3">
        {/* Category & Approval Badges */}
        <div className="flex items-center justify-between">
          <Badge variant="teal" size="sm">{partner.category}</Badge>
          <Badge variant="gold" size="sm">Pre-Auth {partner.claimApprovalTime}</Badge>
        </div>

        {/* Logo & Insurer Name */}
        <div className="flex items-center gap-3">
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-12 h-12 rounded-xl object-cover border shadow-2xs shrink-0"
          />
          <h3 className="text-base font-bold text-navy-900 leading-snug">{partner.name}</h3>
        </div>

        {/* Cashless Status */}
        <div className="p-2.5 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-teal-900 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
          <span className="font-semibold">{partner.cashlessCoverage}</span>
        </div>
      </div>

      {/* Helpline Contact */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>TPA Desk Helpline:</span>
        <a
          href={`tel:${partner.helpline}`}
          className="font-bold text-navy-900 hover:text-teal-600 transition-colors flex items-center gap-1"
        >
          <Phone className="w-3.5 h-3.5 text-teal-600" />
          <span>{partner.helpline}</span>
        </a>
      </div>
    </Card>
  );
};
