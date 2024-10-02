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

      const updatedProfile = { ...prevProfile, follow: !prevProfile.follow };
      queryClient.setQueryData(['profile', id], updatedProfile);

      return { prevProfile };
    },
    onError: (_err, variable, context) => {
      queryClient.setQueryData(['profile', variable.id], context?.prevProfile);
    },
    onSuccess: (_res, _req, prev) => {
      queryClient.invalidateQueries({
        queryKey: ['profile', prev.prevProfile.id],
      });
    },
  });

  return { handleFollow };
};
