import { useEffect } from 'react';
import { useScrollPos, useUserActionActions } from '@/store/userActionStore';

export const useScrollPosition = (condition: boolean) => {
  const lastScrollPos = useScrollPos();
  const { setScrollPos } = useUserActionActions();

  useEffect(() => {
    if (!lastScrollPos || !condition) return;

    const main = window.document.getElementById('main');

    if (main) {
      main.scrollTo({ top: lastScrollPos });
      setScrollPos(null);
    }
  }, [condition]);

  const saveScroll = () => {
    const main = window.document.getElementById('main');
    setScrollPos(main?.scrollTop ?? null);
  };

  return { saveScroll };
};
