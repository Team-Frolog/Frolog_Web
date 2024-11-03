import {
  GetBookDetail,
  SearchReview,
  SearchReviewReq,
} from '@frolog/frolog-api';
import { ERROR_ALERT } from '@/constants/message';
import { baseOptions } from '@/api/options';
import { toast } from '@/modules/Toast';

const getBookDetailObj = new GetBookDetail(baseOptions);
const searchMyReview = new SearchReview(baseOptions);

export const getBookDetail = async (isbn: string) => {
  const result = await getBookDetailObj.fetch({ isbn });
  return result;
};

export const getReviewCount = async (req: SearchReviewReq) => {
  try {
    const result = await searchMyReview.fetch(req);
    return result.count;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return 0;
  }
};
