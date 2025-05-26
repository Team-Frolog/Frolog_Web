import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';

// const initialProfileFeed = await serverApiAdapter<
//   GetProfileFeedRes,
//   GetProfileFeedReq
// >(GetProfileFeed, {
//   id: userId,
//   limit: DEFAULT_LIMIT,
//   page: 0,
// });

export const serverApiAdapter = async <Res, Req>(
  fetchClass: any,
  req: Req
): Promise<Res> => {
  const session = await getServerSession(authOptions);

  const response = await new fetchClass({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch(req);

  return response;
};
