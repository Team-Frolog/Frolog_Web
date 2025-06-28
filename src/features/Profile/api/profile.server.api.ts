import { GetProfile, GetProfileDetail } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';

export const getProfile = async (userId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new GetProfile({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: userId });

  return response;
};

export const getProfileDetail = async (userId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new GetProfileDetail({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: userId });

  return response;
};
