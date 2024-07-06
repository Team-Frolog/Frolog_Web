'use client';

import { DARK_PAGE } from '@/constants/page';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function ThemeProvider() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && windowWidth < 450) {
      const html = document.querySelector('html')!;
      html.style.backgroundColor = DARK_PAGE.includes(pathname)
        ? '#0E0E0E'
        : '#FFFFFF';
    }
  }, [pathname]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export default ThemeProvider;
