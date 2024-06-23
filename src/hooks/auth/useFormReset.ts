import { PAGES } from '@/constants/page';
import {
  FIND_FORM_KEY,
  JOIN_FORM_KEY,
  TEST_ANSWER_KEY,
} from '@/constants/storage';
import { useStepActions } from '@/store/stepStore';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useFormReset = () => {
  const { data: session } = useSession();
  const { resetFindStep, resetJoinStep, resetTestStep } = useStepActions();
  const pathname = usePathname();

  useEffect(() => {
    if (!session) {
      if (pathname !== PAGES.JOIN) {
        localStorage.removeItem(JOIN_FORM_KEY);
        resetJoinStep();
      }
      if (pathname !== PAGES.FIND_PASSWORD) {
        localStorage.removeItem(FIND_FORM_KEY);
        resetFindStep();
      }
      if (pathname !== PAGES.TEST) {
        localStorage.removeItem(TEST_ANSWER_KEY);
        resetTestStep();
      }
    }
  }, [pathname]);
};
