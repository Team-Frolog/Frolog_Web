import { IConsent, IInfo, IJoinForm } from '@/types/form';

export const transformJoinForm = (
  joinFormData: IJoinForm,
  email_verified_token: string
) => {
  const transformedConsents = Object.entries(joinFormData.consents).map(
    ([type, consent]) => ({
      type,
      version: (consent as IConsent).version,
      given: (consent as IConsent).given,
    })
  );

  const transformedPersonalInfos = Object.entries(
    joinFormData.additional_info
  ).map(([type, info]) => ({
    type,
    value: (info as IInfo).value,
    visibility: (info as IInfo).visibility,
  }));

  return {
    email: joinFormData.email,
    email_verified_token,
    password: joinFormData.password,
    username: joinFormData.username!,
    consents: transformedConsents,
    additional_info: transformedPersonalInfos,
  };
};
