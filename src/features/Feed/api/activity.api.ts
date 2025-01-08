import { baseOptions } from '@/api/options';
import {
  FollowUser,
  FollowUserReq,
  LikeMemo,
  LikeMemoComment,
  LikeReview,
  LikeReviewComment,
} from '@frolog/frolog-api';
import { LikeFeedReq } from '../types/like';

const likeReview = new LikeReview(baseOptions);
const likeMemo = new LikeMemo(baseOptions);
const likeReviewComment = new LikeReviewComment(baseOptions);
const likeMemoComment = new LikeMemoComment(baseOptions);
const followUser = new FollowUser(baseOptions);

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
  contentId: string;
  id: string;
  value: boolean;
}

export const changeLikeThisComment = async (
  req: LikeComment,
  isReview: boolean
) => {
  const { contentId, id, value } = req;
  let result;

  if (isReview) {
    result = await likeReviewComment.fetch({ review_id: contentId, id, value });
  } else {
    result = await likeMemoComment.fetch({ memo_id: contentId, id, value });
  }

  return result;
};

export const changeFollowUser = async (req: FollowUserReq) => {
  const result = await followUser.fetch(req);
  return result;
};
