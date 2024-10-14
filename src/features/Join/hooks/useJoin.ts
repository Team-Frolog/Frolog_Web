'use client';

import { JOIN_FORM_KEY, TEMP_ACCOUNT_KEY } from '@/constants/storage';
import { useEffect } from 'react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SignUpReq, SignUpRes } from '@frolog/frolog-api';
import { useAuthActions, useVerifyToken } from '@/store/authStore';
import { toast } from '@/modules/Toast';
import { useJoinStep } from '@/store/stepStore';
import { ERROR_ALERT } from '@/constants/message';
import { useLogin } from '@/features/Login';
import { transformJoinForm } from '../utils/transformJoinForm';
import { signUp } from '../api/join.api';
import { JoinForm } from '../types/form';

export const useJoin = (getValues: () => JoinForm) => {
  const router = useRouter();
  const joinStep = useJoinStep();
  const verifyToken = useVerifyToken();
  const { resetToken } = useAuthActions();
  const { userLogin } = useLogin('test');

  const { mutate: handleLogin } = useMutation({
    mutationFn: async (username: string) => {
      const account = localStorage.getItem(TEMP_ACCOUNT_KEY);

      if (account) {
        const res = await userLogin(JSON.parse(account));
        window.location.replace(`${PAGES.JOIN_FINISH}?username=${username}`);
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

  // step별 폼 상태 저장
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (joinStep === 1) {
        localStorage.removeItem(JOIN_FORM_KEY);
      } else {
        localStorage.setItem(JOIN_FORM_KEY, JSON.stringify(getValues()));
      }
    }
  }, [getValues, joinStep]);

  const { mutate: handleSignUp } = useMutation<SignUpRes, Error, SignUpReq>({
    mutationFn: (formData: SignUpReq) => signUp(formData),
    onSuccess: (_result, formData) => {
      resetToken();
      localStorage.removeItem(JOIN_FORM_KEY);
      localStorage.setItem(
        TEMP_ACCOUNT_KEY,
        JSON.stringify({ email: formData.email, password: formData.password })
      );
      handleLogin(formData.username!);
    },
  });

  const joinUser = async (data: JoinForm) => {
    const formData = transformJoinForm(data, verifyToken!);
    handleSignUp(formData);
  };

  return { joinUser, joinStep };
};
