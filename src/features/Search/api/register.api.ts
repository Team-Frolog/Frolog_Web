import { authOptions } from '@/api/options';
import { RequestBook, RequestBookReq } from '@frolog/frolog-api';

const request = new RequestBook(authOptions);

export const requestBook = async (req: RequestBookReq) => {
  const result = await request.fetch(req);
  return result;
};
