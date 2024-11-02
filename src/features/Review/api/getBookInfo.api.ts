import { baseOptions } from '@/api/options';
import { GetBook, GetBookReq } from '@frolog/frolog-api';

const getBook = new GetBook(baseOptions);

export const getBookInfo = async (req: GetBookReq) => {
  const data = await getBook.fetch(req);
  return data;
};
