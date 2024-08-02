import { GetBookDetail } from '@frolog/frolog-api';
import { ERROR_ALERT } from '@/constants/message';
import { baseOptions } from '@/api/options';

const getBookDetailObj = new GetBookDetail(baseOptions);

export const getBookDetail = async (isbn: string) => {
  try {
    const result = await getBookDetailObj.fetch({ isbn });
    return result;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
