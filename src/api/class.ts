import {
  GetEmailAvailability,
  GetUsernameAvailability,
  RequestEmailCode,
  SignUp,
} from '@frolog/frolog-api';

export const getEmailAvailability = new GetEmailAvailability({
  baseURL: 'https://api.frolog.kr',
});

export const getUserNameAvailability = new GetUsernameAvailability({
  baseURL: 'https://api.frolog.kr',
});

export const requestCode = new RequestEmailCode({
  baseURL: 'https://api.frolog.kr',
});

export const signUp = new SignUp({
  baseURL: 'https://api.frolog.kr',
});
