import { PAGE_CONFIG } from '@/constants/page';
import { useStep } from '@/store/stepStore';
import { getPathName, isPathExists } from '@/utils/path';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/* 경로에 따른 폼의 제목을 구하는 훅 */
export const useFormTitle = () => {
  const step = useStep();
  const [title, setTitle] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === PAGE_CONFIG.JOIN.PATH) {
      setTitle(PAGE_CONFIG.JOIN.STEP![step!]);
    } else if (pathname === PAGE_CONFIG.FIND_PASSWORD.PATH) {
      setTitle(PAGE_CONFIG.FIND_PASSWORD.STEP![step!]);
    } else if (isPathExists(pathname)) {
      setTitle(getPathName(pathname) || '');
    } else {
      setTitle('');
    }
  }, [pathname, step]);

  return { title };
};
