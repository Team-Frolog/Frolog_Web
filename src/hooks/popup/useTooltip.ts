import { useEffect, useState } from 'react';

/** 툴팁 렌더링 훅 */
export const useTooltip = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(false);
    }, 3000);
  }, []);

  return { isOpenTooltip };
};
