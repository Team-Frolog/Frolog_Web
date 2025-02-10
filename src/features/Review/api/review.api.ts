import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import * as Sentry from '@sentry/nextjs';
import {
  DeleteReview,
  EditReview,
  EditReviewReq,
  GetReview,
  PostReview,
  PostReviewReq,
  SearchReview,
  SearchReviewReq,
} from '@frolog/frolog-api';

const postReview = new PostReview(baseOptions);
const getReview = new GetReview(baseOptions);
const searchReview = new SearchReview(baseOptions);

export const addNewReview = async (req: PostReviewReq) => {
  const result = await postReview.fetch(req);
  return result;
};

export const getReviewDetail = async (reviewId: string) => {
  const result = await getReview.fetch({ id: reviewId });
  return result;
};

export const editReview = async (req: EditReviewReq) => {
  const result = await new EditReview(baseOptions).fetch(req);
  return result;
};

export const getReviewList = async (req: SearchReviewReq) => {
  try {
    const result = await searchReview.fetch(req);
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);
    return {
      reviews: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const deleteReview = async (reviewId: string) => {
  const result = await new DeleteReview(baseOptions).fetch({ id: reviewId });
  return result;
};
