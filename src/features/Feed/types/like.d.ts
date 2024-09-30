import {
  LikeMemoCommentReq,
  LikeMemoReq,
  LikeReviewCommentReq,
  LikeReviewReq,
} from '@frolog/frolog-api';

export type LikeFeedReq = LikeReviewReq | LikeMemoReq;
export type LikeCommentReq = LikeReviewCommentReq | LikeMemoCommentReq;
