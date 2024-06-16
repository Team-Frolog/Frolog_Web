import { PAGE_CONFIG } from '@/constants/pageConfig';
import { getPathName, isPathExists } from '@/utils/path';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/* ----- Form - 경로에 따른 페이지 제목 구하는 훅 ----- */
export const useFormTitle = () => {
  const [title, setTitle] = useState<string>('');

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (pathname === PAGE_CONFIG.JOIN.PATH) {
      setTitle(PAGE_CONFIG.JOIN.QUERY![step!]);
    } else if (isPathExists(pathname)) {
      setTitle(getPathName(pathname) || '');
    } else {
      setTitle('');
    }
  }, [pathname, step]);

  return { title };
};
