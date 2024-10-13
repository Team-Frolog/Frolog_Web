import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { GetFeed } from '@frolog/frolog-api';

const getFeedObj = new GetFeed(baseOptions);

export const getFeed = async (page: number) => {
  try {
    const result = await getFeedObj.fetch({
      type: 'latest',
      limit: DEFAULT_LIMIT,
      page,
    });
    return result;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      contents: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
