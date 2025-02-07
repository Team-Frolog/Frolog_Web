import { NAV_ITEM } from '@/constants/nav';
import { NavItemLabel } from '@/types/nav';
import { useRouter, useSearchParams } from 'next/navigation';

/** nav 상태를 붙여주는 커스텀 라우터
 * @param defaultNav - 기본으로 적용될 nav key
 * @param isForceDefaultNav - 기본 nav를 강제로 적용할지에 대한 여부
 */
export const useCustomRouter = (
  defaultNav?: NavItemLabel,
  isForceDefaultNav?: boolean
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentNav =
    searchParams.get('nav') ?? (defaultNav ? NAV_ITEM[defaultNav].key : '');

  const generatePath = (path: string) => {
    const separator = path.includes('?') ? '&' : '?';

    if (isForceDefaultNav && defaultNav) {
      return `${path}${separator}nav=${NAV_ITEM[defaultNav].key}`;
    } else {
      return currentNav ? `${path}${separator}nav=${currentNav}` : path;
    }
  };

  const navigate = (path: string) => router.push(generatePath(path));
  const replace = (path: string) => router.replace(generatePath(path));

  return { navigate, replace, router };
};
