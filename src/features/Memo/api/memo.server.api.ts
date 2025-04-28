import { DEFAULT_LIMIT } from '@/constants/api';
import { authOptions } from '@/utils/auth/nextAuth';
import { GetMemo, SearchMemo } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';

export const getMemoList = async (bookId: string, userId: string) => {
  try {
    const session = await getServerSession(authOptions);

    const response = await new SearchMemo({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      accessToken: session?.user.accessToken,
    }).fetch({
      isbn: bookId,
      writer: userId,
      limit: DEFAULT_LIMIT,
      page: 0,
    });

    return response;
  } catch (error) {
    return {
      memos: [],
      count: 0,
      limit: DEFAULT_LIMIT,
      page: 0,
    };
  }
};

export const getMemoDetail = async (memoId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new GetMemo({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: memoId });

  return response;
};
