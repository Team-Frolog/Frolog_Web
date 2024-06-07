import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useCustomBack = (onBack: () => void) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ''; // Chrome requires returnValue to be set.
    };

    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      router.replace(pathname); // 현재 페이지로 redirect
      onBack(); // 커스텀 함수 실행
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack, router, pathname]);
};

export default useCustomBack;
