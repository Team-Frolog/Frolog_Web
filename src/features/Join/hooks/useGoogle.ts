import { useMutation } from '@tanstack/react-query';
import { SignInGoogleReq, SignInGoogleRes } from '@frolog/frolog-api';
import { googleSignUp } from '../api/join.api';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { defaultValue } from '@/features/Join/data/joinForm';
import { useAuthActions } from '@/store/authStore';

const mockGoogleSignUp = async (req: SignInGoogleReq) => {
  const res = await fetch('/api/mock', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  return res.json();
};

export const useGoogle = () => {
  const router = useRouter();
  const { setEmailVerifiedToken } = useAuthActions();
  const { mutate: handleGoogleSignIn } = useMutation<
    SignInGoogleRes,
    Error,
    SignInGoogleReq
  >({
    mutationFn: async (req: SignInGoogleReq) => {
      const res = await mockGoogleSignUp(req);
      return res;
    },
    onSuccess: (res) => {
      if (!res.result && !res.is_registered) {
        setEmailVerifiedToken(res.email_verified_token!);
        localStorage.setItem(
          STORAGE_KEY.joinFormKey,
          JSON.stringify({ ...defaultValue, email: res.email })
        );
        router.push(`${PAGES.JOIN}?type=google`);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { handleGoogleSignIn };
};
