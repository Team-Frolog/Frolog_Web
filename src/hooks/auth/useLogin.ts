import { ILoginForm } from '@/app/(FormLayout)/login/page';
import { REMEMBER_ME_KEY } from '@/constants/storage';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useLogin = () => {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFaild, setIsFaild] = useState<boolean>(false);

  const userLogin = async (data: ILoginForm) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.ok) {
      router.push('/');

      if (isSaved) {
        localStorage.setItem(REMEMBER_ME_KEY, 'true');
      } else {
        localStorage.setItem(REMEMBER_ME_KEY, 'false');
        sessionStorage.setItem(REMEMBER_ME_KEY, 'logged_in');
      }
    } else {
      setIsFaild(true);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin, setIsFaild };
};
