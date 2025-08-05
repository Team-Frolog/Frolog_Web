import { useMutation } from '@tanstack/react-query';
import { SignInGoogleReq, SignInGoogleRes } from '@frolog/frolog-api';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { defaultValue } from '@/features/Join/data/joinForm';
import { useAuthActions } from '@/store/authStore';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from '@/modules/Toast';
import { ERROR_ALERT } from '@/constants/message';
import { googleSignIn } from '../api/join.api';

export const useGoogle = () => {
  const router = useRouter();
  const { setEmailVerifiedToken } = useAuthActions();
  const [isRegistered, setIsRegistered] = useState(false);

  const { mutate: handleGoogleSignIn } = useMutation<
    SignInGoogleRes,
    Error,
    SignInGoogleReq
  >({
    mutationFn: async (req: SignInGoogleReq) => {
      const res = await googleSignIn(req);
      return res;
    },
    onSuccess: async (res) => {
      if (res.is_registered && res.login_type === 'local') {
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false);
        }, 2000);
        return;
      }

      if (!res.result && !res.is_registered) {
        setEmailVerifiedToken(res.email_verified_token!);
        localStorage.setItem(
          STORAGE_KEY.joinFormKey,
          JSON.stringify({ ...defaultValue, email: res.email })
        );
        router.push(`${PAGES.JOIN}?type=google`);
        return;
      }

      if (res.result && res.is_registered) {
        const result = await signIn('credentials', {
          isGoogle: true,
          id: res.id,
          result: res.result,
          redirect: false,
          email: res.email,
          password: '',
          isRemember: true,
          accessToken: res.access_token,
          refreshToken: res.refresh_token,
        });

        if (result?.ok) {
          router.push(PAGES.HOME);
          router.refresh();
        }
      }
    },
    onError: () => {
      toast.error(ERROR_ALERT);
    },
  });

  return { handleGoogleSignIn, isRegistered };
};
