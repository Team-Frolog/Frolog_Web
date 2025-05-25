import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { GetProfileFeed } from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';

const getUserProfileFeed = new GetProfileFeed(baseOptions);

export const getProfileFeed = async (id: string, page: number) => {
  try {
    const response = await getUserProfileFeed.fetch({
      id,
      limit: DEFAULT_LIMIT,
      page,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return {
      items: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
