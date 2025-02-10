import { baseOptions } from '@/api/options';
import {
  GetUsernameAvailability,
  GetUsernameAvailabilityReq,
  SignUp,
  SignUpReq,
} from '@frolog/frolog-api';

export const signUp = async (formData: SignUpReq) => {
  const data = await new SignUp(baseOptions).fetch(formData);
  return data;
};

export const checkNickname = async (req: GetUsernameAvailabilityReq) => {
  const data = await new GetUsernameAvailability(baseOptions).fetch(req);
  return data.result;
};
