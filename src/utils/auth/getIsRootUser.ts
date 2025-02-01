import { getServerSession } from 'next-auth';
import { authOptions } from './nextAuth';

/** 현재 로그인된 유저와 같은 유저인지 확인하는 함수 */
export const getIsRootUser = async (userId: string) => {
  const session = await getServerSession(authOptions);
  return { isRootUser: userId === session?.user.id };
};
