import React, { useEffect, useState } from 'react';
import { useFeed } from '@/features/Feed';
import Spinner from '../Spinner/Spinner';

interface Props {
  element: React.RefObject<HTMLDivElement>;
}

function PullToRefresh({ element }: Props) {
  const { refetch: refetchFeed } = useFeed();

  const [refreshing, setRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    function handleTouchStart(event: TouchEvent) {
      if (element.current && element.current.scrollTop <= 0) {
        setStartY(event.touches[0].clientY);
      }
    }

    function handleTouchMove(event: TouchEvent) {
      if (element.current && element.current.scrollTop <= 0) {
        const moveY = event.touches[0].clientY;
        const pullDistance = moveY - startY;

        if (pullDistance > 0) {
          if (pullDistance > 80 && element.current) {
            element.current.style.transform = 'translate(0, 60px)';
            element.current.style.transition = '0.2s';
            setRefreshing(true);
          }
        }
      }
    }

    function handleTouchEnd() {
      if (refreshing) {
        refetchFeed();
        setTimeout(() => {
          setRefreshing(false);
          if (element.current) {
            element.current.style.transform = 'translate(0, 0)';
          }
        }, 1000);
      }
    }

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [refreshing, startY, refetchFeed, element]);

  return <div className='z-50 w-full'>{refreshing ? <Spinner /> : ''}</div>;
}

export default PullToRefresh;
