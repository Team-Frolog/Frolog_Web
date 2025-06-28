import { authOptions } from '@/utils/auth/nextAuth';
import { SearchStoreItem } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';

export const getStoreItemList = async (type: string, limit: number) => {
  const session = await getServerSession(authOptions);

  const storeItemList = await new SearchStoreItem({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ type, limit });

  return storeItemList.items;
};

export const getMyFrogList = async (userId: string) => {
  const session = await getServerSession(authOptions);

  const myFrogList = await new SearchStoreItem({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ owner: userId, type: 'frog' });

  return myFrogList.items;
};
