import { getExpFromToken } from '@/utils/auth/decodeToken';
import { RefreshToken } from '@frolog/frolog-api';
import { JWT } from 'next-auth/jwt';

/** token refresh 핸들러 함수 */
export const refreshAccessToken = async (tokenObj: JWT) => {
  try {
    const data = await new RefreshToken({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    }).fetch({ refresh_token: tokenObj.refreshToken });

    if (data.result) {
      return {
        ...tokenObj,
        accessToken: data.access_token as string,
        refreshToken: data.refresh_token as string,
        accessTokenExpires: getExpFromToken(data.access_token!),
      };
    }
    throw new Error();
  } catch (err) {
    return {
      ...tokenObj,
      error: 'RefreshAccessTokenError',
    };
  }
};
