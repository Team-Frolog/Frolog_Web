import { baseOptions } from '@/api/options';
import { FOLLOW_LIMIT } from '@/constants/api';
import { ERROR_ALERT } from '@/constants/message';
import { toast } from '@/modules/Toast';
import {
  GetProfileDetail,
  GetUserFollowers,
  GetUserFollowings,
} from '@frolog/frolog-api';

const getProfileDetailObj = new GetProfileDetail(baseOptions);
const getUserFollowers = new GetUserFollowers(baseOptions);
const getUserFollowings = new GetUserFollowings(baseOptions);

export const getProfileDetail = async (id: string) => {
  try {
    const response = await getProfileDetailObj.fetch({ id });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
  }
};

export const getFollowers = async (id: string, page: number) => {
  try {
    const response = await getUserFollowers.fetch({
      id,
      limit: FOLLOW_LIMIT,
      page,
    });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      followers: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};

export const getFollowings = async (id: string, page: number) => {
  try {
    const response = await getUserFollowings.fetch({
      id,
      limit: FOLLOW_LIMIT,
      page,
    });
    return response;
  } catch (err) {
    toast.error(ERROR_ALERT);
    return {
      followings: [],
      count: 0,
      limit: 0,
      page: 0,
    };
  }
};
