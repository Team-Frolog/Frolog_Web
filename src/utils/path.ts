import { PAGE_CONFIG } from '@/constants/pageConfig';

export const isPathExists = (path: string): boolean => {
  for (const key in PAGE_CONFIG) {
    if (PAGE_CONFIG[key].PATH === path) {
      return true;
    }
  }
  return false;
};

export const getPathName = (path: string): string | undefined => {
  for (const key in PAGE_CONFIG) {
    if (PAGE_CONFIG[key].PATH === path) {
      return PAGE_CONFIG[key].NAME;
    }
  }
  return undefined;
};
