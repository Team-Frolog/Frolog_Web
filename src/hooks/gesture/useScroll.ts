import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import { resetHeaderStyles, setHeaderStyle } from '@/utils/setHeaderStyle';

interface Props {
  categoryColor: string | undefined;
  foreground?: string;
  unSelected?: string;
}

export const useScroll = ({
  categoryColor,
  foreground = 'text-gray-800',
  unSelected = '#B3B6C5',
}: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [isTargetElementAvailable, setIsTargetElementAvailable] =
    useState(false);

  const darkmode = useCallback(() => {
    setHeaderStyle('#0E0E0E', '#B3B6C5', '#FFFFFF', '#B3B6C5');
  }, []);

  const lightmode = useCallback(() => {
    setHeaderStyle('#FFFFFF', '#727484', '#313239', '#B3B6C5');
  }, []);

  const category = useCallback(() => {
    if (categoryColor) {
      setHeaderStyle(categoryColor, foreground, foreground, unSelected);
    }
  }, [categoryColor, foreground, unSelected]);

  const updateScroll = useCallback(
    throttle(() => {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        setScrollY(mainElement.scrollTop || 0);
      }
    }, 100),
    []
  );

  useEffect(() => {
    const mainElement = document.getElementById('main');
    if (!mainElement) return;

    const handleScroll = () => {
      updateScroll();
    };

    mainElement.addEventListener('scroll', handleScroll);

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      resetHeaderStyles();
    };
  }, [updateScroll]);

  useEffect(() => {
    if (scrollY < 150) {
      darkmode();
    } else if (scrollY < 350) {
      lightmode();
    } else if (categoryColor) {
      category();
    }
  }, [scrollY, categoryColor, darkmode, lightmode, category]);

  useEffect(() => {
    const isMobileSafari = /iPhone.*Safari/i.test(window.navigator.userAgent);
    const mainElement = document.getElementById('main');
    const targetElement = document.getElementById('book-info');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTargetElementAvailable(true);
            if (entry.intersectionRatio >= 0.8) {
              darkmode();
            } else if (entry.intersectionRatio >= 0.35) {
              lightmode();
            } else if (categoryColor) {
              category();
            }
          }
        });
      },
      {
        root: mainElement,
        threshold: [0, 0.35, 0.8, 1],
      }
    );

    if (isMobileSafari) {
      window.addEventListener('scroll', updateScroll);
    }
    if (targetElement) {
      observer.observe(targetElement);
      setIsTargetElementAvailable(true);
    } else {
      darkmode();
    }

    return () => {
      if (isMobileSafari) {
        window.removeEventListener('scroll', updateScroll);
      }
      if (targetElement) {
        observer.unobserve(targetElement);
      }
      resetHeaderStyles();
    };
  }, [updateScroll, categoryColor, darkmode, lightmode, category]);

  useEffect(() => {
    if (!isTargetElementAvailable) {
      darkmode();
    }
  }, [isTargetElementAvailable, darkmode]);
};
