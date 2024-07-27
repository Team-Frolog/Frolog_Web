/* eslint-disable no-restricted-syntax */
import { CATEGORY } from '@/constants/category';

export const getCategoryNameByLabel = (label: string): string | undefined => {
  for (const key in CATEGORY) {
    if (CATEGORY[key].label === label) {
      return CATEGORY[key].name;
    }
  }
  return undefined;
};
