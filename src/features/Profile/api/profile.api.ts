import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { GetProfileDetail } from '@frolog/frolog-api';

const getProfileDetailObj = new GetProfileDetail(baseOptions);

export const getProfileDetail = async (id: string) => {
  try {
    const response = await getProfileDetailObj.fetch({ id });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
