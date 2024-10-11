import { PersonalInfo } from '@frolog/frolog-api';

export interface InfoObject {
  [key: string]: {
    value?: string;
    visibility?: boolean;
  };
}

export const transformInfoToObject = (personalInfos: PersonalInfo[]) => {
  const result: InfoObject = {};

  personalInfos.forEach((info) => {
    result[info.type] = {
      value: info.value,
      visibility: info.visibility,
    };
  });

  return result;
};

export const transformeInfoToArray = (infoObject: InfoObject): PersonalInfo[] =>
  Object.entries(infoObject).map(([type, info]) => ({
    type,
    value: info.value,
    visibility: info.visibility!,
  }));
