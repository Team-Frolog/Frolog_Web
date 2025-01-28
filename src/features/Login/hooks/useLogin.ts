'use client';

import { useState } from 'react';
import { STORAGE_KEY } from '@/constants/storage';
import { signIn } from 'next-auth/react';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';
import { NavigationTap } from '@/constants/taps';
import { useUserActionActions } from '@/store/userActionStore';
import { LoginForm } from '../types/login';

/** 로그인 처리 핸들링 훅
 * - 매개변수 'type'은 해당 훅이 어디서 활용되는지를 말합니다.
 */
export const useLogin = (type: 'login' | 'test') => {
  const router = useRouter();
  const callbackUrl = () => sessionStorage.getItem(STORAGE_KEY.LOGIN_CALLBACK); // 로그인 후 이동할 callback url
  const [isSaved, setIsSaved] = useState<boolean>(false); // 자동 로그인 여부
  const [isLoading, setIsLoading] = useState(false);
  const [isFaild, setIsFaild] = useState<boolean>(false); // 로그인 실패 여부
  const { setCurrentTap } = useUserActionActions();

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
      // 탭 설정
      setCurrentTap(NavigationTap.WELL);

      // 로그인 폼인 경우, 메인으로 이동
      if (type === 'login') {
        router.replace(callbackUrl() || PAGES.HOME);
        router.refresh();
      }
      // 테스트를 위한 로그인인 경우, 임시 저장했던 계정 정보 삭제
      else {
        localStorage.removeItem(STORAGE_KEY.TEMP_ACCOUNT_KEY);
      }
    } else {
      setIsFaild(true);
      setIsLoading(false);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin, setIsFaild, isLoading };
};
