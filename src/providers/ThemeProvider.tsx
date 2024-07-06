'use client';

import { DARK_PAGE } from '@/constants/page';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function ThemeProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')!;
      body.style.backgroundColor = DARK_PAGE.includes(pathname)
        ? '#0E0E0E'
        : '#FFFFFF';
    }
  }, [pathname]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export default ThemeProvider;
