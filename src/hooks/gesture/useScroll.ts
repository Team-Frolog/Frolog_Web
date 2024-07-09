import { useEffect } from 'react';

export const useScroll = () => {
  const darkmode = () => {
    const header = document.getElementById('header')!;
    const foreground = document.getElementById('tap')!;
    const bar = document.getElementById('bar')!;
    const icon = document.getElementById('icon')!;

    header.style.backgroundColor = '#0E0E0E';
    bar.style.backgroundColor = '#FFFFFF';
    icon.style.fill = '#B3B6C5';
    foreground.classList.remove('text-gray-800');
    foreground.classList.add('text-white');
  };

  const lightmode = () => {
    const header = document.getElementById('header')!;
    const foreground = document.getElementById('tap')!;
    const bar = document.getElementById('bar')!;
    const icon = document.getElementById('icon')!;

    header.style.backgroundColor = '#FFFFFF';
    bar.style.backgroundColor = '#0E0E0E';
    icon.style.fill = '#727484';

    foreground.classList.remove('text-white');
    foreground.classList.add('text-gray-800');
  };

  useEffect(() => {
    const targetElement = document.getElementById('book-info');

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

    observer.observe(targetElement!);

    return () => {
      observer.unobserve(targetElement!);
      darkmode();
    };
  }, []);
};
