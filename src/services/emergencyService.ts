import {
  EMERGENCY_CARE_TYPES,
  EMERGENCY_CONTACTS,
  EMERGENCY_CENTRES,
  EmergencyCareTypeItem,
  EmergencyContactItem,
  EmergencyCentreItem,
} from '@/data/emergencyData';

export interface AmbulanceDispatchRequest {
  patientName: string;
  phone: string;
  pickupLocation: string;
  emergencyType: string;
  city: string;
  notes?: string;
}

export interface AmbulanceDispatchResponse {
  success: boolean;
  ticketId: string;
  assignedAmbulance: string;
  estimatedArrivalMinutes: number;
  paramedicContact: string;
  message: string;
}

export const emergencyService = {
  getCareTypes: async (): Promise<EmergencyCareTypeItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...EMERGENCY_CARE_TYPES]), 100);
    });
  },

  getContacts: async (): Promise<EmergencyContactItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...EMERGENCY_CONTACTS]), 100);
    });
  },

  getCentres: async (): Promise<EmergencyCentreItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...EMERGENCY_CENTRES]), 100);
    });
  },

  requestAmbulanceDispatch: async (
    req: AmbulanceDispatchRequest
  ): Promise<AmbulanceDispatchResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        resolve({
          success: true,
          ticketId: `EMG-2026-${randomNum}`,
          assignedAmbulance: 'Mobile ICU Unit #04 (ALS Telemetry)',
          estimatedArrivalMinutes: 7,
          paramedicContact: '+91 98230 44512 (Officer Inspector Deshmukh)',
          message: `Ambulance dispatched to ${req.pickupLocation}. Live GPS tracking link sent via SMS.`,
        });
      }, 500);
    });
  },
};
