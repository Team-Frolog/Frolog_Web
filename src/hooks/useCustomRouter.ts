import { useRouter, useSearchParams } from 'next/navigation';
import { NavItemKey } from '@/constants/nav';

/** nav 상태를 붙여주는 커스텀 라우터
 * @param defaultNav - 기본으로 적용될 nav key
 * @param isForceDefaultNav - 기본 nav를 강제로 적용할지에 대한 여부
 */
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
