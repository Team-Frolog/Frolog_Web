import { PersonalInfo } from '@frolog/frolog-api';

export interface InfoObject {
  [key: string]: {
    value?: string;
    visibility?: boolean;
  };
}

/** 개인정보 폼 데이터를 객체로 변환하는 함수 */
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

/** 개인정보 폼 데이터를 배열로 변환하는 함수 */
export const transformeInfoToArray = (infoObject: InfoObject): PersonalInfo[] =>
  Object.entries(infoObject).map(([type, info]) => ({
    type,
    value: info.value,
    visibility: info.visibility!,
  }));
