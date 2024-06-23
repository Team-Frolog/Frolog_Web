import { PAGES } from '@/constants/pageConfig';
import { FIND_FORM_KEY, JOIN_FORM_KEY, STEP_KEY } from '@/constants/storage';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useFormReset = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    if (!session) {
      if (pathname !== PAGES.JOIN) {
        localStorage.removeItem(JOIN_FORM_KEY);
        sessionStorage.setItem(STEP_KEY.JOIN, '1');
      } else if (pathname !== PAGES.FIND_PASSWORD) {
        localStorage.removeItem(FIND_FORM_KEY);
        sessionStorage.setItem(STEP_KEY.FIND_PASSWORD, '1');
      }
    }
  }, [pathname]);
};
