import React, { useCallback } from 'react';
import Star from './Star';

interface Props {
  rating: number;
  textClass: string;
}

function Rating({ rating, textClass = 'text-body_xl_bold' }: Props) {
  const generateRatingStars = useCallback((rate: number) => {
    const stars = [];
    let currentRating = rate;
    for (let i = 0; i < 5; i += 1) {
      if (currentRating >= 1) {
        stars.push(<Star rating={1} key={i} />);
        currentRating -= 1;
      } else if (currentRating >= 0) {
        stars.push(<Star rating={currentRating} key={i} />);
        currentRating = 0;
      }
    }
    return stars;
  }, []);

  return (
    <div className='flex w-full items-center gap-[8px]'>
      <span className={`text-gray-800 ${textClass}`}>{rating.toFixed(1)}</span>
      <div className='flex gap-[4px]'>{generateRatingStars(rating)}</div>
    </div>
  );
}

export default Rating;
