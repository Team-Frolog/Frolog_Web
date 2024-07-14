type TermsName =
  | 'age'
  | 'terms_of_use'
  | 'marketing'
  | 'privacy_policy'
  | 'ads';

type InfoName = 'occupation' | 'birth_date' | 'gender';

export interface Consent {
  version: string; // 버전 (e.g. 2024-05-06)
  given: boolean; // 동의 여부
}

export interface Info {
  value: string; // 실제 데이터
  visibility: boolean; // 공개 여부
}

export interface JoinForm {
  email: string;
  password: string;
  passwordCheck: string;
  username: string | null;

  // 약관 동의 리스트(Array)
  consents: {
    [key: TermsName]: Consent;
  };

  // 개인 식별 정보 리스트(Array)
  personal_infos: {
    [key: InfoName]: Info;
  };
  [];
}

export interface ReviewForm {
  rating: number | null;
  oneLiner: string;
  review: string;
  pros: number[];
  cons: number[];
}
