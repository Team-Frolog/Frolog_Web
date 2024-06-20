import { ILoginForm } from '@/app/(FormLayout)/login/page';
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
      router.push('/well');
    } else {
      setIsFaild(true);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin };
};
