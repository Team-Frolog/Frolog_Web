import { useEffect, useState } from 'react';

export const useTooltip = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(true);
  const [isOpenDone, setIsOpenDone] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isDownloaded) {
      setIsOpenTooltip(false);

      const doneTimeout = setTimeout(() => {
        setIsOpenDone(true);
      }, 500);

      const closeDoneTimeout = setTimeout(() => {
        setIsOpenDone(false);
      }, 3000);

      return () => {
        clearTimeout(doneTimeout);
        clearTimeout(closeDoneTimeout);
      };
    }
  }, [isDownloaded]);

  return { isOpenTooltip, isOpenDone, isDownloaded, setIsDownloaded };
};
