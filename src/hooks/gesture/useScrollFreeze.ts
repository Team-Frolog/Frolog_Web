import { useEffect } from 'react';

/** 스크롤 방지 훅 */
export const useScrollFreeze = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
};
