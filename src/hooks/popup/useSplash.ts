'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSplash = (route: string) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
      const timeoutId = setTimeout(() => {
        router.replace(route);
      }, 2500);

      return () => {
        clearTimeout(timeoutId);
        setIsOpen(false);
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
      };
    }
  }, [isOpen]);

  return { isOpen, setIsOpen };
};
