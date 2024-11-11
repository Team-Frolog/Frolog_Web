import { PAGES } from '@/constants/page';
import { FlashKeys } from '@/data/ui/flash';
import { useRouter } from 'next/navigation';

interface Props {
  type: FlashKeys;
  callbackUrl: string;
}

export const useFlash = () => {
  const router = useRouter();

  const openFlash = ({ type, callbackUrl }: Props) => {
    router.prefetch(`${PAGES.FLASH}/${type}?callbackUrl=${callbackUrl}`);
    router.replace(`${PAGES.FLASH}/${type}?callbackUrl=${callbackUrl}`);
  };

  return { openFlash };
};
