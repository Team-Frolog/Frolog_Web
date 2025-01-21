import { useEffect } from 'react';
import useUserActionStore from '@/store/userActionStore';

export const useScrollPosition = (condition: boolean) => {
  const { lastScrollPos, setScrollPos } = useUserActionStore((state) => ({
    lastScrollPos: state.lastScrollPos,
    setScrollPos: state.actions.setScrollPos,
  }));

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
