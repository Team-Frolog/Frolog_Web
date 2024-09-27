import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { LIMIT } from '@/features/Search/constants/query';
import { toast } from '@/modules/Toast';
import { SearchMemoComment, SearchReviewComment } from '@frolog/frolog-api';

const searchReviewComments = new SearchReviewComment(baseOptions);
const searchMemoComments = new SearchMemoComment(baseOptions);

export const getReviewComments = async (reviewId: string, page: number) => {
  try {
    const result = await searchReviewComments.fetch({
      review_id: reviewId,
      limit: LIMIT,
      page,
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

export const getMemoComments = async (memoId: string, page: number) => {
  try {
    const result = await searchMemoComments.fetch({
      memo_id: memoId,
      limit: LIMIT,
      page,
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
