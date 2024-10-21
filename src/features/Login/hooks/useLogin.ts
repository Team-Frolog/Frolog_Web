import {
  LOGIN_CALLBACK,
  REMEMBER_ME_KEY,
  TEMP_ACCOUNT_KEY,
} from '@/constants/storage';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getWellList } from '@/features/Well/api/well.api';
import { LoginForm } from '../types/login';

export const useLogin = (type: 'login' | 'test') => {
  const router = useRouter();
  const callbackUrl = () => sessionStorage.getItem(LOGIN_CALLBACK);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFaild, setIsFaild] = useState<boolean>(false);
  const { update } = useSession();

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
        // 우물 확인
        const userId = await getSession().then((res) => res?.user.id);
        if (userId) {
          const res = await getWellList(userId, 0);
          const isDefault = res.wells.length === 1;

          if (isDefault) {
            update({ defaultWellId: res.wells[0].id });
          }
        }
        router.replace(callbackUrl() || '/');
        router.refresh();
      } else {
        localStorage.removeItem(TEMP_ACCOUNT_KEY);
        localStorage.setItem(REMEMBER_ME_KEY, 'false');
        sessionStorage.setItem(REMEMBER_ME_KEY, 'logged_in');
      }
    } else {
      setIsFaild(true);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin, setIsFaild };
};
