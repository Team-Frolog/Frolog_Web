import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { GetBook, GetBookReq } from '@frolog/frolog-api';

const getBook = new GetBook(baseOptions);

export const getBookInfo = async (req: GetBookReq) => {
  try {
    const data = await getBook.fetch(req);
    return data;
  } catch (err) {
    window.alert(ERROR_ALERT);
  }
};
