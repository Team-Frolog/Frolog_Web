import { authOptions } from '@/api/options';
import { getSession } from 'next-auth/react';
import { ERROR_ALERT } from '@/constants/message';
import {
  EditReview,
  EditReviewReq,
  GetReviewDetail,
  PostReview,
  PostReviewReq,
} from '@frolog/frolog-api';
import { ReviewForm } from '../types/review';

const postReview = new PostReview(authOptions);
const patchEditReview = new EditReview(authOptions);
const getReview = new GetReviewDetail(authOptions);

export const addNewReview = async (data: ReviewForm, isbn: string) => {
  const session = await getSession();
  if (!session) return;

  try {
    const reqData: PostReviewReq = {
      writer: session.user.id,
      isbn,
      tags_pos: data.pros,
      tags_neg: data.cons,
      title: data.oneLiner,
      content: data.review,
      rating: data.rating!,
    };
    const result = await postReview.fetch(reqData);
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};

export const getReviewDetail = async (reviewId: string) => {
  try {
    const result = await getReview.fetch({ id: reviewId });
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};

export const editReview = async (reviewId: string, data: ReviewForm) => {
  try {
    const reqData: EditReviewReq = {
      id: reviewId,
      tags_pos: data.pros,
      tags_neg: data.cons,
      title: data.oneLiner,
      content: data.review,
      rating: data.rating!,
    };
    const result = await patchEditReview.fetch(reqData);
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
