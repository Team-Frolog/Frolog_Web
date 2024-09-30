import { authOptions } from '@/api/options';
import { LikeMemo, LikeReview } from '@frolog/frolog-api';
import { LikeFeedReq } from '../types/like';

const likeReview = new LikeReview(authOptions);
const likeMemo = new LikeMemo(authOptions);

export const changeLikeThisFeed = async (
  req: LikeFeedReq,
  isReview: boolean
) => {
  let result;

  if (isReview) {
    result = await likeReview.fetch(req);
  } else {
    result = await likeMemo.fetch(req);
  }

  return result;
};
