import { authOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { SearchMemo, SearchMemoReq } from '@frolog/frolog-api';

const searchMemo = new SearchMemo(authOptions);

export const getMemos = async (req: SearchMemoReq) => {
  try {
    const response = await searchMemo.fetch(req);
    return response;
  } catch (err) {
    console.log(err);
    window.alert(ERROR_ALERT);
  }
};
