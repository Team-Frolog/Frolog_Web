import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { LIMIT } from '@/features/Search/constants/query';
import { toast } from '@/modules/Toast';
import { GetFeed } from '@frolog/frolog-api';

const getFeedObj = new GetFeed(baseOptions);

export const getFeed = async (page: number) => {
  try {
    const result = await getFeedObj.fetch({
      type: 'latest',
      limit: LIMIT,
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
