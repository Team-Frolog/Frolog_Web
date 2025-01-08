import { useEffect, useRef, useState } from 'react';

/** draggable slide 훅 */
export const useSlideDrag = (isBetween: boolean) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState<'x' | undefined>(undefined);
  const [widthClass, setWidthClass] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (
        sliderRef.current &&
        motionDivRef.current &&
        sliderRef.current.offsetWidth >= motionDivRef.current.offsetWidth
      ) {
        setDrag(undefined);
        if (isBetween) {
          setWidthClass('w-full justify-between');
        } else {
          setWidthClass('w-max');
        }
      } else {
        setDrag('x');
        setWidthClass('w-max');
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

  return { drag, sliderRef, motionDivRef, widthClass };
};
