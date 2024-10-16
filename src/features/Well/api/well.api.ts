import { baseOptions } from '@/api/options';
import { PostWell, PostWellReq } from '@frolog/frolog-api';

const postWell = new PostWell(baseOptions);

export const addNewWell = async (req: PostWellReq) => {
  const response = postWell.fetch(req);
  return response;
};
