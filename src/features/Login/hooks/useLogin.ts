'use client';

import { useState } from 'react';
import { STORAGE_KEY } from '@/constants/storage';
import { signIn } from 'next-auth/react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { LoginForm } from '../types/login';

export const useLogin = (type: 'login' | 'test') => {
  const router = useRouter();
  const callbackUrl = () => sessionStorage.getItem(STORAGE_KEY.LOGIN_CALLBACK);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFaild, setIsFaild] = useState<boolean>(false);

  const userLogin = async (data: LoginForm) => {
    setIsFaild(false);
    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      isRemember: isSaved,
    });

    if (result?.ok) {
      if (type === 'login') {
        router.replace(callbackUrl() || PAGES.HOME);
        router.refresh();
      } else {
        localStorage.removeItem(STORAGE_KEY.TEMP_ACCOUNT_KEY);
      }
    } else {
      setIsFaild(true);
      setIsLoading(false);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin, setIsFaild, isLoading };
};
