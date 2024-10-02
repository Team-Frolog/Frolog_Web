import { baseOptions } from '@/api/options';
import { getSession } from 'next-auth/react';
import { ERROR_ALERT } from '@/constants/message';
import {
  DeleteReview,
  EditReview,
  EditReviewReq,
  GetReview,
  PostReview,
  PostReviewReq,
  SearchReview,
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
    window.alert(ERROR_ALERT);
  }
};

export const editReview = async (req: EditReviewReq) => {
  const result = await patchEditReview.fetch(req);
  return result;
};

export const getReviewList = async (bookId: string) => {
  try {
    const session = await getSession();
    if (!session) return;

    const result = await searchReview.fetch({
      isbn: bookId,
      writer: session.user.id,
    });
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};

export const deleteReview = async (reviewId: string) => {
  const result = await deleteMyReview.fetch({ id: reviewId });
  return result;
};
