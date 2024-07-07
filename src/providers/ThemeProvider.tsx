'use client';

import { PAGE_THEME } from '@/constants/theme';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ThemeProvider() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      windowWidth !== undefined &&
      windowWidth < 450
    ) {
      const html = document.querySelector('html')!;
      html.style.background = PAGE_THEME[pathname] || '#0E0E0E';
    }
  }, [pathname, windowWidth, window]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export default ThemeProvider;
