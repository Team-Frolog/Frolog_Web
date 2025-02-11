import { useEffect } from 'react';
import {
  LastScrollPos,
  useScrollPos,
  useUserActionActions,
} from '@/store/userActionStore';

interface Props {
  key: keyof LastScrollPos;
  condition: boolean;
}

export const useScrollPosition = ({ key, condition }: Props) => {
  const lastScrollPos = useScrollPos();
  const { setScrollPos } = useUserActionActions();

  useEffect(() => {
    if (!lastScrollPos[key] || !condition) return;

    const main = window.document.getElementById('main');

    if (main) {
      main.scrollTo({ top: lastScrollPos[key] });
      setScrollPos(null, key);
    }
  }, [condition]);

  const saveScroll = () => {
    const main = window.document.getElementById('main');
    setScrollPos(main?.scrollTop ?? null, key);
  };

  return { saveScroll };
};
