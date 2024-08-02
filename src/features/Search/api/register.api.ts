import { authOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { RequestBook, RequestBookReq } from '@frolog/frolog-api';

const request = new RequestBook(authOptions);

export const requestBook = async (req: RequestBookReq) => {
  try {
    return await request.fetch(req);
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
