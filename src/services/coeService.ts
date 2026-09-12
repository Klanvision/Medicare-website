import { COE_DATA, COEItem } from '@/data/coeData';

const delay = (ms: number = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export const coeService = {
  getCOEList: async (): Promise<COEItem[]> => {
    await delay(200);
    return [...COE_DATA];
  },

  getCOEBySlug: async (slug: string): Promise<COEItem | null> => {
    await delay(200);
    const found = COE_DATA.find((c) => c.slug === slug);
    return found || null;
  },
};
