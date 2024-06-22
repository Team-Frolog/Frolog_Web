import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const usePreventBack = (redirectUrl: string) => {
  const router = useRouter();
  const step = useSearchParams().get('step');

  useEffect(() => {
    const handlePopState = (event: any) => {
      event.preventDefault();
      window.location.replace(redirectUrl);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  useEffect(() => {
    history.pushState(null, '', ''); // history 쌓기 -> 뒤로가기 클릭 시 사라짐
  }, [step]);
};
