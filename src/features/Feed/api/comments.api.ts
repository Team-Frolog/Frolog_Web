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

interface GetReviewComments {
  reviewId: string;
  page?: number;
  depth?: number;
  parentId?: string;
}

interface GetMemoComments {
  memoId: string;
  page?: number;
  depth?: number;
  parentId?: string;
}

export const getReviewComments = async ({
  reviewId,
  page,
  depth,
  parentId,
}: GetReviewComments) => {
  try {
    const result = await searchReviewComments.fetch({
      review_id: reviewId,
      limit: page ? LIMIT : undefined,
      page,
      depth,
      parent: parentId,
    });
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

export const getMemoComments = async ({
  memoId,
  page,
  depth,
  parentId,
}: GetMemoComments) => {
  try {
    const result = await searchMemoComments.fetch({
      memo_id: memoId,
      limit: page ? LIMIT : undefined,
      page,
      depth,
      parent: parentId,
    });
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

export const addReviewComment = async (req: PostReviewCommentReq) => {
  const result = await postReviewComment.fetch(req);
  return result;
};

export const addMemoComment = async (req: PostMemoCommentReq) => {
  const result = await postMemoComment.fetch(req);
  return result;
};
