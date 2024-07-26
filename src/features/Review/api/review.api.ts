import { authOptions } from '@/api/options';
import { getSession } from 'next-auth/react';
import { ERROR_ALERT } from '@/constants/message';
import {
  DeleteReview,
  EditReview,
  EditReviewReq,
  GetReviewDetail,
  PostReview,
  PostReviewReq,
  SearchReview,
} from '@frolog/frolog-api';
import { ReviewForm } from '../types/review';

const postReview = new PostReview(authOptions);
const patchEditReview = new EditReview(authOptions);
const getReview = new GetReviewDetail(authOptions);
const searchReview = new SearchReview(authOptions);
const deleteMyReview = new DeleteReview(authOptions);

export const addNewReview = async (data: ReviewForm, isbn: string) => {
  try {
    const session = await getSession();
    if (!session) return;

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
  try {
    const result = await deleteMyReview.fetch({ id: reviewId });
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
