import { PAGES } from '@/constants/page';
import { FlashKeys } from '@/data/ui/flash';
import { useRouter } from 'next/navigation';

interface Props {
  /** flash 키값 */
  type: FlashKeys;
  /** flash 이후 이동할 경로 */
  callbackUrl: string;
}

/** 리뷰 작성, 우물 생성 등 완료 페이지로 이동하는 훅 */
export const useFlash = () => {
  const router = useRouter();

  const openFlash = ({ type, callbackUrl }: Props) => {
    router.prefetch(`${PAGES.FLASH}/${type}?callbackUrl=${callbackUrl}`);
    router.replace(`${PAGES.FLASH}/${type}?callbackUrl=${callbackUrl}`);
  };

  return { openFlash };
};
