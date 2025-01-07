import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface Props {
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

/** 무한스크롤을 위한 observer 훅 */
export const useObserver = ({ hasNextPage, fetchNextPage }: Props) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target, hasNextPage]);

  return { setTarget };
};
