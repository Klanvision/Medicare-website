import {
  WHY_INDIA_ADVANTAGES,
  CARE_COORDINATORS_DATA,
  INTERNATIONAL_STEPS_DATA,
  ACCOMMODATION_PARTNERS_DATA,
  GLOBAL_INSURERS_LIST,
  WhyIndiaAdvantage,
  CareCoordinator,
  InternationalTreatmentStep,
  AccommodationPartner,
} from '@/data/internationalData';

const delay = (ms: number = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export const internationalService = {
  getWhyIndiaAdvantages: async (): Promise<WhyIndiaAdvantage[]> => {
    await delay(200);
    return WHY_INDIA_ADVANTAGES;
  },

  getCareCoordinators: async (): Promise<CareCoordinator[]> => {
    await delay(200);
    return CARE_COORDINATORS_DATA;
  },

  getInternationalSteps: async (): Promise<InternationalTreatmentStep[]> => {
    await delay(200);
    return INTERNATIONAL_STEPS_DATA;
  },

  getAccommodationPartners: async (): Promise<AccommodationPartner[]> => {
    await delay(200);
    return ACCOMMODATION_PARTNERS_DATA;
  },

  getGlobalInsurers: async (): Promise<string[]> => {
    await delay(200);
    return GLOBAL_INSURERS_LIST;
  },
};
