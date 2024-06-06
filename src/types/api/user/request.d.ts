export interface ISignUpReq {
  email: string; // 이메일
  email_verified_token: string;
  password: string; // 비밀번호 (Alphanumeric)
  username: string; // 닉네임 (Alphanumeric + 한글)

  consents: {
    // 약관 동의 리스트(Array)
    type: string; // 약관 타입 (e.g. terms_of_service, marketing, ...)
    version: string; // 버전 (e.g. 2024-0506-03)
    given: boolean; // 동의 여부
  }[];

  additional_info: {
    // 개인 식별 정보 리스트(Array)
    type: string; // 정보 타입 (e.g. occupation, birth_date, ...)
    value: any; // 실제 데이터
    visibility: boolean; // 공개 여부
  }[];
}

export interface IRequestCodeReq {
  email: string; // 인증코드를 보낼 이메일.
  target: 'signUp' | 'resetPassword'; // 인증된 이메일로 할 API의 ID.
}

export interface IVerifyCodeReq {
  email_code_token: string; // 이메일 인증 토큰
  email_code: string; // 인증코드
}
