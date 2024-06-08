type TTermsName =
  | 'age'
  | 'terms_of_use'
  | 'marketing'
  | 'privacy_policy'
  | 'ads';

type TInfoName = 'occupation' | 'birth_date' | 'gender';

export interface IJoinForm {
  email: string;
  password: string;
  passwordCheck: string;
  username: string | null;

  // 약관 동의 리스트(Array)
  consents: {
    [key: TTermsName]: {
      version: string; // 버전 (e.g. 2024-05-06)
      given: boolean; // 동의 여부
    };
  };

  // 개인 식별 정보 리스트(Array)
  personal_infos: {
    [key: TInfoName]: {
      value: string; // 실제 데이터
      visibility: boolean; // 공개 여부
    };
  };
  [];
}
