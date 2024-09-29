import { authOptions, baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { LIMIT } from '@/features/Search/constants/query';
import { toast } from '@/modules/Toast';
import {
  PostMemoComment,
  PostMemoCommentReq,
  PostReviewComment,
  PostReviewCommentReq,
  SearchMemoComment,
  SearchReviewComment,
} from '@frolog/frolog-api';

const searchReviewComments = new SearchReviewComment(baseOptions);
const searchMemoComments = new SearchMemoComment(baseOptions);
const postReviewComment = new PostReviewComment(authOptions);
const postMemoComment = new PostMemoComment(authOptions);

interface GetComments {
  id: string;
  page?: number;
  depth?: number;
  parentId?: string;
  isReview: boolean;
}

export const getComments = async ({
  id,
  page,
  depth,
  parentId,
  isReview,
}: GetComments) => {
  try {
    let result;

    if (isReview) {
      result = await searchReviewComments.fetch({
        review_id: id,
        limit: page !== undefined ? LIMIT : undefined,
        page,
        depth,
        parent: parentId,
      });
    } else {
      result = await searchMemoComments.fetch({
        memo_id: id,
        limit: page !== undefined ? LIMIT : undefined,
        page,
        depth,
        parent: parentId,
      });
    }

    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      comments: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};

export const addNewComment = async (
  req: PostReviewCommentReq | PostMemoCommentReq,
  isReview: boolean
) => {
  let result;
  if (isReview) {
    result = await postReviewComment.fetch(req as PostReviewCommentReq);
  } else {
    result = await postMemoComment.fetch(req as PostMemoCommentReq);
  }
  return result;
};
