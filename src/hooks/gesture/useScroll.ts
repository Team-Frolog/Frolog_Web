import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { setHeaderStyle } from '@/utils/setHeaderStyle';

export const useScroll = (categoryColor: string) => {
  const [scrollY, setScrollY] = useState(0);

  const darkmode = () => {
    setHeaderStyle('#0E0E0E', '#B3B6C5', 'text-white');
  };
  const lightmode = () => {
    setHeaderStyle('#FFFFFF', '#727484', 'text-gray-800');
  };
  const category = () => {
    setHeaderStyle(categoryColor, '#727484', 'text-gray-800', true);
  };

  const updateScroll = throttle(() => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  }, 100);

  useEffect(() => {
    if (scrollY < 150) {
      darkmode();
    } else if (scrollY < 350) {
      lightmode();
    } else {
      category();
    }
  }, [scrollY]);

  useEffect(() => {
    const isMobileSafari = /iPhone.*Safari/i.test(window.navigator.userAgent);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            darkmode();
          } else if (entry.intersectionRatio >= 0.35) {
            lightmode();
          } else {
            category();
          }
        });
      },
      {
        root: null,
        threshold: [0, 0.35, 0.8, 1],
      }
    );

    const targetElement = document.getElementById('book-info');

    if (isMobileSafari) {
      window.addEventListener('scroll', updateScroll);
    } else {
      observer.observe(targetElement!);
    }

    return () => {
      if (isMobileSafari) {
        window.removeEventListener('scroll', updateScroll);
      } else {
        observer.unobserve(targetElement!);
      }
      darkmode();
    };
  }, []);
};
