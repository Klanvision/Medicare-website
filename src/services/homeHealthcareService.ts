import { HOME_SERVICES_DATA, HomeServiceItem } from '@/data/homeHealthcareData';

const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const homeHealthcareService = {
  getHomeServices: async (
    query?: string,
    category?: string
  ): Promise<HomeServiceItem[]> => {
    await delay(300);
    let result = [...HOME_SERVICES_DATA];

    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.eligibility.toLowerCase().includes(q)
      );
    }

    if (category && category !== 'All') {
      result = result.filter((s) => s.category === category);
    }

    return result;
  },

  getHomeServiceById: async (id: string): Promise<HomeServiceItem | null> => {
    await delay(200);
    const found = HOME_SERVICES_DATA.find((s) => s.id === id);
    return found || null;
  },
};
