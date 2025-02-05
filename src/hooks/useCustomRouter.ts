import { useRouter, useSearchParams } from 'next/navigation';
import { NavItemKey } from '@/constants/nav';

export const useCustomRouter = (
  defaultNav?: keyof typeof NavItemKey,
  isForceDefaultNav?: boolean
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentNav =
    searchParams.get('nav') ?? (defaultNav ? NavItemKey[defaultNav] : '');

  const generatePath = (path: string) => {
    const separator = path.includes('?') ? '&' : '?';

    if (isForceDefaultNav && defaultNav) {
      return `${path}${separator}nav=${NavItemKey[defaultNav]}`;
    } else {
      return currentNav ? `${path}${separator}nav=${currentNav}` : path;
    }
  };

  const navigate = (path: string) => router.push(generatePath(path));
  const replace = (path: string) => router.replace(generatePath(path));

  return { navigate, replace, router };
};
