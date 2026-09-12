import { apiClient, ApiResponse } from './apiClient';
import { HOSPITALS_EXTENDED_DATA, HospitalBranchExt } from '@/data/hospitalData';

export interface HospitalFilterParams {
  query?: string;
  city?: string;
  state?: string;
}

export interface HospitalEmergencyStats {
  hospitalId: string;
  totalBeds: number;
  availableBeds: number;
  icuAvailable: number;
  emergencyStatus: 'Level-1 Operational' | 'Busy' | 'Diverting';
  hotline: string;
}

export const hospitalService = {
  /**
   * Fetch List of Hospital Campuses
   */
  async getHospitals(params: HospitalFilterParams = {}): Promise<HospitalBranchExt[]> {
    const res = await apiClient.get<HospitalBranchExt[]>('/hospitals', {
      params: params as any,
      mockFallback: async () => {
        let result = [...HOSPITALS_EXTENDED_DATA];

        if (params.query && params.query.trim() !== '') {
          const q = params.query.toLowerCase().trim();
          result = result.filter(
            (h) =>
              h.name.toLowerCase().includes(q) ||
              h.address.toLowerCase().includes(q) ||
              h.city.toLowerCase().includes(q) ||
              h.overview.toLowerCase().includes(q)
          );
        }

        if (params.city && params.city !== 'All') {
          result = result.filter((h) => h.city === params.city);
        }

        if (params.state && params.state !== 'All') {
          result = result.filter((h) => h.state === params.state);
        }

        return result;
      },
    });
    return res.data || [];
  },

  /**
   * Fetch Hospital Details by ID
   */
  async getHospitalById(id: string): Promise<HospitalBranchExt | null> {
    const res = await apiClient.get<HospitalBranchExt>(`/hospitals/${id}`, {
      mockFallback: async () => {
        const found = HOSPITALS_EXTENDED_DATA.find((h) => h.id === id);
        return found || null;
      },
    });
    return res.data || null;
  },

  /**
   * Fetch Emergency Stats for a Campus
   */
  async getHospitalEmergencyStats(hospitalId: string): Promise<HospitalEmergencyStats> {
    const res = await apiClient.get<HospitalEmergencyStats>(`/hospitals/${hospitalId}/emergency-stats`, {
      mockFallback: async () => ({
        hospitalId,
        totalBeds: 350,
        availableBeds: 42,
        icuAvailable: 8,
        emergencyStatus: 'Level-1 Operational',
        hotline: '1800-844-462',
      }),
    });
    return (
      res.data || {
        hospitalId,
        totalBeds: 350,
        availableBeds: 40,
        icuAvailable: 6,
        emergencyStatus: 'Level-1 Operational',
        hotline: '1800-844-462',
      }
    );
  },
};
