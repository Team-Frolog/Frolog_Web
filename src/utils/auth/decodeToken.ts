import { TokenPayload } from '@/types/token';
import jwt from 'jsonwebtoken';

/** accessToken을 해독하여 만료일을 얻어 반환하는 함수 */
export const getExpFromToken = (token: string) => {
  const tokenPaylod = jwt.decode(token)! as TokenPayload;
  return tokenPaylod.exp;
};
