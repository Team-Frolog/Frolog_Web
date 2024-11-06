import { useEffect, useState } from 'react';

export const useTooltip = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(false);
    }, 3000);
  }, []);

  return { isOpenTooltip };
};
