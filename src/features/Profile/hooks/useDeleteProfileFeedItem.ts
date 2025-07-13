import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { getPath } from '@/utils/getPath';
import { useUserId } from '@/store/sessionStore';
import { toast } from '@/modules/Toast';
import { QUERY_KEY } from '@/constants/query';
import { deleteProfileFeedItem } from '../api/feed.api';

export const useDeleteProfileFeedItem = () => {
  const router = useRouter();
  const userId = useUserId();
  const params = useParams();
  const bookId = params.bookId as string;
  const queryClient = useQueryClient();

  const { mutate: deleteProfileFeedItemMutate } = useMutation({
    mutationFn: async () => {
      const res = await deleteProfileFeedItem(userId!, bookId);
      return res;
    },
    onSuccess: () => {
      router.replace(getPath.profile(userId!));
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.profileFeed, userId],
      });
    },
    onError: () => {
      toast.error('다시 시도해주세요.');
    },
  });

  return { deleteProfileFeedItemMutate };
};
