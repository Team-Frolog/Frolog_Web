import { PAGE_CONFIG } from '@/constants/page';

/** 폼에 속하는 경로인지 확인하는 함수 */
export const isPathExists = (path: string): boolean => {
  let result: boolean = false;

  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      result = true;
    }
  });
  return result;
};

/** 경로에 해당하는 이름을 구하는 함수 */
export const getPathName = (path: string): string | undefined => {
  let result;

  Object.keys(PAGE_CONFIG).forEach((key) => {
    if (PAGE_CONFIG[key].PATH === path) {
      result = PAGE_CONFIG[key].NAME;
    }
  });
  return result;
};
