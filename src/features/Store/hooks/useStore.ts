import { bottomSheet } from '@/modules/BottomSheet';
import { toast } from '@/modules/Toast';
import { QUERY_KEY } from '@/constants/query';
import { GetStoreItemRes } from '@frolog/frolog-api';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { getStoreItems, purchaseItem } from '../api/store.api';

/** 상점 아이템 조회 및 구매 핸들링 훅 */
export const useStore = (
  storeItemList: GetStoreItemRes[],
  userId?: string,
  points?: number
) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY.storeItemList],
    queryFn: () => getStoreItems({ type: 'frog', limit: 100 }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    initialData: {
      items: storeItemList,
      count: storeItemList.length,
      limit: 100,
      page: 1,
    },
  });

  const { mutate: purchase } = useMutation({
    mutationFn: (itemKey: string) => purchaseItem(itemKey),
    onSuccess: () => {
      toast.normal('구매가 완료되었어요');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.storeItemList] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.points, userId] });
    },
  });

  const handlePurchase = (item: GetStoreItemRes) => {
    if (points && points >= item.price) {
      bottomSheet.open({
        sheetKey: 'purchase',
        onClick: () => purchase(item.key),
        titleProp: item.name,
      });
    } else if (item.is_available) {
      bottomSheet.open({
        sheetKey: 'cant_buy',
        titleProp: item.name,
      });
    } else {
      bottomSheet.open({
        sheetKey: 'not_available_item',
        titleProp: item.name,
      });
    }
  };

  return { storeItems: data?.items, handlePurchase };
};
