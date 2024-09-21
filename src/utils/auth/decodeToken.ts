import { TokenPayload } from '@/types/token';
import jwt from 'jsonwebtoken';

export const getExpFromToken = (token: string) => {
  const tokenPaylod = jwt.decode(token)! as TokenPayload;
  return tokenPaylod.exp;
};
