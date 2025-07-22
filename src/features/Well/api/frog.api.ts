import { baseOptions } from '@/api/options';
import { GrantInitialStoreItem } from '@frolog/frolog-api';

export const getFirstFrog = async (key: string, userId?: string) => {
  if (!userId) {
    return;
  }

  const data = await new GrantInitialStoreItem(baseOptions).fetch({
    id: userId,
    key,
    count: 1,
  });

  return data;
};
