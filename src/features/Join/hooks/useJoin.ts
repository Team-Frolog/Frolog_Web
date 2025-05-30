'use client';

import { STORAGE_KEY } from '@/constants/storage';
import { useEffect, useState } from 'react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SignUpReq, SignUpRes } from '@frolog/frolog-api';
import { useAuthActions, useVerifyToken } from '@/store/authStore';
import { toast } from '@/modules/Toast';
import { useStep, useStepActions } from '@/store/stepStore';
import { ERROR_ALERT } from '@/constants/message';
import { useLogin } from '@/features/Login';
import { transformJoinForm } from '../utils/transformJoinForm';
import { signUp } from '../api/join.api';
import { JoinForm } from '../types/form';

export const useJoin = (getValues: () => JoinForm) => {
  const router = useRouter();
  const step = useStep();
  const verifyToken = useVerifyToken();
  const { resetToken } = useAuthActions();
  const { userLogin } = useLogin('test');
  const { resetStep } = useStepActions();
  const [isLoading, setIsLoading] = useState(false);

  /** 로그인 처리 핸들러 */
  const { mutate: handleLogin } = useMutation({
    mutationFn: async (username: string) => {
      const account = localStorage.getItem(STORAGE_KEY.tempAccountKey);

      if (account) {
        const res = await userLogin(JSON.parse(account));
        router.replace(`${PAGES.JOIN_FINISH}?username=${username}`);
        return res;
      } else {
        throw new Error();
      }
    },
    onError: () => {
      toast.error(ERROR_ALERT);
      router.back();
    },
  });

  useEffect(
    () => () => {
      setIsLoading(false);
      localStorage.removeItem(STORAGE_KEY.joinFormKey);
      resetStep();
    },
    []
  );

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (step === 1) {
        localStorage.removeItem(STORAGE_KEY.joinFormKey);
      } else {
        localStorage.setItem(
          STORAGE_KEY.joinFormKey,
          JSON.stringify(getValues())
        );
      }
    }
  }, [getValues, step]);

  /** 회원가입 처리 핸들러 */
  const { mutate: handleSignUp } = useMutation<SignUpRes, Error, SignUpReq>({
    mutationFn: async (formData: SignUpReq) => {
      setIsLoading(true);
      const res = await signUp(formData);
      return res;
    },
    onError: () => {
      toast.error(ERROR_ALERT);
      setIsLoading(false);
    },
    onSuccess: (_result, formData) => {
      resetToken();
      localStorage.removeItem(STORAGE_KEY.joinFormKey);
      localStorage.setItem(
        STORAGE_KEY.tempAccountKey,
        JSON.stringify({ email: formData.email, password: formData.password })
      );
      handleLogin(formData.username!);
    },
  });

  const joinUser = async (data: JoinForm) => {
    const formData = transformJoinForm(data, verifyToken!);
    handleSignUp(formData);
  };

  return { joinUser, step, isLoading };
};
