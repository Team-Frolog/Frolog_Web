import { Consent, Info, JoinForm } from '@/types/form';

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

  const transformedPersonalInfos = Object.entries(
    joinFormData.personal_infos
  ).map(([type, info]) => ({
    type,
    value: (info as Info).value,
    visibility: (info as Info).visibility,
  }));

  return {
    email: joinFormData.email,
    email_verified_token,
    password: joinFormData.password,
    username: joinFormData.username!,
    consents: transformedConsents,
    personal_infos: transformedPersonalInfos,
  };
};
