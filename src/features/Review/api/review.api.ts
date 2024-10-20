import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
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
const patchEditReview = new EditReview(baseOptions);
const getReview = new GetReview(baseOptions);
const searchReview = new SearchReview(baseOptions);
const deleteMyReview = new DeleteReview(baseOptions);

export const addNewReview = async (req: PostReviewReq) => {
  const result = await postReview.fetch(req);
  return result;
};

export const getReviewDetail = async (reviewId: string) => {
  try {
    const result = await getReview.fetch({ id: reviewId });
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const editReview = async (req: EditReviewReq) => {
  const result = await patchEditReview.fetch(req);
  return result;
};

export const getReviewList = async (req: SearchReviewReq) => {
  try {
    const result = await searchReview.fetch(req);
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      reviews: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const deleteReview = async (reviewId: string) => {
  const result = await deleteMyReview.fetch({ id: reviewId });
  return result;
};
