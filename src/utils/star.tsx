import Star from '@/components/Rating/Star';
import { ratingMessage } from '@/data/ui/ratingMessage';

export const generateRatingStars = (curRating: number, size: number) => {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (curRating >= 1) {
      stars.push(<Star rating={1} size={size} key={i} />);
      curRating -= 1;
    } else if (curRating >= 0) {
      stars.push(<Star rating={curRating} size={size} key={i} />);
      curRating = 0;
    }
  }
  return stars;
};

export const getRatingMsg = (rating: number) => {
  if (rating in ratingMessage) {
    return ratingMessage[rating];
  }

  const keys = Object.keys(ratingMessage).map(Number);
  let closestKey = keys[0];

  for (let i = 1; i < keys.length; i++) {
    if (rating < keys[i] && rating >= keys[i - 1]) {
      closestKey = keys[i - 1];
      break;
    }
    if (i === keys.length - 1 && rating >= keys[i]) {
      closestKey = keys[i];
    }
  }

  return ratingMessage[closestKey];
};
