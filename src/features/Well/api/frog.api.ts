import { baseOptions } from '@/api/options';
import { GetFrogs } from '@frolog/frolog-api';

const getFrogs = new GetFrogs(baseOptions);

export const getFrogList = async (id: string) => {
  const response = await getFrogs.fetch({ id });
  return response.frogs;
};
