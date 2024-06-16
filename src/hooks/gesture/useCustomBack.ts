import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useCustomBack = (route: string) => {
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
      router.push(route);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router, pathname]);
};

export default useCustomBack;
