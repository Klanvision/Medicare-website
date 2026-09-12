import { apiClient, ApiResponse } from './apiClient';
import {
  MOCK_PATIENT_PROFILE,
  MOCK_PATIENT_REPORTS,
  PatientProfile,
  PatientLabReport,
} from '@/data/patientData';

export interface PatientVitals {
  bp: string;
  heartRate: number;
  spo2: number;
  temperature: number;
  bloodSugar: number;
  lastUpdated: string;
}

export interface FamilyMemberPayload {
  id?: string;
  name: string;
  relation: 'Spouse' | 'Child' | 'Parent' | 'Sibling' | 'Other';
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  uhid?: string;
}

export const patientService = {
  /**
   * Fetch Logged-in Patient Profile
   */
  async getProfile(): Promise<PatientProfile> {
    const res = await apiClient.get<PatientProfile>('/patient/profile', {
      mockFallback: async () => MOCK_PATIENT_PROFILE,
    });
    return res.data || MOCK_PATIENT_PROFILE;
  },

  /**
   * Update Profile Details
   */
  async updateProfile(data: Partial<PatientProfile>): Promise<ApiResponse<PatientProfile>> {
    return apiClient.put<PatientProfile>('/patient/profile', data, {
      mockFallback: async () => ({
        ...MOCK_PATIENT_PROFILE,
        ...data,
      }),
    });
  },

  /**
   * Get Patient Electronic Health & Lab Reports
   */
  async getMedicalRecords(): Promise<PatientLabReport[]> {
    const res = await apiClient.get<PatientLabReport[]>('/patient/medical-records', {
      mockFallback: async () => MOCK_PATIENT_REPORTS,
    });
    return res.data || MOCK_PATIENT_REPORTS;
  },

  /**
   * Get Patient Real-Time Vitals
   */
  async getVitals(): Promise<PatientVitals> {
    const res = await apiClient.get<PatientVitals>('/patient/vitals', {
      mockFallback: async () => ({
        bp: '120/80 mmHg',
        heartRate: 72,
        spo2: 99,
        temperature: 98.6,
        bloodSugar: 95,
        lastUpdated: '15 mins ago',
      }),
    });
    return (
      res.data || {
        bp: '120/80 mmHg',
        heartRate: 72,
        spo2: 99,
        temperature: 98.6,
        bloodSugar: 95,
        lastUpdated: '15 mins ago',
      }
    );
  },

  /**
   * Get Linked Family Members
   */
  async getFamilyMembers(): Promise<FamilyMemberPayload[]> {
    const res = await apiClient.get<FamilyMemberPayload[]>('/patient/family', {
      mockFallback: async () => [
        { id: 'fm-1', name: 'Sunita Patel', relation: 'Spouse', age: 34, gender: 'Female', uhid: 'VHN-881920' },
        { id: 'fm-2', name: 'Aarav Patel', relation: 'Child', age: 8, gender: 'Male', uhid: 'VHN-881921' },
      ],
    });
    return res.data || [];
  },

  /**
   * Add Family Member to Health Profile
   */
  async addFamilyMember(member: FamilyMemberPayload): Promise<ApiResponse<FamilyMemberPayload>> {
    return apiClient.post<FamilyMemberPayload>('/patient/family', member, {
      mockFallback: async () => ({
        ...member,
        id: `fm-${Date.now()}`,
        uhid: `VHN-${Math.floor(100000 + Math.random() * 900000)}`,
      }),
    });
  },
};
