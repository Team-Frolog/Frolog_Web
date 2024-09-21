'use client';

import { PAGE_THEME } from '@/constants/theme';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ThemeProvider() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const getTheme = () => {
    const pages = Object.keys(PAGE_THEME);
    let theme = 'dark';

    pages.forEach((page) => {
      if (pathname.includes(page)) {
        theme = PAGE_THEME[page];
      }
    });

    return theme;
  };

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
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')!;
      body.classList.remove('dark');
      body.classList.remove('light');
      body.classList.remove('half-gradient');
      body.classList.add(getTheme());
    }
  }, [pathname, windowWidth]);

  return <></>;
}

export default ThemeProvider;
