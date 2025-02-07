import { useEffect, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import { resetHeaderStyles, setHeaderStyle } from '@/utils/setHeaderStyle';

interface Props {
  /** 카테고리 색상 */
  categoryColor?: string;
  /** 텍스트 색상 */
  foreground?: string;
  /** 비활성화 색상 */
  unSelected?: string;
}

/** 스크롤에 따른 헤더 색상 변화 기능 훅 */
export const useScroll = ({
  categoryColor,
  foreground = 'text-gray-800',
  unSelected = '#B3B6C5',
}: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  /** 색상 모드 설정 함수 */
  const setMode = useCallback(
    (mode: 'dark' | 'light' | 'category') => {
      switch (mode) {
        case 'dark':
          setHeaderStyle({
            backgroundColor: '#0E0E0E',
            iconColor: '#B3B6C5',
            foregroundColor: '#FFFFFF',
            unSelected: '#B3B6C5',
          });
          break;
        case 'light':
          setHeaderStyle({
            backgroundColor: '#FFFFFF',
            iconColor: '#727484',
            foregroundColor: '#313239',
            unSelected: '#B3B6C5',
          });
          break;
        case 'category':
          if (categoryColor) {
            setHeaderStyle({
              backgroundColor: categoryColor,
              iconColor: foreground,
              foregroundColor: foreground,
              unSelected,
            });
          }
          break;
        default:
          break;
      }
    },
    [categoryColor, foreground, unSelected]
  );

  /** throttling이 적용된 스크롤 위치 업데이트 함수 */
  const updateScroll = useCallback(
    throttle(() => {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        setScrollY(mainElement.scrollTop);
      }
    }, 100),
    []
  );

  /** 사파리 - 스크롤 변화에 따른 모드 업데이트 */
  useEffect(() => {
    const isSafari = /Safari/i.test(window.navigator.userAgent);

    if (isSafari) {
      if (scrollY < 150) {
        setMode('dark');
      } else if (scrollY < 350) {
        setMode('light');
      } else {
        setMode('category');
      }
    }
  }, [scrollY, setMode]);

  /** 색상 변화 기점이 되는 타겟 요소 설정 */
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

  /** 타겟 요소에 대한 observer 설정 */
  useEffect(() => {
    const mainElement = document.getElementById('main');
    if (!targetElement || !mainElement) return;

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

    // 사파리의 경우 observer가 아닌 스크롤 이벤트 별도 등록 (observer 지원 X)
    const isSafari = /Safari/i.test(window.navigator.userAgent);

    if (isSafari) {
      mainElement.addEventListener('scroll', () => updateScroll());
    } else {
      observer.observe(targetElement);
    }

    return () => {
      if (isSafari) {
        window.removeEventListener('scroll', updateScroll);
      } else {
        observer.unobserve(targetElement);
      }
      resetHeaderStyles();
    };
  }, [targetElement, setMode]);

  /** 타겟 요소가 없는 경우 기본 모드(다크)로 변경 */
  useEffect(() => {
    if (!targetElement) {
      setMode('dark');
    }
  }, [targetElement, setMode]);
};
