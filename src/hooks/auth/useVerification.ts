import { requestCode, verifyCode } from '@/api/auth.api';
import { useAuthActions, useCodeToken } from '@/store/authStore';
import { useState } from 'react';

const CODE_EXPIRE_TIME = 3 * 60 * 1000;

/** 이메일 인증번호 검증을 위한 훅 */
export const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null); // 검증 완료 여부
  const [isSendFailed, setIsSendFailed] = useState<boolean>(false); // 코드 전송실패 여부
  const codeToken = useCodeToken();
  const { setEmailCodeToken, setEmailVerifiedToken, setEndTime } =
    useAuthActions();

  /** 인증번호 전송 함수 */
  const sendEmailCode = async (
    email: string,
    target: 'signUp' | 'resetPassword'
  ) => {
    setEndTime(Date.now() + CODE_EXPIRE_TIME);
    const data = await requestCode({ email, target });

    if (data!.result) {
      setEmailCodeToken(data!.email_code_token!); // 인증번호 검증용 토큰 저장
    } else {
      setIsSendFailed(true);
    }
  };

  /** 인증번호 검증 함수 */
  const verifyEmailCode = async (code: string) => {
    setIsVerified(null);

    // 검증용 토큰이 없는 경우 실패
    if (!codeToken) {
      return;
    }

    const data = await verifyCode({
      email_code: code,
      email_code_token: codeToken!,
    });

    if (data!.result) {
      setIsVerified(true);
      setEmailVerifiedToken(data!.email_verified_token!); // 인증번호 검증완료 토큰 저장
    } else {
      setIsVerified(false);
    }
  };

  return {
    isSendFailed,
    sendEmailCode,
    verifyEmailCode,
    isVerified,
    setIsVerified,
  };
};
