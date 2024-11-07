'use client';

import { PAGE_THEME } from '@/constants/theme';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function ThemeProvider() {
  const pathname = usePathname();

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
      const body = document.querySelector('body')!;
      body.classList.remove('dark');
      body.classList.remove('light');
      body.classList.remove('gray');
      body.classList.remove('half-gradient');
      body.classList.add(getTheme());
    }
  }, [pathname]);

  return <></>;
}

export default ThemeProvider;
