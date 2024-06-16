import { ILoginForm } from '@/app/(FormLayout)/login/page';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useLogin = () => {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFaild, setIsFaild] = useState<boolean>(false);

  const userLogin = (data: ILoginForm) => {
    // 로그인 성공
    if (data.email === 'jimins4920@gmail.com' && data.password === '1') {
      router.push('/well');
    } else {
      setIsFaild(true);
    }
  };

  return { isSaved, setIsSaved, isFaild, userLogin };
};
