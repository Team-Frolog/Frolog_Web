import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const usePreventBack = (redirectUrl: string) => {
  const router = useRouter();
  const step = Number(useSearchParams().get('step'));

  useEffect(() => {
    history.pushState(null, '', ''); // 동일한 url로 history 쌓기 -> 뒤로가기 클릭을 일회성 무효화합니다

    // 뒤로가기 이벤트(popstate) 핸들러
    const handlePopState = (event: any) => {
      event.preventDefault();
      router.push(redirectUrl);
      // window.location.replace(redirectUrl);
    };

    window.addEventListener('popstate', handlePopState); // 핸들러 등록

    return () => {
      window.removeEventListener('popstate', handlePopState); // 컴포넌트 언마운트 시 핸들러 제거 (정리 개념)
    };
  }, [step, router]);
};
