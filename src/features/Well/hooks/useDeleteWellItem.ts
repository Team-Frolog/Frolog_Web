import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from '@/modules/Toast';
import { STORAGE_KEY } from '@/constants/storage';
import { getPath } from '@/utils/getPath';
import { useUserId } from '@/store/sessionStore';
import { deleteThisBook, deleteWellItem } from '../api/well.api';

export const useDeleteWellItem = (wellId: string) => {
  const router = useRouter();
  const userId = useUserId();

  const { mutate: handleDeleteWellItem } = useMutation({
    mutationFn: async () => {
      const itemId = sessionStorage.getItem(STORAGE_KEY.selectedWellItemId);

      if (!itemId) throw new Error();

      const res = await deleteWellItem({ well_id: wellId, id: itemId });
      return res;
    },
    onSuccess: () => {
      router.replace(getPath.wellDetail(userId!, wellId));
    },
    onError: () => {
      toast.error('다시 시도해주세요.');
    },
  });

  const { mutate: handleDeleteThisBook } = useMutation({
    mutationFn: async (bookId: string) =>
      deleteThisBook({ owner: userId, isbn: bookId }),
    onSuccess: () => {
      router.replace(getPath.wellDetail(userId!, wellId));
    },
    onError: () => {
      toast.error('다시 시도해주세요.');
    },
  });

  return { handleDeleteWellItem, handleDeleteThisBook };
};
