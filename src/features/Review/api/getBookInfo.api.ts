import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { GetBook, GetBookReq } from '@frolog/frolog-api';

const getBook = new GetBook(baseOptions);

export const getBookInfo = async (req: GetBookReq) => {
  try {
    const data = await getBook.fetch(req);
    return data;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
