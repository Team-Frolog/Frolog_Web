import { baseOptions } from '@/api/options';
import { RequestBook, RequestBookReq } from '@frolog/frolog-api';

const request = new RequestBook(baseOptions);

export const requestBook = async (req: RequestBookReq) => {
  const result = await request.fetch(req);
  return result;
};
