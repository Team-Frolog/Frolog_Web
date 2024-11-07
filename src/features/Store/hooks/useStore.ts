import { bottomSheet } from '@/modules/BottomSheet';
import { toast } from '@/modules/Toast';
import { GetStoreItemRes } from '@frolog/frolog-api';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { getStoreItems, purchaseItem } from '../api/store.api';

export const useStore = (points?: number, userId: string) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ['storeItems'],
    queryFn: () => getStoreItems({ type: 'frog' }),
  });

  const { mutate: purchase } = useMutation({
    mutationFn: (itemKey: string) => purchaseItem(itemKey),
    onSuccess: () => {
      toast.normal('구매가 완료되었어요');
      queryClient.invalidateQueries({ queryKey: ['storeItems'] });
      queryClient.invalidateQueries({ queryKey: ['points', userId] });
    },
  });

  const handlePurchase = (item: GetStoreItemRes) => {
    if (points && points >= item.price) {
      bottomSheet.open({
        sheetKey: 'purchase',
        onClick: () => purchase(item.key),
        titleProp: item.name,
      });
    } else {
      bottomSheet.open({
        sheetKey: 'cant_buy',
        onClick: () => purchase(item.key),
        titleProp: item.name,
      });
    }
  };

  return { storeItems: data?.items, handlePurchase };
};
