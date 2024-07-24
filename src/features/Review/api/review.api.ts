import { authOptions } from '@/api/options';
import { getSession } from 'next-auth/react';
import { ERROR_ALERT } from '@/constants/message';
import { PostReview, PostReviewReq } from '@frolog/frolog-api';
import { ReviewForm } from '../types/review';

const postReview = new PostReview(authOptions);

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
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};
