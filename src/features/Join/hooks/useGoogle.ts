import { useMutation } from '@tanstack/react-query';
import { SignInGoogleReq, SignInGoogleRes } from '@frolog/frolog-api';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { defaultValue } from '@/features/Join/data/joinForm';
import { useAuthActions } from '@/store/authStore';
import { googleSignIn } from '../api/join.api';
import { signIn } from 'next-auth/react';

export const useGoogle = () => {
  const router = useRouter();
  const { setEmailVerifiedToken } = useAuthActions();
  const { mutate: handleGoogleSignIn } = useMutation<
    SignInGoogleRes,
    Error,
    SignInGoogleReq
  >({
    mutationFn: async (req: SignInGoogleReq) => {
      console.log(req);
      const res = await googleSignIn(req);
      return res;
    },
    onSuccess: async (res) => {
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
    onError: (error) => {
      console.log(error);
    },
  });

  return { handleGoogleSignIn };
};
