import { transformeInfoToArray } from '@/utils/transformInfo';
import { Consent, JoinForm } from '../types/form';

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
