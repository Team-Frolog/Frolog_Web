import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

/** 스크롤 위치에 따라 렌더링 유무를 조절하는 훅 (throttling 적용) */
export const useScrollToTop = () => {
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    const container = document.getElementById('main');
    if (!container) return;

    const handleScroll = throttle(() => {
      const isAtTop = container.scrollTop <= 0;
      setIsRendering(!isAtTop);
    }, 200);

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return { isRendering };
};
