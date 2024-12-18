import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FollowUserReq, GetProfileRes } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import { changeFollowUser } from '../../api/activity.api';

export const useFollowUser = (userId?: string | undefined) => {
  const queryClient = useQueryClient();

  const { mutate: handleFollow } = useMutation({
    mutationFn: (req: FollowUserReq) => changeFollowUser(req),
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.profile, id] });

      const prevProfile = queryClient.getQueryData([
        QUERY_KEY.profile,
        id,
      ]) as GetProfileRes;

      if (!prevProfile) return;

      const isFollowing = !prevProfile.follow;

      const updatedProfile = { ...prevProfile, follow: isFollowing };
      queryClient.setQueryData([QUERY_KEY.profile, id], updatedProfile);

      return { prevProfile };
    },
    onError: (_err, variable, context) => {
      queryClient.setQueryData(
        [QUERY_KEY.profile, variable.id],
        context?.prevProfile
      );
    },
    onSuccess: (_res, _req, prev) => {
      if (userId) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.followings, userId],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.followers, userId],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.profileDetail, userId],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.profile, prev.prevProfile.id],
        });
      }
    },
  });

  return { handleFollow };
};
