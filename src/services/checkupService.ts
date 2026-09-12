import { healthPackageService } from './healthPackageService';
import { CheckupPackage, CheckupCategory } from '@/data/checkupData';

export const checkupService = {
  getCheckupPackages: (query?: string, category?: CheckupCategory | 'All'): Promise<CheckupPackage[]> => {
    return healthPackageService.getHealthPackages(query, category);
  },

  getCheckupPackageById: (id: string): Promise<CheckupPackage | null> => {
    return healthPackageService.getHealthPackageById(id);
  },
};
