import { baseOptions } from '@/api/options';
import { RequestBook, RequestBookReq } from '@frolog/frolog-api';

export const requestBook = async (req: RequestBookReq) => {
  const result = await new RequestBook(baseOptions).fetch(req);
  return result;
};
