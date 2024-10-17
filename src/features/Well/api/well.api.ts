import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { PostWell, PostWellReq, SearchWell } from '@frolog/frolog-api';

const postWell = new PostWell(baseOptions);
const searchWell = new SearchWell(baseOptions);

export const addNewWell = async (req: PostWellReq) => {
  const response = await postWell.fetch(req);
  return response;
};

export const getWellList = async (owner: string, page: number) => {
  try {
    const response = await searchWell.fetch({
      owner,
      limit: DEFAULT_LIMIT,
      page,
    });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      wells: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};
