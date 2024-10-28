import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import { resetHeaderStyles, setHeaderStyle } from '@/utils/setHeaderStyle';

interface Props {
  categoryColor?: string;
  foreground?: string;
  unSelected?: string;
}

export const useScroll = ({
  categoryColor,
  foreground = 'text-gray-800',
  unSelected = '#B3B6C5',
}: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  const setMode = useCallback(
    (mode: 'dark' | 'light' | 'category') => {
      switch (mode) {
        case 'dark':
          setHeaderStyle('#0E0E0E', '#B3B6C5', '#FFFFFF', '#B3B6C5');
          break;
        case 'light':
          setHeaderStyle('#FFFFFF', '#727484', '#313239', '#B3B6C5');
          break;
        case 'category':
          if (categoryColor) {
            setHeaderStyle(categoryColor, foreground, foreground, unSelected);
          }
          break;
        default:
          break;
      }
    },
    [categoryColor, foreground, unSelected]
  );

  const updateScroll = useCallback(
    throttle(() => {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        setScrollY(mainElement.scrollTop);
      }
    }, 100),
    []
  );

  useEffect(() => {
    const mainElement = document.getElementById('main');
    if (!mainElement) return;

    const handleScroll = () => updateScroll();
    mainElement.addEventListener('scroll', handleScroll);

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      resetHeaderStyles();
    };
  }, [updateScroll]);

  useEffect(() => {
    if (scrollY < 150) {
      setMode('dark');
    } else if (scrollY < 350) {
      setMode('light');
    } else {
      setMode('category');
    }
  }, [scrollY, setMode]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const element = document.getElementById('book-info');
      if (element) {
        setTargetElement(element);
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!targetElement) return;

    const isMobileSafari = /iPhone.*Safari/i.test(window.navigator.userAgent);
    const mainElement = document.getElementById('main');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mode =
              entry.intersectionRatio >= 0.8
                ? 'dark'
                : entry.intersectionRatio >= 0.35
                  ? 'light'
                  : 'category';
            setMode(mode);
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
    observer.observe(targetElement);

    return () => {
      if (isMobileSafari) {
        window.removeEventListener('scroll', updateScroll);
      }
      observer.unobserve(targetElement);
      resetHeaderStyles();
    };
  }, [targetElement, setMode]);

  useEffect(() => {
    if (!targetElement) {
      setMode('dark');
    }
  }, [targetElement, setMode]);
};
