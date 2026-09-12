import React, { useState } from 'react';
import { Megaphone, Tag, Users, Calendar, Percent, CheckCircle, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminCampaign } from '@/data/adminData';

interface LaunchCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCampaign: (newCampaign: AdminCampaign) => void;
}

const CAMPAIGN_TYPES: ('Discount Offer' | 'Email Newsletter' | 'Health Camp Drive')[] = [
  'Discount Offer',
  'Email Newsletter',
  'Health Camp Drive',
];

export const LaunchCampaignModal: React.FC<LaunchCampaignModalProps> = ({
  isOpen,
  onClose,
  onAddCampaign,
}) => {
  const { success, error } = useToast();

  const [name, setName] = useState('');
  const [type, setType] = useState<'Discount Offer' | 'Email Newsletter' | 'Health Camp Drive'>('Discount Offer');
  const [code, setCode] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [discountValue, setDiscountValue] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [status, setStatus] = useState<'Active' | 'Scheduled' | 'Expired'>('Active');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter campaign title.');
      return;
    }
    if (!code.trim()) {
      setValidationError('Please enter promotional coupon code.');
      return;
    }
    if (!targetAudience.trim()) {
      setValidationError('Please enter target audience demographic.');
      return;
    }
    if (!discountValue.trim()) {
      setValidationError('Please enter discount offer value.');
      return;
    }
    if (!validUntil) {
      setValidationError('Please select campaign expiry date.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newCampaign: AdminCampaign = {
        id: `cmp-${Date.now()}`,
        name: name.trim(),
        type,
        code: code.trim().toUpperCase(),
        targetAudience: targetAudience.trim(),
        discountValue: discountValue.trim(),
        validUntil,
        claimsCount: 0,
        status,
      };

      onAddCampaign(newCampaign);
      success(`Campaign "${name.trim()}" launched successfully with code ${code.trim().toUpperCase()}!`);

      // Reset form
      setName('');
      setType('Discount Offer');
      setCode('');
      setTargetAudience('');
      setDiscountValue('');
      setValidUntil('');
      setStatus('Active');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to launch campaign. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Launch New Marketing Campaign</h3>
            <p className="text-xs text-gray-500 font-normal">Create active promotions, health checkup discounts & campaign codes</p>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {validationError && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 font-bold animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Campaign Name */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <Megaphone className="w-3.5 h-3.5 text-amber-600" />
            Campaign Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Senior Citizen Full Body Wellness & Cardiac Package"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
          />
        </div>

        {/* Type & Promo Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Campaign Type <span className="text-red-500">*</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-bold text-navy-950"
            >
              {CAMPAIGN_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              Coupon Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. HEALTHNOVA50"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-mono uppercase font-bold tracking-wide"
            />
          </div>
        </div>

        {/* Target Audience & Discount Value */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-teal-600" />
              Target Audience <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Seniors 60+ / All Corporate Patients"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Percent className="w-3.5 h-3.5 text-amber-600" />
              Discount / Benefit Offer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 50% OFF or ₹ 1,500 Off"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-bold"
            />
          </div>
        </div>

        {/* Valid Until & Initial Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              Valid Until Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-bold text-navy-950"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
              Campaign Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50/50 font-bold text-navy-950"
            >
              <option value="Active">Active</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="gold"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Launch Campaign
          </Button>
        </div>
      </form>
    </Modal>
  );
};
