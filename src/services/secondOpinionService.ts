import {
  MOCK_SECOND_OPINIONS_DATA,
  SecondOpinionRequest,
  UploadedFileMeta,
} from '@/data/secondOpinionData';

export interface SecondOpinionFormInput {
  patientName: string;
  phone: string;
  email: string;
  specialty: string;
  primaryDiagnosis: string;
  files: UploadedFileMeta[];
}

const delay = (ms: number = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const secondOpinionService = {
  submitSecondOpinion: async (input: SecondOpinionFormInput): Promise<SecondOpinionRequest> => {
    await delay(500);

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `SO-2026-${randomDigits}`;

    const newRequest: SecondOpinionRequest = {
      id: `so-${Date.now()}`,
      trackingId,
      patientName: input.patientName,
      phone: input.phone,
      email: input.email,
      specialty: input.specialty,
      primaryDiagnosis: input.primaryDiagnosis,
      uploadedFiles: input.files,
      status: 'Submitted',
      submittedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    };

    MOCK_SECOND_OPINIONS_DATA.unshift(newRequest);
    return newRequest;
  },

  trackSecondOpinion: async (trackingId: string): Promise<SecondOpinionRequest | null> => {
    await delay(300);
    const cleanId = trackingId.trim().toUpperCase();
    const found = MOCK_SECOND_OPINIONS_DATA.find((r) => r.trackingId === cleanId);
    return found || null;
  },
};
