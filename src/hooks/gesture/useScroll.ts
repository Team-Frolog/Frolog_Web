import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { setHeaderStyle } from '@/utils/setHeaderStyle';

interface Props {
  categoryColor: string | undefined;
  foreground?: string;
}

export const useScroll = ({
  categoryColor,
  foreground = 'text-gray-800',
}: Props) => {
  const [scrollY, setScrollY] = useState(0);

  const darkmode = () => {
    setHeaderStyle('#0E0E0E', '#B3B6C5', '#FFFFFF', '#B3B6C5');
  };
  const lightmode = () => {
    setHeaderStyle('#FFFFFF', '#727484', '#313239', '#B3B6C5');
  };
  const category = () => {
    setHeaderStyle(categoryColor!, foreground, foreground, '#FF7171');
  };

  const updateScroll = throttle(() => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  }, 100);

  useEffect(() => {
    if (scrollY < 150) {
      darkmode();
    } else if (scrollY < 350) {
      lightmode();
    } else if (categoryColor) {
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
          } else if (categoryColor) {
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
