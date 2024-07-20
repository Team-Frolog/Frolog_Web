import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const darkmode = () => {
    const header = document.getElementById('header')!;
    const foreground = document.getElementById('tap')!;
    const bar = document.getElementById('bar')!;
    const icon = document.getElementById('icon')!;

    if (header) {
      header.style.backgroundColor = '#0E0E0E';
    }
    if (bar) {
      bar.style.backgroundColor = '#FFFFFF';
    }
    if (icon) {
      icon.style.fill = '#B3B6C5';
    }
    if (foreground) {
      foreground.classList.remove('text-gray-800');
      foreground.classList.add('text-white');
    }
  };

  const lightmode = () => {
    const header = document.getElementById('header')!;
    const foreground = document.getElementById('tap')!;
    const bar = document.getElementById('bar')!;
    const icon = document.getElementById('icon')!;

    if (header) {
      header.style.backgroundColor = '#FFFFFF';
    }
    if (bar) {
      bar.style.backgroundColor = '#0E0E0E';
    }
    if (icon) {
      icon.style.fill = '#727484';
    }
    if (foreground) {
      foreground.classList.remove('text-white');
      foreground.classList.add('text-gray-800');
    }
  };

  const updateScroll = throttle(() => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  }, 100);

  useEffect(() => {
    if (scrollY < 150) {
      darkmode();
    } else {
      lightmode();
    }
  }, [scrollY]);

  useEffect(() => {
    const isMobileSafari = /iPhone.*Safari/i.test(window.navigator.userAgent);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.9) {
            darkmode();
          } else {
            lightmode();
          }
        });
      },
      {
        root: null,
        threshold: 0.9,
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
