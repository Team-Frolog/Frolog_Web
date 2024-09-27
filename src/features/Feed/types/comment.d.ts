import {
  GetMemoCommentRes,
  GetReviewCommentRes,
  PostMemoCommentRes,
  PostReviewCommentRes,
} from '@frolog/frolog-api';

export type Comments = GetReviewCommentRes | GetMemoCommentRes;
export type GetCommentsRes = SearchMemoCommentRes | SearchReviewCommentRes;
export type PostCommentMutation =
  | UseMutateFunction<PostMemoCommentRes, Error, PostMemoCommentReq, unknown>
  | UseMutateFunction<
      PostReviewCommentRes,
      Error,
      PostReviewCommentReq,
      unknown
    >;
