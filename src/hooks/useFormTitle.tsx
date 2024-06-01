import { PAGE_CONFIG } from '@/constants/pageConfig';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

/* ----- Form - 경로에 따른 페이지 제목 구하는 훅 ----- */
export const useFormTitle = () => {
  const [title, setTitle] = useState<string>('');

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // join인 경우 -> step별 타이틀 가져오기
    if (pathname === PAGE_CONFIG.JOIN.PATH) {
      setTitle(PAGE_CONFIG.JOIN.QUERY![searchParams.get('step')!]);
    }
  }, [pathname, searchParams]);

  return { title };
};
