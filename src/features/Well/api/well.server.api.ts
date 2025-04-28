import { DEFAULT_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { authOptions } from '@/utils/auth/nextAuth';
import { SearchUserWell, SearchWell } from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';
import { getServerSession } from 'next-auth';

export const getWellList = async (page: number) => {
  try {
    const session = await getServerSession(authOptions);

    const response = await new SearchWell({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      accessToken: session?.user.accessToken,
    }).fetch({
      owner: session?.user.id,
      limit: DEFAULT_LIMIT,
      page,
    });

    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);

    return {
      wells: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const getExploreWellList = async (page: number, refTime: string) => {
  try {
    const session = await getServerSession(authOptions);

    const response = await new SearchUserWell({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      accessToken: session?.user.accessToken,
    }).fetch({
      limit: DEFAULT_LIMIT,
      page,
      ref_time: refTime,
    });

    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    Sentry.captureException(err);

    return {
      userwells: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};
