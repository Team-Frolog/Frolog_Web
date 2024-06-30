import { PAGE_CONFIG } from '@/constants/page';

export const isPathExists = (path: string): boolean => {
  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      return true;
    }
  });
  return false;
};

export const getPathName = (path: string): string | undefined => {
  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      return PAGE_CONFIG[key].NAME;
    }
  });
  return undefined;
};
