import React from 'react';
import { CreditCard, QrCode, Building2, ShieldCheck, Check, Loader2 } from 'lucide-react';
import { PaymentMethod } from '@/services/paymentService';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';

interface StepPaymentProps {
  selectedPaymentMethod: PaymentMethod;
  onSelectPaymentMethod: (method: PaymentMethod) => void;
  isProcessing: boolean;
  totalAmount: number;
}

export const StepPayment: React.FC<StepPaymentProps> = ({
  selectedPaymentMethod,
  onSelectPaymentMethod,
  isProcessing,
  totalAmount,
}) => {
  const paymentOptions = [
    {
      id: 'PAY_AT_HOSPITAL' as PaymentMethod,
      title: 'Pay at Hospital OPD Counter',
      desc: 'No upfront online payment required. Pay ₹' + totalAmount + ' at the registration desk upon visit.',
      icon: <Building2 className="w-6 h-6 text-navy-900" />,
      badge: 'Zero Online Risk',
    },
    {
      id: 'UPI' as PaymentMethod,
      title: 'Instant UPI / QR Payment',
      desc: 'Pay instantly via Google Pay, PhonePe, Paytm, or any BHIM UPI ID.',
      icon: <QrCode className="w-6 h-6 text-teal-600" />,
      badge: 'Instant Receipt',
    },
    {
      id: 'CREDIT_DEBIT_CARD' as PaymentMethod,
      title: 'Credit / Debit Card',
      desc: 'Visa, Mastercard, RuPay & American Express cards accepted.',
      icon: <CreditCard className="w-6 h-6 text-gold-600" />,
      badge: 'Secure 256-Bit SSL',
    },
    {
      id: 'INSURANCE_CASHLESS' as PaymentMethod,
      title: 'Cashless Health Insurance',
      desc: 'Show TPA card at OPD desk for pre-approved cashless coverage.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'TPA Pre-approved',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-navy-900">Step 7: Payment Architecture & Confirmation</h3>
        <p className="text-xs text-gray-500">Select how you want to settle the consultation fee of ₹{totalAmount}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentOptions.map((opt) => {
          const isSelected = selectedPaymentMethod === opt.id;

          return (
            <Card
              key={opt.id}
              onClick={() => onSelectPaymentMethod(opt.id)}
              className={`p-5 cursor-pointer transition-all border-2 space-y-3 ${
                isSelected
                  ? 'border-gold-600 bg-gold-50/20 shadow-md ring-2 ring-gold-200'
                  : 'border-gray-200 hover:border-teal-500/50 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-gray-100 rounded-2xl">{opt.icon}</div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center border ${
                    isSelected ? 'bg-gold-600 text-navy-950 border-gold-600' : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
              </div>

              <div className="space-y-1">
                <Badge variant="teal" size="sm">{opt.badge}</Badge>
                <h4 className="text-base font-bold text-navy-900 pt-1">{opt.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{opt.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {isProcessing && (
        <div className="p-4 bg-navy-950 text-white rounded-xl flex items-center justify-center gap-3 animate-pulse">
          <Loader2 className="w-5 h-5 text-gold-400 animate-spin" />
          <span className="text-xs font-bold text-gray-200">
            Processing Payment via paymentService abstraction...
          </span>
        </div>
      )}
    </div>
  );
};
