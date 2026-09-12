import React from 'react';
import { CheckCircle2, Calendar, Home, Clock, AlertCircle } from 'lucide-react';
import { CheckupPackage } from '@/data/checkupData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

interface CheckupPackageCardProps {
  packageData: CheckupPackage;
  onBookPackage: (pkg: CheckupPackage) => void;
}

export const CheckupPackageCard: React.FC<CheckupPackageCardProps> = ({
  packageData,
  onBookPackage,
}) => {
  const discountPercent = Math.round(
    ((packageData.mrpPrice - packageData.discountPrice) / packageData.mrpPrice) * 100
  );

  return (
    <Card
      hoverEffect
      accentGoldTop
      className="p-6 bg-white flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        {/* Category & Discount Badges */}
        <div className="flex items-center justify-between">
          <Badge variant="teal" size="sm">{packageData.category}</Badge>
          <Badge variant="gold" size="sm">{packageData.testCount} Tests • {discountPercent}% OFF</Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-navy-900">{packageData.name}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">{packageData.description}</p>
        </div>

        {/* Recommended For & Home Collection */}
        <div className="space-y-2 text-xs">
          <p className="text-teal-700 font-semibold">Recommended: {packageData.recommendedFor}</p>

          {packageData.homeCollection && (
            <div className="flex items-center gap-1.5 text-teal-800 font-bold bg-teal-50 p-2 rounded-lg border border-teal-100">
              <Home className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Doorstep Home Sample Collection Available</span>
            </div>
          )}
        </div>

        {/* Included Tests List */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Key Included Tests:</p>
          <div className="space-y-1.5 text-xs text-navy-900">
            {packageData.includedTests.slice(0, 4).map((t, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{t}</span>
              </div>
            ))}
            {packageData.includedTests.length > 4 && (
              <p className="text-[11px] font-bold text-teal-700 pl-5">
                + {packageData.includedTests.length - 4} More Tests Included
              </p>
            )}
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
          <div className="flex items-center gap-1 font-bold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Preparation Guidelines:</span>
          </div>
          <p className="text-[11px] text-amber-800 leading-relaxed">{packageData.preparation}</p>
        </div>
      </div>

      {/* Price & Booking Button */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 line-through mr-2">₹{packageData.mrpPrice}</span>
          <span className="text-2xl font-black text-navy-900">₹{packageData.discountPrice}</span>
        </div>

        <Button
          variant="gold"
          size="sm"
          onClick={() => onBookPackage(packageData)}
          leftIcon={<Calendar className="w-4 h-4" />}
        >
          Book Package
        </Button>
      </div>
    </Card>
  );
};
