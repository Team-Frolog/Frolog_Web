import { useEffect } from 'react';

/* ----- 모달 바깥 클릭 시 모달이 닫히도록 하는 hook -----

- ref: 모달에 해당하는 ref 객체
- handler: 바깥 클릭 시 실행할 함수

  ** 예시 **
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setOpen(false));
*/

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};
