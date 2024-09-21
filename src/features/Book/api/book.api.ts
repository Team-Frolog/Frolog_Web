import { GetBookDetail } from '@frolog/frolog-api';
import { ERROR_ALERT } from '@/constants/message';
import { baseOptions } from '@/api/options';
import { toast } from '@/modules/Toast';

const getBookDetailObj = new GetBookDetail(baseOptions);

export const getBookDetail = async (isbn: string) => {
  try {
    const result = await getBookDetailObj.fetch({ isbn });
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
