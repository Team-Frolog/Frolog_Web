import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import { ResetPassword, ResetPasswordReq } from '@frolog/frolog-api';

const resetPassword = new ResetPassword(baseOptions);

export const requestResetPassword = async (req: ResetPasswordReq) => {
  try {
    const data = await resetPassword.fetch(req);
    return data.result;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};
