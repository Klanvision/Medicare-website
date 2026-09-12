import { apiClient, ApiResponse } from './apiClient';
import { Doctor } from '@/data/doctorData';
import { HospitalBranch } from '@/data/homeData';
import { PaymentResult, PaymentMethod } from './paymentService';
import { MOCK_PATIENT_APPOINTMENTS, PatientAppointment } from '@/data/patientData';

export type ConsultationType = 'In-Person OPD' | 'Video Consultation' | 'Home Visit';

export interface BookingStateData {
  doctor: Doctor | null;
  hospital: HospitalBranch | null;
  consultationType: ConsultationType;
  appointmentDate: string;
  timeSlot: string;
  patientDetails: {
    fullName: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    phone: string;
    email: string;
    reasonForVisit: string;
  };
  paymentMethod: PaymentMethod;
}

export interface AppointmentRecord extends BookingStateData {
  appointmentId: string;
  bookingTime: string;
  paymentResult: PaymentResult | null;
  status?: 'Confirmed' | 'Completed' | 'Cancelled' | 'Pending';
}

export const appointmentService = {
  /**
   * Create New Booking Appointment
   */
  async createAppointment(
    data: BookingStateData,
    paymentResult: PaymentResult | null
  ): Promise<AppointmentRecord> {
    const res = await apiClient.post<AppointmentRecord>('/appointments', { data, paymentResult }, {
      mockFallback: async () => {
        const randomId = Math.floor(10000 + Math.random() * 90000);
        const appointmentId = `VNH-2026-${randomId}`;

        const record: AppointmentRecord = {
          ...data,
          appointmentId,
          bookingTime: new Date().toLocaleString(),
          paymentResult,
          status: 'Confirmed',
        };
        return record;
      },
    });

    return (
      res.data || {
        ...data,
        appointmentId: `VNH-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        bookingTime: new Date().toLocaleString(),
        paymentResult,
        status: 'Confirmed',
      }
    );
  },

  /**
   * Fetch Patient's Appointment History
   */
  async getPatientAppointments(patientId?: string): Promise<PatientAppointment[]> {
    const res = await apiClient.get<PatientAppointment[]>('/appointments/patient', {
      params: { patientId },
      mockFallback: async () => MOCK_PATIENT_APPOINTMENTS,
    });
    return res.data || MOCK_PATIENT_APPOINTMENTS;
  },

  /**
   * Fetch Single Appointment Details
   */
  async getAppointmentById(appointmentId: string): Promise<PatientAppointment | null> {
    const res = await apiClient.get<PatientAppointment>(`/appointments/${appointmentId}`, {
      mockFallback: async () => {
        const found = MOCK_PATIENT_APPOINTMENTS.find((a) => a.id === appointmentId);
        return found || null;
      },
    });
    return res.data || null;
  },

  /**
   * Cancel Appointment
   */
  async cancelAppointment(appointmentId: string, reason: string): Promise<ApiResponse<{ cancelled: boolean }>> {
    return apiClient.post<{ cancelled: boolean }>(`/appointments/${appointmentId}/cancel`, { reason }, {
      mockFallback: async () => ({ cancelled: true }),
    });
  },

  /**
   * Reschedule Appointment
   */
  async rescheduleAppointment(
    appointmentId: string,
    newDate: string,
    newSlot: string
  ): Promise<ApiResponse<{ rescheduled: boolean; appointmentId: string; newDate: string; newSlot: string }>> {
    return apiClient.post(`/appointments/${appointmentId}/reschedule`, { newDate, newSlot }, {
      mockFallback: async () => ({
        rescheduled: true,
        appointmentId,
        newDate,
        newSlot,
      }),
    });
  },
};
