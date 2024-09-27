import { GetMemoCommentRes, GetReviewCommentRes } from '@frolog/frolog-api';

export type Comments = GetReviewCommentRes | GetMemoCommentRes;
export type GetCommentsRes = SearchMemoCommentRes | SearchReviewCommentRes;
