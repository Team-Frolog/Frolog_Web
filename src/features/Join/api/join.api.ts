import { baseOptions } from '@/api/options';
import { ERROR_ALERT } from '@/constants/message';
import {
  GetUsernameAvailability,
  GetUsernameAvailabilityReq,
  SignUp,
  SignUpReq,
} from '@frolog/frolog-api';

const signUpObj = new SignUp(baseOptions);
const getUserNameAvailability = new GetUsernameAvailability(baseOptions);

export const signUp = async (formData: SignUpReq) => {
  const data = await signUpObj.fetch(formData);
  return data;
};

export const checkNickname = async (req: GetUsernameAvailabilityReq) => {
  const data = await getUserNameAvailability.fetch(req);
  return data.result;
};
