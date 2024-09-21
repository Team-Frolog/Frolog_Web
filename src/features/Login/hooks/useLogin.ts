import {
  LOGIN_CALLBACK,
  REMEMBER_ME_KEY,
  TEMP_ACCOUNT_KEY,
} from '@/constants/storage';
import { PAGES } from '@/constants/page';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LoginForm } from '../types/login';

export const useLogin = (type: 'login' | 'test') => {
  const router = useRouter();
  const callbackUrl = () => sessionStorage.getItem(LOGIN_CALLBACK);
  const { data: session, status } = useSession();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFaild, setIsFaild] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(callbackUrl() || '/');
    }
  }, [router, session, status]);

  const userLogin = async (data: LoginForm) => {
    setIsFaild(false);

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.ok) {
      if (type === 'login') {
        if (isSaved) {
          localStorage.setItem(REMEMBER_ME_KEY, 'true');
        } else {
          localStorage.setItem(REMEMBER_ME_KEY, 'false');
          sessionStorage.setItem(REMEMBER_ME_KEY, 'logged_in');
        }
      } else {
        localStorage.removeItem(TEMP_ACCOUNT_KEY);
        localStorage.setItem(REMEMBER_ME_KEY, 'false');
        sessionStorage.setItem(REMEMBER_ME_KEY, 'logged_in');
        router.replace(PAGES.JOIN_FINISH);
      }
    } else {
      setIsFaild(true);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin, setIsFaild };
};
