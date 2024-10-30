import { bottomSheet } from '@/modules/BottomSheet';
import { toast } from '@/modules/Toast';

export const useStore = () => {
  // TODO: 포인트 확인 후 에러 시트 띄우기, 실제 API 요청

  const handlePurchase = (name: string) => {
    bottomSheet.open({
      sheetKey: 'purchase',
      onClick: () => toast.normal('구매가 완료되었어요'),
      titleProp: name,
    });
  };

  return { handlePurchase };
};
