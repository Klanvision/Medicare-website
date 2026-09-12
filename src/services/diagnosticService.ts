import { apiClient, ApiResponse } from './apiClient';
import {
  DIAGNOSTIC_TESTS_DATA,
  DIAGNOSTIC_PACKAGES_DATA,
  DiagnosticTest,
  DiagnosticPackage,
  DiagnosticCategory,
} from '@/data/diagnosticData';

export interface TestFilterParams {
  query?: string;
  category?: DiagnosticCategory | 'All';
  homeSampleOnly?: boolean;
}

export interface BookDiagnosticPayload {
  testOrPackageId: string;
  patientName: string;
  phone: string;
  preferredDate: string;
  preferredSlot: string;
  addressForHomeSample?: string;
}

export interface DiagnosticBookingResponse {
  bookingRef: string;
  testName: string;
  scheduledDate: string;
  timeSlot: string;
  status: 'Confirmed' | 'Sample Collected' | 'Report Ready';
  amount: number;
}

export const diagnosticService = {
  /**
   * Fetch Filtered Diagnostic Tests
   */
  async getDiagnosticTests(params: TestFilterParams = {}): Promise<DiagnosticTest[]> {
    const res = await apiClient.get<DiagnosticTest[]>('/diagnostics/tests', {
      params: params as any,
      mockFallback: async () => {
        let result = [...DIAGNOSTIC_TESTS_DATA];

        if (params.query && params.query.trim() !== '') {
          const q = params.query.toLowerCase().trim();
          result = result.filter(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q) ||
              t.category.toLowerCase().includes(q)
          );
        }

        if (params.category && params.category !== 'All') {
          result = result.filter((t) => t.category === params.category);
        }

        if (params.homeSampleOnly) {
          result = result.filter((t) => t.homeSampleAvailable);
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Fetch Health Diagnostic Packages
   */
  async getDiagnosticPackages(query?: string): Promise<DiagnosticPackage[]> {
    const res = await apiClient.get<DiagnosticPackage[]>('/diagnostics/packages', {
      params: { query },
      mockFallback: async () => {
        let result = [...DIAGNOSTIC_PACKAGES_DATA];

        if (query && query.trim() !== '') {
          const q = query.toLowerCase().trim();
          result = result.filter(
            (p) =>
              p.packageName.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.includedTests.some((t) => t.toLowerCase().includes(q))
          );
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Book a Diagnostic Test or Radiology Scan
   */
  async bookDiagnostic(payload: BookDiagnosticPayload): Promise<ApiResponse<DiagnosticBookingResponse>> {
    return apiClient.post<DiagnosticBookingResponse>('/diagnostics/book', payload, {
      mockFallback: async () => ({
        bookingRef: `DX-${Math.floor(100000 + Math.random() * 900000)}`,
        testName: 'Diagnostic Scan / Lab Panel',
        scheduledDate: payload.preferredDate,
        timeSlot: payload.preferredSlot,
        status: 'Confirmed',
        amount: 1499,
      }),
    });
  },
};
