import { FlashType } from '@/app/(default)/flash/[type]/page';
import { PAGES } from '@/constants/page';
import { useRouter } from 'next/navigation';

interface Props {
  type: FlashType;
  callbackUrl: string;
}

export const useFlash = () => {
  const router = useRouter();

  const openFlash = ({ type, callbackUrl }: Props) => {
    router.replace(`${PAGES.FLASH}/${type}?callbackUrl=${callbackUrl}`);
  };

  return { openFlash };
};
