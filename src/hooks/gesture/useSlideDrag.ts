import { useEffect, useRef, useState } from 'react';

export const useSlideDrag = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState<'x' | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (
        sliderRef.current &&
        motionDivRef.current &&
        sliderRef.current.offsetWidth >= motionDivRef.current.offsetWidth
      ) {
        setDrag(undefined);
      } else {
        setDrag('x');
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (motionDivRef.current) {
      resizeObserver.observe(motionDivRef.current);
    }

    return () => {
      if (motionDivRef.current) {
        resizeObserver.unobserve(motionDivRef.current);
      }
    };
  }, []);

  return { drag, sliderRef, motionDivRef };
};
