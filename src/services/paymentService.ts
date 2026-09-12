export type PaymentMethod = 'PAY_AT_HOSPITAL' | 'UPI' | 'CREDIT_DEBIT_CARD' | 'INSURANCE_CASHLESS';

export interface PaymentRequest {
  amount: number;
  paymentMethod: PaymentMethod;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  paymentMethod: PaymentMethod;
  amount: number;
  paidAt: string;
  message: string;
}

const delay = (ms: number = 800) => new Promise((resolve) => setTimeout(resolve, ms));

export const paymentService = {
  processPayment: async (request: PaymentRequest): Promise<PaymentResult> => {
    await delay(1000);

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const transactionId = `TXN-${request.paymentMethod.substring(0, 3)}-${randomSuffix}`;

    return {
      success: true,
      transactionId,
      paymentMethod: request.paymentMethod,
      amount: request.amount,
      paidAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: request.paymentMethod === 'PAY_AT_HOSPITAL'
        ? 'Booking confirmed. Payment of ₹' + request.amount + ' will be collected at hospital OPD desk.'
        : 'Payment of ₹' + request.amount + ' processed successfully via ' + request.paymentMethod + '.',
    };
  },
};
