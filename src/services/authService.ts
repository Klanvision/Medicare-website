import { apiClient, ApiResponse } from './apiClient';
import { MOCK_PATIENT_PROFILE, PatientProfile } from '@/data/patientData';
import { AdminStaffUser, DEFAULT_ADMIN_STAFF } from '@/context/AuthContext';

export interface PatientLoginPayload {
  email: string;
  password?: string;
}

export interface AdminLoginPayload {
  staffIdOrEmail: string;
  password?: string;
}

export interface RegisterPatientPayload {
  name: string;
  email: string;
  phone: string;
  gender: 'Male' | 'Female' | 'Other';
  dob: string;
  bloodGroup?: string;
}

export interface AuthSessionResponse {
  token: string;
  refreshToken: string;
  expiresIn: number;
  patient?: PatientProfile;
  staff?: AdminStaffUser;
}

export const authService = {
  /**
   * Patient Login
   */
  async patientLogin(payload: PatientLoginPayload): Promise<ApiResponse<AuthSessionResponse>> {
    return apiClient.post<AuthSessionResponse>('/auth/patient/login', payload, {
      skipAuth: true,
      mockFallback: async () => {
        if (!payload.email) throw new Error('Email address is required');
        const token = `vhn_jwt_patient_${Date.now()}`;
        localStorage.setItem('vhn_patient_token', token);
        return {
          token,
          refreshToken: `vhn_refresh_${Date.now()}`,
          expiresIn: 86400,
          patient: {
            ...MOCK_PATIENT_PROFILE,
            email: payload.email,
          },
        };
      },
    });
  },

  /**
   * Admin / Staff Login
   */
  async adminLogin(payload: AdminLoginPayload): Promise<ApiResponse<AuthSessionResponse>> {
    return apiClient.post<AuthSessionResponse>('/auth/admin/login', payload, {
      skipAuth: true,
      mockFallback: async () => {
        if (!payload.staffIdOrEmail) throw new Error('Staff ID or Email is required');
        const token = `vhn_jwt_admin_${Date.now()}`;
        localStorage.setItem('vhn_admin_token', token);
        return {
          token,
          refreshToken: `vhn_refresh_admin_${Date.now()}`,
          expiresIn: 86400,
          staff: {
            ...DEFAULT_ADMIN_STAFF,
            email: payload.staffIdOrEmail.includes('@') ? payload.staffIdOrEmail : DEFAULT_ADMIN_STAFF.email,
            staffId: !payload.staffIdOrEmail.includes('@') ? payload.staffIdOrEmail : DEFAULT_ADMIN_STAFF.staffId,
          },
        };
      },
    });
  },

  /**
   * Register New Patient
   */
  async register(payload: RegisterPatientPayload): Promise<ApiResponse<PatientProfile>> {
    return apiClient.post<PatientProfile>('/auth/patient/register', payload, {
      skipAuth: true,
      mockFallback: async () => {
        return {
          uhid: `VHN-${Math.floor(100000 + Math.random() * 900000)}`,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          gender: payload.gender,
          dob: payload.dob,
          bloodGroup: payload.bloodGroup || 'O+',
          address: 'Pune, Maharashtra',
          emergencyContact: {
            name: 'Primary Kin',
            relation: 'Spouse',
            phone: payload.phone,
          },
        };
      },
    });
  },

  /**
   * Request OTP Verification
   */
  async requestOtp(phone: string): Promise<ApiResponse<{ referenceId: string }>> {
    return apiClient.post('/auth/otp/send', { phone }, {
      skipAuth: true,
      mockFallback: async () => ({
        referenceId: `otp-ref-${Date.now()}`,
      }),
    });
  },

  /**
   * Verify Mobile OTP
   */
  async verifyOtp(phone: string, otp: string): Promise<ApiResponse<{ verified: boolean }>> {
    return apiClient.post('/auth/otp/verify', { phone, otp }, {
      skipAuth: true,
      mockFallback: async () => {
        if (otp === '1234' || otp === '9999' || otp.length === 4) {
          return { verified: true };
        }
        throw new Error('Invalid OTP provided');
      },
    });
  },

  /**
   * Forgot Password Link Request
   */
  async forgotPassword(email: string): Promise<ApiResponse<{ sent: boolean }>> {
    return apiClient.post('/auth/forgot-password', { email }, {
      skipAuth: true,
      mockFallback: async () => ({ sent: true }),
    });
  },

  /**
   * Logout User Session
   */
  async logout(): Promise<ApiResponse<{ loggedOut: boolean }>> {
    return apiClient.post('/auth/logout', {}, {
      mockFallback: async () => {
        localStorage.removeItem('vhn_patient_token');
        localStorage.removeItem('vhn_admin_token');
        return { loggedOut: true };
      },
    });
  },
};
