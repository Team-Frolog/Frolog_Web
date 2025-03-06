import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { STORAGE_KEY } from '@/constants/storage';
import { getPath } from '@/utils/getPath';
import { useUserId } from '@/store/sessionStore';
import { deleteWellItem } from '../api/well.api';

export const useDeleteWellItem = () => {
  const router = useRouter();
  const userId = useUserId();

  const { mutate: handleDeleteWellItem } = useMutation({
    mutationFn: async (wellId: string) => {
      const itemId = sessionStorage.getItem(STORAGE_KEY.selectedWellItemId);

      if (!itemId) throw new Error();

      const res = await deleteWellItem({ well_id: wellId, id: itemId });
      return res;
    },
    onSuccess: (_, wellId) => {
      router.replace(getPath.wellDetail(userId!, wellId));
    },
    onError: () => {
      toast.error('다시 시도해주세요.');
    },
  });

  return { handleDeleteWellItem };
};
