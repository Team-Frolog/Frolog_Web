import { DEFAULT_LIMIT, WELLITEM_LIMIT } from '@/constants/api';
import { authOptions } from '@/utils/auth/nextAuth';
import {
  GetWell,
  SearchUserWell,
  SearchWell,
  SearchWellItem,
} from '@frolog/frolog-api';
import * as Sentry from '@sentry/nextjs';
import { getServerSession } from 'next-auth';

export const getWellList = async (page: number, isRootUser?: boolean) => {
  if (!isRootUser) return;

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
    Sentry.captureException(err);

    return {
      userwells: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const getWellDetail = async (wellId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new GetWell({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: wellId });

  return response;
};

export const getWellItemList = async (wellId: string) => {
  try {
    const session = await getServerSession(authOptions);

    const response = await new SearchWellItem({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      accessToken: session?.user.accessToken,
    }).fetch({
      page: 0,
      well_id: wellId,
      limit: WELLITEM_LIMIT,
      sort: 'newest',
    });

    return response;
  } catch (err) {
    Sentry.captureException(err);

    return {
      items: [],
      count: 0,
      limit: WELLITEM_LIMIT,
      page: 0,
    };
  }
};
