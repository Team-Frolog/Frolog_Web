import { baseOptions } from '@/api/options';
import { DEFAULT_LIMIT } from '@/constants/api';
import { GetProfileFeed, DeleteUserBookContent } from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';

const getUserProfileFeed = new GetProfileFeed(baseOptions);

export const getProfileFeed = async (id: string, page: number) => {
  try {
    const response = await getUserProfileFeed.fetch({
      id,
      limit: DEFAULT_LIMIT,
      page,
    });

    return response;
  } catch (error) {
    Sentry.captureException(error);
    return {
      items: [],
      count: 0,
      page: 0,
      limit: 6,
    };
  }
};

export const deleteProfileFeedItem = async (id: string, isbn: string) => {
  try {
    const response = await new DeleteUserBookContent(baseOptions).fetch({
      id,
      isbn,
    });

    return response;
  } catch (error) {
    Sentry.captureException(error);
    return null;
  }
};
