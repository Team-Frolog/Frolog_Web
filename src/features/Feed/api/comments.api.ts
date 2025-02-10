import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import * as Sentry from '@sentry/nextjs';
import { toast } from '@/modules/Toast';
import {
  DeleteMemoComment,
  DeleteReviewComment,
  PostMemoComment,
  PostMemoCommentReq,
  PostReviewComment,
  PostReviewCommentReq,
  SearchMemoComment,
  SearchReviewComment,
} from '@frolog/frolog-api';

const searchReviewComments = new SearchReviewComment(baseOptions);
const searchMemoComments = new SearchMemoComment(baseOptions);
const postReviewComment = new PostReviewComment(baseOptions);
const postMemoComment = new PostMemoComment(baseOptions);

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
        limit: page ? DEFAULT_LIMIT : undefined,
        page,
        depth,
        parent: parentId,
      });
    } else {
      result = await searchMemoComments.fetch({
        memo_id: id,
        limit: page ? DEFAULT_LIMIT : undefined,
        page,
        depth,
        parent: parentId,
      });
    }

    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);
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

export const deleteComment = async (
  req: { id: string; commentId: string },
  isReview: boolean
) => {
  let result;
  if (isReview) {
    result = await new DeleteReviewComment(baseOptions).fetch({
      review_id: req.id,
      id: req.commentId,
    });
  } else {
    result = await new DeleteMemoComment(baseOptions).fetch({
      memo_id: req.id,
      id: req.commentId,
    });
  }
  return result;
};
