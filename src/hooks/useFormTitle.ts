import { PAGE_CONFIG } from '@/constants/page';
import { useSteps } from '@/store/stepStore';
import { getPathName, isPathExists } from '@/utils/path';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/* ----- Form - 경로에 따른 페이지 제목 구하는 훅 ----- */
export const useFormTitle = () => {
  const { joinStep, findStep } = useSteps();
  const [title, setTitle] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === PAGE_CONFIG.JOIN.PATH) {
      setTitle(PAGE_CONFIG.JOIN.STEP![joinStep!]);
    } else if (pathname === PAGE_CONFIG.FIND_PASSWORD.PATH) {
      setTitle(PAGE_CONFIG.FIND_PASSWORD.STEP![findStep!]);
    } else if (isPathExists(pathname)) {
      setTitle(getPathName(pathname) || '');
    } else {
      setTitle('');
    }
  }, [pathname, joinStep, findStep]);

  return { title };
};
