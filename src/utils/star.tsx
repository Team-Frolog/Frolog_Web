import Star from '@/components/Rating/Star';
import { ratingMessage } from '@/constants/rating';

interface Props {
  curRating: number;
  size: number;
  color?: string;
}

/** 별점용 별을 반환하는 함수
 * @param curRating - 별점 값 (0, 0.5, 1)
 * @param size - 별점 사이즈 (px)
 * @param color - 별점 색상 (optional)
 */
export const generateRatingStars = ({ curRating, size, color }: Props) => {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (curRating >= 1) {
      stars.push(<Star rating={1} size={size} key={i} color={color} />);
      curRating -= 1;
    } else if (curRating >= 0) {
      stars.push(
        <Star rating={curRating as 0 | 0.5} size={size} key={i} color={color} />
      );
      curRating = 0;
    }
  }
  return stars;
};

/** 별점별 메시지를 반환하는 함수 */
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
