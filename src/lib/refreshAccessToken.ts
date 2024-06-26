import { baseOptions } from '@/app/api/options';
import { getExpFromToken } from '@/utils/decodeToken';
import { RefreshToken } from '@frolog/frolog-api';
import { JWT } from 'next-auth/jwt';

const refresh = new RefreshToken(baseOptions);

export const refreshAccessToken = async (tokenObj: JWT) => {
  try {
    const data = await refresh.fetch({ refresh_token: tokenObj.refreshToken });

    if (data.result) {
      return {
        ...tokenObj,
        accessToken: data.access_token as string,
        refreshToken: data.refresh_token as string,
        accessTokenExpires: getExpFromToken(data.access_token!),
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    return {
      ...tokenObj,
      error: 'RefreshAccessTokenError',
    };
  }
};
