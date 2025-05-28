import { DEFAULT_LIMIT } from '@/constants/api';
import { GetProfileFeed } from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';

export const getProfileFeed = async (id: string, page: number) => {
  try {
    const session = await getServerSession(authOptions);

    const response = await new GetProfileFeed({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      accessToken: session?.user.accessToken,
    }).fetch({
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
