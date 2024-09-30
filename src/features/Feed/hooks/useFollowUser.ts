import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FollowUserReq, GetProfileRes } from '@frolog/frolog-api';
import { changeFollowUser } from '../api/activity.api';

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  const { mutate: handleFollow } = useMutation({
    mutationFn: (req: FollowUserReq) => changeFollowUser(req),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: ['profile', id] });
      const prevProfile = queryClient.getQueryData([
        'profile',
        id,
      ]) as GetProfileRes;

      if (!prevProfile) return;

      prevProfile.follow = !prevProfile.follow;

      queryClient.setQueryData(['profile', id], prevProfile);

      return { prevProfile };
    },
    onError: (_err, variable, context) => {
      queryClient.setQueryData(['profile', variable.id], context?.prevProfile);
    },
    onSuccess: (_, req) => {
      queryClient.invalidateQueries({ queryKey: ['profile', req.id] });
    },
  });

  return { handleFollow };
};
