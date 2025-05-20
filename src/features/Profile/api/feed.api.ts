import { baseOptions } from '@/api/options';
import { GetProfileFeed } from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';

const getUserProfileFeed = new GetProfileFeed(baseOptions);

export const getProfileFeed = async (id: string) => {
  try {
    const response = await getUserProfileFeed.fetch({ id });
    return response;
  } catch (error) {
    console.log(error);
    Sentry.captureException(error);
    return {
      feed: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
