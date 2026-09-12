import { apiClient, ApiResponse } from './apiClient';
import { DOCTORS_DATA, Doctor } from '@/data/doctorData';

export interface DoctorFilterParams {
  query?: string;
  specialty?: string;
  hospital?: string;
  location?: string;
  gender?: string;
  minExperience?: number;
  availability?: string;
  consultationMode?: string;
  maxFee?: number;
  sortBy?: 'relevance' | 'experience-desc' | 'fee-asc' | 'fee-desc' | 'rating-desc';
  page?: number;
  pageSize?: number;
}

export interface DoctorListResult {
  doctors: Doctor[];
  totalCount: number;
  page: number;
  totalPages: number;
}

export interface DoctorSlotAvailability {
  date: string;
  morningSlots: string[];
  afternoonSlots: string[];
  eveningSlots: string[];
}

export const doctorService = {
  /**
   * Fetch filtered list of Doctors
   */
  async getDoctors(params: DoctorFilterParams = {}): Promise<DoctorListResult> {
    const res = await apiClient.get<DoctorListResult>('/doctors', {
      params: params as any,
      mockFallback: async () => {
        let result = [...DOCTORS_DATA];

        if (params.query && params.query.trim() !== '') {
          const q = params.query.toLowerCase().trim();
          result = result.filter(
            (doc) =>
              doc.name.toLowerCase().includes(q) ||
              doc.qualification.toLowerCase().includes(q) ||
              doc.specialty.toLowerCase().includes(q) ||
              doc.bio.toLowerCase().includes(q)
          );
        }

        if (params.specialty && params.specialty !== 'All') {
          result = result.filter((doc) => doc.specialty === params.specialty);
        }

        if (params.hospital && params.hospital !== 'All') {
          result = result.filter((doc) => doc.hospital === params.hospital);
        }

        if (params.location && params.location !== 'All') {
          result = result.filter((doc) => doc.location === params.location);
        }

        if (params.gender && params.gender !== 'All') {
          result = result.filter((doc) => doc.gender === params.gender);
        }

        if (params.minExperience && params.minExperience > 0) {
          result = result.filter((doc) => doc.experienceYears >= params.minExperience!);
        }

        if (params.availability && params.availability !== 'All') {
          result = result.filter((doc) => doc.availability === params.availability);
        }

        if (params.consultationMode && params.consultationMode !== 'All') {
          result = result.filter((doc) => {
            if (doc.consultationModes && doc.consultationModes.length > 0) {
              return doc.consultationModes.includes(params.consultationMode as any);
            }
            return doc.consultationMode === (params.consultationMode as any);
          });
        }

        if (params.maxFee && params.maxFee > 0) {
          result = result.filter((doc) => doc.fee <= params.maxFee!);
        }

        const sortBy = params.sortBy || 'relevance';
        if (sortBy === 'experience-desc') {
          result.sort((a, b) => b.experienceYears - a.experienceYears);
        } else if (sortBy === 'fee-asc') {
          result.sort((a, b) => a.fee - b.fee);
        } else if (sortBy === 'fee-desc') {
          result.sort((a, b) => b.fee - a.fee);
        } else if (sortBy === 'rating-desc') {
          result.sort((a, b) => b.rating - a.rating);
        }

        const page = params.page || 1;
        const pageSize = params.pageSize || 6;
        const totalCount = result.length;
        const totalPages = Math.ceil(totalCount / pageSize) || 1;

        const startIndex = (page - 1) * pageSize;
        const paginatedDoctors = result.slice(startIndex, startIndex + pageSize);

        return {
          doctors: paginatedDoctors,
          totalCount,
          page,
          totalPages,
        };
      },
    });

    return res.data || { doctors: [], totalCount: 0, page: 1, totalPages: 1 };
  },

  /**
   * Fetch Single Doctor Profile by ID
   */
  async getDoctorById(id: string): Promise<Doctor | null> {
    const res = await apiClient.get<Doctor>(`/doctors/${id}`, {
      mockFallback: async () => {
        const found = DOCTORS_DATA.find((d) => d.id === id);
        return found || null;
      },
    });
    return res.data || null;
  },

  /**
   * Fetch Doctor Slot Availability for a given Date
   */
  async getSlotAvailability(doctorId: string, date: string): Promise<DoctorSlotAvailability> {
    const res = await apiClient.get<DoctorSlotAvailability>(`/doctors/${doctorId}/slots`, {
      params: { date },
      mockFallback: async () => ({
        date,
        morningSlots: ['09:00 AM', '09:30 AM', '10:15 AM', '11:00 AM'],
        afternoonSlots: ['02:00 PM', '02:45 PM', '03:30 PM'],
        eveningSlots: ['05:00 PM', '06:15 PM', '07:00 PM'],
      }),
    });
    return (
      res.data || {
        date,
        morningSlots: [],
        afternoonSlots: [],
        eveningSlots: [],
      }
    );
  },

  /**
   * Create Doctor (Admin API)
   */
  async createDoctor(doctorData: Partial<Doctor>): Promise<ApiResponse<Doctor>> {
    return apiClient.post<Doctor>('/doctors', doctorData, {
      mockFallback: async () => {
        const newDoc: Doctor = {
          id: `doc-${Date.now()}`,
          name: doctorData.name || 'Dr. New Specialist',
          photoUrl: doctorData.photoUrl || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
          specialty: doctorData.specialty || 'General Medicine',
          qualification: doctorData.qualification || 'MBBS, MD',
          experienceYears: doctorData.experienceYears || 5,
          hospital: doctorData.hospital || 'Wakad Main Campus',
          location: doctorData.location || 'Wakad',
          city: doctorData.city || 'Pune',
          gender: doctorData.gender || 'Male',
          fee: doctorData.fee || 1000,
          rating: 4.8,
          reviewCount: 0,
          consultationMode: 'In-person',
          consultationModes: ['In-person', 'Video'],
          availableToday: true,
          nextSlot: 'Today at 04:00 PM',
          availability: 'Available Today',
          expertise: ['General Medicine', 'Preventive Care'],
          bio: doctorData.bio || 'Consultant Specialist at MEDICARE Hospitals.',
          education: [{ degree: 'MBBS', institution: 'BJ Medical College', year: '2015' }],
          awards: ['Hospital Service Excellence'],
          languages: ['English', 'Hindi', 'Marathi'],
          opdSchedule: [{ day: 'Mon - Sat', time: '10:00 AM - 05:00 PM', location: 'Wakad Main Campus' }],
          availableSlots: [{ dateValue: '2026-08-28', dateLabel: 'Today', slots: ['10:00 AM', '04:00 PM'] }],
          reviews: [],
        };
        return newDoc;
      },
    });
  },
};
