import { useRouter, useSearchParams } from 'next/navigation';
import { NavItemKey } from '@/constants/nav';

export const useCustomRouter = (defaultNav?: keyof typeof NavItemKey) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentNav =
    searchParams.get('nav') ?? (defaultNav ? NavItemKey[defaultNav] : '');

  const generatePath = (path: string) => {
    const separator = path.includes('?') ? '&' : '?';
    return currentNav ? `${path}${separator}nav=${currentNav}` : path;
  };

  const navigate = (path: string) => router.push(generatePath(path));
  const replace = (path: string) => router.replace(generatePath(path));

  return { navigate, replace, router };
};
