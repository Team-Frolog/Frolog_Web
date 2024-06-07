export interface ISignUpRes {
  result: boolean; // 회원가입 성공 여부
  id?: string; // 가입된 사용자 ID
}

export interface IValidationRes {
  result: boolean; // 이메일, 닉네임 사용 가능 여부.
}

export interface IRequestCodeRes {
  result: boolean; // 전송 성공 여부.
  email_code_token?: string; // 약 3분 간 유효한 JWT 토큰.
}

export interface IVerifyCodeRes {
  result: boolean; // 인증 성공 여부.
  email_verified_token?: string; // (성공 시) 약 24시간동안 유효한 토큰.
}
