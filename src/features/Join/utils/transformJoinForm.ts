import { transformeInfoToArray } from '@/utils/transformInfo';
import { Consent, JoinForm } from '../types/form';

/** 회원가입 api 요청을 보내기 위한 객체 형태를 만드는 함수 */
export const transformJoinForm = (
  joinFormData: JoinForm,
  email_verified_token: string
) => {
  const transformedConsents = Object.entries(joinFormData.consents).map(
    ([type, consent]) => ({
      type,
      version: (consent as Consent).version,
      given: (consent as Consent).given,
    })
  );

  return {
    email: joinFormData.email,
    email_verified_token,
    password: joinFormData.password,
    username: joinFormData.username!,
    consents: transformedConsents,
    personal_infos: transformeInfoToArray(joinFormData.personal_infos),
  };
};
