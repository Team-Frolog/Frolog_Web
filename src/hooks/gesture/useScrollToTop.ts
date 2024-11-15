import { useEffect, useRef, useState } from 'react';

export const useScrollToTop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const isAtTop = containerRef.current.scrollTop <= 0;
        setIsRendering(!isAtTop);
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef]);

  return { isRendering, containerRef };
};
