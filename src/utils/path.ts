import { PAGE_CONFIG } from '@/constants/page';

export const isPathExists = (path: string): boolean => {
  let result: boolean = false;

  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      result = true;
    }
  });
  return result;
};

export const getPathName = (path: string): string | undefined => {
  let result;

  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      result = PAGE_CONFIG[key].NAME;
    }
  });
  return result;
};
