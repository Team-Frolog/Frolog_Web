import { authOptions } from '@/api/options';
import {
  LikeMemo,
  LikeMemoComment,
  LikeReview,
  LikeReviewComment,
} from '@frolog/frolog-api';
import { LikeFeedReq } from '../types/like';

const likeReview = new LikeReview(authOptions);
const likeMemo = new LikeMemo(authOptions);
const likeReviewComment = new LikeReviewComment(authOptions);
const likeMemoComment = new LikeMemoComment(authOptions);

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

interface LikeComment {
  itemId: string;
  id: string;
  value: boolean;
}

export const changeLikeThisComment = async (
  req: LikeComment,
  isReview: boolean
) => {
  const { itemId, id, value } = req;
  let result;

  if (isReview) {
    result = await likeReviewComment.fetch({ review_id: itemId, id, value });
  } else {
    result = await likeMemoComment.fetch({ memo_id: itemId, id, value });
  }

  return result;
};
