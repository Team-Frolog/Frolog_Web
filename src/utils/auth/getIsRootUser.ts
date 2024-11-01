import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export const getIsRootUser = async (userId: string) => {
  const session = await getServerSession(authOptions);
  return { isRootUser: userId === session?.user.id };
};
