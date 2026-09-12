import { apiClient, ApiResponse } from './apiClient';
import {
  INSURANCE_PARTNERS_DATA,
  TPA_SERVICES_DATA,
  InsuranceCompany,
  TPAService,
} from '@/data/insuranceData';

export interface InsuranceClaimPayload {
  patientName: string;
  uhid: string;
  policyNumber: string;
  insurerName: string;
  hospitalCampus: string;
  estimatedAmount: number;
  treatmentType: string;
  documentsUploaded?: string[];
}

export interface ClaimPreAuthResult {
  claimId: string;
  status: 'Pre-Authorized' | 'Under Review' | 'Additional Info Required';
  approvedAmount: number;
  tpaRefNo: string;
  hospitalDeskContact: string;
}

export const insuranceService = {
  /**
   * Fetch Empanelled Insurance Companies & TPAs
   */
  async getInsurancePartners(query?: string): Promise<InsuranceCompany[]> {
    const res = await apiClient.get<InsuranceCompany[]>('/insurance/partners', {
      params: { query },
      mockFallback: async () => {
        let result = [...INSURANCE_PARTNERS_DATA];

        if (query && query.trim() !== '') {
          const q = query.toLowerCase().trim();
          result = result.filter(
            (ins) =>
              ins.name.toLowerCase().includes(q) ||
              ins.category.toLowerCase().includes(q) ||
              ins.cashlessCoverage.toLowerCase().includes(q)
          );
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Get TPA Desk Services
   */
  async getTPAServices(): Promise<TPAService[]> {
    const res = await apiClient.get<TPAService[]>('/insurance/tpa-services', {
      mockFallback: async () => TPA_SERVICES_DATA,
    });
    return res.data || TPA_SERVICES_DATA;
  },

  /**
   * Check Cashless Eligibility
   */
  async checkCashlessEligibility(policyNumber: string, insurerName: string): Promise<ApiResponse<{ eligible: boolean; preAuthRequired: boolean }>> {
    return apiClient.post('/insurance/cashless/check', { policyNumber, insurerName }, {
      mockFallback: async () => ({
        eligible: true,
        preAuthRequired: true,
      }),
    });
  },

  /**
   * Submit Cashless Pre-Authorization Claim
   */
  async submitClaimPreAuth(payload: InsuranceClaimPayload): Promise<ApiResponse<ClaimPreAuthResult>> {
    return apiClient.post<ClaimPreAuthResult>('/insurance/cashless/pre-auth', payload, {
      mockFallback: async () => ({
        claimId: `TPA-CLAIM-${Math.floor(100000 + Math.random() * 900000)}`,
        status: 'Pre-Authorized',
        approvedAmount: Math.round(payload.estimatedAmount * 0.9),
        tpaRefNo: `STAR-TPA-${Date.now()}`,
        hospitalDeskContact: '020-67891234 Ext: 402 (TPA Cell)',
      }),
    });
  },
};
