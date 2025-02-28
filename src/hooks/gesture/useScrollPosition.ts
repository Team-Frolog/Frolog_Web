import { useEffect } from 'react';
import {
  LastScrollPos,
  useScrollPos,
  useUserActionActions,
} from '@/store/userActionStore';

interface Props {
  /** 스크롤 위치를 저장할 곳의 키값 */
  key: keyof LastScrollPos;
  /** 스크롤 위치 저장 조건 */
  condition: boolean;
}

/** 스크롤 유지를 위해 스크롤 위치를 저장하고, 이동시키는 훅 */
export const useScrollPosition = ({ key, condition }: Props) => {
  const lastScrollPos = useScrollPos();
  const { setScrollPos } = useUserActionActions();

  /** 스크롤 위치 이동 */
  useEffect(() => {
    if (!lastScrollPos[key] || !condition) return;

    const main = window.document.getElementById('main');

    if (main) {
      main.scrollTo({ top: lastScrollPos[key]! });
      setScrollPos(null, key);
    }
  }, [condition]);

  /** 스크롤 저장 함수 */
  const saveScroll = () => {
    const main = window.document.getElementById('main');
    setScrollPos(main?.scrollTop ?? null, key);
  };

  return { saveScroll };
};
