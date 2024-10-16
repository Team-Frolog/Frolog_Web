import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { GetFrogs } from '@frolog/frolog-api';

const getFrogs = new GetFrogs(baseOptions);

export const getFrogList = async (id: string) => {
  try {
    const response = await getFrogs.fetch({ id });
    return response.frogs;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
